/*
 * Copyright 2017-18 IBM Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as Debug from 'debug'
const debug = Debug('main/spawn-electron')
debug('loading')

import { IExecOptions } from '../models/execOptions'
import { switchToPersistedThemeChoice } from '@kui-shell/plugin-core-support/lib/cmds/theme'

import * as colors from 'colors/safe'

export interface SubwindowPrefs {
  fullscreen?: boolean
  width?: number
  height?: number
}

/**
 * Keep a global reference of the window object, if you don't, the window will
 * be closed automatically when the JavaScript object is garbage collected.
 *
 */
let mainWindow

/**
 * Keep refs to the electron app around
 *
 */
let electron
let app

/**
 * Spawn electron
 *
 */
export async function initElectron (command = [], { isRunningHeadless = false, forceUI = false } = {}, subwindowPlease?, subwindowPrefs?: SubwindowPrefs) {
  debug('initElectron', command, subwindowPlease, subwindowPrefs)

  let promise

  // handle squirrel install and update events
  try {
    if (require('electron-squirrel-startup')) return
  } catch (err) {
    debug('electron components not directly installed')

    const spawnGraphics = () => {
      debug('waiting for graphics')
      return app.graphics.wait().then(graphics => {
        const argv = command.slice(command.indexOf('--') + 1)
          .concat(forceUI ? ['--ui'] : [])

        debug('spawning graphics', graphics, argv)
        try {
          const { spawn } = require('child_process')
          const child = spawn(graphics, argv, {
            detached: !debug.enabled,
            env: Object.assign({}, process.env, {
              KUI_HEADLESS: true, subwindowPlease, subwindowPrefs: JSON.stringify(subwindowPrefs)
            })
          })
          child.stdout.on('data', data => {
            if (data.toString().indexOf('WARNING: Textured window') < 0) {
              debug(data.toString())
            }
          })
          child.stderr.on('data', data => {
            debug(data.toString())
          })

          if (!debug.enabled) {
            child.unref()
          }
        } catch (err) {
          debug('error spawning graphics', err)
        }

        debug('done with spawning graphics')
        if (!debug.enabled) {
          process.exit(0)
        }
      })
    }

    /**
     * We seem to be running with a headless.zip build; now determine
     * the best course of action
     */
    const maybeSpawnGraphics = async () => {
      if (!forceUI && !app) {
        await initHeadless(process.argv, true)
      } else {
        const { fetch, watch } = await import('../webapp/util/fetch-ui')
        const { userDataDir } = await import('../core/userdata')
        const stagingArea = userDataDir()
        debug('initiating UI fetcher', stagingArea)

        fetch(stagingArea)
        app = {
          graphics: watch(stagingArea)
        }
      }
      if (app.graphics) {
        promise = spawnGraphics()
      } else {
        console.log(colors.red('Graphical components are not installed.'))
        process.exit(126)
      }
    }

    try {
      const { _location, name } = require('../../package.json')

      if (!_location || name !== 'kui-shell') {
        // then this is probably an unrelated package.json file
        // _location will only be present for npm install'd assets
        // and the name is there to match our top-level package.json
        await maybeSpawnGraphics()
      } else {
        console.log('Graphical components are not installed.')
        process.exit(126)
      }
    } catch (err) {
      // we couldn't find ../package.json; we're probably using a
      // headless.zip installation
      debug(err)

      await maybeSpawnGraphics()
    }
  }

  if (promise) {
    return promise
  } else if (!electron) {
    debug('loading electron')
    electron = require('electron')
    app = electron.app

    if (!app) {
      // then we're still in pure headless mode; we'll need to fork ourselves to spawn electron
      const path = require('path')
      const { spawn } = require('child_process')
      const appHome = path.resolve(path.join(__dirname, 'main'))

      const args = [appHome, '--', ...command]
      debug('spawning electron', appHome, args)

      // pass through any window options, originating from the command's usage model, on to the subprocess
      const windowOptions = {}
      if (subwindowPlease) {
        debug('passing through subwindowPlease', subwindowPlease)
        windowOptions['subwindowPlease'] = subwindowPlease
      }
      if (subwindowPrefs && Object.keys(subwindowPrefs).length > 0) {
        debug('passing through subwindowPrefs', subwindowPrefs)
        windowOptions['subwindowPrefs'] = JSON.stringify(subwindowPrefs)
      }

      // note how we ignore the subprocess's stdio if debug mode
      // is not enabled this allows you (as a developer) to
      // debug issues with spawning the subprocess by passing
      // DEBUG=* or DEBUG=main
      const env = Object.assign({},
        process.env,
        windowOptions)
      delete env.KUI_HEADLESS
      const child = spawn(electron, args, { stdio: debug.enabled ? 'inherit' : 'ignore',
        env })

      if (!debug.enabled) {
        // as with the "ignore stdio" comment immediately
        // above: unless we're in DEBUG mode, let's disown
        // ("unref" in nodejs terms) the subprocess
        child.unref()
      }

      debug('spawning electron done, this process will soon exit')
      process.exit(0)
    } else {
      debug('loading electron done')
    }
  }

  // linux oddities; you may see this, and disabling hardware acceleration
  // used to address it:
  //   "context mismatch in svga_sampler_view_destroy"
  /* if (process.platform === 'linux') {
        app.disableHardwareAcceleration()
    } */

  // deal with multiple processes
  if (!process.env.RUNNING_SHELL_TEST) {
    app.on('second-instance', (event, commandLine, workingDirectory) => {
      // Someone tried to run a second instance, open a new window
      // to handle it
      const { argv, subwindowPlease, subwindowPrefs } = getCommand(commandLine)
      debug('opening window for second instance', commandLine, subwindowPlease, subwindowPrefs)
      createWindow(true, argv, subwindowPlease, subwindowPrefs)
    })
    if (!app.requestSingleInstanceLock()) { // The primary instance of app failed to optain the lock, which means another instance of app is already running with the lock
      debug('exiting, since we are not the first instance')
      return app.exit(0)
    }
  }

  // protocol handlers
  import('./protocol-handlers').then(init => init.default(argv => createWindow(true, argv)))

  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.once('ready', () => {
    debug('opening primary window', command)
    createWindow(true, command.length > 0 && command, subwindowPlease, subwindowPrefs)
  })

  if (process.env.RUNNING_SHELL_TEST) {
    /* app.on('before-quit', function () {
      const config = { tempDirectory: require('path').join(__dirname, '../tests/.nyc_output') }
      const nyc = new (require('nyc'))(config) // create the nyc instance

      nyc.createTempDirectory() // in case we are the first to the line
      nyc.writeCoverageFile() // write out the coverage data for the renderer code

      mainWindow.webContents.send('/coverage/dump', config)
    }) */
  }

  // Quit when all windows are closed.
  app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin' || isRunningHeadless) {
      // if we're running headless, then quit on window closed, no matter which platform we're on
      app.quit()
    }
  })

  app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
      createWindow()
    }
  })
} /* initElectron */

/**
 * Bootstrap headless mode
 *
 */
export async function initHeadless (argv: Array<string>, force = false, isRunningHeadless = false, execOptions?: IExecOptions) {
  if (/* noHeadless !== true && */ force || isRunningHeadless) {
    debug('initHeadless')

    app = {
      quit: () => process.exit(0)
    }

    //
    // HEADLESS MODE
    //
    try {
      return (await import('./headless')).main(app, {
        createWindow: (executeThisArgvPlease: Array<string>, subwindowPlease: boolean, subwindowPrefs) => {
          // craft a createWindow that has a first argument of true, which will indicate `noHeadless`
          // because this will be called for cases where we want a headless -> GUI transition
          return createWindow(true, executeThisArgvPlease, subwindowPlease, subwindowPrefs)
        }
      }, argv, execOptions)
    } catch (err) {
      // oof, something real bad happened
      console.error('Internal Error, please report this bug:')
      console.error(err)
      if (!process.env.KUI_REPL_MODE) {
        process.exit(1)
      } else {
        throw err
      }
    }
  } else {
    // in case the second argument isn't undefined...
    /* if (noHeadless !== true) {
      executeThisArgvPlease = undefined
    } */
  }
} /* initHeadless */

function createWindow (noHeadless = false, executeThisArgvPlease?, subwindowPlease?, subwindowPrefs?) {
  debug('createWindow', executeThisArgvPlease)

  if (subwindowPrefs && subwindowPrefs.bringYourOwnWindow) {
    return subwindowPrefs.bringYourOwnWindow()
  }

  // Create the browser window.
  let width = (subwindowPrefs && subwindowPrefs.width) || 1280
  let height = (subwindowPrefs && subwindowPrefs.height) || 960
  if (process.env.WINDOW_WIDTH) {
    width = parseInt(process.env.WINDOW_WIDTH, 10)
    if (isNaN(width)) {
      console.error('Cannot parse WINDOW_WIDTH ' + process.env.WINDOW_WIDTH)
      width = 1280
    }
  }
  if (process.env.WINDOW_HEIGHT) {
    height = parseInt(process.env.WINDOW_HEIGHT, 10)
    if (isNaN(height)) {
      console.error('Cannot parse WINDOW_HEIGHT ' + process.env.WINDOW_HEIGHT)
      height = 960
    }
  }

  let promise = Promise.resolve()
  if (!electron) {
    debug('we need to spawn electron', subwindowPlease, subwindowPrefs)
    delete subwindowPrefs.synonymFor // circular JSON
    promise = initElectron(['--'].concat(executeThisArgvPlease), {}, subwindowPlease, subwindowPrefs)
      .then(x => {
        electron = require('electron')
      }).catch(err => {
        // headless
        debug('not ready for graphics', err)
      })
  }

  // note: titleBarStyle on macOS needs to be customButtonsOnHover if we want to support cursor:pointer
  // but this doesn't render the inset window buttons
  // see https://github.com/electron/electron/issues/10243
  promise.then(() => {
    try {
      require('electron-context-menu')()
    } catch (err) {
      debug('not ready for graphics, still', err)
      return
    }

    const { BrowserWindow } = electron
    const opts = Object.assign({
      width,
      height,
      show: false, // do not remove without consulting the ready-to-show comment below
      titleBarStyle: process.platform === 'darwin' ? 'hiddenInset' : 'default'
    },
    subwindowPrefs && subwindowPrefs.position)
    if (process.env.KUI_POSITION_X) {
      opts.x = process.env.KUI_POSITION_X
    }
    if (process.env.KUI_POSITION_Y) {
      opts.y = process.env.KUI_POSITION_Y
    }
    debug('createWindow::new BrowserWindow')
    mainWindow = new BrowserWindow(opts)
    debug('createWindow::new BrowserWindow success')

    mainWindow.once('ready-to-show', () => {
      // if user ups zoom level, reloads, we're stuck at a higher zoom
      // see https://github.com/electron/electron/issues/10572
      // note that this requires show: false above
      mainWindow.webContents.setZoomFactor(1)
      mainWindow.setVisibleOnAllWorkspaces(true)
      mainWindow.show()
      mainWindow.setVisibleOnAllWorkspaces(false)
    })

    // install tray menu [DISABLED FOR NOW]
    /* if (noHeadless !== true && !executeThisArgvPlease) {
        mainWindow.tray = require('./tray')(electron, app, createWindow)
    } */

    // remember certain classes of windows, so we don't have multiple
    // open; e.g. one for docs, one for videos...
    let fixedWindows = {}
    const openFixedWindow = ({ type, event, url, options, size = mainWindow.getBounds(), position = mainWindow.getBounds() }) => {
      const existing = fixedWindows[type] || {}
      const { window: existingWindow, url: currentURL } = existing

      if (!existingWindow || existingWindow.isDestroyed()) {
        const window = new BrowserWindow({ width: size.width, height: size.height, frame: true })
        fixedWindows[type] = { window, url }
        window.setPosition(position.x + 62, position.y + 62)
        // window.on('closed', () => { docsWindow = null })
        window.loadURL(url)
      } else {
        if (currentURL !== url) {
          existingWindow.loadURL(url)
          existing.url = url
        }
        existingWindow.focus()
      }

      event.preventDefault()
    }

    /** this event handler will be called when the window's content finishes loading */
    mainWindow.webContents.on('did-finish-load', async () => {
      // for some reason, adding the title attribute to the new
      // BrowserWindow opts doesn't stick; and... this has to be on
      // did-finish-load, for some reason... at least these are true
      // statements for electron 1.6.x
      const productName = (await import('@kui-shell/settings/config.json')).theme.productName

      if (mainWindow) {
        mainWindow.setTitle(productName)
      }

      if (mainWindow) {
        switchToPersistedThemeChoice(mainWindow.webContents)
      }
    })

    /** jump in and manage the way popups create new windows */
    mainWindow.webContents.on('new-window', (event, url, frameName, disposition, options, additionalFeatures) => {
      if (url.startsWith('https://youtu.be')) {
        // special handling of youtube links
        openFixedWindow({ type: 'videos', event, url, options, size: { width: 800, height: 600 } })
      } else {
        event.preventDefault()
        require('opn')(url)
      }
    })

    let commandContext = executeThisArgvPlease && executeThisArgvPlease.find(_ => _.match(/--command-context/))
    if (commandContext) {
      executeThisArgvPlease = executeThisArgvPlease.filter(_ => !_.match(/--command-context/))

      // strip off the leading --, to help with URL window.location.search
      commandContext = commandContext.replace(/^--/, '')
    }

    if (noHeadless === true && executeThisArgvPlease) {
      debug('setting argv', executeThisArgvPlease)
      mainWindow.executeThisArgvPlease = executeThisArgvPlease
    }
    debug('subwindowPrefs', subwindowPrefs)
    if (subwindowPrefs && Object.keys(subwindowPrefs).length > 0) {
      mainWindow.subwindow = subwindowPrefs
    }

    // and load the index.html of the app.
    const root = require('path').dirname(require.resolve('@kui-shell/settings/package.json'))
    const urlSpec = {
      pathname: require('path').join(root, 'index.html'),
      protocol: 'file:',
      search: commandContext ? `?${commandContext}` : '',
      slashes: true
    }
    debug('mainWindow::loadURL', urlSpec)
    mainWindow.loadURL(require('url').format(urlSpec))

    debug('install menus')
    require('./menu').install(app, electron.Menu, createWindow)

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()

    // Emitted when the window is closed.
    mainWindow.once('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
      mainWindow = null
    })

    //
    // set up ipc from renderer
    //
    const { ipcMain } = electron

    //
    // take a screenshot; note that this has to be done in the main
    // process, due to the way clipboard.writeImage is implemented on
    // Linux. on macOS, this could be done entirely in the renderer
    // process. on Linux, however, the nativeImages aren't
    // translatable between the renderer and main processes as fluidly
    // as they are on macOS. oh well! this is why the screenshot
    // plugin has to pollute main.js
    //
    debug('ipc registration')
    ipcMain.on('capture-page-to-clipboard', (event, contentsId, rect) => {
      try {
        const { clipboard, nativeImage, webContents } = electron
        webContents.fromId(contentsId).capturePage(rect, image => {
          try {
            const buf = image.toPNG()
            clipboard.writeImage(nativeImage.createFromBuffer(buf))
            event.sender.send('capture-page-to-clipboard-done', buf)
          } catch (err) {
            console.log(err)
            event.sender.send('capture-page-to-clipboard-done')
          }
        })
      } catch (err) {
        console.log(err)
        event.sender.send('capture-page-to-clipboard-done')
      }
    })
    // end of screenshot logic

    ipcMain.on('synchronous-message', (event, arg) => {
      const message = JSON.parse(arg)
      switch (message.operation) {
        case 'quit': app.quit(); break
        case 'open-graphical-shell': createWindow(true); break
        case 'enlarge-window': mainWindow.setContentSize(1400, 1050, { animate: true }); break
        case 'reduce-window': mainWindow.setContentSize(1024, 768, { animate: true }); break
        case 'maximize-window': mainWindow.maximize(); break
        case 'unmaximize-window': mainWindow.unmaximize(); break
      }
      event.returnValue = 'ok'
    })
    ipcMain.on('asynchronous-message', (event, arg) => {
      const message = JSON.parse(arg)
      switch (message.operation) {
      }
    })

    debug('createWindow done')
  })
}

/**
 * Strip off the command to be executed from the given argv
 *
 */
export const getCommand = argv => {
  debug('getCommand', argv)
  const dashDash = argv.lastIndexOf('--')
  argv = dashDash === -1 ? argv.slice(1) : argv.slice(dashDash + 1)

  const isShell = argv.find(_ => _ === 'shell') || (process.env.RUNNING_SHELL_TEST && !process.env.KUI_TEE_TO_FILE)
  argv = argv.filter(_ => _ !== '--ui' && _ !== '--no-color' && !_.match(/^-psn/))  // opening Kui from macOS Finder adds additional argv -psn, see: https://github.com/IBM/kui/issues/382

  debug('isShell', argv, isShell)

  let subwindowPlease = true
  let subwindowPrefs: SubwindowPrefs = { fullscreen: true, width: 800, height: 800 }

  if (isShell) {
    // use a full window for 'shell'
    argv = ['shell']
    subwindowPlease = false
    subwindowPrefs = { }
  }

  debug('using args', argv, subwindowPrefs)
  return { argv, subwindowPlease, subwindowPrefs }
}

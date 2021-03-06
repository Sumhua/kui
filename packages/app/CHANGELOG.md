# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 2.24.0 (2019-03-19)


### Bug Fixes

* **app:** fixes for --ui and headless to graphics transitions ([38c4e98](https://github.com/IBM/kui/commit/38c4e98)), closes [#408](https://github.com/IBM/kui/issues/408)
* **app:** opening Kui Electron Builds from macOS Finder adds additional argv -psn ([5ac8393](https://github.com/IBM/kui/commit/5ac8393)), closes [#382](https://github.com/IBM/kui/issues/382)
* **app:** table watch handler was installing a row-level onclick handler ([ecdd93b](https://github.com/IBM/kui/commit/ecdd93b)), closes [#388](https://github.com/IBM/kui/issues/388)
* **app:** tone down ENOENT while precompiling plugin model ([dc99c90](https://github.com/IBM/kui/commit/dc99c90)), closes [#375](https://github.com/IBM/kui/issues/375)
* **core:** another fix for error handling in plugin precompiler ([41c15db](https://github.com/IBM/kui/commit/41c15db)), closes [#306](https://github.com/IBM/kui/issues/306)
* **core:** confine global repl hack to test mode ([e37d933](https://github.com/IBM/kui/commit/e37d933)), closes [#212](https://github.com/IBM/kui/issues/212)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **k8s:** fix for kubectl status in headless mode ([072626f](https://github.com/IBM/kui/commit/072626f)), closes [#327](https://github.com/IBM/kui/issues/327)
* **packages/app:** adjust behavior of usage with sidecar open ([b5cff00](https://github.com/IBM/kui/commit/b5cff00)), closes [#580](https://github.com/IBM/kui/issues/580)
* **packages/app:** badge text renders off-center in firefox ([bb4f6c5](https://github.com/IBM/kui/commit/bb4f6c5)), closes [#659](https://github.com/IBM/kui/issues/659)
* **packages/app:** balloon-css tooltips should follow theme ([e8a73b9](https://github.com/IBM/kui/commit/e8a73b9)), closes [#663](https://github.com/IBM/kui/issues/663)
* **packages/app:** bottom stripe does not scale well with fonts ([622fbe6](https://github.com/IBM/kui/commit/622fbe6)), closes [#828](https://github.com/IBM/kui/issues/828)
* **packages/app:** cmd+W does not close dev tools window ([c81ebac](https://github.com/IBM/kui/commit/c81ebac)), closes [#887](https://github.com/IBM/kui/issues/887)
* **packages/app:** dark mode fixes for help display ([6df5c7d](https://github.com/IBM/kui/commit/6df5c7d)), closes [#539](https://github.com/IBM/kui/issues/539)
* **packages/app:** double-click on electron app doesn't give full size window ([4cde270](https://github.com/IBM/kui/commit/4cde270)), closes [#406](https://github.com/IBM/kui/issues/406)
* **packages/app:** eliminate remaining uses of tiny text in core table view ([7f18d9a](https://github.com/IBM/kui/commit/7f18d9a)), closes [#695](https://github.com/IBM/kui/issues/695)
* **packages/app:** fix for pageup/pagedown keys in webpack ([474ba54](https://github.com/IBM/kui/commit/474ba54)), closes [#678](https://github.com/IBM/kui/issues/678)
* **packages/app:** fix for row striping contrast in sidecar tables ([c8f0231](https://github.com/IBM/kui/commit/c8f0231)), closes [#626](https://github.com/IBM/kui/issues/626)
* **packages/app:** fix for spinner going off-viewport ([0d095f0](https://github.com/IBM/kui/commit/0d095f0)), closes [#602](https://github.com/IBM/kui/issues/602)
* **packages/app:** fix incorrect data-status-code when command is not resolved by any plugin and add help suggestion to command-not-found error ([01a288e](https://github.com/IBM/kui/commit/01a288e)), closes [#680](https://github.com/IBM/kui/issues/680)
* **packages/app:** fix small vertical wiggle in table cells ([84ab2b4](https://github.com/IBM/kui/commit/84ab2b4)), closes [#711](https://github.com/IBM/kui/issues/711)
* **packages/app:** fix use of undefined css variable ([8e05681](https://github.com/IBM/kui/commit/8e05681)), closes [#633](https://github.com/IBM/kui/issues/633)
* **packages/app:** fix webpack in safari and firefox by removing negative lookbehind regex ([bd25bdb](https://github.com/IBM/kui/commit/bd25bdb)), closes [#848](https://github.com/IBM/kui/issues/848)
* **packages/app:** further improve multi-line table rendering ([807ce72](https://github.com/IBM/kui/commit/807ce72)), closes [#726](https://github.com/IBM/kui/issues/726)
* **packages/app:** headless pretty printer fixes for usage output ([e02f1b9](https://github.com/IBM/kui/commit/e02f1b9)), closes [#767](https://github.com/IBM/kui/issues/767)
* **packages/app:** height of first repl input changes after execution ([9a40f5e](https://github.com/IBM/kui/commit/9a40f5e)), closes [#706](https://github.com/IBM/kui/issues/706)
* **packages/app:** improve consistency of "ok" spacing ([ec939eb](https://github.com/IBM/kui/commit/ec939eb)), closes [#815](https://github.com/IBM/kui/issues/815)
* **packages/app:** improve handling of heterogeneous badges ([1388227](https://github.com/IBM/kui/commit/1388227)), closes [#807](https://github.com/IBM/kui/issues/807)
* **packages/app:** improve text contrast for README.md rendering ([786365c](https://github.com/IBM/kui/commit/786365c)), closes [#819](https://github.com/IBM/kui/issues/819)
* **packages/app:** improve usage rendering for ascii lists and optional args ([eba6397](https://github.com/IBM/kui/commit/eba6397)), closes [#730](https://github.com/IBM/kui/issues/730) [#731](https://github.com/IBM/kui/issues/731)
* **packages/app:** increase contrast of table header ([3a5412c](https://github.com/IBM/kui/commit/3a5412c)), closes [#778](https://github.com/IBM/kui/issues/778)
* **packages/app:** increase contrast of yellow badge ([56a2375](https://github.com/IBM/kui/commit/56a2375)), closes [#550](https://github.com/IBM/kui/issues/550)
* **packages/app:** make annoying 'ok' invisible ([0a0f7f7](https://github.com/IBM/kui/commit/0a0f7f7)), closes [#597](https://github.com/IBM/kui/issues/597)
* **packages/app:** make sure badges don't overflow tables ([9ba1e89](https://github.com/IBM/kui/commit/9ba1e89)), closes [#704](https://github.com/IBM/kui/issues/704)
* **packages/app:** minor spacing tweaks to repl ([ff51e08](https://github.com/IBM/kui/commit/ff51e08)), closes [#789](https://github.com/IBM/kui/issues/789)
* **packages/app:** pageup/down key support for webpack ([f3c64ad](https://github.com/IBM/kui/commit/f3c64ad)), closes [#678](https://github.com/IBM/kui/issues/678)
* **packages/app:** poor display of multi-line table cells ([6292e91](https://github.com/IBM/kui/commit/6292e91)), closes [#726](https://github.com/IBM/kui/issues/726)
* **packages/app:** remove table border transition effect ([ffc5bc0](https://github.com/IBM/kui/commit/ffc5bc0)), closes [#672](https://github.com/IBM/kui/issues/672)
* **packages/app:** streaming stdout should appear above (not next to) stderr ([2900492](https://github.com/IBM/kui/commit/2900492)), closes [#543](https://github.com/IBM/kui/issues/543)
* **packages/app:** table row selection does not pre-highlight on hover ([bba1f58](https://github.com/IBM/kui/commit/bba1f58)), closes [#670](https://github.com/IBM/kui/issues/670)
* **packages/app:** text placement of minimized sidecar title ([438d7cc](https://github.com/IBM/kui/commit/438d7cc)), closes [#813](https://github.com/IBM/kui/issues/813)
* **packages/app:** tighten spacing in repl UI ([2525ffa](https://github.com/IBM/kui/commit/2525ffa)), closes [#682](https://github.com/IBM/kui/issues/682)
* **packages/app:** tone down dark mode entity display ([c7ab2e8](https://github.com/IBM/kui/commit/c7ab2e8)), closes [#691](https://github.com/IBM/kui/issues/691)
* **packages/app:** try to keep the REPL prompt in focus ([665a953](https://github.com/IBM/kui/commit/665a953)), closes [#700](https://github.com/IBM/kui/issues/700)
* **packages/app:** tweak sidecar header type shorthand heuristic ([56f380b](https://github.com/IBM/kui/commit/56f380b)), closes [#784](https://github.com/IBM/kui/issues/784)
* **packages/app:** tweaks for sidecar bottom stripe UI ([b8c7f6e](https://github.com/IBM/kui/commit/b8c7f6e)), closes [#885](https://github.com/IBM/kui/issues/885)
* **packages/app:** update last updated date daily ([4e6c7d0](https://github.com/IBM/kui/commit/4e6c7d0)), closes [#876](https://github.com/IBM/kui/issues/876)
* **packages/app:** usage links should be target:blank ([b3ca81e](https://github.com/IBM/kui/commit/b3ca81e)), closes [#827](https://github.com/IBM/kui/issues/827)
* **packages/app:** usage rendering always shows red text ([211297b](https://github.com/IBM/kui/commit/211297b)), closes [#821](https://github.com/IBM/kui/issues/821)
* **packages/kui-builder:** minor dark mode border color tweak ([2d20fda](https://github.com/IBM/kui/commit/2d20fda)), closes [#561](https://github.com/IBM/kui/issues/561)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-k8s:** add "k" alias for "kubectl" ([4611ffe](https://github.com/IBM/kui/commit/4611ffe)), closes [#498](https://github.com/IBM/kui/issues/498)
* **plugin-k8s:** improve k8s in absence of plugin-openwhisk ([30f8a3a](https://github.com/IBM/kui/commit/30f8a3a)), closes [#457](https://github.com/IBM/kui/issues/457) [#458](https://github.com/IBM/kui/issues/458)
* **plugin-k8s:** k8s status enters infinite loop if resources absent ([e714c3f](https://github.com/IBM/kui/commit/e714c3f)), closes [#393](https://github.com/IBM/kui/issues/393)
* **plugin-openwhisk:** code highlight race bugs ([717b563](https://github.com/IBM/kui/commit/717b563)), closes [#475](https://github.com/IBM/kui/issues/475)
* **plugins-editor, plugins-openwhisk-editor-extensions:** fixes for lock/unlock and deploy n editor ([d0801a1](https://github.com/IBM/kui/commit/d0801a1)), closes [#472](https://github.com/IBM/kui/issues/472)
* **plugins/plugin-bash-like:** bash-like was not registering its catchall on preload ([99bf827](https://github.com/IBM/kui/commit/99bf827)), closes [#285](https://github.com/IBM/kui/issues/285)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-core-support:** tab completion should support dot files ([507b86f](https://github.com/IBM/kui/commit/507b86f)), closes [#547](https://github.com/IBM/kui/issues/547)
* **plugins/plugin-editor:** improved dark mode for editor ([8a7fd03](https://github.com/IBM/kui/commit/8a7fd03)), closes [#533](https://github.com/IBM/kui/issues/533) [#530](https://github.com/IBM/kui/issues/530)
* **plugins/plugin-k8s:** k get namespace does not show green for Active ([6146269](https://github.com/IBM/kui/commit/6146269)), closes [#782](https://github.com/IBM/kui/issues/782)
* **plugins/plugin-k8s:** kubectl logs -h does not display usage ([67f56fa](https://github.com/IBM/kui/commit/67f56fa)), closes [#571](https://github.com/IBM/kui/issues/571)
* **plugins/plugin-openwhisk:** hover over failure bar and execution time legend is activated ([4708f2c](https://github.com/IBM/kui/commit/4708f2c)), closes [#865](https://github.com/IBM/kui/issues/865)
* **plugins/plugin-tutorial:** tutorials versus dark mode fixes ([8f842ab](https://github.com/IBM/kui/commit/8f842ab)), closes [#531](https://github.com/IBM/kui/issues/531)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* a few more tab tweaks ([8e31e5e](https://github.com/IBM/kui/commit/8e31e5e)), closes [#719](https://github.com/IBM/kui/issues/719)
* allow clients to take control over entity name table cell coloring ([77b99d9](https://github.com/IBM/kui/commit/77b99d9)), closes [#675](https://github.com/IBM/kui/issues/675)
* clicks on sidecar header etc. result in prompt losing focus ([2f78dfc](https://github.com/IBM/kui/commit/2f78dfc)), closes [#610](https://github.com/IBM/kui/issues/610)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* eliminate tiny fonts for "package prefix" of default table view ([0ef5904](https://github.com/IBM/kui/commit/0ef5904)), closes [#855](https://github.com/IBM/kui/issues/855)
* enhanced support for subtext rendering of sidecar ([b54f1ff](https://github.com/IBM/kui/commit/b54f1ff)), closes [#907](https://github.com/IBM/kui/issues/907)
* export default window width and height ([a4e8e9e](https://github.com/IBM/kui/commit/a4e8e9e)), closes [#897](https://github.com/IBM/kui/issues/897)
* fix for overflowing badge text ([6caaeaf](https://github.com/IBM/kui/commit/6caaeaf)), closes [#795](https://github.com/IBM/kui/issues/795)
* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* git diff should use side-by-side ([4fe215b](https://github.com/IBM/kui/commit/4fe215b)), closes [#617](https://github.com/IBM/kui/issues/617)
* git status UI fixes ([cf0f5cb](https://github.com/IBM/kui/commit/cf0f5cb)), closes [#702](https://github.com/IBM/kui/issues/702)
* handle custom clients that don't provide plugin-core-support ([eb10966](https://github.com/IBM/kui/commit/eb10966)), closes [#615](https://github.com/IBM/kui/issues/615)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* improve support for kube all-namespaces ([8fab11a](https://github.com/IBM/kui/commit/8fab11a)), closes [#797](https://github.com/IBM/kui/issues/797)
* improved activation list UI ([fe69bd6](https://github.com/IBM/kui/commit/fe69bd6)), closes [#837](https://github.com/IBM/kui/issues/837)
* improved support for long vertical "resource type" sidecar header ([73ac7b4](https://github.com/IBM/kui/commit/73ac7b4)), closes [#780](https://github.com/IBM/kui/issues/780)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* make improved use of sidecar header for k8s ([e9c34d0](https://github.com/IBM/kui/commit/e9c34d0)), closes [#735](https://github.com/IBM/kui/issues/735)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* openwhisk package list UI fixes ([6d1c2d9](https://github.com/IBM/kui/commit/6d1c2d9)), closes [#296](https://github.com/IBM/kui/issues/296)
* refinements to openwhisk list views ([5f822ca](https://github.com/IBM/kui/commit/5f822ca)), closes [#851](https://github.com/IBM/kui/issues/851)
* refinements to popup UI ([a6cab89](https://github.com/IBM/kui/commit/a6cab89)), closes [#874](https://github.com/IBM/kui/issues/874)
* repl should use outer scrolling when in popup mode ([434ed21](https://github.com/IBM/kui/commit/434ed21)), closes [#870](https://github.com/IBM/kui/issues/870)
* resolve multiple issues with popups ([09c252f](https://github.com/IBM/kui/commit/09c252f)), closes [#872](https://github.com/IBM/kui/issues/872)
* screenshot UI improvements ([0f4e970](https://github.com/IBM/kui/commit/0f4e970)), closes [#890](https://github.com/IBM/kui/issues/890)
* screenshots of repl output should have padding ([1b89795](https://github.com/IBM/kui/commit/1b89795)), closes [#668](https://github.com/IBM/kui/issues/668)
* simplify core log formatter ([4877029](https://github.com/IBM/kui/commit/4877029)), closes [#842](https://github.com/IBM/kui/issues/842)
* smoother transitions as themes switch ([1ad91c1](https://github.com/IBM/kui/commit/1ad91c1)), closes [#613](https://github.com/IBM/kui/issues/613)
* some tables overflowed due to buggy scrollable css ([23d3353](https://github.com/IBM/kui/commit/23d3353)), closes [#575](https://github.com/IBM/kui/issues/575)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* use 2-space indent for js-beautify ([f6f9795](https://github.com/IBM/kui/commit/f6f9795)), closes [#845](https://github.com/IBM/kui/issues/845)
* user should be able to select text in sidecar header ([9a8a2e2](https://github.com/IBM/kui/commit/9a8a2e2)), closes [#741](https://github.com/IBM/kui/issues/741)
* various small fixes for tab UI ([c41d388](https://github.com/IBM/kui/commit/c41d388)), closes [#717](https://github.com/IBM/kui/issues/717)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)


### Features

* --ui should open repl-free windows ([088c24f](https://github.com/IBM/kui/commit/088c24f)), closes [#830](https://github.com/IBM/kui/issues/830)
* add a few more themes ([92199d3](https://github.com/IBM/kui/commit/92199d3)), closes [#608](https://github.com/IBM/kui/issues/608)
* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* pretty-print kubectl error+usage output ([b6e235b](https://github.com/IBM/kui/commit/b6e235b)), closes [#751](https://github.com/IBM/kui/issues/751)
* sidecar full screen ([4f21cb2](https://github.com/IBM/kui/commit/4f21cb2)), closes [#294](https://github.com/IBM/kui/issues/294) [#721](https://github.com/IBM/kui/issues/721)
* switch about window to use a sidecar DOM ([90d3ad3](https://github.com/IBM/kui/commit/90d3ad3)), closes [#746](https://github.com/IBM/kui/issues/746)
* use editor more widely ([fe063de](https://github.com/IBM/kui/commit/fe063de)), closes [#532](https://github.com/IBM/kui/issues/532)
* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* **packages/app:** eliminate | repl spinner ([eb8e3f5](https://github.com/IBM/kui/commit/eb8e3f5)), closes [#698](https://github.com/IBM/kui/issues/698)
* **packages/app:** popup window should offer an <input> ([a49236e](https://github.com/IBM/kui/commit/a49236e)), closes [#878](https://github.com/IBM/kui/issues/878)
* **packages/app:** support declarative bottom stripe direct buttons ([efa0f8a](https://github.com/IBM/kui/commit/efa0f8a)), closes [#708](https://github.com/IBM/kui/issues/708)
* **plugin-k8s:** add conditions and containers tabs to kubectl get ([7ca6130](https://github.com/IBM/kui/commit/7ca6130)), closes [#517](https://github.com/IBM/kui/issues/517)
* **plugins/plugin-k8s:** initial istio and kiali support ([0072725](https://github.com/IBM/kui/commit/0072725)), closes [#644](https://github.com/IBM/kui/issues/644)
* **plugins/plugin-k8s:** kubectl describe refinements ([6b6e8c5](https://github.com/IBM/kui/commit/6b6e8c5)), closes [#756](https://github.com/IBM/kui/issues/756)
* **plugins/plugin-wrk:** wrk plugin ([d39a331](https://github.com/IBM/kui/commit/d39a331)), closes [#624](https://github.com/IBM/kui/issues/624)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)





# 2.23.0 (2019-03-19)


### Bug Fixes

* **app:** fixes for --ui and headless to graphics transitions ([38c4e98](https://github.com/IBM/kui/commit/38c4e98)), closes [#408](https://github.com/IBM/kui/issues/408)
* **app:** opening Kui Electron Builds from macOS Finder adds additional argv -psn ([5ac8393](https://github.com/IBM/kui/commit/5ac8393)), closes [#382](https://github.com/IBM/kui/issues/382)
* **app:** table watch handler was installing a row-level onclick handler ([ecdd93b](https://github.com/IBM/kui/commit/ecdd93b)), closes [#388](https://github.com/IBM/kui/issues/388)
* **app:** tone down ENOENT while precompiling plugin model ([dc99c90](https://github.com/IBM/kui/commit/dc99c90)), closes [#375](https://github.com/IBM/kui/issues/375)
* **core:** another fix for error handling in plugin precompiler ([41c15db](https://github.com/IBM/kui/commit/41c15db)), closes [#306](https://github.com/IBM/kui/issues/306)
* **core:** confine global repl hack to test mode ([e37d933](https://github.com/IBM/kui/commit/e37d933)), closes [#212](https://github.com/IBM/kui/issues/212)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **k8s:** fix for kubectl status in headless mode ([072626f](https://github.com/IBM/kui/commit/072626f)), closes [#327](https://github.com/IBM/kui/issues/327)
* **packages/app:** adjust behavior of usage with sidecar open ([b5cff00](https://github.com/IBM/kui/commit/b5cff00)), closes [#580](https://github.com/IBM/kui/issues/580)
* **packages/app:** badge text renders off-center in firefox ([bb4f6c5](https://github.com/IBM/kui/commit/bb4f6c5)), closes [#659](https://github.com/IBM/kui/issues/659)
* **packages/app:** balloon-css tooltips should follow theme ([e8a73b9](https://github.com/IBM/kui/commit/e8a73b9)), closes [#663](https://github.com/IBM/kui/issues/663)
* **packages/app:** bottom stripe does not scale well with fonts ([622fbe6](https://github.com/IBM/kui/commit/622fbe6)), closes [#828](https://github.com/IBM/kui/issues/828)
* **packages/app:** cmd+W does not close dev tools window ([c81ebac](https://github.com/IBM/kui/commit/c81ebac)), closes [#887](https://github.com/IBM/kui/issues/887)
* **packages/app:** dark mode fixes for help display ([6df5c7d](https://github.com/IBM/kui/commit/6df5c7d)), closes [#539](https://github.com/IBM/kui/issues/539)
* **packages/app:** double-click on electron app doesn't give full size window ([4cde270](https://github.com/IBM/kui/commit/4cde270)), closes [#406](https://github.com/IBM/kui/issues/406)
* **packages/app:** eliminate remaining uses of tiny text in core table view ([7f18d9a](https://github.com/IBM/kui/commit/7f18d9a)), closes [#695](https://github.com/IBM/kui/issues/695)
* **packages/app:** fix for row striping contrast in sidecar tables ([c8f0231](https://github.com/IBM/kui/commit/c8f0231)), closes [#626](https://github.com/IBM/kui/issues/626)
* **packages/app:** fix for spinner going off-viewport ([0d095f0](https://github.com/IBM/kui/commit/0d095f0)), closes [#602](https://github.com/IBM/kui/issues/602)
* **packages/app:** fix incorrect data-status-code when command is not resolved by any plugin and add help suggestion to command-not-found error ([01a288e](https://github.com/IBM/kui/commit/01a288e)), closes [#680](https://github.com/IBM/kui/issues/680)
* **packages/app:** fix small vertical wiggle in table cells ([84ab2b4](https://github.com/IBM/kui/commit/84ab2b4)), closes [#711](https://github.com/IBM/kui/issues/711)
* **packages/app:** fix use of undefined css variable ([8e05681](https://github.com/IBM/kui/commit/8e05681)), closes [#633](https://github.com/IBM/kui/issues/633)
* **packages/app:** fix webpack in safari and firefox by removing negative lookbehind regex ([bd25bdb](https://github.com/IBM/kui/commit/bd25bdb)), closes [#848](https://github.com/IBM/kui/issues/848)
* **packages/app:** further improve multi-line table rendering ([807ce72](https://github.com/IBM/kui/commit/807ce72)), closes [#726](https://github.com/IBM/kui/issues/726)
* **packages/app:** headless pretty printer fixes for usage output ([e02f1b9](https://github.com/IBM/kui/commit/e02f1b9)), closes [#767](https://github.com/IBM/kui/issues/767)
* **packages/app:** height of first repl input changes after execution ([9a40f5e](https://github.com/IBM/kui/commit/9a40f5e)), closes [#706](https://github.com/IBM/kui/issues/706)
* **packages/app:** improve consistency of "ok" spacing ([ec939eb](https://github.com/IBM/kui/commit/ec939eb)), closes [#815](https://github.com/IBM/kui/issues/815)
* **packages/app:** improve handling of heterogeneous badges ([1388227](https://github.com/IBM/kui/commit/1388227)), closes [#807](https://github.com/IBM/kui/issues/807)
* **packages/app:** improve text contrast for README.md rendering ([786365c](https://github.com/IBM/kui/commit/786365c)), closes [#819](https://github.com/IBM/kui/issues/819)
* **packages/app:** improve usage rendering for ascii lists and optional args ([eba6397](https://github.com/IBM/kui/commit/eba6397)), closes [#730](https://github.com/IBM/kui/issues/730) [#731](https://github.com/IBM/kui/issues/731)
* **packages/app:** increase contrast of table header ([3a5412c](https://github.com/IBM/kui/commit/3a5412c)), closes [#778](https://github.com/IBM/kui/issues/778)
* **packages/app:** increase contrast of yellow badge ([56a2375](https://github.com/IBM/kui/commit/56a2375)), closes [#550](https://github.com/IBM/kui/issues/550)
* **packages/app:** make annoying 'ok' invisible ([0a0f7f7](https://github.com/IBM/kui/commit/0a0f7f7)), closes [#597](https://github.com/IBM/kui/issues/597)
* **packages/app:** make sure badges don't overflow tables ([9ba1e89](https://github.com/IBM/kui/commit/9ba1e89)), closes [#704](https://github.com/IBM/kui/issues/704)
* **packages/app:** minor spacing tweaks to repl ([ff51e08](https://github.com/IBM/kui/commit/ff51e08)), closes [#789](https://github.com/IBM/kui/issues/789)
* **packages/app:** pageup/down key support for webpack ([f3c64ad](https://github.com/IBM/kui/commit/f3c64ad)), closes [#678](https://github.com/IBM/kui/issues/678)
* **packages/app:** poor display of multi-line table cells ([6292e91](https://github.com/IBM/kui/commit/6292e91)), closes [#726](https://github.com/IBM/kui/issues/726)
* **packages/app:** remove table border transition effect ([ffc5bc0](https://github.com/IBM/kui/commit/ffc5bc0)), closes [#672](https://github.com/IBM/kui/issues/672)
* **packages/app:** streaming stdout should appear above (not next to) stderr ([2900492](https://github.com/IBM/kui/commit/2900492)), closes [#543](https://github.com/IBM/kui/issues/543)
* **packages/app:** table row selection does not pre-highlight on hover ([bba1f58](https://github.com/IBM/kui/commit/bba1f58)), closes [#670](https://github.com/IBM/kui/issues/670)
* **packages/app:** text placement of minimized sidecar title ([438d7cc](https://github.com/IBM/kui/commit/438d7cc)), closes [#813](https://github.com/IBM/kui/issues/813)
* **packages/app:** tighten spacing in repl UI ([2525ffa](https://github.com/IBM/kui/commit/2525ffa)), closes [#682](https://github.com/IBM/kui/issues/682)
* **packages/app:** tone down dark mode entity display ([c7ab2e8](https://github.com/IBM/kui/commit/c7ab2e8)), closes [#691](https://github.com/IBM/kui/issues/691)
* **packages/app:** try to keep the REPL prompt in focus ([665a953](https://github.com/IBM/kui/commit/665a953)), closes [#700](https://github.com/IBM/kui/issues/700)
* **packages/app:** tweak sidecar header type shorthand heuristic ([56f380b](https://github.com/IBM/kui/commit/56f380b)), closes [#784](https://github.com/IBM/kui/issues/784)
* **packages/app:** tweaks for sidecar bottom stripe UI ([b8c7f6e](https://github.com/IBM/kui/commit/b8c7f6e)), closes [#885](https://github.com/IBM/kui/issues/885)
* **packages/app:** update last updated date daily ([4e6c7d0](https://github.com/IBM/kui/commit/4e6c7d0)), closes [#876](https://github.com/IBM/kui/issues/876)
* **packages/app:** usage links should be target:blank ([b3ca81e](https://github.com/IBM/kui/commit/b3ca81e)), closes [#827](https://github.com/IBM/kui/issues/827)
* **packages/app:** usage rendering always shows red text ([211297b](https://github.com/IBM/kui/commit/211297b)), closes [#821](https://github.com/IBM/kui/issues/821)
* **packages/kui-builder:** minor dark mode border color tweak ([2d20fda](https://github.com/IBM/kui/commit/2d20fda)), closes [#561](https://github.com/IBM/kui/issues/561)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-k8s:** add "k" alias for "kubectl" ([4611ffe](https://github.com/IBM/kui/commit/4611ffe)), closes [#498](https://github.com/IBM/kui/issues/498)
* **plugin-k8s:** improve k8s in absence of plugin-openwhisk ([30f8a3a](https://github.com/IBM/kui/commit/30f8a3a)), closes [#457](https://github.com/IBM/kui/issues/457) [#458](https://github.com/IBM/kui/issues/458)
* **plugin-k8s:** k8s status enters infinite loop if resources absent ([e714c3f](https://github.com/IBM/kui/commit/e714c3f)), closes [#393](https://github.com/IBM/kui/issues/393)
* **plugin-openwhisk:** code highlight race bugs ([717b563](https://github.com/IBM/kui/commit/717b563)), closes [#475](https://github.com/IBM/kui/issues/475)
* **plugins-editor, plugins-openwhisk-editor-extensions:** fixes for lock/unlock and deploy n editor ([d0801a1](https://github.com/IBM/kui/commit/d0801a1)), closes [#472](https://github.com/IBM/kui/issues/472)
* **plugins/plugin-bash-like:** bash-like was not registering its catchall on preload ([99bf827](https://github.com/IBM/kui/commit/99bf827)), closes [#285](https://github.com/IBM/kui/issues/285)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-core-support:** tab completion should support dot files ([507b86f](https://github.com/IBM/kui/commit/507b86f)), closes [#547](https://github.com/IBM/kui/issues/547)
* **plugins/plugin-editor:** improved dark mode for editor ([8a7fd03](https://github.com/IBM/kui/commit/8a7fd03)), closes [#533](https://github.com/IBM/kui/issues/533) [#530](https://github.com/IBM/kui/issues/530)
* **plugins/plugin-k8s:** k get namespace does not show green for Active ([6146269](https://github.com/IBM/kui/commit/6146269)), closes [#782](https://github.com/IBM/kui/issues/782)
* **plugins/plugin-k8s:** kubectl logs -h does not display usage ([67f56fa](https://github.com/IBM/kui/commit/67f56fa)), closes [#571](https://github.com/IBM/kui/issues/571)
* **plugins/plugin-openwhisk:** hover over failure bar and execution time legend is activated ([4708f2c](https://github.com/IBM/kui/commit/4708f2c)), closes [#865](https://github.com/IBM/kui/issues/865)
* **plugins/plugin-tutorial:** tutorials versus dark mode fixes ([8f842ab](https://github.com/IBM/kui/commit/8f842ab)), closes [#531](https://github.com/IBM/kui/issues/531)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* a few more tab tweaks ([8e31e5e](https://github.com/IBM/kui/commit/8e31e5e)), closes [#719](https://github.com/IBM/kui/issues/719)
* allow clients to take control over entity name table cell coloring ([77b99d9](https://github.com/IBM/kui/commit/77b99d9)), closes [#675](https://github.com/IBM/kui/issues/675)
* clicks on sidecar header etc. result in prompt losing focus ([2f78dfc](https://github.com/IBM/kui/commit/2f78dfc)), closes [#610](https://github.com/IBM/kui/issues/610)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* eliminate tiny fonts for "package prefix" of default table view ([0ef5904](https://github.com/IBM/kui/commit/0ef5904)), closes [#855](https://github.com/IBM/kui/issues/855)
* export default window width and height ([a4e8e9e](https://github.com/IBM/kui/commit/a4e8e9e)), closes [#897](https://github.com/IBM/kui/issues/897)
* fix for overflowing badge text ([6caaeaf](https://github.com/IBM/kui/commit/6caaeaf)), closes [#795](https://github.com/IBM/kui/issues/795)
* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* git diff should use side-by-side ([4fe215b](https://github.com/IBM/kui/commit/4fe215b)), closes [#617](https://github.com/IBM/kui/issues/617)
* git status UI fixes ([cf0f5cb](https://github.com/IBM/kui/commit/cf0f5cb)), closes [#702](https://github.com/IBM/kui/issues/702)
* handle custom clients that don't provide plugin-core-support ([eb10966](https://github.com/IBM/kui/commit/eb10966)), closes [#615](https://github.com/IBM/kui/issues/615)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* improve support for kube all-namespaces ([8fab11a](https://github.com/IBM/kui/commit/8fab11a)), closes [#797](https://github.com/IBM/kui/issues/797)
* improved activation list UI ([fe69bd6](https://github.com/IBM/kui/commit/fe69bd6)), closes [#837](https://github.com/IBM/kui/issues/837)
* improved support for long vertical "resource type" sidecar header ([73ac7b4](https://github.com/IBM/kui/commit/73ac7b4)), closes [#780](https://github.com/IBM/kui/issues/780)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* make improved use of sidecar header for k8s ([e9c34d0](https://github.com/IBM/kui/commit/e9c34d0)), closes [#735](https://github.com/IBM/kui/issues/735)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* openwhisk package list UI fixes ([6d1c2d9](https://github.com/IBM/kui/commit/6d1c2d9)), closes [#296](https://github.com/IBM/kui/issues/296)
* refinements to openwhisk list views ([5f822ca](https://github.com/IBM/kui/commit/5f822ca)), closes [#851](https://github.com/IBM/kui/issues/851)
* refinements to popup UI ([a6cab89](https://github.com/IBM/kui/commit/a6cab89)), closes [#874](https://github.com/IBM/kui/issues/874)
* repl should use outer scrolling when in popup mode ([434ed21](https://github.com/IBM/kui/commit/434ed21)), closes [#870](https://github.com/IBM/kui/issues/870)
* resolve multiple issues with popups ([09c252f](https://github.com/IBM/kui/commit/09c252f)), closes [#872](https://github.com/IBM/kui/issues/872)
* screenshot UI improvements ([0f4e970](https://github.com/IBM/kui/commit/0f4e970)), closes [#890](https://github.com/IBM/kui/issues/890)
* screenshots of repl output should have padding ([1b89795](https://github.com/IBM/kui/commit/1b89795)), closes [#668](https://github.com/IBM/kui/issues/668)
* simplify core log formatter ([4877029](https://github.com/IBM/kui/commit/4877029)), closes [#842](https://github.com/IBM/kui/issues/842)
* smoother transitions as themes switch ([1ad91c1](https://github.com/IBM/kui/commit/1ad91c1)), closes [#613](https://github.com/IBM/kui/issues/613)
* some tables overflowed due to buggy scrollable css ([23d3353](https://github.com/IBM/kui/commit/23d3353)), closes [#575](https://github.com/IBM/kui/issues/575)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* use 2-space indent for js-beautify ([f6f9795](https://github.com/IBM/kui/commit/f6f9795)), closes [#845](https://github.com/IBM/kui/issues/845)
* user should be able to select text in sidecar header ([9a8a2e2](https://github.com/IBM/kui/commit/9a8a2e2)), closes [#741](https://github.com/IBM/kui/issues/741)
* various small fixes for tab UI ([c41d388](https://github.com/IBM/kui/commit/c41d388)), closes [#717](https://github.com/IBM/kui/issues/717)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)


### Features

* --ui should open repl-free windows ([088c24f](https://github.com/IBM/kui/commit/088c24f)), closes [#830](https://github.com/IBM/kui/issues/830)
* add a few more themes ([92199d3](https://github.com/IBM/kui/commit/92199d3)), closes [#608](https://github.com/IBM/kui/issues/608)
* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* pretty-print kubectl error+usage output ([b6e235b](https://github.com/IBM/kui/commit/b6e235b)), closes [#751](https://github.com/IBM/kui/issues/751)
* sidecar full screen ([4f21cb2](https://github.com/IBM/kui/commit/4f21cb2)), closes [#294](https://github.com/IBM/kui/issues/294) [#721](https://github.com/IBM/kui/issues/721)
* switch about window to use a sidecar DOM ([90d3ad3](https://github.com/IBM/kui/commit/90d3ad3)), closes [#746](https://github.com/IBM/kui/issues/746)
* use editor more widely ([fe063de](https://github.com/IBM/kui/commit/fe063de)), closes [#532](https://github.com/IBM/kui/issues/532)
* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* **packages/app:** eliminate | repl spinner ([eb8e3f5](https://github.com/IBM/kui/commit/eb8e3f5)), closes [#698](https://github.com/IBM/kui/issues/698)
* **packages/app:** popup window should offer an <input> ([a49236e](https://github.com/IBM/kui/commit/a49236e)), closes [#878](https://github.com/IBM/kui/issues/878)
* **packages/app:** support declarative bottom stripe direct buttons ([efa0f8a](https://github.com/IBM/kui/commit/efa0f8a)), closes [#708](https://github.com/IBM/kui/issues/708)
* **plugin-k8s:** add conditions and containers tabs to kubectl get ([7ca6130](https://github.com/IBM/kui/commit/7ca6130)), closes [#517](https://github.com/IBM/kui/issues/517)
* **plugins/plugin-k8s:** initial istio and kiali support ([0072725](https://github.com/IBM/kui/commit/0072725)), closes [#644](https://github.com/IBM/kui/issues/644)
* **plugins/plugin-k8s:** kubectl describe refinements ([6b6e8c5](https://github.com/IBM/kui/commit/6b6e8c5)), closes [#756](https://github.com/IBM/kui/issues/756)
* **plugins/plugin-wrk:** wrk plugin ([d39a331](https://github.com/IBM/kui/commit/d39a331)), closes [#624](https://github.com/IBM/kui/issues/624)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)





# 2.22.0 (2019-03-10)


### Bug Fixes

* **app:** fixes for --ui and headless to graphics transitions ([38c4e98](https://github.com/IBM/kui/commit/38c4e98)), closes [#408](https://github.com/IBM/kui/issues/408)
* **app:** opening Kui Electron Builds from macOS Finder adds additional argv -psn ([5ac8393](https://github.com/IBM/kui/commit/5ac8393)), closes [#382](https://github.com/IBM/kui/issues/382)
* **app:** table watch handler was installing a row-level onclick handler ([ecdd93b](https://github.com/IBM/kui/commit/ecdd93b)), closes [#388](https://github.com/IBM/kui/issues/388)
* **app:** tone down ENOENT while precompiling plugin model ([dc99c90](https://github.com/IBM/kui/commit/dc99c90)), closes [#375](https://github.com/IBM/kui/issues/375)
* **core:** another fix for error handling in plugin precompiler ([41c15db](https://github.com/IBM/kui/commit/41c15db)), closes [#306](https://github.com/IBM/kui/issues/306)
* **core:** confine global repl hack to test mode ([e37d933](https://github.com/IBM/kui/commit/e37d933)), closes [#212](https://github.com/IBM/kui/issues/212)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **k8s:** fix for kubectl status in headless mode ([072626f](https://github.com/IBM/kui/commit/072626f)), closes [#327](https://github.com/IBM/kui/issues/327)
* **packages/app:** adjust behavior of usage with sidecar open ([b5cff00](https://github.com/IBM/kui/commit/b5cff00)), closes [#580](https://github.com/IBM/kui/issues/580)
* **packages/app:** badge text renders off-center in firefox ([bb4f6c5](https://github.com/IBM/kui/commit/bb4f6c5)), closes [#659](https://github.com/IBM/kui/issues/659)
* **packages/app:** balloon-css tooltips should follow theme ([e8a73b9](https://github.com/IBM/kui/commit/e8a73b9)), closes [#663](https://github.com/IBM/kui/issues/663)
* **packages/app:** dark mode fixes for help display ([6df5c7d](https://github.com/IBM/kui/commit/6df5c7d)), closes [#539](https://github.com/IBM/kui/issues/539)
* **packages/app:** double-click on electron app doesn't give full size window ([4cde270](https://github.com/IBM/kui/commit/4cde270)), closes [#406](https://github.com/IBM/kui/issues/406)
* **packages/app:** eliminate remaining uses of tiny text in core table view ([7f18d9a](https://github.com/IBM/kui/commit/7f18d9a)), closes [#695](https://github.com/IBM/kui/issues/695)
* **packages/app:** fix for row striping contrast in sidecar tables ([c8f0231](https://github.com/IBM/kui/commit/c8f0231)), closes [#626](https://github.com/IBM/kui/issues/626)
* **packages/app:** fix for spinner going off-viewport ([0d095f0](https://github.com/IBM/kui/commit/0d095f0)), closes [#602](https://github.com/IBM/kui/issues/602)
* **packages/app:** fix incorrect data-status-code when command is not resolved by any plugin and add help suggestion to command-not-found error ([01a288e](https://github.com/IBM/kui/commit/01a288e)), closes [#680](https://github.com/IBM/kui/issues/680)
* **packages/app:** fix small vertical wiggle in table cells ([84ab2b4](https://github.com/IBM/kui/commit/84ab2b4)), closes [#711](https://github.com/IBM/kui/issues/711)
* **packages/app:** fix use of undefined css variable ([8e05681](https://github.com/IBM/kui/commit/8e05681)), closes [#633](https://github.com/IBM/kui/issues/633)
* **packages/app:** further improve multi-line table rendering ([807ce72](https://github.com/IBM/kui/commit/807ce72)), closes [#726](https://github.com/IBM/kui/issues/726)
* **packages/app:** height of first repl input changes after execution ([9a40f5e](https://github.com/IBM/kui/commit/9a40f5e)), closes [#706](https://github.com/IBM/kui/issues/706)
* **packages/app:** improve usage rendering for ascii lists and optional args ([eba6397](https://github.com/IBM/kui/commit/eba6397)), closes [#730](https://github.com/IBM/kui/issues/730) [#731](https://github.com/IBM/kui/issues/731)
* **packages/app:** increase contrast of yellow badge ([56a2375](https://github.com/IBM/kui/commit/56a2375)), closes [#550](https://github.com/IBM/kui/issues/550)
* **packages/app:** make annoying 'ok' invisible ([0a0f7f7](https://github.com/IBM/kui/commit/0a0f7f7)), closes [#597](https://github.com/IBM/kui/issues/597)
* **packages/app:** make sure badges don't overflow tables ([9ba1e89](https://github.com/IBM/kui/commit/9ba1e89)), closes [#704](https://github.com/IBM/kui/issues/704)
* **packages/app:** poor display of multi-line table cells ([6292e91](https://github.com/IBM/kui/commit/6292e91)), closes [#726](https://github.com/IBM/kui/issues/726)
* **packages/app:** remove table border transition effect ([ffc5bc0](https://github.com/IBM/kui/commit/ffc5bc0)), closes [#672](https://github.com/IBM/kui/issues/672)
* **packages/app:** streaming stdout should appear above (not next to) stderr ([2900492](https://github.com/IBM/kui/commit/2900492)), closes [#543](https://github.com/IBM/kui/issues/543)
* **packages/app:** table row selection does not pre-highlight on hover ([bba1f58](https://github.com/IBM/kui/commit/bba1f58)), closes [#670](https://github.com/IBM/kui/issues/670)
* **packages/app:** tighten spacing in repl UI ([2525ffa](https://github.com/IBM/kui/commit/2525ffa)), closes [#682](https://github.com/IBM/kui/issues/682)
* **packages/app:** tone down dark mode entity display ([c7ab2e8](https://github.com/IBM/kui/commit/c7ab2e8)), closes [#691](https://github.com/IBM/kui/issues/691)
* **packages/app:** try to keep the REPL prompt in focus ([665a953](https://github.com/IBM/kui/commit/665a953)), closes [#700](https://github.com/IBM/kui/issues/700)
* **packages/kui-builder:** minor dark mode border color tweak ([2d20fda](https://github.com/IBM/kui/commit/2d20fda)), closes [#561](https://github.com/IBM/kui/issues/561)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-k8s:** add "k" alias for "kubectl" ([4611ffe](https://github.com/IBM/kui/commit/4611ffe)), closes [#498](https://github.com/IBM/kui/issues/498)
* **plugin-k8s:** improve k8s in absence of plugin-openwhisk ([30f8a3a](https://github.com/IBM/kui/commit/30f8a3a)), closes [#457](https://github.com/IBM/kui/issues/457) [#458](https://github.com/IBM/kui/issues/458)
* **plugin-k8s:** k8s status enters infinite loop if resources absent ([e714c3f](https://github.com/IBM/kui/commit/e714c3f)), closes [#393](https://github.com/IBM/kui/issues/393)
* **plugin-openwhisk:** code highlight race bugs ([717b563](https://github.com/IBM/kui/commit/717b563)), closes [#475](https://github.com/IBM/kui/issues/475)
* **plugins-editor, plugins-openwhisk-editor-extensions:** fixes for lock/unlock and deploy n editor ([d0801a1](https://github.com/IBM/kui/commit/d0801a1)), closes [#472](https://github.com/IBM/kui/issues/472)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-core-support:** tab completion should support dot files ([507b86f](https://github.com/IBM/kui/commit/507b86f)), closes [#547](https://github.com/IBM/kui/issues/547)
* **plugins/plugin-editor:** improved dark mode for editor ([8a7fd03](https://github.com/IBM/kui/commit/8a7fd03)), closes [#533](https://github.com/IBM/kui/issues/533) [#530](https://github.com/IBM/kui/issues/530)
* **plugins/plugin-k8s:** kubectl logs -h does not display usage ([67f56fa](https://github.com/IBM/kui/commit/67f56fa)), closes [#571](https://github.com/IBM/kui/issues/571)
* **plugins/plugin-tutorial:** tutorials versus dark mode fixes ([8f842ab](https://github.com/IBM/kui/commit/8f842ab)), closes [#531](https://github.com/IBM/kui/issues/531)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* a few more tab tweaks ([8e31e5e](https://github.com/IBM/kui/commit/8e31e5e)), closes [#719](https://github.com/IBM/kui/issues/719)
* allow clients to take control over entity name table cell coloring ([77b99d9](https://github.com/IBM/kui/commit/77b99d9)), closes [#675](https://github.com/IBM/kui/issues/675)
* clicks on sidecar header etc. result in prompt losing focus ([2f78dfc](https://github.com/IBM/kui/commit/2f78dfc)), closes [#610](https://github.com/IBM/kui/issues/610)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* git diff should use side-by-side ([4fe215b](https://github.com/IBM/kui/commit/4fe215b)), closes [#617](https://github.com/IBM/kui/issues/617)
* git status UI fixes ([cf0f5cb](https://github.com/IBM/kui/commit/cf0f5cb)), closes [#702](https://github.com/IBM/kui/issues/702)
* handle custom clients that don't provide plugin-core-support ([eb10966](https://github.com/IBM/kui/commit/eb10966)), closes [#615](https://github.com/IBM/kui/issues/615)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* make improved use of sidecar header for k8s ([e9c34d0](https://github.com/IBM/kui/commit/e9c34d0)), closes [#735](https://github.com/IBM/kui/issues/735)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)
* screenshots of repl output should have padding ([1b89795](https://github.com/IBM/kui/commit/1b89795)), closes [#668](https://github.com/IBM/kui/issues/668)
* smoother transitions as themes switch ([1ad91c1](https://github.com/IBM/kui/commit/1ad91c1)), closes [#613](https://github.com/IBM/kui/issues/613)
* some tables overflowed due to buggy scrollable css ([23d3353](https://github.com/IBM/kui/commit/23d3353)), closes [#575](https://github.com/IBM/kui/issues/575)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* user should be able to select text in sidecar header ([9a8a2e2](https://github.com/IBM/kui/commit/9a8a2e2)), closes [#741](https://github.com/IBM/kui/issues/741)
* various small fixes for tab UI ([c41d388](https://github.com/IBM/kui/commit/c41d388)), closes [#717](https://github.com/IBM/kui/issues/717)


### Features

* add a few more themes ([92199d3](https://github.com/IBM/kui/commit/92199d3)), closes [#608](https://github.com/IBM/kui/issues/608)
* **plugins/plugin-k8s:** initial istio and kiali support ([0072725](https://github.com/IBM/kui/commit/0072725)), closes [#644](https://github.com/IBM/kui/issues/644)
* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* pretty-print kubectl error+usage output ([b6e235b](https://github.com/IBM/kui/commit/b6e235b)), closes [#751](https://github.com/IBM/kui/issues/751)
* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* sidecar full screen ([4f21cb2](https://github.com/IBM/kui/commit/4f21cb2)), closes [#294](https://github.com/IBM/kui/issues/294) [#721](https://github.com/IBM/kui/issues/721)
* switch about window to use a sidecar DOM ([90d3ad3](https://github.com/IBM/kui/commit/90d3ad3)), closes [#746](https://github.com/IBM/kui/issues/746)
* use editor more widely ([fe063de](https://github.com/IBM/kui/commit/fe063de)), closes [#532](https://github.com/IBM/kui/issues/532)
* **packages/app:** eliminate | repl spinner ([eb8e3f5](https://github.com/IBM/kui/commit/eb8e3f5)), closes [#698](https://github.com/IBM/kui/issues/698)
* **packages/app:** support declarative bottom stripe direct buttons ([efa0f8a](https://github.com/IBM/kui/commit/efa0f8a)), closes [#708](https://github.com/IBM/kui/issues/708)
* **plugin-k8s:** add conditions and containers tabs to kubectl get ([7ca6130](https://github.com/IBM/kui/commit/7ca6130)), closes [#517](https://github.com/IBM/kui/issues/517)
* **plugins/plugin-wrk:** wrk plugin ([d39a331](https://github.com/IBM/kui/commit/d39a331)), closes [#624](https://github.com/IBM/kui/issues/624)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)





# 2.21.0 (2019-03-10)


### Bug Fixes

* **app:** fixes for --ui and headless to graphics transitions ([38c4e98](https://github.com/IBM/kui/commit/38c4e98)), closes [#408](https://github.com/IBM/kui/issues/408)
* **app:** opening Kui Electron Builds from macOS Finder adds additional argv -psn ([5ac8393](https://github.com/IBM/kui/commit/5ac8393)), closes [#382](https://github.com/IBM/kui/issues/382)
* **app:** table watch handler was installing a row-level onclick handler ([ecdd93b](https://github.com/IBM/kui/commit/ecdd93b)), closes [#388](https://github.com/IBM/kui/issues/388)
* **app:** tone down ENOENT while precompiling plugin model ([dc99c90](https://github.com/IBM/kui/commit/dc99c90)), closes [#375](https://github.com/IBM/kui/issues/375)
* **core:** another fix for error handling in plugin precompiler ([41c15db](https://github.com/IBM/kui/commit/41c15db)), closes [#306](https://github.com/IBM/kui/issues/306)
* **core:** confine global repl hack to test mode ([e37d933](https://github.com/IBM/kui/commit/e37d933)), closes [#212](https://github.com/IBM/kui/issues/212)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **k8s:** fix for kubectl status in headless mode ([072626f](https://github.com/IBM/kui/commit/072626f)), closes [#327](https://github.com/IBM/kui/issues/327)
* **packages/app:** adjust behavior of usage with sidecar open ([b5cff00](https://github.com/IBM/kui/commit/b5cff00)), closes [#580](https://github.com/IBM/kui/issues/580)
* **packages/app:** badge text renders off-center in firefox ([bb4f6c5](https://github.com/IBM/kui/commit/bb4f6c5)), closes [#659](https://github.com/IBM/kui/issues/659)
* **packages/app:** balloon-css tooltips should follow theme ([e8a73b9](https://github.com/IBM/kui/commit/e8a73b9)), closes [#663](https://github.com/IBM/kui/issues/663)
* **packages/app:** dark mode fixes for help display ([6df5c7d](https://github.com/IBM/kui/commit/6df5c7d)), closes [#539](https://github.com/IBM/kui/issues/539)
* **packages/app:** double-click on electron app doesn't give full size window ([4cde270](https://github.com/IBM/kui/commit/4cde270)), closes [#406](https://github.com/IBM/kui/issues/406)
* **packages/app:** eliminate remaining uses of tiny text in core table view ([7f18d9a](https://github.com/IBM/kui/commit/7f18d9a)), closes [#695](https://github.com/IBM/kui/issues/695)
* **packages/app:** fix for row striping contrast in sidecar tables ([c8f0231](https://github.com/IBM/kui/commit/c8f0231)), closes [#626](https://github.com/IBM/kui/issues/626)
* **packages/app:** fix for spinner going off-viewport ([0d095f0](https://github.com/IBM/kui/commit/0d095f0)), closes [#602](https://github.com/IBM/kui/issues/602)
* **packages/app:** fix incorrect data-status-code when command is not resolved by any plugin and add help suggestion to command-not-found error ([01a288e](https://github.com/IBM/kui/commit/01a288e)), closes [#680](https://github.com/IBM/kui/issues/680)
* **packages/app:** fix small vertical wiggle in table cells ([84ab2b4](https://github.com/IBM/kui/commit/84ab2b4)), closes [#711](https://github.com/IBM/kui/issues/711)
* **packages/app:** fix use of undefined css variable ([8e05681](https://github.com/IBM/kui/commit/8e05681)), closes [#633](https://github.com/IBM/kui/issues/633)
* **packages/app:** further improve multi-line table rendering ([807ce72](https://github.com/IBM/kui/commit/807ce72)), closes [#726](https://github.com/IBM/kui/issues/726)
* **packages/app:** height of first repl input changes after execution ([9a40f5e](https://github.com/IBM/kui/commit/9a40f5e)), closes [#706](https://github.com/IBM/kui/issues/706)
* **packages/app:** improve usage rendering for ascii lists and optional args ([eba6397](https://github.com/IBM/kui/commit/eba6397)), closes [#730](https://github.com/IBM/kui/issues/730) [#731](https://github.com/IBM/kui/issues/731)
* **packages/app:** increase contrast of yellow badge ([56a2375](https://github.com/IBM/kui/commit/56a2375)), closes [#550](https://github.com/IBM/kui/issues/550)
* **packages/app:** make annoying 'ok' invisible ([0a0f7f7](https://github.com/IBM/kui/commit/0a0f7f7)), closes [#597](https://github.com/IBM/kui/issues/597)
* **packages/app:** make sure badges don't overflow tables ([9ba1e89](https://github.com/IBM/kui/commit/9ba1e89)), closes [#704](https://github.com/IBM/kui/issues/704)
* **packages/app:** poor display of multi-line table cells ([6292e91](https://github.com/IBM/kui/commit/6292e91)), closes [#726](https://github.com/IBM/kui/issues/726)
* **packages/app:** remove table border transition effect ([ffc5bc0](https://github.com/IBM/kui/commit/ffc5bc0)), closes [#672](https://github.com/IBM/kui/issues/672)
* **packages/app:** streaming stdout should appear above (not next to) stderr ([2900492](https://github.com/IBM/kui/commit/2900492)), closes [#543](https://github.com/IBM/kui/issues/543)
* **packages/app:** table row selection does not pre-highlight on hover ([bba1f58](https://github.com/IBM/kui/commit/bba1f58)), closes [#670](https://github.com/IBM/kui/issues/670)
* **packages/app:** tighten spacing in repl UI ([2525ffa](https://github.com/IBM/kui/commit/2525ffa)), closes [#682](https://github.com/IBM/kui/issues/682)
* **packages/app:** tone down dark mode entity display ([c7ab2e8](https://github.com/IBM/kui/commit/c7ab2e8)), closes [#691](https://github.com/IBM/kui/issues/691)
* **packages/app:** try to keep the REPL prompt in focus ([665a953](https://github.com/IBM/kui/commit/665a953)), closes [#700](https://github.com/IBM/kui/issues/700)
* **packages/kui-builder:** minor dark mode border color tweak ([2d20fda](https://github.com/IBM/kui/commit/2d20fda)), closes [#561](https://github.com/IBM/kui/issues/561)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-k8s:** add "k" alias for "kubectl" ([4611ffe](https://github.com/IBM/kui/commit/4611ffe)), closes [#498](https://github.com/IBM/kui/issues/498)
* **plugin-k8s:** improve k8s in absence of plugin-openwhisk ([30f8a3a](https://github.com/IBM/kui/commit/30f8a3a)), closes [#457](https://github.com/IBM/kui/issues/457) [#458](https://github.com/IBM/kui/issues/458)
* **plugin-k8s:** k8s status enters infinite loop if resources absent ([e714c3f](https://github.com/IBM/kui/commit/e714c3f)), closes [#393](https://github.com/IBM/kui/issues/393)
* **plugin-openwhisk:** code highlight race bugs ([717b563](https://github.com/IBM/kui/commit/717b563)), closes [#475](https://github.com/IBM/kui/issues/475)
* **plugins-editor, plugins-openwhisk-editor-extensions:** fixes for lock/unlock and deploy n editor ([d0801a1](https://github.com/IBM/kui/commit/d0801a1)), closes [#472](https://github.com/IBM/kui/issues/472)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-core-support:** tab completion should support dot files ([507b86f](https://github.com/IBM/kui/commit/507b86f)), closes [#547](https://github.com/IBM/kui/issues/547)
* **plugins/plugin-editor:** improved dark mode for editor ([8a7fd03](https://github.com/IBM/kui/commit/8a7fd03)), closes [#533](https://github.com/IBM/kui/issues/533) [#530](https://github.com/IBM/kui/issues/530)
* **plugins/plugin-k8s:** kubectl logs -h does not display usage ([67f56fa](https://github.com/IBM/kui/commit/67f56fa)), closes [#571](https://github.com/IBM/kui/issues/571)
* **plugins/plugin-tutorial:** tutorials versus dark mode fixes ([8f842ab](https://github.com/IBM/kui/commit/8f842ab)), closes [#531](https://github.com/IBM/kui/issues/531)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* a few more tab tweaks ([8e31e5e](https://github.com/IBM/kui/commit/8e31e5e)), closes [#719](https://github.com/IBM/kui/issues/719)
* allow clients to take control over entity name table cell coloring ([77b99d9](https://github.com/IBM/kui/commit/77b99d9)), closes [#675](https://github.com/IBM/kui/issues/675)
* clicks on sidecar header etc. result in prompt losing focus ([2f78dfc](https://github.com/IBM/kui/commit/2f78dfc)), closes [#610](https://github.com/IBM/kui/issues/610)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* git diff should use side-by-side ([4fe215b](https://github.com/IBM/kui/commit/4fe215b)), closes [#617](https://github.com/IBM/kui/issues/617)
* git status UI fixes ([cf0f5cb](https://github.com/IBM/kui/commit/cf0f5cb)), closes [#702](https://github.com/IBM/kui/issues/702)
* handle custom clients that don't provide plugin-core-support ([eb10966](https://github.com/IBM/kui/commit/eb10966)), closes [#615](https://github.com/IBM/kui/issues/615)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* make improved use of sidecar header for k8s ([e9c34d0](https://github.com/IBM/kui/commit/e9c34d0)), closes [#735](https://github.com/IBM/kui/issues/735)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)
* screenshots of repl output should have padding ([1b89795](https://github.com/IBM/kui/commit/1b89795)), closes [#668](https://github.com/IBM/kui/issues/668)
* smoother transitions as themes switch ([1ad91c1](https://github.com/IBM/kui/commit/1ad91c1)), closes [#613](https://github.com/IBM/kui/issues/613)
* some tables overflowed due to buggy scrollable css ([23d3353](https://github.com/IBM/kui/commit/23d3353)), closes [#575](https://github.com/IBM/kui/issues/575)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* user should be able to select text in sidecar header ([9a8a2e2](https://github.com/IBM/kui/commit/9a8a2e2)), closes [#741](https://github.com/IBM/kui/issues/741)
* various small fixes for tab UI ([c41d388](https://github.com/IBM/kui/commit/c41d388)), closes [#717](https://github.com/IBM/kui/issues/717)


### Features

* add a few more themes ([92199d3](https://github.com/IBM/kui/commit/92199d3)), closes [#608](https://github.com/IBM/kui/issues/608)
* **plugins/plugin-wrk:** wrk plugin ([d39a331](https://github.com/IBM/kui/commit/d39a331)), closes [#624](https://github.com/IBM/kui/issues/624)
* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* sidecar full screen ([4f21cb2](https://github.com/IBM/kui/commit/4f21cb2)), closes [#294](https://github.com/IBM/kui/issues/294) [#721](https://github.com/IBM/kui/issues/721)
* switch about window to use a sidecar DOM ([90d3ad3](https://github.com/IBM/kui/commit/90d3ad3)), closes [#746](https://github.com/IBM/kui/issues/746)
* use editor more widely ([fe063de](https://github.com/IBM/kui/commit/fe063de)), closes [#532](https://github.com/IBM/kui/issues/532)
* **packages/app:** eliminate | repl spinner ([eb8e3f5](https://github.com/IBM/kui/commit/eb8e3f5)), closes [#698](https://github.com/IBM/kui/issues/698)
* **packages/app:** support declarative bottom stripe direct buttons ([efa0f8a](https://github.com/IBM/kui/commit/efa0f8a)), closes [#708](https://github.com/IBM/kui/issues/708)
* **plugin-k8s:** add conditions and containers tabs to kubectl get ([7ca6130](https://github.com/IBM/kui/commit/7ca6130)), closes [#517](https://github.com/IBM/kui/issues/517)
* **plugins/plugin-k8s:** initial istio and kiali support ([0072725](https://github.com/IBM/kui/commit/0072725)), closes [#644](https://github.com/IBM/kui/issues/644)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)





# 2.20.0 (2019-03-10)


### Bug Fixes

* **app:** fixes for --ui and headless to graphics transitions ([38c4e98](https://github.com/IBM/kui/commit/38c4e98)), closes [#408](https://github.com/IBM/kui/issues/408)
* **app:** opening Kui Electron Builds from macOS Finder adds additional argv -psn ([5ac8393](https://github.com/IBM/kui/commit/5ac8393)), closes [#382](https://github.com/IBM/kui/issues/382)
* **app:** table watch handler was installing a row-level onclick handler ([ecdd93b](https://github.com/IBM/kui/commit/ecdd93b)), closes [#388](https://github.com/IBM/kui/issues/388)
* **app:** tone down ENOENT while precompiling plugin model ([dc99c90](https://github.com/IBM/kui/commit/dc99c90)), closes [#375](https://github.com/IBM/kui/issues/375)
* **core:** another fix for error handling in plugin precompiler ([41c15db](https://github.com/IBM/kui/commit/41c15db)), closes [#306](https://github.com/IBM/kui/issues/306)
* **core:** confine global repl hack to test mode ([e37d933](https://github.com/IBM/kui/commit/e37d933)), closes [#212](https://github.com/IBM/kui/issues/212)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **k8s:** fix for kubectl status in headless mode ([072626f](https://github.com/IBM/kui/commit/072626f)), closes [#327](https://github.com/IBM/kui/issues/327)
* **packages/app:** adjust behavior of usage with sidecar open ([b5cff00](https://github.com/IBM/kui/commit/b5cff00)), closes [#580](https://github.com/IBM/kui/issues/580)
* **packages/app:** badge text renders off-center in firefox ([bb4f6c5](https://github.com/IBM/kui/commit/bb4f6c5)), closes [#659](https://github.com/IBM/kui/issues/659)
* **packages/app:** balloon-css tooltips should follow theme ([e8a73b9](https://github.com/IBM/kui/commit/e8a73b9)), closes [#663](https://github.com/IBM/kui/issues/663)
* **packages/app:** dark mode fixes for help display ([6df5c7d](https://github.com/IBM/kui/commit/6df5c7d)), closes [#539](https://github.com/IBM/kui/issues/539)
* **packages/app:** double-click on electron app doesn't give full size window ([4cde270](https://github.com/IBM/kui/commit/4cde270)), closes [#406](https://github.com/IBM/kui/issues/406)
* **packages/app:** eliminate remaining uses of tiny text in core table view ([7f18d9a](https://github.com/IBM/kui/commit/7f18d9a)), closes [#695](https://github.com/IBM/kui/issues/695)
* **packages/app:** fix for row striping contrast in sidecar tables ([c8f0231](https://github.com/IBM/kui/commit/c8f0231)), closes [#626](https://github.com/IBM/kui/issues/626)
* **packages/app:** fix for spinner going off-viewport ([0d095f0](https://github.com/IBM/kui/commit/0d095f0)), closes [#602](https://github.com/IBM/kui/issues/602)
* **packages/app:** fix incorrect data-status-code when command is not resolved by any plugin and add help suggestion to command-not-found error ([01a288e](https://github.com/IBM/kui/commit/01a288e)), closes [#680](https://github.com/IBM/kui/issues/680)
* **packages/app:** fix small vertical wiggle in table cells ([84ab2b4](https://github.com/IBM/kui/commit/84ab2b4)), closes [#711](https://github.com/IBM/kui/issues/711)
* **packages/app:** fix use of undefined css variable ([8e05681](https://github.com/IBM/kui/commit/8e05681)), closes [#633](https://github.com/IBM/kui/issues/633)
* **packages/app:** further improve multi-line table rendering ([807ce72](https://github.com/IBM/kui/commit/807ce72)), closes [#726](https://github.com/IBM/kui/issues/726)
* **packages/app:** height of first repl input changes after execution ([9a40f5e](https://github.com/IBM/kui/commit/9a40f5e)), closes [#706](https://github.com/IBM/kui/issues/706)
* **packages/app:** improve usage rendering for ascii lists and optional args ([eba6397](https://github.com/IBM/kui/commit/eba6397)), closes [#730](https://github.com/IBM/kui/issues/730) [#731](https://github.com/IBM/kui/issues/731)
* **packages/app:** increase contrast of yellow badge ([56a2375](https://github.com/IBM/kui/commit/56a2375)), closes [#550](https://github.com/IBM/kui/issues/550)
* **packages/app:** make annoying 'ok' invisible ([0a0f7f7](https://github.com/IBM/kui/commit/0a0f7f7)), closes [#597](https://github.com/IBM/kui/issues/597)
* **packages/app:** make sure badges don't overflow tables ([9ba1e89](https://github.com/IBM/kui/commit/9ba1e89)), closes [#704](https://github.com/IBM/kui/issues/704)
* **packages/app:** poor display of multi-line table cells ([6292e91](https://github.com/IBM/kui/commit/6292e91)), closes [#726](https://github.com/IBM/kui/issues/726)
* **packages/app:** remove table border transition effect ([ffc5bc0](https://github.com/IBM/kui/commit/ffc5bc0)), closes [#672](https://github.com/IBM/kui/issues/672)
* **packages/app:** streaming stdout should appear above (not next to) stderr ([2900492](https://github.com/IBM/kui/commit/2900492)), closes [#543](https://github.com/IBM/kui/issues/543)
* **packages/app:** table row selection does not pre-highlight on hover ([bba1f58](https://github.com/IBM/kui/commit/bba1f58)), closes [#670](https://github.com/IBM/kui/issues/670)
* **packages/app:** tighten spacing in repl UI ([2525ffa](https://github.com/IBM/kui/commit/2525ffa)), closes [#682](https://github.com/IBM/kui/issues/682)
* **packages/app:** tone down dark mode entity display ([c7ab2e8](https://github.com/IBM/kui/commit/c7ab2e8)), closes [#691](https://github.com/IBM/kui/issues/691)
* **packages/app:** try to keep the REPL prompt in focus ([665a953](https://github.com/IBM/kui/commit/665a953)), closes [#700](https://github.com/IBM/kui/issues/700)
* **packages/kui-builder:** minor dark mode border color tweak ([2d20fda](https://github.com/IBM/kui/commit/2d20fda)), closes [#561](https://github.com/IBM/kui/issues/561)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-k8s:** add "k" alias for "kubectl" ([4611ffe](https://github.com/IBM/kui/commit/4611ffe)), closes [#498](https://github.com/IBM/kui/issues/498)
* **plugin-k8s:** improve k8s in absence of plugin-openwhisk ([30f8a3a](https://github.com/IBM/kui/commit/30f8a3a)), closes [#457](https://github.com/IBM/kui/issues/457) [#458](https://github.com/IBM/kui/issues/458)
* **plugin-k8s:** k8s status enters infinite loop if resources absent ([e714c3f](https://github.com/IBM/kui/commit/e714c3f)), closes [#393](https://github.com/IBM/kui/issues/393)
* **plugin-openwhisk:** code highlight race bugs ([717b563](https://github.com/IBM/kui/commit/717b563)), closes [#475](https://github.com/IBM/kui/issues/475)
* **plugins-editor, plugins-openwhisk-editor-extensions:** fixes for lock/unlock and deploy n editor ([d0801a1](https://github.com/IBM/kui/commit/d0801a1)), closes [#472](https://github.com/IBM/kui/issues/472)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-core-support:** tab completion should support dot files ([507b86f](https://github.com/IBM/kui/commit/507b86f)), closes [#547](https://github.com/IBM/kui/issues/547)
* **plugins/plugin-editor:** improved dark mode for editor ([8a7fd03](https://github.com/IBM/kui/commit/8a7fd03)), closes [#533](https://github.com/IBM/kui/issues/533) [#530](https://github.com/IBM/kui/issues/530)
* **plugins/plugin-k8s:** kubectl logs -h does not display usage ([67f56fa](https://github.com/IBM/kui/commit/67f56fa)), closes [#571](https://github.com/IBM/kui/issues/571)
* **plugins/plugin-tutorial:** tutorials versus dark mode fixes ([8f842ab](https://github.com/IBM/kui/commit/8f842ab)), closes [#531](https://github.com/IBM/kui/issues/531)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* a few more tab tweaks ([8e31e5e](https://github.com/IBM/kui/commit/8e31e5e)), closes [#719](https://github.com/IBM/kui/issues/719)
* allow clients to take control over entity name table cell coloring ([77b99d9](https://github.com/IBM/kui/commit/77b99d9)), closes [#675](https://github.com/IBM/kui/issues/675)
* clicks on sidecar header etc. result in prompt losing focus ([2f78dfc](https://github.com/IBM/kui/commit/2f78dfc)), closes [#610](https://github.com/IBM/kui/issues/610)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* git diff should use side-by-side ([4fe215b](https://github.com/IBM/kui/commit/4fe215b)), closes [#617](https://github.com/IBM/kui/issues/617)
* git status UI fixes ([cf0f5cb](https://github.com/IBM/kui/commit/cf0f5cb)), closes [#702](https://github.com/IBM/kui/issues/702)
* handle custom clients that don't provide plugin-core-support ([eb10966](https://github.com/IBM/kui/commit/eb10966)), closes [#615](https://github.com/IBM/kui/issues/615)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* make improved use of sidecar header for k8s ([e9c34d0](https://github.com/IBM/kui/commit/e9c34d0)), closes [#735](https://github.com/IBM/kui/issues/735)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* screenshots of repl output should have padding ([1b89795](https://github.com/IBM/kui/commit/1b89795)), closes [#668](https://github.com/IBM/kui/issues/668)
* smoother transitions as themes switch ([1ad91c1](https://github.com/IBM/kui/commit/1ad91c1)), closes [#613](https://github.com/IBM/kui/issues/613)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)
* some tables overflowed due to buggy scrollable css ([23d3353](https://github.com/IBM/kui/commit/23d3353)), closes [#575](https://github.com/IBM/kui/issues/575)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* various small fixes for tab UI ([c41d388](https://github.com/IBM/kui/commit/c41d388)), closes [#717](https://github.com/IBM/kui/issues/717)


### Features

* add a few more themes ([92199d3](https://github.com/IBM/kui/commit/92199d3)), closes [#608](https://github.com/IBM/kui/issues/608)
* **plugins/plugin-wrk:** wrk plugin ([d39a331](https://github.com/IBM/kui/commit/d39a331)), closes [#624](https://github.com/IBM/kui/issues/624)
* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* sidecar full screen ([4f21cb2](https://github.com/IBM/kui/commit/4f21cb2)), closes [#294](https://github.com/IBM/kui/issues/294) [#721](https://github.com/IBM/kui/issues/721)
* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* **packages/app:** eliminate | repl spinner ([eb8e3f5](https://github.com/IBM/kui/commit/eb8e3f5)), closes [#698](https://github.com/IBM/kui/issues/698)
* **packages/app:** support declarative bottom stripe direct buttons ([efa0f8a](https://github.com/IBM/kui/commit/efa0f8a)), closes [#708](https://github.com/IBM/kui/issues/708)
* **plugin-k8s:** add conditions and containers tabs to kubectl get ([7ca6130](https://github.com/IBM/kui/commit/7ca6130)), closes [#517](https://github.com/IBM/kui/issues/517)
* **plugins/plugin-k8s:** initial istio and kiali support ([0072725](https://github.com/IBM/kui/commit/0072725)), closes [#644](https://github.com/IBM/kui/issues/644)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)
* use editor more widely ([fe063de](https://github.com/IBM/kui/commit/fe063de)), closes [#532](https://github.com/IBM/kui/issues/532)





# 2.19.0 (2019-03-09)


### Bug Fixes

* **app:** fixes for --ui and headless to graphics transitions ([38c4e98](https://github.com/IBM/kui/commit/38c4e98)), closes [#408](https://github.com/IBM/kui/issues/408)
* **app:** opening Kui Electron Builds from macOS Finder adds additional argv -psn ([5ac8393](https://github.com/IBM/kui/commit/5ac8393)), closes [#382](https://github.com/IBM/kui/issues/382)
* **app:** table watch handler was installing a row-level onclick handler ([ecdd93b](https://github.com/IBM/kui/commit/ecdd93b)), closes [#388](https://github.com/IBM/kui/issues/388)
* **app:** tone down ENOENT while precompiling plugin model ([dc99c90](https://github.com/IBM/kui/commit/dc99c90)), closes [#375](https://github.com/IBM/kui/issues/375)
* **core:** another fix for error handling in plugin precompiler ([41c15db](https://github.com/IBM/kui/commit/41c15db)), closes [#306](https://github.com/IBM/kui/issues/306)
* **core:** confine global repl hack to test mode ([e37d933](https://github.com/IBM/kui/commit/e37d933)), closes [#212](https://github.com/IBM/kui/issues/212)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **k8s:** fix for kubectl status in headless mode ([072626f](https://github.com/IBM/kui/commit/072626f)), closes [#327](https://github.com/IBM/kui/issues/327)
* **packages/app:** adjust behavior of usage with sidecar open ([b5cff00](https://github.com/IBM/kui/commit/b5cff00)), closes [#580](https://github.com/IBM/kui/issues/580)
* **packages/app:** badge text renders off-center in firefox ([bb4f6c5](https://github.com/IBM/kui/commit/bb4f6c5)), closes [#659](https://github.com/IBM/kui/issues/659)
* **packages/app:** balloon-css tooltips should follow theme ([e8a73b9](https://github.com/IBM/kui/commit/e8a73b9)), closes [#663](https://github.com/IBM/kui/issues/663)
* **packages/app:** dark mode fixes for help display ([6df5c7d](https://github.com/IBM/kui/commit/6df5c7d)), closes [#539](https://github.com/IBM/kui/issues/539)
* **packages/app:** double-click on electron app doesn't give full size window ([4cde270](https://github.com/IBM/kui/commit/4cde270)), closes [#406](https://github.com/IBM/kui/issues/406)
* **packages/app:** eliminate remaining uses of tiny text in core table view ([7f18d9a](https://github.com/IBM/kui/commit/7f18d9a)), closes [#695](https://github.com/IBM/kui/issues/695)
* **packages/app:** fix for row striping contrast in sidecar tables ([c8f0231](https://github.com/IBM/kui/commit/c8f0231)), closes [#626](https://github.com/IBM/kui/issues/626)
* **packages/app:** fix for spinner going off-viewport ([0d095f0](https://github.com/IBM/kui/commit/0d095f0)), closes [#602](https://github.com/IBM/kui/issues/602)
* **packages/app:** fix incorrect data-status-code when command is not resolved by any plugin and add help suggestion to command-not-found error ([01a288e](https://github.com/IBM/kui/commit/01a288e)), closes [#680](https://github.com/IBM/kui/issues/680)
* **packages/app:** fix small vertical wiggle in table cells ([84ab2b4](https://github.com/IBM/kui/commit/84ab2b4)), closes [#711](https://github.com/IBM/kui/issues/711)
* **packages/app:** fix use of undefined css variable ([8e05681](https://github.com/IBM/kui/commit/8e05681)), closes [#633](https://github.com/IBM/kui/issues/633)
* **packages/app:** height of first repl input changes after execution ([9a40f5e](https://github.com/IBM/kui/commit/9a40f5e)), closes [#706](https://github.com/IBM/kui/issues/706)
* **packages/app:** increase contrast of yellow badge ([56a2375](https://github.com/IBM/kui/commit/56a2375)), closes [#550](https://github.com/IBM/kui/issues/550)
* **packages/app:** make annoying 'ok' invisible ([0a0f7f7](https://github.com/IBM/kui/commit/0a0f7f7)), closes [#597](https://github.com/IBM/kui/issues/597)
* **packages/app:** make sure badges don't overflow tables ([9ba1e89](https://github.com/IBM/kui/commit/9ba1e89)), closes [#704](https://github.com/IBM/kui/issues/704)
* **packages/app:** remove table border transition effect ([ffc5bc0](https://github.com/IBM/kui/commit/ffc5bc0)), closes [#672](https://github.com/IBM/kui/issues/672)
* **packages/app:** streaming stdout should appear above (not next to) stderr ([2900492](https://github.com/IBM/kui/commit/2900492)), closes [#543](https://github.com/IBM/kui/issues/543)
* **packages/app:** table row selection does not pre-highlight on hover ([bba1f58](https://github.com/IBM/kui/commit/bba1f58)), closes [#670](https://github.com/IBM/kui/issues/670)
* **packages/app:** tighten spacing in repl UI ([2525ffa](https://github.com/IBM/kui/commit/2525ffa)), closes [#682](https://github.com/IBM/kui/issues/682)
* **packages/app:** tone down dark mode entity display ([c7ab2e8](https://github.com/IBM/kui/commit/c7ab2e8)), closes [#691](https://github.com/IBM/kui/issues/691)
* **packages/app:** try to keep the REPL prompt in focus ([665a953](https://github.com/IBM/kui/commit/665a953)), closes [#700](https://github.com/IBM/kui/issues/700)
* **packages/kui-builder:** minor dark mode border color tweak ([2d20fda](https://github.com/IBM/kui/commit/2d20fda)), closes [#561](https://github.com/IBM/kui/issues/561)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-k8s:** add "k" alias for "kubectl" ([4611ffe](https://github.com/IBM/kui/commit/4611ffe)), closes [#498](https://github.com/IBM/kui/issues/498)
* **plugin-k8s:** improve k8s in absence of plugin-openwhisk ([30f8a3a](https://github.com/IBM/kui/commit/30f8a3a)), closes [#457](https://github.com/IBM/kui/issues/457) [#458](https://github.com/IBM/kui/issues/458)
* **plugin-k8s:** k8s status enters infinite loop if resources absent ([e714c3f](https://github.com/IBM/kui/commit/e714c3f)), closes [#393](https://github.com/IBM/kui/issues/393)
* **plugin-openwhisk:** code highlight race bugs ([717b563](https://github.com/IBM/kui/commit/717b563)), closes [#475](https://github.com/IBM/kui/issues/475)
* **plugins-editor, plugins-openwhisk-editor-extensions:** fixes for lock/unlock and deploy n editor ([d0801a1](https://github.com/IBM/kui/commit/d0801a1)), closes [#472](https://github.com/IBM/kui/issues/472)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-core-support:** tab completion should support dot files ([507b86f](https://github.com/IBM/kui/commit/507b86f)), closes [#547](https://github.com/IBM/kui/issues/547)
* **plugins/plugin-editor:** improved dark mode for editor ([8a7fd03](https://github.com/IBM/kui/commit/8a7fd03)), closes [#533](https://github.com/IBM/kui/issues/533) [#530](https://github.com/IBM/kui/issues/530)
* **plugins/plugin-k8s:** kubectl logs -h does not display usage ([67f56fa](https://github.com/IBM/kui/commit/67f56fa)), closes [#571](https://github.com/IBM/kui/issues/571)
* **plugins/plugin-tutorial:** tutorials versus dark mode fixes ([8f842ab](https://github.com/IBM/kui/commit/8f842ab)), closes [#531](https://github.com/IBM/kui/issues/531)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* a few more tab tweaks ([8e31e5e](https://github.com/IBM/kui/commit/8e31e5e)), closes [#719](https://github.com/IBM/kui/issues/719)
* allow clients to take control over entity name table cell coloring ([77b99d9](https://github.com/IBM/kui/commit/77b99d9)), closes [#675](https://github.com/IBM/kui/issues/675)
* clicks on sidecar header etc. result in prompt losing focus ([2f78dfc](https://github.com/IBM/kui/commit/2f78dfc)), closes [#610](https://github.com/IBM/kui/issues/610)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* git diff should use side-by-side ([4fe215b](https://github.com/IBM/kui/commit/4fe215b)), closes [#617](https://github.com/IBM/kui/issues/617)
* git status UI fixes ([cf0f5cb](https://github.com/IBM/kui/commit/cf0f5cb)), closes [#702](https://github.com/IBM/kui/issues/702)
* handle custom clients that don't provide plugin-core-support ([eb10966](https://github.com/IBM/kui/commit/eb10966)), closes [#615](https://github.com/IBM/kui/issues/615)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)
* screenshots of repl output should have padding ([1b89795](https://github.com/IBM/kui/commit/1b89795)), closes [#668](https://github.com/IBM/kui/issues/668)
* smoother transitions as themes switch ([1ad91c1](https://github.com/IBM/kui/commit/1ad91c1)), closes [#613](https://github.com/IBM/kui/issues/613)
* some tables overflowed due to buggy scrollable css ([23d3353](https://github.com/IBM/kui/commit/23d3353)), closes [#575](https://github.com/IBM/kui/issues/575)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* various small fixes for tab UI ([c41d388](https://github.com/IBM/kui/commit/c41d388)), closes [#717](https://github.com/IBM/kui/issues/717)


### Features

* add a few more themes ([92199d3](https://github.com/IBM/kui/commit/92199d3)), closes [#608](https://github.com/IBM/kui/issues/608)
* **plugins/plugin-wrk:** wrk plugin ([d39a331](https://github.com/IBM/kui/commit/d39a331)), closes [#624](https://github.com/IBM/kui/issues/624)
* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* sidecar full screen ([4f21cb2](https://github.com/IBM/kui/commit/4f21cb2)), closes [#294](https://github.com/IBM/kui/issues/294) [#721](https://github.com/IBM/kui/issues/721)
* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* **packages/app:** eliminate | repl spinner ([eb8e3f5](https://github.com/IBM/kui/commit/eb8e3f5)), closes [#698](https://github.com/IBM/kui/issues/698)
* **packages/app:** support declarative bottom stripe direct buttons ([efa0f8a](https://github.com/IBM/kui/commit/efa0f8a)), closes [#708](https://github.com/IBM/kui/issues/708)
* **plugin-k8s:** add conditions and containers tabs to kubectl get ([7ca6130](https://github.com/IBM/kui/commit/7ca6130)), closes [#517](https://github.com/IBM/kui/issues/517)
* **plugins/plugin-k8s:** initial istio and kiali support ([0072725](https://github.com/IBM/kui/commit/0072725)), closes [#644](https://github.com/IBM/kui/issues/644)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)
* use editor more widely ([fe063de](https://github.com/IBM/kui/commit/fe063de)), closes [#532](https://github.com/IBM/kui/issues/532)





# 2.18.0 (2019-03-08)


### Bug Fixes

* **app:** fixes for --ui and headless to graphics transitions ([38c4e98](https://github.com/IBM/kui/commit/38c4e98)), closes [#408](https://github.com/IBM/kui/issues/408)
* **app:** opening Kui Electron Builds from macOS Finder adds additional argv -psn ([5ac8393](https://github.com/IBM/kui/commit/5ac8393)), closes [#382](https://github.com/IBM/kui/issues/382)
* **app:** table watch handler was installing a row-level onclick handler ([ecdd93b](https://github.com/IBM/kui/commit/ecdd93b)), closes [#388](https://github.com/IBM/kui/issues/388)
* **app:** tone down ENOENT while precompiling plugin model ([dc99c90](https://github.com/IBM/kui/commit/dc99c90)), closes [#375](https://github.com/IBM/kui/issues/375)
* **core:** another fix for error handling in plugin precompiler ([41c15db](https://github.com/IBM/kui/commit/41c15db)), closes [#306](https://github.com/IBM/kui/issues/306)
* **core:** confine global repl hack to test mode ([e37d933](https://github.com/IBM/kui/commit/e37d933)), closes [#212](https://github.com/IBM/kui/issues/212)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **k8s:** fix for kubectl status in headless mode ([072626f](https://github.com/IBM/kui/commit/072626f)), closes [#327](https://github.com/IBM/kui/issues/327)
* **packages/app:** adjust behavior of usage with sidecar open ([b5cff00](https://github.com/IBM/kui/commit/b5cff00)), closes [#580](https://github.com/IBM/kui/issues/580)
* **packages/app:** badge text renders off-center in firefox ([bb4f6c5](https://github.com/IBM/kui/commit/bb4f6c5)), closes [#659](https://github.com/IBM/kui/issues/659)
* **packages/app:** balloon-css tooltips should follow theme ([e8a73b9](https://github.com/IBM/kui/commit/e8a73b9)), closes [#663](https://github.com/IBM/kui/issues/663)
* **packages/app:** dark mode fixes for help display ([6df5c7d](https://github.com/IBM/kui/commit/6df5c7d)), closes [#539](https://github.com/IBM/kui/issues/539)
* **packages/app:** double-click on electron app doesn't give full size window ([4cde270](https://github.com/IBM/kui/commit/4cde270)), closes [#406](https://github.com/IBM/kui/issues/406)
* **packages/app:** fix for row striping contrast in sidecar tables ([c8f0231](https://github.com/IBM/kui/commit/c8f0231)), closes [#626](https://github.com/IBM/kui/issues/626)
* **packages/app:** fix for spinner going off-viewport ([0d095f0](https://github.com/IBM/kui/commit/0d095f0)), closes [#602](https://github.com/IBM/kui/issues/602)
* **packages/app:** fix use of undefined css variable ([8e05681](https://github.com/IBM/kui/commit/8e05681)), closes [#633](https://github.com/IBM/kui/issues/633)
* **packages/app:** increase contrast of yellow badge ([56a2375](https://github.com/IBM/kui/commit/56a2375)), closes [#550](https://github.com/IBM/kui/issues/550)
* **packages/app:** make annoying 'ok' invisible ([0a0f7f7](https://github.com/IBM/kui/commit/0a0f7f7)), closes [#597](https://github.com/IBM/kui/issues/597)
* **packages/app:** remove table border transition effect ([ffc5bc0](https://github.com/IBM/kui/commit/ffc5bc0)), closes [#672](https://github.com/IBM/kui/issues/672)
* **packages/app:** streaming stdout should appear above (not next to) stderr ([2900492](https://github.com/IBM/kui/commit/2900492)), closes [#543](https://github.com/IBM/kui/issues/543)
* **packages/app:** table row selection does not pre-highlight on hover ([bba1f58](https://github.com/IBM/kui/commit/bba1f58)), closes [#670](https://github.com/IBM/kui/issues/670)
* **packages/app:** tighten spacing in repl UI ([2525ffa](https://github.com/IBM/kui/commit/2525ffa)), closes [#682](https://github.com/IBM/kui/issues/682)
* **packages/app:** tone down dark mode entity display ([c7ab2e8](https://github.com/IBM/kui/commit/c7ab2e8)), closes [#691](https://github.com/IBM/kui/issues/691)
* **packages/kui-builder:** minor dark mode border color tweak ([2d20fda](https://github.com/IBM/kui/commit/2d20fda)), closes [#561](https://github.com/IBM/kui/issues/561)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-k8s:** add "k" alias for "kubectl" ([4611ffe](https://github.com/IBM/kui/commit/4611ffe)), closes [#498](https://github.com/IBM/kui/issues/498)
* **plugin-k8s:** improve k8s in absence of plugin-openwhisk ([30f8a3a](https://github.com/IBM/kui/commit/30f8a3a)), closes [#457](https://github.com/IBM/kui/issues/457) [#458](https://github.com/IBM/kui/issues/458)
* **plugin-k8s:** k8s status enters infinite loop if resources absent ([e714c3f](https://github.com/IBM/kui/commit/e714c3f)), closes [#393](https://github.com/IBM/kui/issues/393)
* **plugin-openwhisk:** code highlight race bugs ([717b563](https://github.com/IBM/kui/commit/717b563)), closes [#475](https://github.com/IBM/kui/issues/475)
* **plugins-editor, plugins-openwhisk-editor-extensions:** fixes for lock/unlock and deploy n editor ([d0801a1](https://github.com/IBM/kui/commit/d0801a1)), closes [#472](https://github.com/IBM/kui/issues/472)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-core-support:** tab completion should support dot files ([507b86f](https://github.com/IBM/kui/commit/507b86f)), closes [#547](https://github.com/IBM/kui/issues/547)
* **plugins/plugin-editor:** improved dark mode for editor ([8a7fd03](https://github.com/IBM/kui/commit/8a7fd03)), closes [#533](https://github.com/IBM/kui/issues/533) [#530](https://github.com/IBM/kui/issues/530)
* **plugins/plugin-k8s:** kubectl logs -h does not display usage ([67f56fa](https://github.com/IBM/kui/commit/67f56fa)), closes [#571](https://github.com/IBM/kui/issues/571)
* **plugins/plugin-tutorial:** tutorials versus dark mode fixes ([8f842ab](https://github.com/IBM/kui/commit/8f842ab)), closes [#531](https://github.com/IBM/kui/issues/531)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* allow clients to take control over entity name table cell coloring ([77b99d9](https://github.com/IBM/kui/commit/77b99d9)), closes [#675](https://github.com/IBM/kui/issues/675)
* clicks on sidecar header etc. result in prompt losing focus ([2f78dfc](https://github.com/IBM/kui/commit/2f78dfc)), closes [#610](https://github.com/IBM/kui/issues/610)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* git diff should use side-by-side ([4fe215b](https://github.com/IBM/kui/commit/4fe215b)), closes [#617](https://github.com/IBM/kui/issues/617)
* handle custom clients that don't provide plugin-core-support ([eb10966](https://github.com/IBM/kui/commit/eb10966)), closes [#615](https://github.com/IBM/kui/issues/615)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* screenshots of repl output should have padding ([1b89795](https://github.com/IBM/kui/commit/1b89795)), closes [#668](https://github.com/IBM/kui/issues/668)
* smoother transitions as themes switch ([1ad91c1](https://github.com/IBM/kui/commit/1ad91c1)), closes [#613](https://github.com/IBM/kui/issues/613)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)
* some tables overflowed due to buggy scrollable css ([23d3353](https://github.com/IBM/kui/commit/23d3353)), closes [#575](https://github.com/IBM/kui/issues/575)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* **plugin-k8s:** add conditions and containers tabs to kubectl get ([7ca6130](https://github.com/IBM/kui/commit/7ca6130)), closes [#517](https://github.com/IBM/kui/issues/517)
* add a few more themes ([92199d3](https://github.com/IBM/kui/commit/92199d3)), closes [#608](https://github.com/IBM/kui/issues/608)
* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **plugins/plugin-k8s:** initial istio and kiali support ([0072725](https://github.com/IBM/kui/commit/0072725)), closes [#644](https://github.com/IBM/kui/issues/644)
* **plugins/plugin-wrk:** wrk plugin ([d39a331](https://github.com/IBM/kui/commit/d39a331)), closes [#624](https://github.com/IBM/kui/issues/624)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)
* use editor more widely ([fe063de](https://github.com/IBM/kui/commit/fe063de)), closes [#532](https://github.com/IBM/kui/issues/532)





# 2.17.0 (2019-03-06)


### Bug Fixes

* **app:** fixes for --ui and headless to graphics transitions ([38c4e98](https://github.com/IBM/kui/commit/38c4e98)), closes [#408](https://github.com/IBM/kui/issues/408)
* **app:** opening Kui Electron Builds from macOS Finder adds additional argv -psn ([5ac8393](https://github.com/IBM/kui/commit/5ac8393)), closes [#382](https://github.com/IBM/kui/issues/382)
* **app:** table watch handler was installing a row-level onclick handler ([ecdd93b](https://github.com/IBM/kui/commit/ecdd93b)), closes [#388](https://github.com/IBM/kui/issues/388)
* **app:** tone down ENOENT while precompiling plugin model ([dc99c90](https://github.com/IBM/kui/commit/dc99c90)), closes [#375](https://github.com/IBM/kui/issues/375)
* **core:** another fix for error handling in plugin precompiler ([41c15db](https://github.com/IBM/kui/commit/41c15db)), closes [#306](https://github.com/IBM/kui/issues/306)
* **core:** confine global repl hack to test mode ([e37d933](https://github.com/IBM/kui/commit/e37d933)), closes [#212](https://github.com/IBM/kui/issues/212)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **k8s:** fix for kubectl status in headless mode ([072626f](https://github.com/IBM/kui/commit/072626f)), closes [#327](https://github.com/IBM/kui/issues/327)
* **packages/app:** adjust behavior of usage with sidecar open ([b5cff00](https://github.com/IBM/kui/commit/b5cff00)), closes [#580](https://github.com/IBM/kui/issues/580)
* **packages/app:** dark mode fixes for help display ([6df5c7d](https://github.com/IBM/kui/commit/6df5c7d)), closes [#539](https://github.com/IBM/kui/issues/539)
* **packages/app:** fix for row striping contrast in sidecar tables ([c8f0231](https://github.com/IBM/kui/commit/c8f0231)), closes [#626](https://github.com/IBM/kui/issues/626)
* **packages/app:** fix for spinner going off-viewport ([0d095f0](https://github.com/IBM/kui/commit/0d095f0)), closes [#602](https://github.com/IBM/kui/issues/602)
* **packages/app:** fix use of undefined css variable ([8e05681](https://github.com/IBM/kui/commit/8e05681)), closes [#633](https://github.com/IBM/kui/issues/633)
* **packages/app:** increase contrast of yellow badge ([56a2375](https://github.com/IBM/kui/commit/56a2375)), closes [#550](https://github.com/IBM/kui/issues/550)
* **packages/app:** make annoying 'ok' invisible ([0a0f7f7](https://github.com/IBM/kui/commit/0a0f7f7)), closes [#597](https://github.com/IBM/kui/issues/597)
* **packages/app:** streaming stdout should appear above (not next to) stderr ([2900492](https://github.com/IBM/kui/commit/2900492)), closes [#543](https://github.com/IBM/kui/issues/543)
* **packages/kui-builder:** minor dark mode border color tweak ([2d20fda](https://github.com/IBM/kui/commit/2d20fda)), closes [#561](https://github.com/IBM/kui/issues/561)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-k8s:** add "k" alias for "kubectl" ([4611ffe](https://github.com/IBM/kui/commit/4611ffe)), closes [#498](https://github.com/IBM/kui/issues/498)
* **plugin-k8s:** improve k8s in absence of plugin-openwhisk ([30f8a3a](https://github.com/IBM/kui/commit/30f8a3a)), closes [#457](https://github.com/IBM/kui/issues/457) [#458](https://github.com/IBM/kui/issues/458)
* **plugin-k8s:** k8s status enters infinite loop if resources absent ([e714c3f](https://github.com/IBM/kui/commit/e714c3f)), closes [#393](https://github.com/IBM/kui/issues/393)
* **plugin-openwhisk:** code highlight race bugs ([717b563](https://github.com/IBM/kui/commit/717b563)), closes [#475](https://github.com/IBM/kui/issues/475)
* **plugins-editor, plugins-openwhisk-editor-extensions:** fixes for lock/unlock and deploy n editor ([d0801a1](https://github.com/IBM/kui/commit/d0801a1)), closes [#472](https://github.com/IBM/kui/issues/472)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-core-support:** tab completion should support dot files ([507b86f](https://github.com/IBM/kui/commit/507b86f)), closes [#547](https://github.com/IBM/kui/issues/547)
* **plugins/plugin-editor:** improved dark mode for editor ([8a7fd03](https://github.com/IBM/kui/commit/8a7fd03)), closes [#533](https://github.com/IBM/kui/issues/533) [#530](https://github.com/IBM/kui/issues/530)
* **plugins/plugin-tutorial:** tutorials versus dark mode fixes ([8f842ab](https://github.com/IBM/kui/commit/8f842ab)), closes [#531](https://github.com/IBM/kui/issues/531)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* smoother transitions as themes switch ([1ad91c1](https://github.com/IBM/kui/commit/1ad91c1)), closes [#613](https://github.com/IBM/kui/issues/613)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)
* clicks on sidecar header etc. result in prompt losing focus ([2f78dfc](https://github.com/IBM/kui/commit/2f78dfc)), closes [#610](https://github.com/IBM/kui/issues/610)
* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* git diff should use side-by-side ([4fe215b](https://github.com/IBM/kui/commit/4fe215b)), closes [#617](https://github.com/IBM/kui/issues/617)
* handle custom clients that don't provide plugin-core-support ([eb10966](https://github.com/IBM/kui/commit/eb10966)), closes [#615](https://github.com/IBM/kui/issues/615)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* some tables overflowed due to buggy scrollable css ([23d3353](https://github.com/IBM/kui/commit/23d3353)), closes [#575](https://github.com/IBM/kui/issues/575)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* **plugin-k8s:** add conditions and containers tabs to kubectl get ([7ca6130](https://github.com/IBM/kui/commit/7ca6130)), closes [#517](https://github.com/IBM/kui/issues/517)
* add a few more themes ([92199d3](https://github.com/IBM/kui/commit/92199d3)), closes [#608](https://github.com/IBM/kui/issues/608)
* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **plugins/plugin-k8s:** initial istio and kiali support ([0072725](https://github.com/IBM/kui/commit/0072725)), closes [#644](https://github.com/IBM/kui/issues/644)
* **plugins/plugin-wrk:** wrk plugin ([d39a331](https://github.com/IBM/kui/commit/d39a331)), closes [#624](https://github.com/IBM/kui/issues/624)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)





# 2.16.0 (2019-03-06)


### Bug Fixes

* **app:** fixes for --ui and headless to graphics transitions ([38c4e98](https://github.com/IBM/kui/commit/38c4e98)), closes [#408](https://github.com/IBM/kui/issues/408)
* **app:** opening Kui Electron Builds from macOS Finder adds additional argv -psn ([5ac8393](https://github.com/IBM/kui/commit/5ac8393)), closes [#382](https://github.com/IBM/kui/issues/382)
* **app:** table watch handler was installing a row-level onclick handler ([ecdd93b](https://github.com/IBM/kui/commit/ecdd93b)), closes [#388](https://github.com/IBM/kui/issues/388)
* **app:** tone down ENOENT while precompiling plugin model ([dc99c90](https://github.com/IBM/kui/commit/dc99c90)), closes [#375](https://github.com/IBM/kui/issues/375)
* **core:** another fix for error handling in plugin precompiler ([41c15db](https://github.com/IBM/kui/commit/41c15db)), closes [#306](https://github.com/IBM/kui/issues/306)
* **core:** confine global repl hack to test mode ([e37d933](https://github.com/IBM/kui/commit/e37d933)), closes [#212](https://github.com/IBM/kui/issues/212)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **k8s:** fix for kubectl status in headless mode ([072626f](https://github.com/IBM/kui/commit/072626f)), closes [#327](https://github.com/IBM/kui/issues/327)
* **packages/app:** adjust behavior of usage with sidecar open ([b5cff00](https://github.com/IBM/kui/commit/b5cff00)), closes [#580](https://github.com/IBM/kui/issues/580)
* **packages/app:** dark mode fixes for help display ([6df5c7d](https://github.com/IBM/kui/commit/6df5c7d)), closes [#539](https://github.com/IBM/kui/issues/539)
* **packages/app:** fix for row striping contrast in sidecar tables ([c8f0231](https://github.com/IBM/kui/commit/c8f0231)), closes [#626](https://github.com/IBM/kui/issues/626)
* **packages/app:** fix for spinner going off-viewport ([0d095f0](https://github.com/IBM/kui/commit/0d095f0)), closes [#602](https://github.com/IBM/kui/issues/602)
* **packages/app:** fix use of undefined css variable ([8e05681](https://github.com/IBM/kui/commit/8e05681)), closes [#633](https://github.com/IBM/kui/issues/633)
* **packages/app:** increase contrast of yellow badge ([56a2375](https://github.com/IBM/kui/commit/56a2375)), closes [#550](https://github.com/IBM/kui/issues/550)
* **packages/app:** make annoying 'ok' invisible ([0a0f7f7](https://github.com/IBM/kui/commit/0a0f7f7)), closes [#597](https://github.com/IBM/kui/issues/597)
* **packages/app:** streaming stdout should appear above (not next to) stderr ([2900492](https://github.com/IBM/kui/commit/2900492)), closes [#543](https://github.com/IBM/kui/issues/543)
* **packages/kui-builder:** minor dark mode border color tweak ([2d20fda](https://github.com/IBM/kui/commit/2d20fda)), closes [#561](https://github.com/IBM/kui/issues/561)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-k8s:** add "k" alias for "kubectl" ([4611ffe](https://github.com/IBM/kui/commit/4611ffe)), closes [#498](https://github.com/IBM/kui/issues/498)
* **plugin-k8s:** improve k8s in absence of plugin-openwhisk ([30f8a3a](https://github.com/IBM/kui/commit/30f8a3a)), closes [#457](https://github.com/IBM/kui/issues/457) [#458](https://github.com/IBM/kui/issues/458)
* **plugin-k8s:** k8s status enters infinite loop if resources absent ([e714c3f](https://github.com/IBM/kui/commit/e714c3f)), closes [#393](https://github.com/IBM/kui/issues/393)
* **plugin-openwhisk:** code highlight race bugs ([717b563](https://github.com/IBM/kui/commit/717b563)), closes [#475](https://github.com/IBM/kui/issues/475)
* **plugins-editor, plugins-openwhisk-editor-extensions:** fixes for lock/unlock and deploy n editor ([d0801a1](https://github.com/IBM/kui/commit/d0801a1)), closes [#472](https://github.com/IBM/kui/issues/472)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-core-support:** tab completion should support dot files ([507b86f](https://github.com/IBM/kui/commit/507b86f)), closes [#547](https://github.com/IBM/kui/issues/547)
* **plugins/plugin-editor:** improved dark mode for editor ([8a7fd03](https://github.com/IBM/kui/commit/8a7fd03)), closes [#533](https://github.com/IBM/kui/issues/533) [#530](https://github.com/IBM/kui/issues/530)
* **plugins/plugin-tutorial:** tutorials versus dark mode fixes ([8f842ab](https://github.com/IBM/kui/commit/8f842ab)), closes [#531](https://github.com/IBM/kui/issues/531)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* smoother transitions as themes switch ([1ad91c1](https://github.com/IBM/kui/commit/1ad91c1)), closes [#613](https://github.com/IBM/kui/issues/613)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)
* clicks on sidecar header etc. result in prompt losing focus ([2f78dfc](https://github.com/IBM/kui/commit/2f78dfc)), closes [#610](https://github.com/IBM/kui/issues/610)
* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* git diff should use side-by-side ([4fe215b](https://github.com/IBM/kui/commit/4fe215b)), closes [#617](https://github.com/IBM/kui/issues/617)
* handle custom clients that don't provide plugin-core-support ([eb10966](https://github.com/IBM/kui/commit/eb10966)), closes [#615](https://github.com/IBM/kui/issues/615)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* some tables overflowed due to buggy scrollable css ([23d3353](https://github.com/IBM/kui/commit/23d3353)), closes [#575](https://github.com/IBM/kui/issues/575)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* **plugin-k8s:** add conditions and containers tabs to kubectl get ([7ca6130](https://github.com/IBM/kui/commit/7ca6130)), closes [#517](https://github.com/IBM/kui/issues/517)
* add a few more themes ([92199d3](https://github.com/IBM/kui/commit/92199d3)), closes [#608](https://github.com/IBM/kui/issues/608)
* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **plugins/plugin-k8s:** initial istio and kiali support ([0072725](https://github.com/IBM/kui/commit/0072725)), closes [#644](https://github.com/IBM/kui/issues/644)
* **plugins/plugin-wrk:** wrk plugin ([d39a331](https://github.com/IBM/kui/commit/d39a331)), closes [#624](https://github.com/IBM/kui/issues/624)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)





# 2.15.0 (2019-03-06)


### Bug Fixes

* **app:** fixes for --ui and headless to graphics transitions ([38c4e98](https://github.com/IBM/kui/commit/38c4e98)), closes [#408](https://github.com/IBM/kui/issues/408)
* **app:** opening Kui Electron Builds from macOS Finder adds additional argv -psn ([5ac8393](https://github.com/IBM/kui/commit/5ac8393)), closes [#382](https://github.com/IBM/kui/issues/382)
* **app:** table watch handler was installing a row-level onclick handler ([ecdd93b](https://github.com/IBM/kui/commit/ecdd93b)), closes [#388](https://github.com/IBM/kui/issues/388)
* **app:** tone down ENOENT while precompiling plugin model ([dc99c90](https://github.com/IBM/kui/commit/dc99c90)), closes [#375](https://github.com/IBM/kui/issues/375)
* **core:** another fix for error handling in plugin precompiler ([41c15db](https://github.com/IBM/kui/commit/41c15db)), closes [#306](https://github.com/IBM/kui/issues/306)
* **core:** confine global repl hack to test mode ([e37d933](https://github.com/IBM/kui/commit/e37d933)), closes [#212](https://github.com/IBM/kui/issues/212)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **k8s:** fix for kubectl status in headless mode ([072626f](https://github.com/IBM/kui/commit/072626f)), closes [#327](https://github.com/IBM/kui/issues/327)
* **packages/app:** adjust behavior of usage with sidecar open ([b5cff00](https://github.com/IBM/kui/commit/b5cff00)), closes [#580](https://github.com/IBM/kui/issues/580)
* **packages/app:** dark mode fixes for help display ([6df5c7d](https://github.com/IBM/kui/commit/6df5c7d)), closes [#539](https://github.com/IBM/kui/issues/539)
* **packages/app:** fix for row striping contrast in sidecar tables ([c8f0231](https://github.com/IBM/kui/commit/c8f0231)), closes [#626](https://github.com/IBM/kui/issues/626)
* **packages/app:** fix for spinner going off-viewport ([0d095f0](https://github.com/IBM/kui/commit/0d095f0)), closes [#602](https://github.com/IBM/kui/issues/602)
* **packages/app:** fix use of undefined css variable ([8e05681](https://github.com/IBM/kui/commit/8e05681)), closes [#633](https://github.com/IBM/kui/issues/633)
* **packages/app:** increase contrast of yellow badge ([56a2375](https://github.com/IBM/kui/commit/56a2375)), closes [#550](https://github.com/IBM/kui/issues/550)
* **packages/app:** make annoying 'ok' invisible ([0a0f7f7](https://github.com/IBM/kui/commit/0a0f7f7)), closes [#597](https://github.com/IBM/kui/issues/597)
* **packages/app:** streaming stdout should appear above (not next to) stderr ([2900492](https://github.com/IBM/kui/commit/2900492)), closes [#543](https://github.com/IBM/kui/issues/543)
* **packages/kui-builder:** minor dark mode border color tweak ([2d20fda](https://github.com/IBM/kui/commit/2d20fda)), closes [#561](https://github.com/IBM/kui/issues/561)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-k8s:** add "k" alias for "kubectl" ([4611ffe](https://github.com/IBM/kui/commit/4611ffe)), closes [#498](https://github.com/IBM/kui/issues/498)
* **plugin-k8s:** improve k8s in absence of plugin-openwhisk ([30f8a3a](https://github.com/IBM/kui/commit/30f8a3a)), closes [#457](https://github.com/IBM/kui/issues/457) [#458](https://github.com/IBM/kui/issues/458)
* **plugin-k8s:** k8s status enters infinite loop if resources absent ([e714c3f](https://github.com/IBM/kui/commit/e714c3f)), closes [#393](https://github.com/IBM/kui/issues/393)
* **plugin-openwhisk:** code highlight race bugs ([717b563](https://github.com/IBM/kui/commit/717b563)), closes [#475](https://github.com/IBM/kui/issues/475)
* **plugins-editor, plugins-openwhisk-editor-extensions:** fixes for lock/unlock and deploy n editor ([d0801a1](https://github.com/IBM/kui/commit/d0801a1)), closes [#472](https://github.com/IBM/kui/issues/472)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-core-support:** tab completion should support dot files ([507b86f](https://github.com/IBM/kui/commit/507b86f)), closes [#547](https://github.com/IBM/kui/issues/547)
* **plugins/plugin-editor:** improved dark mode for editor ([8a7fd03](https://github.com/IBM/kui/commit/8a7fd03)), closes [#533](https://github.com/IBM/kui/issues/533) [#530](https://github.com/IBM/kui/issues/530)
* **plugins/plugin-tutorial:** tutorials versus dark mode fixes ([8f842ab](https://github.com/IBM/kui/commit/8f842ab)), closes [#531](https://github.com/IBM/kui/issues/531)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* smoother transitions as themes switch ([1ad91c1](https://github.com/IBM/kui/commit/1ad91c1)), closes [#613](https://github.com/IBM/kui/issues/613)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)
* clicks on sidecar header etc. result in prompt losing focus ([2f78dfc](https://github.com/IBM/kui/commit/2f78dfc)), closes [#610](https://github.com/IBM/kui/issues/610)
* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* git diff should use side-by-side ([4fe215b](https://github.com/IBM/kui/commit/4fe215b)), closes [#617](https://github.com/IBM/kui/issues/617)
* handle custom clients that don't provide plugin-core-support ([eb10966](https://github.com/IBM/kui/commit/eb10966)), closes [#615](https://github.com/IBM/kui/issues/615)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* some tables overflowed due to buggy scrollable css ([23d3353](https://github.com/IBM/kui/commit/23d3353)), closes [#575](https://github.com/IBM/kui/issues/575)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* **plugin-k8s:** add conditions and containers tabs to kubectl get ([7ca6130](https://github.com/IBM/kui/commit/7ca6130)), closes [#517](https://github.com/IBM/kui/issues/517)
* add a few more themes ([92199d3](https://github.com/IBM/kui/commit/92199d3)), closes [#608](https://github.com/IBM/kui/issues/608)
* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **plugins/plugin-k8s:** initial istio and kiali support ([0072725](https://github.com/IBM/kui/commit/0072725)), closes [#644](https://github.com/IBM/kui/issues/644)
* **plugins/plugin-wrk:** wrk plugin ([d39a331](https://github.com/IBM/kui/commit/d39a331)), closes [#624](https://github.com/IBM/kui/issues/624)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)





# 2.14.0 (2019-02-28)


### Bug Fixes

* **app:** fixes for --ui and headless to graphics transitions ([38c4e98](https://github.com/IBM/kui/commit/38c4e98)), closes [#408](https://github.com/IBM/kui/issues/408)
* **app:** opening Kui Electron Builds from macOS Finder adds additional argv -psn ([5ac8393](https://github.com/IBM/kui/commit/5ac8393)), closes [#382](https://github.com/IBM/kui/issues/382)
* **app:** table watch handler was installing a row-level onclick handler ([ecdd93b](https://github.com/IBM/kui/commit/ecdd93b)), closes [#388](https://github.com/IBM/kui/issues/388)
* **app:** tone down ENOENT while precompiling plugin model ([dc99c90](https://github.com/IBM/kui/commit/dc99c90)), closes [#375](https://github.com/IBM/kui/issues/375)
* **core:** another fix for error handling in plugin precompiler ([41c15db](https://github.com/IBM/kui/commit/41c15db)), closes [#306](https://github.com/IBM/kui/issues/306)
* **core:** confine global repl hack to test mode ([e37d933](https://github.com/IBM/kui/commit/e37d933)), closes [#212](https://github.com/IBM/kui/issues/212)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **k8s:** fix for kubectl status in headless mode ([072626f](https://github.com/IBM/kui/commit/072626f)), closes [#327](https://github.com/IBM/kui/issues/327)
* **packages/app:** adjust behavior of usage with sidecar open ([b5cff00](https://github.com/IBM/kui/commit/b5cff00)), closes [#580](https://github.com/IBM/kui/issues/580)
* **packages/app:** dark mode fixes for help display ([6df5c7d](https://github.com/IBM/kui/commit/6df5c7d)), closes [#539](https://github.com/IBM/kui/issues/539)
* **packages/app:** increase contrast of yellow badge ([56a2375](https://github.com/IBM/kui/commit/56a2375)), closes [#550](https://github.com/IBM/kui/issues/550)
* **packages/app:** streaming stdout should appear above (not next to) stderr ([2900492](https://github.com/IBM/kui/commit/2900492)), closes [#543](https://github.com/IBM/kui/issues/543)
* **packages/kui-builder:** minor dark mode border color tweak ([2d20fda](https://github.com/IBM/kui/commit/2d20fda)), closes [#561](https://github.com/IBM/kui/issues/561)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-k8s:** add "k" alias for "kubectl" ([4611ffe](https://github.com/IBM/kui/commit/4611ffe)), closes [#498](https://github.com/IBM/kui/issues/498)
* **plugin-k8s:** improve k8s in absence of plugin-openwhisk ([30f8a3a](https://github.com/IBM/kui/commit/30f8a3a)), closes [#457](https://github.com/IBM/kui/issues/457) [#458](https://github.com/IBM/kui/issues/458)
* **plugin-k8s:** k8s status enters infinite loop if resources absent ([e714c3f](https://github.com/IBM/kui/commit/e714c3f)), closes [#393](https://github.com/IBM/kui/issues/393)
* **plugin-openwhisk:** code highlight race bugs ([717b563](https://github.com/IBM/kui/commit/717b563)), closes [#475](https://github.com/IBM/kui/issues/475)
* **plugins-editor, plugins-openwhisk-editor-extensions:** fixes for lock/unlock and deploy n editor ([d0801a1](https://github.com/IBM/kui/commit/d0801a1)), closes [#472](https://github.com/IBM/kui/issues/472)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-core-support:** tab completion should support dot files ([507b86f](https://github.com/IBM/kui/commit/507b86f)), closes [#547](https://github.com/IBM/kui/issues/547)
* **plugins/plugin-editor:** improved dark mode for editor ([8a7fd03](https://github.com/IBM/kui/commit/8a7fd03)), closes [#533](https://github.com/IBM/kui/issues/533) [#530](https://github.com/IBM/kui/issues/530)
* **plugins/plugin-tutorial:** tutorials versus dark mode fixes ([8f842ab](https://github.com/IBM/kui/commit/8f842ab)), closes [#531](https://github.com/IBM/kui/issues/531)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* some tables overflowed due to buggy scrollable css ([23d3353](https://github.com/IBM/kui/commit/23d3353)), closes [#575](https://github.com/IBM/kui/issues/575)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* **plugin-k8s:** add conditions and containers tabs to kubectl get ([7ca6130](https://github.com/IBM/kui/commit/7ca6130)), closes [#517](https://github.com/IBM/kui/issues/517)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)





# 2.13.0 (2019-02-28)


### Bug Fixes

* **app:** fixes for --ui and headless to graphics transitions ([38c4e98](https://github.com/IBM/kui/commit/38c4e98)), closes [#408](https://github.com/IBM/kui/issues/408)
* **app:** opening Kui Electron Builds from macOS Finder adds additional argv -psn ([5ac8393](https://github.com/IBM/kui/commit/5ac8393)), closes [#382](https://github.com/IBM/kui/issues/382)
* **app:** table watch handler was installing a row-level onclick handler ([ecdd93b](https://github.com/IBM/kui/commit/ecdd93b)), closes [#388](https://github.com/IBM/kui/issues/388)
* **app:** tone down ENOENT while precompiling plugin model ([dc99c90](https://github.com/IBM/kui/commit/dc99c90)), closes [#375](https://github.com/IBM/kui/issues/375)
* **core:** another fix for error handling in plugin precompiler ([41c15db](https://github.com/IBM/kui/commit/41c15db)), closes [#306](https://github.com/IBM/kui/issues/306)
* **core:** confine global repl hack to test mode ([e37d933](https://github.com/IBM/kui/commit/e37d933)), closes [#212](https://github.com/IBM/kui/issues/212)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **k8s:** fix for kubectl status in headless mode ([072626f](https://github.com/IBM/kui/commit/072626f)), closes [#327](https://github.com/IBM/kui/issues/327)
* **packages/app:** adjust behavior of usage with sidecar open ([b5cff00](https://github.com/IBM/kui/commit/b5cff00)), closes [#580](https://github.com/IBM/kui/issues/580)
* **packages/app:** dark mode fixes for help display ([6df5c7d](https://github.com/IBM/kui/commit/6df5c7d)), closes [#539](https://github.com/IBM/kui/issues/539)
* **packages/app:** increase contrast of yellow badge ([56a2375](https://github.com/IBM/kui/commit/56a2375)), closes [#550](https://github.com/IBM/kui/issues/550)
* **packages/app:** streaming stdout should appear above (not next to) stderr ([2900492](https://github.com/IBM/kui/commit/2900492)), closes [#543](https://github.com/IBM/kui/issues/543)
* **packages/kui-builder:** minor dark mode border color tweak ([2d20fda](https://github.com/IBM/kui/commit/2d20fda)), closes [#561](https://github.com/IBM/kui/issues/561)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-k8s:** add "k" alias for "kubectl" ([4611ffe](https://github.com/IBM/kui/commit/4611ffe)), closes [#498](https://github.com/IBM/kui/issues/498)
* **plugin-k8s:** improve k8s in absence of plugin-openwhisk ([30f8a3a](https://github.com/IBM/kui/commit/30f8a3a)), closes [#457](https://github.com/IBM/kui/issues/457) [#458](https://github.com/IBM/kui/issues/458)
* **plugin-k8s:** k8s status enters infinite loop if resources absent ([e714c3f](https://github.com/IBM/kui/commit/e714c3f)), closes [#393](https://github.com/IBM/kui/issues/393)
* **plugin-openwhisk:** code highlight race bugs ([717b563](https://github.com/IBM/kui/commit/717b563)), closes [#475](https://github.com/IBM/kui/issues/475)
* **plugins-editor, plugins-openwhisk-editor-extensions:** fixes for lock/unlock and deploy n editor ([d0801a1](https://github.com/IBM/kui/commit/d0801a1)), closes [#472](https://github.com/IBM/kui/issues/472)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-core-support:** tab completion should support dot files ([507b86f](https://github.com/IBM/kui/commit/507b86f)), closes [#547](https://github.com/IBM/kui/issues/547)
* **plugins/plugin-editor:** improved dark mode for editor ([8a7fd03](https://github.com/IBM/kui/commit/8a7fd03)), closes [#533](https://github.com/IBM/kui/issues/533) [#530](https://github.com/IBM/kui/issues/530)
* **plugins/plugin-tutorial:** tutorials versus dark mode fixes ([8f842ab](https://github.com/IBM/kui/commit/8f842ab)), closes [#531](https://github.com/IBM/kui/issues/531)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* improve handling of non-zero exit codes in bash-like usage formatting ([98bb8b3](https://github.com/IBM/kui/commit/98bb8b3)), closes [#582](https://github.com/IBM/kui/issues/582)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* some tables overflowed due to buggy scrollable css ([23d3353](https://github.com/IBM/kui/commit/23d3353)), closes [#575](https://github.com/IBM/kui/issues/575)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* **plugin-k8s:** add conditions and containers tabs to kubectl get ([7ca6130](https://github.com/IBM/kui/commit/7ca6130)), closes [#517](https://github.com/IBM/kui/issues/517)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)





# 2.12.0 (2019-02-27)


### Bug Fixes

* **app:** fixes for --ui and headless to graphics transitions ([38c4e98](https://github.com/IBM/kui/commit/38c4e98)), closes [#408](https://github.com/IBM/kui/issues/408)
* **app:** opening Kui Electron Builds from macOS Finder adds additional argv -psn ([5ac8393](https://github.com/IBM/kui/commit/5ac8393)), closes [#382](https://github.com/IBM/kui/issues/382)
* **app:** table watch handler was installing a row-level onclick handler ([ecdd93b](https://github.com/IBM/kui/commit/ecdd93b)), closes [#388](https://github.com/IBM/kui/issues/388)
* **app:** tone down ENOENT while precompiling plugin model ([dc99c90](https://github.com/IBM/kui/commit/dc99c90)), closes [#375](https://github.com/IBM/kui/issues/375)
* **core:** another fix for error handling in plugin precompiler ([41c15db](https://github.com/IBM/kui/commit/41c15db)), closes [#306](https://github.com/IBM/kui/issues/306)
* **core:** confine global repl hack to test mode ([e37d933](https://github.com/IBM/kui/commit/e37d933)), closes [#212](https://github.com/IBM/kui/issues/212)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **k8s:** fix for kubectl status in headless mode ([072626f](https://github.com/IBM/kui/commit/072626f)), closes [#327](https://github.com/IBM/kui/issues/327)
* **packages/app:** dark mode fixes for help display ([6df5c7d](https://github.com/IBM/kui/commit/6df5c7d)), closes [#539](https://github.com/IBM/kui/issues/539)
* **packages/app:** increase contrast of yellow badge ([56a2375](https://github.com/IBM/kui/commit/56a2375)), closes [#550](https://github.com/IBM/kui/issues/550)
* **packages/app:** streaming stdout should appear above (not next to) stderr ([2900492](https://github.com/IBM/kui/commit/2900492)), closes [#543](https://github.com/IBM/kui/issues/543)
* **packages/kui-builder:** minor dark mode border color tweak ([2d20fda](https://github.com/IBM/kui/commit/2d20fda)), closes [#561](https://github.com/IBM/kui/issues/561)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-k8s:** add "k" alias for "kubectl" ([4611ffe](https://github.com/IBM/kui/commit/4611ffe)), closes [#498](https://github.com/IBM/kui/issues/498)
* **plugin-k8s:** improve k8s in absence of plugin-openwhisk ([30f8a3a](https://github.com/IBM/kui/commit/30f8a3a)), closes [#457](https://github.com/IBM/kui/issues/457) [#458](https://github.com/IBM/kui/issues/458)
* **plugin-k8s:** k8s status enters infinite loop if resources absent ([e714c3f](https://github.com/IBM/kui/commit/e714c3f)), closes [#393](https://github.com/IBM/kui/issues/393)
* **plugin-openwhisk:** code highlight race bugs ([717b563](https://github.com/IBM/kui/commit/717b563)), closes [#475](https://github.com/IBM/kui/issues/475)
* **plugins-editor, plugins-openwhisk-editor-extensions:** fixes for lock/unlock and deploy n editor ([d0801a1](https://github.com/IBM/kui/commit/d0801a1)), closes [#472](https://github.com/IBM/kui/issues/472)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-core-support:** tab completion should support dot files ([507b86f](https://github.com/IBM/kui/commit/507b86f)), closes [#547](https://github.com/IBM/kui/issues/547)
* **plugins/plugin-editor:** improved dark mode for editor ([8a7fd03](https://github.com/IBM/kui/commit/8a7fd03)), closes [#533](https://github.com/IBM/kui/issues/533) [#530](https://github.com/IBM/kui/issues/530)
* **plugins/plugin-tutorial:** tutorials versus dark mode fixes ([8f842ab](https://github.com/IBM/kui/commit/8f842ab)), closes [#531](https://github.com/IBM/kui/issues/531)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* **plugin-k8s:** add conditions and containers tabs to kubectl get ([7ca6130](https://github.com/IBM/kui/commit/7ca6130)), closes [#517](https://github.com/IBM/kui/issues/517)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)





# 2.11.0 (2019-02-22)


### Bug Fixes

* **app:** fixes for --ui and headless to graphics transitions ([38c4e98](https://github.com/IBM/kui/commit/38c4e98)), closes [#408](https://github.com/IBM/kui/issues/408)
* **app:** opening Kui Electron Builds from macOS Finder adds additional argv -psn ([5ac8393](https://github.com/IBM/kui/commit/5ac8393)), closes [#382](https://github.com/IBM/kui/issues/382)
* **app:** table watch handler was installing a row-level onclick handler ([ecdd93b](https://github.com/IBM/kui/commit/ecdd93b)), closes [#388](https://github.com/IBM/kui/issues/388)
* **app:** tone down ENOENT while precompiling plugin model ([dc99c90](https://github.com/IBM/kui/commit/dc99c90)), closes [#375](https://github.com/IBM/kui/issues/375)
* **core:** another fix for error handling in plugin precompiler ([41c15db](https://github.com/IBM/kui/commit/41c15db)), closes [#306](https://github.com/IBM/kui/issues/306)
* **core:** confine global repl hack to test mode ([e37d933](https://github.com/IBM/kui/commit/e37d933)), closes [#212](https://github.com/IBM/kui/issues/212)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **k8s:** fix for kubectl status in headless mode ([072626f](https://github.com/IBM/kui/commit/072626f)), closes [#327](https://github.com/IBM/kui/issues/327)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* **plugin-k8s:** add "k" alias for "kubectl" ([4611ffe](https://github.com/IBM/kui/commit/4611ffe)), closes [#498](https://github.com/IBM/kui/issues/498)
* **plugin-k8s:** improve k8s in absence of plugin-openwhisk ([30f8a3a](https://github.com/IBM/kui/commit/30f8a3a)), closes [#457](https://github.com/IBM/kui/issues/457) [#458](https://github.com/IBM/kui/issues/458)
* **plugin-k8s:** k8s status enters infinite loop if resources absent ([e714c3f](https://github.com/IBM/kui/commit/e714c3f)), closes [#393](https://github.com/IBM/kui/issues/393)
* **plugin-openwhisk:** code highlight race bugs ([717b563](https://github.com/IBM/kui/commit/717b563)), closes [#475](https://github.com/IBM/kui/issues/475)
* **plugins-editor, plugins-openwhisk-editor-extensions:** fixes for lock/unlock and deploy n editor ([d0801a1](https://github.com/IBM/kui/commit/d0801a1)), closes [#472](https://github.com/IBM/kui/issues/472)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)





# 2.10.0 (2019-02-21)


### Bug Fixes

* **app:** fixes for --ui and headless to graphics transitions ([38c4e98](https://github.com/IBM/kui/commit/38c4e98)), closes [#408](https://github.com/IBM/kui/issues/408)
* **app:** opening Kui Electron Builds from macOS Finder adds additional argv -psn ([5ac8393](https://github.com/IBM/kui/commit/5ac8393)), closes [#382](https://github.com/IBM/kui/issues/382)
* **app:** table watch handler was installing a row-level onclick handler ([ecdd93b](https://github.com/IBM/kui/commit/ecdd93b)), closes [#388](https://github.com/IBM/kui/issues/388)
* **app:** tone down ENOENT while precompiling plugin model ([dc99c90](https://github.com/IBM/kui/commit/dc99c90)), closes [#375](https://github.com/IBM/kui/issues/375)
* **core:** another fix for error handling in plugin precompiler ([41c15db](https://github.com/IBM/kui/commit/41c15db)), closes [#306](https://github.com/IBM/kui/issues/306)
* **core:** confine global repl hack to test mode ([e37d933](https://github.com/IBM/kui/commit/e37d933)), closes [#212](https://github.com/IBM/kui/issues/212)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **k8s:** fix for kubectl status in headless mode ([072626f](https://github.com/IBM/kui/commit/072626f)), closes [#327](https://github.com/IBM/kui/issues/327)
* **plugin-k8s:** add "k" alias for "kubectl" ([4611ffe](https://github.com/IBM/kui/commit/4611ffe)), closes [#498](https://github.com/IBM/kui/issues/498)
* **plugin-k8s:** improve k8s in absence of plugin-openwhisk ([30f8a3a](https://github.com/IBM/kui/commit/30f8a3a)), closes [#457](https://github.com/IBM/kui/issues/457) [#458](https://github.com/IBM/kui/issues/458)
* **plugin-k8s:** k8s status enters infinite loop if resources absent ([e714c3f](https://github.com/IBM/kui/commit/e714c3f)), closes [#393](https://github.com/IBM/kui/issues/393)
* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* **plugin-openwhisk:** code highlight race bugs ([717b563](https://github.com/IBM/kui/commit/717b563)), closes [#475](https://github.com/IBM/kui/issues/475)
* **plugins-editor, plugins-openwhisk-editor-extensions:** fixes for lock/unlock and deploy n editor ([d0801a1](https://github.com/IBM/kui/commit/d0801a1)), closes [#472](https://github.com/IBM/kui/issues/472)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)





# 2.9.0 (2019-02-21)


### Bug Fixes

* **app:** fixes for --ui and headless to graphics transitions ([38c4e98](https://github.com/IBM/kui/commit/38c4e98)), closes [#408](https://github.com/IBM/kui/issues/408)
* **app:** opening Kui Electron Builds from macOS Finder adds additional argv -psn ([5ac8393](https://github.com/IBM/kui/commit/5ac8393)), closes [#382](https://github.com/IBM/kui/issues/382)
* **app:** table watch handler was installing a row-level onclick handler ([ecdd93b](https://github.com/IBM/kui/commit/ecdd93b)), closes [#388](https://github.com/IBM/kui/issues/388)
* **app:** tone down ENOENT while precompiling plugin model ([dc99c90](https://github.com/IBM/kui/commit/dc99c90)), closes [#375](https://github.com/IBM/kui/issues/375)
* **core:** another fix for error handling in plugin precompiler ([41c15db](https://github.com/IBM/kui/commit/41c15db)), closes [#306](https://github.com/IBM/kui/issues/306)
* **core:** confine global repl hack to test mode ([e37d933](https://github.com/IBM/kui/commit/e37d933)), closes [#212](https://github.com/IBM/kui/issues/212)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **k8s:** fix for kubectl status in headless mode ([072626f](https://github.com/IBM/kui/commit/072626f)), closes [#327](https://github.com/IBM/kui/issues/327)
* **plugin-k8s:** add "k" alias for "kubectl" ([4611ffe](https://github.com/IBM/kui/commit/4611ffe)), closes [#498](https://github.com/IBM/kui/issues/498)
* **plugin-k8s:** improve k8s in absence of plugin-openwhisk ([30f8a3a](https://github.com/IBM/kui/commit/30f8a3a)), closes [#457](https://github.com/IBM/kui/issues/457) [#458](https://github.com/IBM/kui/issues/458)
* **plugin-k8s:** k8s status enters infinite loop if resources absent ([e714c3f](https://github.com/IBM/kui/commit/e714c3f)), closes [#393](https://github.com/IBM/kui/issues/393)
* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* **plugin-openwhisk:** code highlight race bugs ([717b563](https://github.com/IBM/kui/commit/717b563)), closes [#475](https://github.com/IBM/kui/issues/475)
* **plugins-editor, plugins-openwhisk-editor-extensions:** fixes for lock/unlock and deploy n editor ([d0801a1](https://github.com/IBM/kui/commit/d0801a1)), closes [#472](https://github.com/IBM/kui/issues/472)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)





## 2.8.1 (2019-02-20)


### Bug Fixes

* **app:** fixes for --ui and headless to graphics transitions ([38c4e98](https://github.com/IBM/kui/commit/38c4e98)), closes [#408](https://github.com/IBM/kui/issues/408)
* **app:** opening Kui Electron Builds from macOS Finder adds additional argv -psn ([5ac8393](https://github.com/IBM/kui/commit/5ac8393)), closes [#382](https://github.com/IBM/kui/issues/382)
* **app:** table watch handler was installing a row-level onclick handler ([ecdd93b](https://github.com/IBM/kui/commit/ecdd93b)), closes [#388](https://github.com/IBM/kui/issues/388)
* **app:** tone down ENOENT while precompiling plugin model ([dc99c90](https://github.com/IBM/kui/commit/dc99c90)), closes [#375](https://github.com/IBM/kui/issues/375)
* **core:** another fix for error handling in plugin precompiler ([41c15db](https://github.com/IBM/kui/commit/41c15db)), closes [#306](https://github.com/IBM/kui/issues/306)
* **core:** confine global repl hack to test mode ([e37d933](https://github.com/IBM/kui/commit/e37d933)), closes [#212](https://github.com/IBM/kui/issues/212)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **k8s:** fix for kubectl status in headless mode ([072626f](https://github.com/IBM/kui/commit/072626f)), closes [#327](https://github.com/IBM/kui/issues/327)
* **plugin-k8s:** improve k8s in absence of plugin-openwhisk ([30f8a3a](https://github.com/IBM/kui/commit/30f8a3a)), closes [#457](https://github.com/IBM/kui/issues/457) [#458](https://github.com/IBM/kui/issues/458)
* **plugin-k8s:** k8s status enters infinite loop if resources absent ([e714c3f](https://github.com/IBM/kui/commit/e714c3f)), closes [#393](https://github.com/IBM/kui/issues/393)
* **plugin-openwhisk:** code highlight race bugs ([717b563](https://github.com/IBM/kui/commit/717b563)), closes [#475](https://github.com/IBM/kui/issues/475)
* **plugins-editor, plugins-openwhisk-editor-extensions:** fixes for lock/unlock and deploy n editor ([d0801a1](https://github.com/IBM/kui/commit/d0801a1)), closes [#472](https://github.com/IBM/kui/issues/472)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)





# 2.8.0 (2019-02-20)


### Bug Fixes

* **app:** fixes for --ui and headless to graphics transitions ([38c4e98](https://github.com/IBM/kui/commit/38c4e98)), closes [#408](https://github.com/IBM/kui/issues/408)
* **app:** opening Kui Electron Builds from macOS Finder adds additional argv -psn ([5ac8393](https://github.com/IBM/kui/commit/5ac8393)), closes [#382](https://github.com/IBM/kui/issues/382)
* **app:** table watch handler was installing a row-level onclick handler ([ecdd93b](https://github.com/IBM/kui/commit/ecdd93b)), closes [#388](https://github.com/IBM/kui/issues/388)
* **app:** tone down ENOENT while precompiling plugin model ([dc99c90](https://github.com/IBM/kui/commit/dc99c90)), closes [#375](https://github.com/IBM/kui/issues/375)
* **core:** another fix for error handling in plugin precompiler ([41c15db](https://github.com/IBM/kui/commit/41c15db)), closes [#306](https://github.com/IBM/kui/issues/306)
* **core:** confine global repl hack to test mode ([e37d933](https://github.com/IBM/kui/commit/e37d933)), closes [#212](https://github.com/IBM/kui/issues/212)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **k8s:** fix for kubectl status in headless mode ([072626f](https://github.com/IBM/kui/commit/072626f)), closes [#327](https://github.com/IBM/kui/issues/327)
* **plugin-k8s:** improve k8s in absence of plugin-openwhisk ([30f8a3a](https://github.com/IBM/kui/commit/30f8a3a)), closes [#457](https://github.com/IBM/kui/issues/457) [#458](https://github.com/IBM/kui/issues/458)
* **plugin-k8s:** k8s status enters infinite loop if resources absent ([e714c3f](https://github.com/IBM/kui/commit/e714c3f)), closes [#393](https://github.com/IBM/kui/issues/393)
* **plugin-openwhisk:** code highlight race bugs ([717b563](https://github.com/IBM/kui/commit/717b563)), closes [#475](https://github.com/IBM/kui/issues/475)
* **plugins-editor, plugins-openwhisk-editor-extensions:** fixes for lock/unlock and deploy n editor ([d0801a1](https://github.com/IBM/kui/commit/d0801a1)), closes [#472](https://github.com/IBM/kui/issues/472)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)





# 2.7.0 (2019-02-19)


### Bug Fixes

* **app:** fixes for --ui and headless to graphics transitions ([38c4e98](https://github.com/IBM/kui/commit/38c4e98)), closes [#408](https://github.com/IBM/kui/issues/408)
* **app:** opening Kui Electron Builds from macOS Finder adds additional argv -psn ([5ac8393](https://github.com/IBM/kui/commit/5ac8393)), closes [#382](https://github.com/IBM/kui/issues/382)
* **app:** table watch handler was installing a row-level onclick handler ([ecdd93b](https://github.com/IBM/kui/commit/ecdd93b)), closes [#388](https://github.com/IBM/kui/issues/388)
* **app:** tone down ENOENT while precompiling plugin model ([dc99c90](https://github.com/IBM/kui/commit/dc99c90)), closes [#375](https://github.com/IBM/kui/issues/375)
* **core:** another fix for error handling in plugin precompiler ([41c15db](https://github.com/IBM/kui/commit/41c15db)), closes [#306](https://github.com/IBM/kui/issues/306)
* **core:** confine global repl hack to test mode ([e37d933](https://github.com/IBM/kui/commit/e37d933)), closes [#212](https://github.com/IBM/kui/issues/212)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **k8s:** fix for kubectl status in headless mode ([072626f](https://github.com/IBM/kui/commit/072626f)), closes [#327](https://github.com/IBM/kui/issues/327)
* **plugin-k8s:** improve k8s in absence of plugin-openwhisk ([30f8a3a](https://github.com/IBM/kui/commit/30f8a3a)), closes [#457](https://github.com/IBM/kui/issues/457) [#458](https://github.com/IBM/kui/issues/458)
* **plugin-k8s:** k8s status enters infinite loop if resources absent ([e714c3f](https://github.com/IBM/kui/commit/e714c3f)), closes [#393](https://github.com/IBM/kui/issues/393)
* **plugin-openwhisk:** code highlight race bugs ([717b563](https://github.com/IBM/kui/commit/717b563)), closes [#475](https://github.com/IBM/kui/issues/475)
* **plugins-editor, plugins-openwhisk-editor-extensions:** fixes for lock/unlock and deploy n editor ([d0801a1](https://github.com/IBM/kui/commit/d0801a1)), closes [#472](https://github.com/IBM/kui/issues/472)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)





# 2.6.0 (2019-02-13)


### Bug Fixes

* **app:** fixes for --ui and headless to graphics transitions ([38c4e98](https://github.com/IBM/kui/commit/38c4e98)), closes [#408](https://github.com/IBM/kui/issues/408)
* **app:** opening Kui Electron Builds from macOS Finder adds additional argv -psn ([5ac8393](https://github.com/IBM/kui/commit/5ac8393)), closes [#382](https://github.com/IBM/kui/issues/382)
* **app:** table watch handler was installing a row-level onclick handler ([ecdd93b](https://github.com/IBM/kui/commit/ecdd93b)), closes [#388](https://github.com/IBM/kui/issues/388)
* **app:** tone down ENOENT while precompiling plugin model ([dc99c90](https://github.com/IBM/kui/commit/dc99c90)), closes [#375](https://github.com/IBM/kui/issues/375)
* **core:** another fix for error handling in plugin precompiler ([41c15db](https://github.com/IBM/kui/commit/41c15db)), closes [#306](https://github.com/IBM/kui/issues/306)
* **core:** confine global repl hack to test mode ([e37d933](https://github.com/IBM/kui/commit/e37d933)), closes [#212](https://github.com/IBM/kui/issues/212)
* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **k8s:** fix for kubectl status in headless mode ([072626f](https://github.com/IBM/kui/commit/072626f)), closes [#327](https://github.com/IBM/kui/issues/327)
* **plugin-k8s:** k8s status enters infinite loop if resources absent ([e714c3f](https://github.com/IBM/kui/commit/e714c3f)), closes [#393](https://github.com/IBM/kui/issues/393)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)





# 2.5.0 (2019-02-04)


### Bug Fixes

* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* **core:** another fix for error handling in plugin precompiler ([41c15db](https://github.com/IBM/kui/commit/41c15db)), closes [#306](https://github.com/IBM/kui/issues/306)
* **core:** confine global repl hack to test mode ([e37d933](https://github.com/IBM/kui/commit/e37d933)), closes [#212](https://github.com/IBM/kui/issues/212)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **k8s:** fix for kubectl status in headless mode ([072626f](https://github.com/IBM/kui/commit/072626f)), closes [#327](https://github.com/IBM/kui/issues/327)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)





# 2.4.0 (2019-02-03)


### Bug Fixes

* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* **core:** another fix for error handling in plugin precompiler ([41c15db](https://github.com/IBM/kui/commit/41c15db)), closes [#306](https://github.com/IBM/kui/issues/306)
* **core:** confine global repl hack to test mode ([e37d933](https://github.com/IBM/kui/commit/e37d933)), closes [#212](https://github.com/IBM/kui/issues/212)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **k8s:** fix for kubectl status in headless mode ([072626f](https://github.com/IBM/kui/commit/072626f)), closes [#327](https://github.com/IBM/kui/issues/327)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)





# 2.3.0 (2019-02-03)


### Bug Fixes

* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* **core:** another fix for error handling in plugin precompiler ([41c15db](https://github.com/IBM/kui/commit/41c15db)), closes [#306](https://github.com/IBM/kui/issues/306)
* **core:** confine global repl hack to test mode ([e37d933](https://github.com/IBM/kui/commit/e37d933)), closes [#212](https://github.com/IBM/kui/issues/212)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **k8s:** fix for kubectl status in headless mode ([072626f](https://github.com/IBM/kui/commit/072626f)), closes [#327](https://github.com/IBM/kui/issues/327)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)





# 2.2.0 (2019-02-03)


### Bug Fixes

* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* **core:** another fix for error handling in plugin precompiler ([41c15db](https://github.com/IBM/kui/commit/41c15db)), closes [#306](https://github.com/IBM/kui/issues/306)
* **core:** confine global repl hack to test mode ([e37d933](https://github.com/IBM/kui/commit/e37d933)), closes [#212](https://github.com/IBM/kui/issues/212)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **k8s:** fix for kubectl status in headless mode ([072626f](https://github.com/IBM/kui/commit/072626f)), closes [#327](https://github.com/IBM/kui/issues/327)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)





# 2.1.0 (2019-02-03)


### Bug Fixes

* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* **core:** confine global repl hack to test mode ([e37d933](https://github.com/IBM/kui/commit/e37d933)), closes [#212](https://github.com/IBM/kui/issues/212)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **k8s:** fix for kubectl status in headless mode ([072626f](https://github.com/IBM/kui/commit/072626f)), closes [#327](https://github.com/IBM/kui/issues/327)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)

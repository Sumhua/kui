# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 0.24.0 (2019-03-19)


### Bug Fixes

* **apache-composer:** compose yoyo -t @demos/if.js broken in webpack mode ([14ac816](https://github.com/IBM/kui/commit/14ac816)), closes [#332](https://github.com/IBM/kui/issues/332)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **kui-builder:** improve webpack building process for external clients ([14763ca](https://github.com/IBM/kui/commit/14763ca)), closes [#433](https://github.com/IBM/kui/issues/433)
* **kui-builder:** more fixes for CD pipeline ([59bb0b7](https://github.com/IBM/kui/commit/59bb0b7)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** more fixes for CD pipeline ([184b45e](https://github.com/IBM/kui/commit/184b45e)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** more fixes for headless build ([3ae143c](https://github.com/IBM/kui/commit/3ae143c)), closes [#478](https://github.com/IBM/kui/issues/478)
* **kui-builder:** update CD publisher to reflect new clients/default/dist structure ([efe753d](https://github.com/IBM/kui/commit/efe753d)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** update kui-watch to support external clients ([cfef146](https://github.com/IBM/kui/commit/cfef146)), closes [#448](https://github.com/IBM/kui/issues/448)
* **packages/app:** fix for spinner going off-viewport ([0d095f0](https://github.com/IBM/kui/commit/0d095f0)), closes [#602](https://github.com/IBM/kui/issues/602)
* **packages/kui-builder:** allow headless clients to specify an alernate README location ([9d400a5](https://github.com/IBM/kui/commit/9d400a5)), closes [#527](https://github.com/IBM/kui/issues/527)
* **packages/kui-builder:** dark theme is missing a trailing semicolon ([c2c09f3](https://github.com/IBM/kui/commit/c2c09f3)), closes [#589](https://github.com/IBM/kui/issues/589)
* **packages/kui-builder:** default dark theme's version badge contrast fix ([680b529](https://github.com/IBM/kui/commit/680b529)), closes [#760](https://github.com/IBM/kui/issues/760)
* **packages/kui-builder:** fix for swapped yellow and green in dracula theme ([e07f822](https://github.com/IBM/kui/commit/e07f822)), closes [#619](https://github.com/IBM/kui/issues/619)
* **packages/kui-builder:** fixes for nord and zenburn colors ([aeb1e84](https://github.com/IBM/kui/commit/aeb1e84)), closes [#642](https://github.com/IBM/kui/issues/642)
* **packages/kui-builder:** improve row striping contrast of dark themes ([fab5c07](https://github.com/IBM/kui/commit/fab5c07)), closes [#661](https://github.com/IBM/kui/issues/661)
* **packages/kui-builder:** increase contrast for key-value yaml ([9e5ca42](https://github.com/IBM/kui/commit/9e5ca42)), closes [#776](https://github.com/IBM/kui/issues/776)
* **packages/kui-builder:** increase nord theme yaml key contrast ([cb8fd61](https://github.com/IBM/kui/commit/cb8fd61)), closes [#801](https://github.com/IBM/kui/issues/801)
* **packages/kui-builder:** minor dark mode border color tweak ([2d20fda](https://github.com/IBM/kui/commit/2d20fda)), closes [#561](https://github.com/IBM/kui/issues/561)
* **packages/kui-builder:** nord theme's cyan color isn't right ([e0a5bb0](https://github.com/IBM/kui/commit/e0a5bb0)), closes [#628](https://github.com/IBM/kui/issues/628)
* **packages/kui-builder:** shorten atelier and gruvbox theme names ([0071a45](https://github.com/IBM/kui/commit/0071a45)), closes [#686](https://github.com/IBM/kui/issues/686)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/kui-builder:** tweaks to default dark theme ([cc0b1a6](https://github.com/IBM/kui/commit/cc0b1a6)), closes [#882](https://github.com/IBM/kui/issues/882)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-k8s:** improve k8s in absence of plugin-openwhisk ([30f8a3a](https://github.com/IBM/kui/commit/30f8a3a)), closes [#457](https://github.com/IBM/kui/issues/457) [#458](https://github.com/IBM/kui/issues/458)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-editor:** improved dark mode for editor ([8a7fd03](https://github.com/IBM/kui/commit/8a7fd03)), closes [#533](https://github.com/IBM/kui/issues/533) [#530](https://github.com/IBM/kui/issues/530)
* **proxy:** improve support for building proxy server from an external custom client ([177fac8](https://github.com/IBM/kui/commit/177fac8)), closes [#438](https://github.com/IBM/kui/issues/438)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* handle custom clients that don't provide plugin-core-support ([eb10966](https://github.com/IBM/kui/commit/eb10966)), closes [#615](https://github.com/IBM/kui/issues/615)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* a few more tab tweaks ([8e31e5e](https://github.com/IBM/kui/commit/8e31e5e)), closes [#719](https://github.com/IBM/kui/issues/719)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* clicks on sidecar header etc. result in prompt losing focus ([2f78dfc](https://github.com/IBM/kui/commit/2f78dfc)), closes [#610](https://github.com/IBM/kui/issues/610)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* **webpack:** improve theme override support ([e8b943a](https://github.com/IBM/kui/commit/e8b943a)), closes [#298](https://github.com/IBM/kui/issues/298)
* **webpack:** restore webpack publisher functionality ([2b4feeb](https://github.com/IBM/kui/commit/2b4feeb)), closes [#271](https://github.com/IBM/kui/issues/271)
* git status UI fixes ([cf0f5cb](https://github.com/IBM/kui/commit/cf0f5cb)), closes [#702](https://github.com/IBM/kui/issues/702)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* some tables overflowed due to buggy scrollable css ([23d3353](https://github.com/IBM/kui/commit/23d3353)), closes [#575](https://github.com/IBM/kui/issues/575)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* various small fixes for tab UI ([c41d388](https://github.com/IBM/kui/commit/c41d388)), closes [#717](https://github.com/IBM/kui/issues/717)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* add a few more themes ([92199d3](https://github.com/IBM/kui/commit/92199d3)), closes [#608](https://github.com/IBM/kui/issues/608)
* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* switch about window to use a sidecar DOM ([90d3ad3](https://github.com/IBM/kui/commit/90d3ad3)), closes [#746](https://github.com/IBM/kui/issues/746)
* use editor more widely ([fe063de](https://github.com/IBM/kui/commit/fe063de)), closes [#532](https://github.com/IBM/kui/issues/532)
* **packages/kui-builder:** add atelier soft theme ([e1c907a](https://github.com/IBM/kui/commit/e1c907a)), closes [#860](https://github.com/IBM/kui/issues/860)
* **plugins/plugin-wrk:** wrk plugin ([d39a331](https://github.com/IBM/kui/commit/d39a331)), closes [#624](https://github.com/IBM/kui/issues/624)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)





# 0.23.0 (2019-03-19)


### Bug Fixes

* **apache-composer:** compose yoyo -t @demos/if.js broken in webpack mode ([14ac816](https://github.com/IBM/kui/commit/14ac816)), closes [#332](https://github.com/IBM/kui/issues/332)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **kui-builder:** improve webpack building process for external clients ([14763ca](https://github.com/IBM/kui/commit/14763ca)), closes [#433](https://github.com/IBM/kui/issues/433)
* **kui-builder:** more fixes for CD pipeline ([59bb0b7](https://github.com/IBM/kui/commit/59bb0b7)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** more fixes for CD pipeline ([184b45e](https://github.com/IBM/kui/commit/184b45e)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** more fixes for headless build ([3ae143c](https://github.com/IBM/kui/commit/3ae143c)), closes [#478](https://github.com/IBM/kui/issues/478)
* **kui-builder:** update CD publisher to reflect new clients/default/dist structure ([efe753d](https://github.com/IBM/kui/commit/efe753d)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** update kui-watch to support external clients ([cfef146](https://github.com/IBM/kui/commit/cfef146)), closes [#448](https://github.com/IBM/kui/issues/448)
* **packages/app:** fix for spinner going off-viewport ([0d095f0](https://github.com/IBM/kui/commit/0d095f0)), closes [#602](https://github.com/IBM/kui/issues/602)
* **packages/kui-builder:** allow headless clients to specify an alernate README location ([9d400a5](https://github.com/IBM/kui/commit/9d400a5)), closes [#527](https://github.com/IBM/kui/issues/527)
* **packages/kui-builder:** dark theme is missing a trailing semicolon ([c2c09f3](https://github.com/IBM/kui/commit/c2c09f3)), closes [#589](https://github.com/IBM/kui/issues/589)
* **packages/kui-builder:** default dark theme's version badge contrast fix ([680b529](https://github.com/IBM/kui/commit/680b529)), closes [#760](https://github.com/IBM/kui/issues/760)
* **packages/kui-builder:** fix for swapped yellow and green in dracula theme ([e07f822](https://github.com/IBM/kui/commit/e07f822)), closes [#619](https://github.com/IBM/kui/issues/619)
* **packages/kui-builder:** fixes for nord and zenburn colors ([aeb1e84](https://github.com/IBM/kui/commit/aeb1e84)), closes [#642](https://github.com/IBM/kui/issues/642)
* **packages/kui-builder:** improve row striping contrast of dark themes ([fab5c07](https://github.com/IBM/kui/commit/fab5c07)), closes [#661](https://github.com/IBM/kui/issues/661)
* **packages/kui-builder:** increase contrast for key-value yaml ([9e5ca42](https://github.com/IBM/kui/commit/9e5ca42)), closes [#776](https://github.com/IBM/kui/issues/776)
* **packages/kui-builder:** increase nord theme yaml key contrast ([cb8fd61](https://github.com/IBM/kui/commit/cb8fd61)), closes [#801](https://github.com/IBM/kui/issues/801)
* **packages/kui-builder:** minor dark mode border color tweak ([2d20fda](https://github.com/IBM/kui/commit/2d20fda)), closes [#561](https://github.com/IBM/kui/issues/561)
* **packages/kui-builder:** nord theme's cyan color isn't right ([e0a5bb0](https://github.com/IBM/kui/commit/e0a5bb0)), closes [#628](https://github.com/IBM/kui/issues/628)
* **packages/kui-builder:** shorten atelier and gruvbox theme names ([0071a45](https://github.com/IBM/kui/commit/0071a45)), closes [#686](https://github.com/IBM/kui/issues/686)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/kui-builder:** tweaks to default dark theme ([cc0b1a6](https://github.com/IBM/kui/commit/cc0b1a6)), closes [#882](https://github.com/IBM/kui/issues/882)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-k8s:** improve k8s in absence of plugin-openwhisk ([30f8a3a](https://github.com/IBM/kui/commit/30f8a3a)), closes [#457](https://github.com/IBM/kui/issues/457) [#458](https://github.com/IBM/kui/issues/458)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-editor:** improved dark mode for editor ([8a7fd03](https://github.com/IBM/kui/commit/8a7fd03)), closes [#533](https://github.com/IBM/kui/issues/533) [#530](https://github.com/IBM/kui/issues/530)
* **proxy:** improve support for building proxy server from an external custom client ([177fac8](https://github.com/IBM/kui/commit/177fac8)), closes [#438](https://github.com/IBM/kui/issues/438)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* handle custom clients that don't provide plugin-core-support ([eb10966](https://github.com/IBM/kui/commit/eb10966)), closes [#615](https://github.com/IBM/kui/issues/615)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* a few more tab tweaks ([8e31e5e](https://github.com/IBM/kui/commit/8e31e5e)), closes [#719](https://github.com/IBM/kui/issues/719)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* clicks on sidecar header etc. result in prompt losing focus ([2f78dfc](https://github.com/IBM/kui/commit/2f78dfc)), closes [#610](https://github.com/IBM/kui/issues/610)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* **webpack:** improve theme override support ([e8b943a](https://github.com/IBM/kui/commit/e8b943a)), closes [#298](https://github.com/IBM/kui/issues/298)
* **webpack:** restore webpack publisher functionality ([2b4feeb](https://github.com/IBM/kui/commit/2b4feeb)), closes [#271](https://github.com/IBM/kui/issues/271)
* git status UI fixes ([cf0f5cb](https://github.com/IBM/kui/commit/cf0f5cb)), closes [#702](https://github.com/IBM/kui/issues/702)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* some tables overflowed due to buggy scrollable css ([23d3353](https://github.com/IBM/kui/commit/23d3353)), closes [#575](https://github.com/IBM/kui/issues/575)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* various small fixes for tab UI ([c41d388](https://github.com/IBM/kui/commit/c41d388)), closes [#717](https://github.com/IBM/kui/issues/717)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* add a few more themes ([92199d3](https://github.com/IBM/kui/commit/92199d3)), closes [#608](https://github.com/IBM/kui/issues/608)
* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* switch about window to use a sidecar DOM ([90d3ad3](https://github.com/IBM/kui/commit/90d3ad3)), closes [#746](https://github.com/IBM/kui/issues/746)
* use editor more widely ([fe063de](https://github.com/IBM/kui/commit/fe063de)), closes [#532](https://github.com/IBM/kui/issues/532)
* **packages/kui-builder:** add atelier soft theme ([e1c907a](https://github.com/IBM/kui/commit/e1c907a)), closes [#860](https://github.com/IBM/kui/issues/860)
* **plugins/plugin-wrk:** wrk plugin ([d39a331](https://github.com/IBM/kui/commit/d39a331)), closes [#624](https://github.com/IBM/kui/issues/624)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)





# 0.22.0 (2019-03-10)


### Bug Fixes

* **apache-composer:** compose yoyo -t @demos/if.js broken in webpack mode ([14ac816](https://github.com/IBM/kui/commit/14ac816)), closes [#332](https://github.com/IBM/kui/issues/332)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **kui-builder:** improve webpack building process for external clients ([14763ca](https://github.com/IBM/kui/commit/14763ca)), closes [#433](https://github.com/IBM/kui/issues/433)
* **kui-builder:** more fixes for CD pipeline ([59bb0b7](https://github.com/IBM/kui/commit/59bb0b7)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** more fixes for CD pipeline ([184b45e](https://github.com/IBM/kui/commit/184b45e)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** more fixes for headless build ([3ae143c](https://github.com/IBM/kui/commit/3ae143c)), closes [#478](https://github.com/IBM/kui/issues/478)
* **kui-builder:** update CD publisher to reflect new clients/default/dist structure ([efe753d](https://github.com/IBM/kui/commit/efe753d)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** update kui-watch to support external clients ([cfef146](https://github.com/IBM/kui/commit/cfef146)), closes [#448](https://github.com/IBM/kui/issues/448)
* **packages/app:** fix for spinner going off-viewport ([0d095f0](https://github.com/IBM/kui/commit/0d095f0)), closes [#602](https://github.com/IBM/kui/issues/602)
* **packages/kui-builder:** allow headless clients to specify an alernate README location ([9d400a5](https://github.com/IBM/kui/commit/9d400a5)), closes [#527](https://github.com/IBM/kui/issues/527)
* **packages/kui-builder:** dark theme is missing a trailing semicolon ([c2c09f3](https://github.com/IBM/kui/commit/c2c09f3)), closes [#589](https://github.com/IBM/kui/issues/589)
* **packages/kui-builder:** fix for swapped yellow and green in dracula theme ([e07f822](https://github.com/IBM/kui/commit/e07f822)), closes [#619](https://github.com/IBM/kui/issues/619)
* **packages/kui-builder:** fixes for nord and zenburn colors ([aeb1e84](https://github.com/IBM/kui/commit/aeb1e84)), closes [#642](https://github.com/IBM/kui/issues/642)
* **packages/kui-builder:** improve row striping contrast of dark themes ([fab5c07](https://github.com/IBM/kui/commit/fab5c07)), closes [#661](https://github.com/IBM/kui/issues/661)
* **packages/kui-builder:** minor dark mode border color tweak ([2d20fda](https://github.com/IBM/kui/commit/2d20fda)), closes [#561](https://github.com/IBM/kui/issues/561)
* **packages/kui-builder:** nord theme's cyan color isn't right ([e0a5bb0](https://github.com/IBM/kui/commit/e0a5bb0)), closes [#628](https://github.com/IBM/kui/issues/628)
* **packages/kui-builder:** shorten atelier and gruvbox theme names ([0071a45](https://github.com/IBM/kui/commit/0071a45)), closes [#686](https://github.com/IBM/kui/issues/686)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-k8s:** improve k8s in absence of plugin-openwhisk ([30f8a3a](https://github.com/IBM/kui/commit/30f8a3a)), closes [#457](https://github.com/IBM/kui/issues/457) [#458](https://github.com/IBM/kui/issues/458)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-editor:** improved dark mode for editor ([8a7fd03](https://github.com/IBM/kui/commit/8a7fd03)), closes [#533](https://github.com/IBM/kui/issues/533) [#530](https://github.com/IBM/kui/issues/530)
* **proxy:** improve support for building proxy server from an external custom client ([177fac8](https://github.com/IBM/kui/commit/177fac8)), closes [#438](https://github.com/IBM/kui/issues/438)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* a few more tab tweaks ([8e31e5e](https://github.com/IBM/kui/commit/8e31e5e)), closes [#719](https://github.com/IBM/kui/issues/719)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* clicks on sidecar header etc. result in prompt losing focus ([2f78dfc](https://github.com/IBM/kui/commit/2f78dfc)), closes [#610](https://github.com/IBM/kui/issues/610)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* git status UI fixes ([cf0f5cb](https://github.com/IBM/kui/commit/cf0f5cb)), closes [#702](https://github.com/IBM/kui/issues/702)
* handle custom clients that don't provide plugin-core-support ([eb10966](https://github.com/IBM/kui/commit/eb10966)), closes [#615](https://github.com/IBM/kui/issues/615)
* **webpack:** improve theme override support ([e8b943a](https://github.com/IBM/kui/commit/e8b943a)), closes [#298](https://github.com/IBM/kui/issues/298)
* **webpack:** restore webpack publisher functionality ([2b4feeb](https://github.com/IBM/kui/commit/2b4feeb)), closes [#271](https://github.com/IBM/kui/issues/271)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* some tables overflowed due to buggy scrollable css ([23d3353](https://github.com/IBM/kui/commit/23d3353)), closes [#575](https://github.com/IBM/kui/issues/575)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* various small fixes for tab UI ([c41d388](https://github.com/IBM/kui/commit/c41d388)), closes [#717](https://github.com/IBM/kui/issues/717)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* add a few more themes ([92199d3](https://github.com/IBM/kui/commit/92199d3)), closes [#608](https://github.com/IBM/kui/issues/608)
* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **plugins/plugin-wrk:** wrk plugin ([d39a331](https://github.com/IBM/kui/commit/d39a331)), closes [#624](https://github.com/IBM/kui/issues/624)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)
* switch about window to use a sidecar DOM ([90d3ad3](https://github.com/IBM/kui/commit/90d3ad3)), closes [#746](https://github.com/IBM/kui/issues/746)
* use editor more widely ([fe063de](https://github.com/IBM/kui/commit/fe063de)), closes [#532](https://github.com/IBM/kui/issues/532)





# 0.21.0 (2019-03-10)


### Bug Fixes

* **apache-composer:** compose yoyo -t @demos/if.js broken in webpack mode ([14ac816](https://github.com/IBM/kui/commit/14ac816)), closes [#332](https://github.com/IBM/kui/issues/332)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **kui-builder:** improve webpack building process for external clients ([14763ca](https://github.com/IBM/kui/commit/14763ca)), closes [#433](https://github.com/IBM/kui/issues/433)
* **kui-builder:** more fixes for CD pipeline ([59bb0b7](https://github.com/IBM/kui/commit/59bb0b7)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** more fixes for CD pipeline ([184b45e](https://github.com/IBM/kui/commit/184b45e)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** more fixes for headless build ([3ae143c](https://github.com/IBM/kui/commit/3ae143c)), closes [#478](https://github.com/IBM/kui/issues/478)
* **kui-builder:** update CD publisher to reflect new clients/default/dist structure ([efe753d](https://github.com/IBM/kui/commit/efe753d)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** update kui-watch to support external clients ([cfef146](https://github.com/IBM/kui/commit/cfef146)), closes [#448](https://github.com/IBM/kui/issues/448)
* **packages/app:** fix for spinner going off-viewport ([0d095f0](https://github.com/IBM/kui/commit/0d095f0)), closes [#602](https://github.com/IBM/kui/issues/602)
* **packages/kui-builder:** allow headless clients to specify an alernate README location ([9d400a5](https://github.com/IBM/kui/commit/9d400a5)), closes [#527](https://github.com/IBM/kui/issues/527)
* **packages/kui-builder:** dark theme is missing a trailing semicolon ([c2c09f3](https://github.com/IBM/kui/commit/c2c09f3)), closes [#589](https://github.com/IBM/kui/issues/589)
* **packages/kui-builder:** fix for swapped yellow and green in dracula theme ([e07f822](https://github.com/IBM/kui/commit/e07f822)), closes [#619](https://github.com/IBM/kui/issues/619)
* **packages/kui-builder:** fixes for nord and zenburn colors ([aeb1e84](https://github.com/IBM/kui/commit/aeb1e84)), closes [#642](https://github.com/IBM/kui/issues/642)
* **packages/kui-builder:** improve row striping contrast of dark themes ([fab5c07](https://github.com/IBM/kui/commit/fab5c07)), closes [#661](https://github.com/IBM/kui/issues/661)
* **packages/kui-builder:** minor dark mode border color tweak ([2d20fda](https://github.com/IBM/kui/commit/2d20fda)), closes [#561](https://github.com/IBM/kui/issues/561)
* **packages/kui-builder:** nord theme's cyan color isn't right ([e0a5bb0](https://github.com/IBM/kui/commit/e0a5bb0)), closes [#628](https://github.com/IBM/kui/issues/628)
* **packages/kui-builder:** shorten atelier and gruvbox theme names ([0071a45](https://github.com/IBM/kui/commit/0071a45)), closes [#686](https://github.com/IBM/kui/issues/686)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-k8s:** improve k8s in absence of plugin-openwhisk ([30f8a3a](https://github.com/IBM/kui/commit/30f8a3a)), closes [#457](https://github.com/IBM/kui/issues/457) [#458](https://github.com/IBM/kui/issues/458)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-editor:** improved dark mode for editor ([8a7fd03](https://github.com/IBM/kui/commit/8a7fd03)), closes [#533](https://github.com/IBM/kui/issues/533) [#530](https://github.com/IBM/kui/issues/530)
* **proxy:** improve support for building proxy server from an external custom client ([177fac8](https://github.com/IBM/kui/commit/177fac8)), closes [#438](https://github.com/IBM/kui/issues/438)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* a few more tab tweaks ([8e31e5e](https://github.com/IBM/kui/commit/8e31e5e)), closes [#719](https://github.com/IBM/kui/issues/719)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* clicks on sidecar header etc. result in prompt losing focus ([2f78dfc](https://github.com/IBM/kui/commit/2f78dfc)), closes [#610](https://github.com/IBM/kui/issues/610)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* git status UI fixes ([cf0f5cb](https://github.com/IBM/kui/commit/cf0f5cb)), closes [#702](https://github.com/IBM/kui/issues/702)
* handle custom clients that don't provide plugin-core-support ([eb10966](https://github.com/IBM/kui/commit/eb10966)), closes [#615](https://github.com/IBM/kui/issues/615)
* **webpack:** improve theme override support ([e8b943a](https://github.com/IBM/kui/commit/e8b943a)), closes [#298](https://github.com/IBM/kui/issues/298)
* **webpack:** restore webpack publisher functionality ([2b4feeb](https://github.com/IBM/kui/commit/2b4feeb)), closes [#271](https://github.com/IBM/kui/issues/271)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* some tables overflowed due to buggy scrollable css ([23d3353](https://github.com/IBM/kui/commit/23d3353)), closes [#575](https://github.com/IBM/kui/issues/575)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* various small fixes for tab UI ([c41d388](https://github.com/IBM/kui/commit/c41d388)), closes [#717](https://github.com/IBM/kui/issues/717)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* add a few more themes ([92199d3](https://github.com/IBM/kui/commit/92199d3)), closes [#608](https://github.com/IBM/kui/issues/608)
* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **plugins/plugin-wrk:** wrk plugin ([d39a331](https://github.com/IBM/kui/commit/d39a331)), closes [#624](https://github.com/IBM/kui/issues/624)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)
* switch about window to use a sidecar DOM ([90d3ad3](https://github.com/IBM/kui/commit/90d3ad3)), closes [#746](https://github.com/IBM/kui/issues/746)
* use editor more widely ([fe063de](https://github.com/IBM/kui/commit/fe063de)), closes [#532](https://github.com/IBM/kui/issues/532)





# 0.20.0 (2019-03-10)


### Bug Fixes

* **apache-composer:** compose yoyo -t @demos/if.js broken in webpack mode ([14ac816](https://github.com/IBM/kui/commit/14ac816)), closes [#332](https://github.com/IBM/kui/issues/332)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **kui-builder:** improve webpack building process for external clients ([14763ca](https://github.com/IBM/kui/commit/14763ca)), closes [#433](https://github.com/IBM/kui/issues/433)
* **kui-builder:** more fixes for CD pipeline ([59bb0b7](https://github.com/IBM/kui/commit/59bb0b7)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** more fixes for CD pipeline ([184b45e](https://github.com/IBM/kui/commit/184b45e)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** more fixes for headless build ([3ae143c](https://github.com/IBM/kui/commit/3ae143c)), closes [#478](https://github.com/IBM/kui/issues/478)
* **kui-builder:** update CD publisher to reflect new clients/default/dist structure ([efe753d](https://github.com/IBM/kui/commit/efe753d)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** update kui-watch to support external clients ([cfef146](https://github.com/IBM/kui/commit/cfef146)), closes [#448](https://github.com/IBM/kui/issues/448)
* **packages/app:** fix for spinner going off-viewport ([0d095f0](https://github.com/IBM/kui/commit/0d095f0)), closes [#602](https://github.com/IBM/kui/issues/602)
* **packages/kui-builder:** allow headless clients to specify an alernate README location ([9d400a5](https://github.com/IBM/kui/commit/9d400a5)), closes [#527](https://github.com/IBM/kui/issues/527)
* **packages/kui-builder:** dark theme is missing a trailing semicolon ([c2c09f3](https://github.com/IBM/kui/commit/c2c09f3)), closes [#589](https://github.com/IBM/kui/issues/589)
* **packages/kui-builder:** fix for swapped yellow and green in dracula theme ([e07f822](https://github.com/IBM/kui/commit/e07f822)), closes [#619](https://github.com/IBM/kui/issues/619)
* **packages/kui-builder:** fixes for nord and zenburn colors ([aeb1e84](https://github.com/IBM/kui/commit/aeb1e84)), closes [#642](https://github.com/IBM/kui/issues/642)
* **packages/kui-builder:** improve row striping contrast of dark themes ([fab5c07](https://github.com/IBM/kui/commit/fab5c07)), closes [#661](https://github.com/IBM/kui/issues/661)
* **packages/kui-builder:** minor dark mode border color tweak ([2d20fda](https://github.com/IBM/kui/commit/2d20fda)), closes [#561](https://github.com/IBM/kui/issues/561)
* **packages/kui-builder:** nord theme's cyan color isn't right ([e0a5bb0](https://github.com/IBM/kui/commit/e0a5bb0)), closes [#628](https://github.com/IBM/kui/issues/628)
* **packages/kui-builder:** shorten atelier and gruvbox theme names ([0071a45](https://github.com/IBM/kui/commit/0071a45)), closes [#686](https://github.com/IBM/kui/issues/686)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-k8s:** improve k8s in absence of plugin-openwhisk ([30f8a3a](https://github.com/IBM/kui/commit/30f8a3a)), closes [#457](https://github.com/IBM/kui/issues/457) [#458](https://github.com/IBM/kui/issues/458)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-editor:** improved dark mode for editor ([8a7fd03](https://github.com/IBM/kui/commit/8a7fd03)), closes [#533](https://github.com/IBM/kui/issues/533) [#530](https://github.com/IBM/kui/issues/530)
* **proxy:** improve support for building proxy server from an external custom client ([177fac8](https://github.com/IBM/kui/commit/177fac8)), closes [#438](https://github.com/IBM/kui/issues/438)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* a few more tab tweaks ([8e31e5e](https://github.com/IBM/kui/commit/8e31e5e)), closes [#719](https://github.com/IBM/kui/issues/719)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* clicks on sidecar header etc. result in prompt losing focus ([2f78dfc](https://github.com/IBM/kui/commit/2f78dfc)), closes [#610](https://github.com/IBM/kui/issues/610)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* git status UI fixes ([cf0f5cb](https://github.com/IBM/kui/commit/cf0f5cb)), closes [#702](https://github.com/IBM/kui/issues/702)
* handle custom clients that don't provide plugin-core-support ([eb10966](https://github.com/IBM/kui/commit/eb10966)), closes [#615](https://github.com/IBM/kui/issues/615)
* **webpack:** improve theme override support ([e8b943a](https://github.com/IBM/kui/commit/e8b943a)), closes [#298](https://github.com/IBM/kui/issues/298)
* **webpack:** restore webpack publisher functionality ([2b4feeb](https://github.com/IBM/kui/commit/2b4feeb)), closes [#271](https://github.com/IBM/kui/issues/271)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* some tables overflowed due to buggy scrollable css ([23d3353](https://github.com/IBM/kui/commit/23d3353)), closes [#575](https://github.com/IBM/kui/issues/575)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* various small fixes for tab UI ([c41d388](https://github.com/IBM/kui/commit/c41d388)), closes [#717](https://github.com/IBM/kui/issues/717)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* add a few more themes ([92199d3](https://github.com/IBM/kui/commit/92199d3)), closes [#608](https://github.com/IBM/kui/issues/608)
* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **plugins/plugin-wrk:** wrk plugin ([d39a331](https://github.com/IBM/kui/commit/d39a331)), closes [#624](https://github.com/IBM/kui/issues/624)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)
* use editor more widely ([fe063de](https://github.com/IBM/kui/commit/fe063de)), closes [#532](https://github.com/IBM/kui/issues/532)





# 0.19.0 (2019-03-09)


### Bug Fixes

* **apache-composer:** compose yoyo -t @demos/if.js broken in webpack mode ([14ac816](https://github.com/IBM/kui/commit/14ac816)), closes [#332](https://github.com/IBM/kui/issues/332)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **kui-builder:** improve webpack building process for external clients ([14763ca](https://github.com/IBM/kui/commit/14763ca)), closes [#433](https://github.com/IBM/kui/issues/433)
* **kui-builder:** more fixes for CD pipeline ([59bb0b7](https://github.com/IBM/kui/commit/59bb0b7)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** more fixes for CD pipeline ([184b45e](https://github.com/IBM/kui/commit/184b45e)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** more fixes for headless build ([3ae143c](https://github.com/IBM/kui/commit/3ae143c)), closes [#478](https://github.com/IBM/kui/issues/478)
* **kui-builder:** update CD publisher to reflect new clients/default/dist structure ([efe753d](https://github.com/IBM/kui/commit/efe753d)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** update kui-watch to support external clients ([cfef146](https://github.com/IBM/kui/commit/cfef146)), closes [#448](https://github.com/IBM/kui/issues/448)
* **packages/app:** fix for spinner going off-viewport ([0d095f0](https://github.com/IBM/kui/commit/0d095f0)), closes [#602](https://github.com/IBM/kui/issues/602)
* **packages/kui-builder:** allow headless clients to specify an alernate README location ([9d400a5](https://github.com/IBM/kui/commit/9d400a5)), closes [#527](https://github.com/IBM/kui/issues/527)
* **packages/kui-builder:** dark theme is missing a trailing semicolon ([c2c09f3](https://github.com/IBM/kui/commit/c2c09f3)), closes [#589](https://github.com/IBM/kui/issues/589)
* **packages/kui-builder:** fix for swapped yellow and green in dracula theme ([e07f822](https://github.com/IBM/kui/commit/e07f822)), closes [#619](https://github.com/IBM/kui/issues/619)
* **packages/kui-builder:** fixes for nord and zenburn colors ([aeb1e84](https://github.com/IBM/kui/commit/aeb1e84)), closes [#642](https://github.com/IBM/kui/issues/642)
* **packages/kui-builder:** improve row striping contrast of dark themes ([fab5c07](https://github.com/IBM/kui/commit/fab5c07)), closes [#661](https://github.com/IBM/kui/issues/661)
* **packages/kui-builder:** minor dark mode border color tweak ([2d20fda](https://github.com/IBM/kui/commit/2d20fda)), closes [#561](https://github.com/IBM/kui/issues/561)
* **packages/kui-builder:** nord theme's cyan color isn't right ([e0a5bb0](https://github.com/IBM/kui/commit/e0a5bb0)), closes [#628](https://github.com/IBM/kui/issues/628)
* **packages/kui-builder:** shorten atelier and gruvbox theme names ([0071a45](https://github.com/IBM/kui/commit/0071a45)), closes [#686](https://github.com/IBM/kui/issues/686)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-k8s:** improve k8s in absence of plugin-openwhisk ([30f8a3a](https://github.com/IBM/kui/commit/30f8a3a)), closes [#457](https://github.com/IBM/kui/issues/457) [#458](https://github.com/IBM/kui/issues/458)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-editor:** improved dark mode for editor ([8a7fd03](https://github.com/IBM/kui/commit/8a7fd03)), closes [#533](https://github.com/IBM/kui/issues/533) [#530](https://github.com/IBM/kui/issues/530)
* **proxy:** improve support for building proxy server from an external custom client ([177fac8](https://github.com/IBM/kui/commit/177fac8)), closes [#438](https://github.com/IBM/kui/issues/438)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* a few more tab tweaks ([8e31e5e](https://github.com/IBM/kui/commit/8e31e5e)), closes [#719](https://github.com/IBM/kui/issues/719)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* clicks on sidecar header etc. result in prompt losing focus ([2f78dfc](https://github.com/IBM/kui/commit/2f78dfc)), closes [#610](https://github.com/IBM/kui/issues/610)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* git status UI fixes ([cf0f5cb](https://github.com/IBM/kui/commit/cf0f5cb)), closes [#702](https://github.com/IBM/kui/issues/702)
* handle custom clients that don't provide plugin-core-support ([eb10966](https://github.com/IBM/kui/commit/eb10966)), closes [#615](https://github.com/IBM/kui/issues/615)
* **webpack:** improve theme override support ([e8b943a](https://github.com/IBM/kui/commit/e8b943a)), closes [#298](https://github.com/IBM/kui/issues/298)
* **webpack:** restore webpack publisher functionality ([2b4feeb](https://github.com/IBM/kui/commit/2b4feeb)), closes [#271](https://github.com/IBM/kui/issues/271)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* some tables overflowed due to buggy scrollable css ([23d3353](https://github.com/IBM/kui/commit/23d3353)), closes [#575](https://github.com/IBM/kui/issues/575)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)
* various small fixes for tab UI ([c41d388](https://github.com/IBM/kui/commit/c41d388)), closes [#717](https://github.com/IBM/kui/issues/717)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* add a few more themes ([92199d3](https://github.com/IBM/kui/commit/92199d3)), closes [#608](https://github.com/IBM/kui/issues/608)
* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **plugins/plugin-wrk:** wrk plugin ([d39a331](https://github.com/IBM/kui/commit/d39a331)), closes [#624](https://github.com/IBM/kui/issues/624)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)
* use editor more widely ([fe063de](https://github.com/IBM/kui/commit/fe063de)), closes [#532](https://github.com/IBM/kui/issues/532)





# 0.18.0 (2019-03-08)


### Bug Fixes

* **apache-composer:** compose yoyo -t @demos/if.js broken in webpack mode ([14ac816](https://github.com/IBM/kui/commit/14ac816)), closes [#332](https://github.com/IBM/kui/issues/332)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **kui-builder:** improve webpack building process for external clients ([14763ca](https://github.com/IBM/kui/commit/14763ca)), closes [#433](https://github.com/IBM/kui/issues/433)
* **kui-builder:** more fixes for CD pipeline ([184b45e](https://github.com/IBM/kui/commit/184b45e)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** more fixes for CD pipeline ([59bb0b7](https://github.com/IBM/kui/commit/59bb0b7)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** more fixes for headless build ([3ae143c](https://github.com/IBM/kui/commit/3ae143c)), closes [#478](https://github.com/IBM/kui/issues/478)
* **kui-builder:** update CD publisher to reflect new clients/default/dist structure ([efe753d](https://github.com/IBM/kui/commit/efe753d)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** update kui-watch to support external clients ([cfef146](https://github.com/IBM/kui/commit/cfef146)), closes [#448](https://github.com/IBM/kui/issues/448)
* **packages/app:** fix for spinner going off-viewport ([0d095f0](https://github.com/IBM/kui/commit/0d095f0)), closes [#602](https://github.com/IBM/kui/issues/602)
* **packages/kui-builder:** allow headless clients to specify an alernate README location ([9d400a5](https://github.com/IBM/kui/commit/9d400a5)), closes [#527](https://github.com/IBM/kui/issues/527)
* **packages/kui-builder:** dark theme is missing a trailing semicolon ([c2c09f3](https://github.com/IBM/kui/commit/c2c09f3)), closes [#589](https://github.com/IBM/kui/issues/589)
* **packages/kui-builder:** fix for swapped yellow and green in dracula theme ([e07f822](https://github.com/IBM/kui/commit/e07f822)), closes [#619](https://github.com/IBM/kui/issues/619)
* **packages/kui-builder:** fixes for nord and zenburn colors ([aeb1e84](https://github.com/IBM/kui/commit/aeb1e84)), closes [#642](https://github.com/IBM/kui/issues/642)
* **packages/kui-builder:** improve row striping contrast of dark themes ([fab5c07](https://github.com/IBM/kui/commit/fab5c07)), closes [#661](https://github.com/IBM/kui/issues/661)
* **packages/kui-builder:** minor dark mode border color tweak ([2d20fda](https://github.com/IBM/kui/commit/2d20fda)), closes [#561](https://github.com/IBM/kui/issues/561)
* **packages/kui-builder:** nord theme's cyan color isn't right ([e0a5bb0](https://github.com/IBM/kui/commit/e0a5bb0)), closes [#628](https://github.com/IBM/kui/issues/628)
* **packages/kui-builder:** shorten atelier and gruvbox theme names ([0071a45](https://github.com/IBM/kui/commit/0071a45)), closes [#686](https://github.com/IBM/kui/issues/686)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-k8s:** improve k8s in absence of plugin-openwhisk ([30f8a3a](https://github.com/IBM/kui/commit/30f8a3a)), closes [#457](https://github.com/IBM/kui/issues/457) [#458](https://github.com/IBM/kui/issues/458)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-editor:** improved dark mode for editor ([8a7fd03](https://github.com/IBM/kui/commit/8a7fd03)), closes [#533](https://github.com/IBM/kui/issues/533) [#530](https://github.com/IBM/kui/issues/530)
* **proxy:** improve support for building proxy server from an external custom client ([177fac8](https://github.com/IBM/kui/commit/177fac8)), closes [#438](https://github.com/IBM/kui/issues/438)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* **webpack:** improve theme override support ([e8b943a](https://github.com/IBM/kui/commit/e8b943a)), closes [#298](https://github.com/IBM/kui/issues/298)
* **webpack:** restore webpack publisher functionality ([2b4feeb](https://github.com/IBM/kui/commit/2b4feeb)), closes [#271](https://github.com/IBM/kui/issues/271)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* clicks on sidecar header etc. result in prompt losing focus ([2f78dfc](https://github.com/IBM/kui/commit/2f78dfc)), closes [#610](https://github.com/IBM/kui/issues/610)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* handle custom clients that don't provide plugin-core-support ([eb10966](https://github.com/IBM/kui/commit/eb10966)), closes [#615](https://github.com/IBM/kui/issues/615)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* some tables overflowed due to buggy scrollable css ([23d3353](https://github.com/IBM/kui/commit/23d3353)), closes [#575](https://github.com/IBM/kui/issues/575)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* add a few more themes ([92199d3](https://github.com/IBM/kui/commit/92199d3)), closes [#608](https://github.com/IBM/kui/issues/608)
* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **plugins/plugin-wrk:** wrk plugin ([d39a331](https://github.com/IBM/kui/commit/d39a331)), closes [#624](https://github.com/IBM/kui/issues/624)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)
* use editor more widely ([fe063de](https://github.com/IBM/kui/commit/fe063de)), closes [#532](https://github.com/IBM/kui/issues/532)





# 0.17.0 (2019-03-06)


### Bug Fixes

* **apache-composer:** compose yoyo -t @demos/if.js broken in webpack mode ([14ac816](https://github.com/IBM/kui/commit/14ac816)), closes [#332](https://github.com/IBM/kui/issues/332)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **kui-builder:** improve webpack building process for external clients ([14763ca](https://github.com/IBM/kui/commit/14763ca)), closes [#433](https://github.com/IBM/kui/issues/433)
* **kui-builder:** more fixes for CD pipeline ([184b45e](https://github.com/IBM/kui/commit/184b45e)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** more fixes for CD pipeline ([59bb0b7](https://github.com/IBM/kui/commit/59bb0b7)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** more fixes for headless build ([3ae143c](https://github.com/IBM/kui/commit/3ae143c)), closes [#478](https://github.com/IBM/kui/issues/478)
* **kui-builder:** update CD publisher to reflect new clients/default/dist structure ([efe753d](https://github.com/IBM/kui/commit/efe753d)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** update kui-watch to support external clients ([cfef146](https://github.com/IBM/kui/commit/cfef146)), closes [#448](https://github.com/IBM/kui/issues/448)
* **packages/app:** fix for spinner going off-viewport ([0d095f0](https://github.com/IBM/kui/commit/0d095f0)), closes [#602](https://github.com/IBM/kui/issues/602)
* **packages/kui-builder:** allow headless clients to specify an alernate README location ([9d400a5](https://github.com/IBM/kui/commit/9d400a5)), closes [#527](https://github.com/IBM/kui/issues/527)
* **packages/kui-builder:** dark theme is missing a trailing semicolon ([c2c09f3](https://github.com/IBM/kui/commit/c2c09f3)), closes [#589](https://github.com/IBM/kui/issues/589)
* **packages/kui-builder:** fix for swapped yellow and green in dracula theme ([e07f822](https://github.com/IBM/kui/commit/e07f822)), closes [#619](https://github.com/IBM/kui/issues/619)
* **packages/kui-builder:** fixes for nord and zenburn colors ([aeb1e84](https://github.com/IBM/kui/commit/aeb1e84)), closes [#642](https://github.com/IBM/kui/issues/642)
* **packages/kui-builder:** minor dark mode border color tweak ([2d20fda](https://github.com/IBM/kui/commit/2d20fda)), closes [#561](https://github.com/IBM/kui/issues/561)
* **packages/kui-builder:** nord theme's cyan color isn't right ([e0a5bb0](https://github.com/IBM/kui/commit/e0a5bb0)), closes [#628](https://github.com/IBM/kui/issues/628)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-k8s:** improve k8s in absence of plugin-openwhisk ([30f8a3a](https://github.com/IBM/kui/commit/30f8a3a)), closes [#457](https://github.com/IBM/kui/issues/457) [#458](https://github.com/IBM/kui/issues/458)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-editor:** improved dark mode for editor ([8a7fd03](https://github.com/IBM/kui/commit/8a7fd03)), closes [#533](https://github.com/IBM/kui/issues/533) [#530](https://github.com/IBM/kui/issues/530)
* **proxy:** improve support for building proxy server from an external custom client ([177fac8](https://github.com/IBM/kui/commit/177fac8)), closes [#438](https://github.com/IBM/kui/issues/438)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* clicks on sidecar header etc. result in prompt losing focus ([2f78dfc](https://github.com/IBM/kui/commit/2f78dfc)), closes [#610](https://github.com/IBM/kui/issues/610)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* **webpack:** improve theme override support ([e8b943a](https://github.com/IBM/kui/commit/e8b943a)), closes [#298](https://github.com/IBM/kui/issues/298)
* **webpack:** restore webpack publisher functionality ([2b4feeb](https://github.com/IBM/kui/commit/2b4feeb)), closes [#271](https://github.com/IBM/kui/issues/271)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* handle custom clients that don't provide plugin-core-support ([eb10966](https://github.com/IBM/kui/commit/eb10966)), closes [#615](https://github.com/IBM/kui/issues/615)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* some tables overflowed due to buggy scrollable css ([23d3353](https://github.com/IBM/kui/commit/23d3353)), closes [#575](https://github.com/IBM/kui/issues/575)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* add a few more themes ([92199d3](https://github.com/IBM/kui/commit/92199d3)), closes [#608](https://github.com/IBM/kui/issues/608)
* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **plugins/plugin-wrk:** wrk plugin ([d39a331](https://github.com/IBM/kui/commit/d39a331)), closes [#624](https://github.com/IBM/kui/issues/624)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)





# 0.16.0 (2019-03-06)


### Bug Fixes

* **apache-composer:** compose yoyo -t @demos/if.js broken in webpack mode ([14ac816](https://github.com/IBM/kui/commit/14ac816)), closes [#332](https://github.com/IBM/kui/issues/332)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **kui-builder:** improve webpack building process for external clients ([14763ca](https://github.com/IBM/kui/commit/14763ca)), closes [#433](https://github.com/IBM/kui/issues/433)
* **kui-builder:** more fixes for CD pipeline ([184b45e](https://github.com/IBM/kui/commit/184b45e)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** more fixes for CD pipeline ([59bb0b7](https://github.com/IBM/kui/commit/59bb0b7)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** more fixes for headless build ([3ae143c](https://github.com/IBM/kui/commit/3ae143c)), closes [#478](https://github.com/IBM/kui/issues/478)
* **kui-builder:** update CD publisher to reflect new clients/default/dist structure ([efe753d](https://github.com/IBM/kui/commit/efe753d)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** update kui-watch to support external clients ([cfef146](https://github.com/IBM/kui/commit/cfef146)), closes [#448](https://github.com/IBM/kui/issues/448)
* **packages/app:** fix for spinner going off-viewport ([0d095f0](https://github.com/IBM/kui/commit/0d095f0)), closes [#602](https://github.com/IBM/kui/issues/602)
* **packages/kui-builder:** allow headless clients to specify an alernate README location ([9d400a5](https://github.com/IBM/kui/commit/9d400a5)), closes [#527](https://github.com/IBM/kui/issues/527)
* **packages/kui-builder:** dark theme is missing a trailing semicolon ([c2c09f3](https://github.com/IBM/kui/commit/c2c09f3)), closes [#589](https://github.com/IBM/kui/issues/589)
* **packages/kui-builder:** fix for swapped yellow and green in dracula theme ([e07f822](https://github.com/IBM/kui/commit/e07f822)), closes [#619](https://github.com/IBM/kui/issues/619)
* **packages/kui-builder:** fixes for nord and zenburn colors ([aeb1e84](https://github.com/IBM/kui/commit/aeb1e84)), closes [#642](https://github.com/IBM/kui/issues/642)
* **packages/kui-builder:** minor dark mode border color tweak ([2d20fda](https://github.com/IBM/kui/commit/2d20fda)), closes [#561](https://github.com/IBM/kui/issues/561)
* **packages/kui-builder:** nord theme's cyan color isn't right ([e0a5bb0](https://github.com/IBM/kui/commit/e0a5bb0)), closes [#628](https://github.com/IBM/kui/issues/628)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-k8s:** improve k8s in absence of plugin-openwhisk ([30f8a3a](https://github.com/IBM/kui/commit/30f8a3a)), closes [#457](https://github.com/IBM/kui/issues/457) [#458](https://github.com/IBM/kui/issues/458)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-editor:** improved dark mode for editor ([8a7fd03](https://github.com/IBM/kui/commit/8a7fd03)), closes [#533](https://github.com/IBM/kui/issues/533) [#530](https://github.com/IBM/kui/issues/530)
* **proxy:** improve support for building proxy server from an external custom client ([177fac8](https://github.com/IBM/kui/commit/177fac8)), closes [#438](https://github.com/IBM/kui/issues/438)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* clicks on sidecar header etc. result in prompt losing focus ([2f78dfc](https://github.com/IBM/kui/commit/2f78dfc)), closes [#610](https://github.com/IBM/kui/issues/610)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* **webpack:** improve theme override support ([e8b943a](https://github.com/IBM/kui/commit/e8b943a)), closes [#298](https://github.com/IBM/kui/issues/298)
* **webpack:** restore webpack publisher functionality ([2b4feeb](https://github.com/IBM/kui/commit/2b4feeb)), closes [#271](https://github.com/IBM/kui/issues/271)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* handle custom clients that don't provide plugin-core-support ([eb10966](https://github.com/IBM/kui/commit/eb10966)), closes [#615](https://github.com/IBM/kui/issues/615)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* some tables overflowed due to buggy scrollable css ([23d3353](https://github.com/IBM/kui/commit/23d3353)), closes [#575](https://github.com/IBM/kui/issues/575)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* add a few more themes ([92199d3](https://github.com/IBM/kui/commit/92199d3)), closes [#608](https://github.com/IBM/kui/issues/608)
* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **plugins/plugin-wrk:** wrk plugin ([d39a331](https://github.com/IBM/kui/commit/d39a331)), closes [#624](https://github.com/IBM/kui/issues/624)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)





# 0.15.0 (2019-03-06)


### Bug Fixes

* **apache-composer:** compose yoyo -t @demos/if.js broken in webpack mode ([14ac816](https://github.com/IBM/kui/commit/14ac816)), closes [#332](https://github.com/IBM/kui/issues/332)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **kui-builder:** improve webpack building process for external clients ([14763ca](https://github.com/IBM/kui/commit/14763ca)), closes [#433](https://github.com/IBM/kui/issues/433)
* **kui-builder:** more fixes for CD pipeline ([184b45e](https://github.com/IBM/kui/commit/184b45e)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** more fixes for CD pipeline ([59bb0b7](https://github.com/IBM/kui/commit/59bb0b7)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** more fixes for headless build ([3ae143c](https://github.com/IBM/kui/commit/3ae143c)), closes [#478](https://github.com/IBM/kui/issues/478)
* **kui-builder:** update CD publisher to reflect new clients/default/dist structure ([efe753d](https://github.com/IBM/kui/commit/efe753d)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** update kui-watch to support external clients ([cfef146](https://github.com/IBM/kui/commit/cfef146)), closes [#448](https://github.com/IBM/kui/issues/448)
* **packages/app:** fix for spinner going off-viewport ([0d095f0](https://github.com/IBM/kui/commit/0d095f0)), closes [#602](https://github.com/IBM/kui/issues/602)
* **packages/kui-builder:** allow headless clients to specify an alernate README location ([9d400a5](https://github.com/IBM/kui/commit/9d400a5)), closes [#527](https://github.com/IBM/kui/issues/527)
* **packages/kui-builder:** dark theme is missing a trailing semicolon ([c2c09f3](https://github.com/IBM/kui/commit/c2c09f3)), closes [#589](https://github.com/IBM/kui/issues/589)
* **packages/kui-builder:** fix for swapped yellow and green in dracula theme ([e07f822](https://github.com/IBM/kui/commit/e07f822)), closes [#619](https://github.com/IBM/kui/issues/619)
* **packages/kui-builder:** fixes for nord and zenburn colors ([aeb1e84](https://github.com/IBM/kui/commit/aeb1e84)), closes [#642](https://github.com/IBM/kui/issues/642)
* **packages/kui-builder:** minor dark mode border color tweak ([2d20fda](https://github.com/IBM/kui/commit/2d20fda)), closes [#561](https://github.com/IBM/kui/issues/561)
* **packages/kui-builder:** nord theme's cyan color isn't right ([e0a5bb0](https://github.com/IBM/kui/commit/e0a5bb0)), closes [#628](https://github.com/IBM/kui/issues/628)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-k8s:** improve k8s in absence of plugin-openwhisk ([30f8a3a](https://github.com/IBM/kui/commit/30f8a3a)), closes [#457](https://github.com/IBM/kui/issues/457) [#458](https://github.com/IBM/kui/issues/458)
* color contrast issues with dark mode ([15afe23](https://github.com/IBM/kui/commit/15afe23)), closes [#605](https://github.com/IBM/kui/issues/605)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-editor:** improved dark mode for editor ([8a7fd03](https://github.com/IBM/kui/commit/8a7fd03)), closes [#533](https://github.com/IBM/kui/issues/533) [#530](https://github.com/IBM/kui/issues/530)
* **proxy:** improve support for building proxy server from an external custom client ([177fac8](https://github.com/IBM/kui/commit/177fac8)), closes [#438](https://github.com/IBM/kui/issues/438)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* clicks on sidecar header etc. result in prompt losing focus ([2f78dfc](https://github.com/IBM/kui/commit/2f78dfc)), closes [#610](https://github.com/IBM/kui/issues/610)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* **webpack:** improve theme override support ([e8b943a](https://github.com/IBM/kui/commit/e8b943a)), closes [#298](https://github.com/IBM/kui/issues/298)
* **webpack:** restore webpack publisher functionality ([2b4feeb](https://github.com/IBM/kui/commit/2b4feeb)), closes [#271](https://github.com/IBM/kui/issues/271)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* handle custom clients that don't provide plugin-core-support ([eb10966](https://github.com/IBM/kui/commit/eb10966)), closes [#615](https://github.com/IBM/kui/issues/615)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* some tables overflowed due to buggy scrollable css ([23d3353](https://github.com/IBM/kui/commit/23d3353)), closes [#575](https://github.com/IBM/kui/issues/575)
* switch to base16 theme scheme ([5c6a88a](https://github.com/IBM/kui/commit/5c6a88a)), closes [#600](https://github.com/IBM/kui/issues/600)


### Features

* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* add a few more themes ([92199d3](https://github.com/IBM/kui/commit/92199d3)), closes [#608](https://github.com/IBM/kui/issues/608)
* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **plugins/plugin-wrk:** wrk plugin ([d39a331](https://github.com/IBM/kui/commit/d39a331)), closes [#624](https://github.com/IBM/kui/issues/624)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)





# 0.14.0 (2019-02-28)


### Bug Fixes

* **apache-composer:** compose yoyo -t @demos/if.js broken in webpack mode ([14ac816](https://github.com/IBM/kui/commit/14ac816)), closes [#332](https://github.com/IBM/kui/issues/332)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **kui-builder:** improve webpack building process for external clients ([14763ca](https://github.com/IBM/kui/commit/14763ca)), closes [#433](https://github.com/IBM/kui/issues/433)
* **kui-builder:** more fixes for CD pipeline ([184b45e](https://github.com/IBM/kui/commit/184b45e)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** more fixes for CD pipeline ([59bb0b7](https://github.com/IBM/kui/commit/59bb0b7)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** more fixes for headless build ([3ae143c](https://github.com/IBM/kui/commit/3ae143c)), closes [#478](https://github.com/IBM/kui/issues/478)
* **kui-builder:** update CD publisher to reflect new clients/default/dist structure ([efe753d](https://github.com/IBM/kui/commit/efe753d)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** update kui-watch to support external clients ([cfef146](https://github.com/IBM/kui/commit/cfef146)), closes [#448](https://github.com/IBM/kui/issues/448)
* **packages/kui-builder:** allow headless clients to specify an alernate README location ([9d400a5](https://github.com/IBM/kui/commit/9d400a5)), closes [#527](https://github.com/IBM/kui/issues/527)
* **packages/kui-builder:** dark theme is missing a trailing semicolon ([c2c09f3](https://github.com/IBM/kui/commit/c2c09f3)), closes [#589](https://github.com/IBM/kui/issues/589)
* **packages/kui-builder:** minor dark mode border color tweak ([2d20fda](https://github.com/IBM/kui/commit/2d20fda)), closes [#561](https://github.com/IBM/kui/issues/561)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-k8s:** improve k8s in absence of plugin-openwhisk ([30f8a3a](https://github.com/IBM/kui/commit/30f8a3a)), closes [#457](https://github.com/IBM/kui/issues/457) [#458](https://github.com/IBM/kui/issues/458)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-editor:** improved dark mode for editor ([8a7fd03](https://github.com/IBM/kui/commit/8a7fd03)), closes [#533](https://github.com/IBM/kui/issues/533) [#530](https://github.com/IBM/kui/issues/530)
* **proxy:** improve support for building proxy server from an external custom client ([177fac8](https://github.com/IBM/kui/commit/177fac8)), closes [#438](https://github.com/IBM/kui/issues/438)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* **webpack:** improve theme override support ([e8b943a](https://github.com/IBM/kui/commit/e8b943a)), closes [#298](https://github.com/IBM/kui/issues/298)
* **webpack:** restore webpack publisher functionality ([2b4feeb](https://github.com/IBM/kui/commit/2b4feeb)), closes [#271](https://github.com/IBM/kui/issues/271)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* some tables overflowed due to buggy scrollable css ([23d3353](https://github.com/IBM/kui/commit/23d3353)), closes [#575](https://github.com/IBM/kui/issues/575)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)





# 0.13.0 (2019-02-28)


### Bug Fixes

* **apache-composer:** compose yoyo -t @demos/if.js broken in webpack mode ([14ac816](https://github.com/IBM/kui/commit/14ac816)), closes [#332](https://github.com/IBM/kui/issues/332)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **kui-builder:** improve webpack building process for external clients ([14763ca](https://github.com/IBM/kui/commit/14763ca)), closes [#433](https://github.com/IBM/kui/issues/433)
* **kui-builder:** more fixes for CD pipeline ([184b45e](https://github.com/IBM/kui/commit/184b45e)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** more fixes for CD pipeline ([59bb0b7](https://github.com/IBM/kui/commit/59bb0b7)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** more fixes for headless build ([3ae143c](https://github.com/IBM/kui/commit/3ae143c)), closes [#478](https://github.com/IBM/kui/issues/478)
* **kui-builder:** update CD publisher to reflect new clients/default/dist structure ([efe753d](https://github.com/IBM/kui/commit/efe753d)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** update kui-watch to support external clients ([cfef146](https://github.com/IBM/kui/commit/cfef146)), closes [#448](https://github.com/IBM/kui/issues/448)
* **packages/kui-builder:** allow headless clients to specify an alernate README location ([9d400a5](https://github.com/IBM/kui/commit/9d400a5)), closes [#527](https://github.com/IBM/kui/issues/527)
* **packages/kui-builder:** dark theme is missing a trailing semicolon ([c2c09f3](https://github.com/IBM/kui/commit/c2c09f3)), closes [#589](https://github.com/IBM/kui/issues/589)
* **packages/kui-builder:** minor dark mode border color tweak ([2d20fda](https://github.com/IBM/kui/commit/2d20fda)), closes [#561](https://github.com/IBM/kui/issues/561)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-k8s:** improve k8s in absence of plugin-openwhisk ([30f8a3a](https://github.com/IBM/kui/commit/30f8a3a)), closes [#457](https://github.com/IBM/kui/issues/457) [#458](https://github.com/IBM/kui/issues/458)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-editor:** improved dark mode for editor ([8a7fd03](https://github.com/IBM/kui/commit/8a7fd03)), closes [#533](https://github.com/IBM/kui/issues/533) [#530](https://github.com/IBM/kui/issues/530)
* **proxy:** improve support for building proxy server from an external custom client ([177fac8](https://github.com/IBM/kui/commit/177fac8)), closes [#438](https://github.com/IBM/kui/issues/438)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* **webpack:** improve theme override support ([e8b943a](https://github.com/IBM/kui/commit/e8b943a)), closes [#298](https://github.com/IBM/kui/issues/298)
* **webpack:** restore webpack publisher functionality ([2b4feeb](https://github.com/IBM/kui/commit/2b4feeb)), closes [#271](https://github.com/IBM/kui/issues/271)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)
* ansi-to-html color definition updates ([74d7678](https://github.com/IBM/kui/commit/74d7678)), closes [#578](https://github.com/IBM/kui/issues/578)
* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* some tables overflowed due to buggy scrollable css ([23d3353](https://github.com/IBM/kui/commit/23d3353)), closes [#575](https://github.com/IBM/kui/issues/575)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)





# 0.12.0 (2019-02-27)


### Bug Fixes

* **apache-composer:** compose yoyo -t @demos/if.js broken in webpack mode ([14ac816](https://github.com/IBM/kui/commit/14ac816)), closes [#332](https://github.com/IBM/kui/issues/332)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **kui-builder:** improve webpack building process for external clients ([14763ca](https://github.com/IBM/kui/commit/14763ca)), closes [#433](https://github.com/IBM/kui/issues/433)
* **kui-builder:** more fixes for CD pipeline ([184b45e](https://github.com/IBM/kui/commit/184b45e)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** more fixes for CD pipeline ([59bb0b7](https://github.com/IBM/kui/commit/59bb0b7)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** more fixes for headless build ([3ae143c](https://github.com/IBM/kui/commit/3ae143c)), closes [#478](https://github.com/IBM/kui/issues/478)
* **kui-builder:** update CD publisher to reflect new clients/default/dist structure ([efe753d](https://github.com/IBM/kui/commit/efe753d)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** update kui-watch to support external clients ([cfef146](https://github.com/IBM/kui/commit/cfef146)), closes [#448](https://github.com/IBM/kui/issues/448)
* **packages/kui-builder:** allow headless clients to specify an alernate README location ([9d400a5](https://github.com/IBM/kui/commit/9d400a5)), closes [#527](https://github.com/IBM/kui/issues/527)
* **packages/kui-builder:** minor dark mode border color tweak ([2d20fda](https://github.com/IBM/kui/commit/2d20fda)), closes [#561](https://github.com/IBM/kui/issues/561)
* **packages/kui-builder:** theming fixes for webpack ([5254b73](https://github.com/IBM/kui/commit/5254b73)), closes [#524](https://github.com/IBM/kui/issues/524)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* **plugin-k8s:** improve k8s in absence of plugin-openwhisk ([30f8a3a](https://github.com/IBM/kui/commit/30f8a3a)), closes [#457](https://github.com/IBM/kui/issues/457) [#458](https://github.com/IBM/kui/issues/458)
* **plugins/plugin-bash-like:** improve markdown rendering ([fd37be5](https://github.com/IBM/kui/commit/fd37be5)), closes [#159](https://github.com/IBM/kui/issues/159)
* **plugins/plugin-editor:** improved dark mode for editor ([8a7fd03](https://github.com/IBM/kui/commit/8a7fd03)), closes [#533](https://github.com/IBM/kui/issues/533) [#530](https://github.com/IBM/kui/issues/530)
* **proxy:** improve support for building proxy server from an external custom client ([177fac8](https://github.com/IBM/kui/commit/177fac8)), closes [#438](https://github.com/IBM/kui/issues/438)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* **webpack:** improve theme override support ([e8b943a](https://github.com/IBM/kui/commit/e8b943a)), closes [#298](https://github.com/IBM/kui/issues/298)
* **webpack:** restore webpack publisher functionality ([2b4feeb](https://github.com/IBM/kui/commit/2b4feeb)), closes [#271](https://github.com/IBM/kui/issues/271)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* more dark mode tweaks, including for editor text ([1d353ae](https://github.com/IBM/kui/commit/1d353ae)), closes [#554](https://github.com/IBM/kui/issues/554)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **packages/app:** dark theme support ([51f8736](https://github.com/IBM/kui/commit/51f8736)), closes [#522](https://github.com/IBM/kui/issues/522)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)





# 0.11.0 (2019-02-22)


### Bug Fixes

* **apache-composer:** compose yoyo -t @demos/if.js broken in webpack mode ([14ac816](https://github.com/IBM/kui/commit/14ac816)), closes [#332](https://github.com/IBM/kui/issues/332)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **kui-builder:** improve webpack building process for external clients ([14763ca](https://github.com/IBM/kui/commit/14763ca)), closes [#433](https://github.com/IBM/kui/issues/433)
* **kui-builder:** more fixes for CD pipeline ([59bb0b7](https://github.com/IBM/kui/commit/59bb0b7)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** more fixes for CD pipeline ([184b45e](https://github.com/IBM/kui/commit/184b45e)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** more fixes for headless build ([3ae143c](https://github.com/IBM/kui/commit/3ae143c)), closes [#478](https://github.com/IBM/kui/issues/478)
* **kui-builder:** update CD publisher to reflect new clients/default/dist structure ([efe753d](https://github.com/IBM/kui/commit/efe753d)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** update kui-watch to support external clients ([cfef146](https://github.com/IBM/kui/commit/cfef146)), closes [#448](https://github.com/IBM/kui/issues/448)
* **packages/tests:** remove bin/corral from test runner ([1f7c263](https://github.com/IBM/kui/commit/1f7c263)), closes [#510](https://github.com/IBM/kui/issues/510) [#425](https://github.com/IBM/kui/issues/425)
* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* **plugin-k8s:** improve k8s in absence of plugin-openwhisk ([30f8a3a](https://github.com/IBM/kui/commit/30f8a3a)), closes [#457](https://github.com/IBM/kui/issues/457) [#458](https://github.com/IBM/kui/issues/458)
* **proxy:** improve support for building proxy server from an external custom client ([177fac8](https://github.com/IBM/kui/commit/177fac8)), closes [#438](https://github.com/IBM/kui/issues/438)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* **webpack:** improve theme override support ([e8b943a](https://github.com/IBM/kui/commit/e8b943a)), closes [#298](https://github.com/IBM/kui/issues/298)
* **webpack:** restore webpack publisher functionality ([2b4feeb](https://github.com/IBM/kui/commit/2b4feeb)), closes [#271](https://github.com/IBM/kui/issues/271)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)





# 0.10.0 (2019-02-21)


### Bug Fixes

* **apache-composer:** compose yoyo -t @demos/if.js broken in webpack mode ([14ac816](https://github.com/IBM/kui/commit/14ac816)), closes [#332](https://github.com/IBM/kui/issues/332)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **kui-builder:** improve webpack building process for external clients ([14763ca](https://github.com/IBM/kui/commit/14763ca)), closes [#433](https://github.com/IBM/kui/issues/433)
* **kui-builder:** more fixes for CD pipeline ([184b45e](https://github.com/IBM/kui/commit/184b45e)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** more fixes for CD pipeline ([59bb0b7](https://github.com/IBM/kui/commit/59bb0b7)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** more fixes for headless build ([3ae143c](https://github.com/IBM/kui/commit/3ae143c)), closes [#478](https://github.com/IBM/kui/issues/478)
* **kui-builder:** update CD publisher to reflect new clients/default/dist structure ([efe753d](https://github.com/IBM/kui/commit/efe753d)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** update kui-watch to support external clients ([cfef146](https://github.com/IBM/kui/commit/cfef146)), closes [#448](https://github.com/IBM/kui/issues/448)
* **plugin-k8s:** improve k8s in absence of plugin-openwhisk ([30f8a3a](https://github.com/IBM/kui/commit/30f8a3a)), closes [#457](https://github.com/IBM/kui/issues/457) [#458](https://github.com/IBM/kui/issues/458)
* **proxy:** improve support for building proxy server from an external custom client ([177fac8](https://github.com/IBM/kui/commit/177fac8)), closes [#438](https://github.com/IBM/kui/issues/438)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* **webpack:** improve theme override support ([e8b943a](https://github.com/IBM/kui/commit/e8b943a)), closes [#298](https://github.com/IBM/kui/issues/298)
* **webpack:** restore webpack publisher functionality ([2b4feeb](https://github.com/IBM/kui/commit/2b4feeb)), closes [#271](https://github.com/IBM/kui/issues/271)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)





# 0.9.0 (2019-02-21)


### Bug Fixes

* **apache-composer:** compose yoyo -t @demos/if.js broken in webpack mode ([14ac816](https://github.com/IBM/kui/commit/14ac816)), closes [#332](https://github.com/IBM/kui/issues/332)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **kui-builder:** improve webpack building process for external clients ([14763ca](https://github.com/IBM/kui/commit/14763ca)), closes [#433](https://github.com/IBM/kui/issues/433)
* **kui-builder:** more fixes for CD pipeline ([184b45e](https://github.com/IBM/kui/commit/184b45e)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** more fixes for CD pipeline ([59bb0b7](https://github.com/IBM/kui/commit/59bb0b7)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** more fixes for headless build ([3ae143c](https://github.com/IBM/kui/commit/3ae143c)), closes [#478](https://github.com/IBM/kui/issues/478)
* **kui-builder:** update CD publisher to reflect new clients/default/dist structure ([efe753d](https://github.com/IBM/kui/commit/efe753d)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** update kui-watch to support external clients ([cfef146](https://github.com/IBM/kui/commit/cfef146)), closes [#448](https://github.com/IBM/kui/issues/448)
* **plugin-k8s:** improve k8s in absence of plugin-openwhisk ([30f8a3a](https://github.com/IBM/kui/commit/30f8a3a)), closes [#457](https://github.com/IBM/kui/issues/457) [#458](https://github.com/IBM/kui/issues/458)
* **proxy:** improve support for building proxy server from an external custom client ([177fac8](https://github.com/IBM/kui/commit/177fac8)), closes [#438](https://github.com/IBM/kui/issues/438)
* **test:** refactor /tests ([98f6096](https://github.com/IBM/kui/commit/98f6096)), closes [#496](https://github.com/IBM/kui/issues/496)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* **webpack:** improve theme override support ([e8b943a](https://github.com/IBM/kui/commit/e8b943a)), closes [#298](https://github.com/IBM/kui/issues/298)
* **webpack:** restore webpack publisher functionality ([2b4feeb](https://github.com/IBM/kui/commit/2b4feeb)), closes [#271](https://github.com/IBM/kui/issues/271)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)





## 0.8.1 (2019-02-20)


### Bug Fixes

* **apache-composer:** compose yoyo -t [@demos](https://github.com/demos)/if.js broken in webpack mode ([14ac816](https://github.com/IBM/kui/commit/14ac816)), closes [#332](https://github.com/IBM/kui/issues/332)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **kui-builder:** improve webpack building process for external clients ([14763ca](https://github.com/IBM/kui/commit/14763ca)), closes [#433](https://github.com/IBM/kui/issues/433)
* **kui-builder:** more fixes for CD pipeline ([184b45e](https://github.com/IBM/kui/commit/184b45e)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** more fixes for CD pipeline ([59bb0b7](https://github.com/IBM/kui/commit/59bb0b7)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** more fixes for headless build ([3ae143c](https://github.com/IBM/kui/commit/3ae143c)), closes [#478](https://github.com/IBM/kui/issues/478)
* **kui-builder:** update CD publisher to reflect new clients/default/dist structure ([efe753d](https://github.com/IBM/kui/commit/efe753d)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** update kui-watch to support external clients ([cfef146](https://github.com/IBM/kui/commit/cfef146)), closes [#448](https://github.com/IBM/kui/issues/448)
* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* **plugin-k8s:** improve k8s in absence of plugin-openwhisk ([30f8a3a](https://github.com/IBM/kui/commit/30f8a3a)), closes [#457](https://github.com/IBM/kui/issues/457) [#458](https://github.com/IBM/kui/issues/458)
* **proxy:** improve support for building proxy server from an external custom client ([177fac8](https://github.com/IBM/kui/commit/177fac8)), closes [#438](https://github.com/IBM/kui/issues/438)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* **webpack:** improve theme override support ([e8b943a](https://github.com/IBM/kui/commit/e8b943a)), closes [#298](https://github.com/IBM/kui/issues/298)
* **webpack:** restore webpack publisher functionality ([2b4feeb](https://github.com/IBM/kui/commit/2b4feeb)), closes [#271](https://github.com/IBM/kui/issues/271)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)





# 0.8.0 (2019-02-20)


### Bug Fixes

* **apache-composer:** compose yoyo -t [@demos](https://github.com/demos)/if.js broken in webpack mode ([14ac816](https://github.com/IBM/kui/commit/14ac816)), closes [#332](https://github.com/IBM/kui/issues/332)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **kui-builder:** improve webpack building process for external clients ([14763ca](https://github.com/IBM/kui/commit/14763ca)), closes [#433](https://github.com/IBM/kui/issues/433)
* **kui-builder:** more fixes for CD pipeline ([184b45e](https://github.com/IBM/kui/commit/184b45e)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** more fixes for CD pipeline ([59bb0b7](https://github.com/IBM/kui/commit/59bb0b7)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** more fixes for headless build ([3ae143c](https://github.com/IBM/kui/commit/3ae143c)), closes [#478](https://github.com/IBM/kui/issues/478)
* **kui-builder:** update CD publisher to reflect new clients/default/dist structure ([efe753d](https://github.com/IBM/kui/commit/efe753d)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** update kui-watch to support external clients ([cfef146](https://github.com/IBM/kui/commit/cfef146)), closes [#448](https://github.com/IBM/kui/issues/448)
* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* **plugin-k8s:** improve k8s in absence of plugin-openwhisk ([30f8a3a](https://github.com/IBM/kui/commit/30f8a3a)), closes [#457](https://github.com/IBM/kui/issues/457) [#458](https://github.com/IBM/kui/issues/458)
* **proxy:** improve support for building proxy server from an external custom client ([177fac8](https://github.com/IBM/kui/commit/177fac8)), closes [#438](https://github.com/IBM/kui/issues/438)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* **webpack:** improve theme override support ([e8b943a](https://github.com/IBM/kui/commit/e8b943a)), closes [#298](https://github.com/IBM/kui/issues/298)
* **webpack:** restore webpack publisher functionality ([2b4feeb](https://github.com/IBM/kui/commit/2b4feeb)), closes [#271](https://github.com/IBM/kui/issues/271)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)





# 0.7.0 (2019-02-19)


### Bug Fixes

* **apache-composer:** compose yoyo -t [@demos](https://github.com/demos)/if.js broken in webpack mode ([14ac816](https://github.com/IBM/kui/commit/14ac816)), closes [#332](https://github.com/IBM/kui/issues/332)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **kui-builder:** improve webpack building process for external clients ([14763ca](https://github.com/IBM/kui/commit/14763ca)), closes [#433](https://github.com/IBM/kui/issues/433)
* **kui-builder:** more fixes for headless build ([3ae143c](https://github.com/IBM/kui/commit/3ae143c)), closes [#478](https://github.com/IBM/kui/issues/478)
* **kui-builder:** update CD publisher to reflect new clients/default/dist structure ([8726d12](https://github.com/IBM/kui/commit/8726d12)), closes [#482](https://github.com/IBM/kui/issues/482)
* **kui-builder:** update kui-watch to support external clients ([cfef146](https://github.com/IBM/kui/commit/cfef146)), closes [#448](https://github.com/IBM/kui/issues/448)
* **plugin-k8s:** improve k8s in absence of plugin-openwhisk ([30f8a3a](https://github.com/IBM/kui/commit/30f8a3a)), closes [#457](https://github.com/IBM/kui/issues/457) [#458](https://github.com/IBM/kui/issues/458)
* **proxy:** improve support for building proxy server from an external custom client ([177fac8](https://github.com/IBM/kui/commit/177fac8)), closes [#438](https://github.com/IBM/kui/issues/438)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* **webpack:** improve theme override support ([e8b943a](https://github.com/IBM/kui/commit/e8b943a)), closes [#298](https://github.com/IBM/kui/issues/298)
* **webpack:** restore webpack publisher functionality ([2b4feeb](https://github.com/IBM/kui/commit/2b4feeb)), closes [#271](https://github.com/IBM/kui/issues/271)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)





# 0.6.0 (2019-02-13)


### Bug Fixes

* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* **apache-composer:** compose yoyo -t [@demos](https://github.com/demos)/if.js broken in webpack mode ([14ac816](https://github.com/IBM/kui/commit/14ac816)), closes [#332](https://github.com/IBM/kui/issues/332)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **kui-builder:** improve webpack building process for external clients ([14763ca](https://github.com/IBM/kui/commit/14763ca)), closes [#433](https://github.com/IBM/kui/issues/433)
* **proxy:** improve support for building proxy server from an external custom client ([177fac8](https://github.com/IBM/kui/commit/177fac8)), closes [#438](https://github.com/IBM/kui/issues/438)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* **webpack:** improve theme override support ([e8b943a](https://github.com/IBM/kui/commit/e8b943a)), closes [#298](https://github.com/IBM/kui/issues/298)
* **webpack:** restore webpack publisher functionality ([2b4feeb](https://github.com/IBM/kui/commit/2b4feeb)), closes [#271](https://github.com/IBM/kui/issues/271)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)





# 0.5.0 (2019-02-04)


### Bug Fixes

* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* **apache-composer:** compose yoyo -t [@demos](https://github.com/demos)/if.js broken in webpack mode ([14ac816](https://github.com/IBM/kui/commit/14ac816)), closes [#332](https://github.com/IBM/kui/issues/332)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* **webpack:** improve theme override support ([e8b943a](https://github.com/IBM/kui/commit/e8b943a)), closes [#298](https://github.com/IBM/kui/issues/298)
* **webpack:** restore webpack publisher functionality ([2b4feeb](https://github.com/IBM/kui/commit/2b4feeb)), closes [#271](https://github.com/IBM/kui/issues/271)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)





# 0.4.0 (2019-02-03)


### Bug Fixes

* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* **apache-composer:** compose yoyo -t [@demos](https://github.com/demos)/if.js broken in webpack mode ([14ac816](https://github.com/IBM/kui/commit/14ac816)), closes [#332](https://github.com/IBM/kui/issues/332)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* **webpack:** improve theme override support ([e8b943a](https://github.com/IBM/kui/commit/e8b943a)), closes [#298](https://github.com/IBM/kui/issues/298)
* **webpack:** restore webpack publisher functionality ([2b4feeb](https://github.com/IBM/kui/commit/2b4feeb)), closes [#271](https://github.com/IBM/kui/issues/271)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)





# 0.3.0 (2019-02-03)


### Bug Fixes

* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* **apache-composer:** compose yoyo -t [@demos](https://github.com/demos)/if.js broken in webpack mode ([14ac816](https://github.com/IBM/kui/commit/14ac816)), closes [#332](https://github.com/IBM/kui/issues/332)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* **webpack:** improve theme override support ([e8b943a](https://github.com/IBM/kui/commit/e8b943a)), closes [#298](https://github.com/IBM/kui/issues/298)
* **webpack:** restore webpack publisher functionality ([2b4feeb](https://github.com/IBM/kui/commit/2b4feeb)), closes [#271](https://github.com/IBM/kui/issues/271)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)





# 0.2.0 (2019-02-03)


### Bug Fixes

* fixes for auth in browser+proxy mode ([a441c33](https://github.com/IBM/kui/commit/a441c33)), closes [#287](https://github.com/IBM/kui/issues/287) [#286](https://github.com/IBM/kui/issues/286) [#289](https://github.com/IBM/kui/issues/289)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/IBM/kui/commit/e41e159)), closes [#319](https://github.com/IBM/kui/issues/319)
* **apache-composer:** compose yoyo -t [@demos](https://github.com/demos)/if.js broken in webpack mode ([14ac816](https://github.com/IBM/kui/commit/14ac816)), closes [#332](https://github.com/IBM/kui/issues/332)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/IBM/kui/commit/34e6f48)), closes [#306](https://github.com/IBM/kui/issues/306)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/IBM/kui/commit/f636fb6)), closes [#259](https://github.com/IBM/kui/issues/259)
* **webpack:** improve theme override support ([e8b943a](https://github.com/IBM/kui/commit/e8b943a)), closes [#298](https://github.com/IBM/kui/issues/298)
* **webpack:** restore webpack publisher functionality ([2b4feeb](https://github.com/IBM/kui/commit/2b4feeb)), closes [#271](https://github.com/IBM/kui/issues/271)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/IBM/kui/commit/d1b4e75)), closes [#329](https://github.com/IBM/kui/issues/329)


### Features

* kuiproxy ([530c278](https://github.com/IBM/kui/commit/530c278)), closes [#266](https://github.com/IBM/kui/issues/266) [#278](https://github.com/IBM/kui/issues/278) [#279](https://github.com/IBM/kui/issues/279)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/IBM/kui/commit/bc65dc2)), closes [#274](https://github.com/IBM/kui/issues/274)





# 0.1.0 (2019-02-03)


### Bug Fixes

* fixes for auth in browser+proxy mode ([a441c33](https://github.com/starpit/kui/commit/a441c33)), closes [#287](https://github.com/starpit/kui/issues/287) [#286](https://github.com/starpit/kui/issues/286) [#289](https://github.com/starpit/kui/issues/289)
* local dev-mode ./bin/kui is missing theme ([e41e159](https://github.com/starpit/kui/commit/e41e159)), closes [#319](https://github.com/starpit/kui/issues/319)
* **apache-composer:** compose yoyo -t [@demos](https://github.com/demos)/if.js broken in webpack mode ([14ac816](https://github.com/starpit/kui/commit/14ac816)), closes [#332](https://github.com/starpit/kui/issues/332)
* **core:** more gracefully handle dom and errors in plugin compiler ([34e6f48](https://github.com/starpit/kui/commit/34e6f48)), closes [#306](https://github.com/starpit/kui/issues/306)
* **webpack:** fixes for webpack build regressions ([f636fb6](https://github.com/starpit/kui/commit/f636fb6)), closes [#259](https://github.com/starpit/kui/issues/259)
* **webpack:** improve theme override support ([e8b943a](https://github.com/starpit/kui/commit/e8b943a)), closes [#298](https://github.com/starpit/kui/issues/298)
* **webpack:** restore webpack publisher functionality ([2b4feeb](https://github.com/starpit/kui/commit/2b4feeb)), closes [#271](https://github.com/starpit/kui/issues/271)
* **wskflow:** fix for preview [@demos](https://github.com/demos) in webpack mode ([d1b4e75](https://github.com/starpit/kui/commit/d1b4e75)), closes [#329](https://github.com/starpit/kui/issues/329)


### Features

* kuiproxy ([530c278](https://github.com/starpit/kui/commit/530c278)), closes [#266](https://github.com/starpit/kui/issues/266) [#278](https://github.com/starpit/kui/issues/278) [#279](https://github.com/starpit/kui/issues/279)
* **webpack:** dockerized webpack build ([bc65dc2](https://github.com/starpit/kui/commit/bc65dc2)), closes [#274](https://github.com/starpit/kui/issues/274)

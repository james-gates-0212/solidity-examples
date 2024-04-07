![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fjames-gates-0212%2Fsolidity-examples)
![GitHub forks](https://img.shields.io/github/forks/james-gates-0212/solidity-examples?style=flat)
![GitHub Discussions](https://img.shields.io/github/discussions/james-gates-0212/solidity-examples)
![GitHub Issues](https://img.shields.io/github/issues/james-gates-0212/solidity-examples)
![GitHub License](https://img.shields.io/github/license/james-gates-0212/solidity-examples)
![GitHub Repo stars](https://img.shields.io/github/stars/james-gates-0212/solidity-examples?style=flat)
![GitHub top language](https://img.shields.io/github/languages/top/james-gates-0212/solidity-examples)
![GitHub repo file or directory count](https://img.shields.io/github/directory-file-count/james-gates-0212/solidity-examples)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/james-gates-0212/solidity-examples)
![GitHub repo size](https://img.shields.io/github/repo-size/james-gates-0212/solidity-examples)
![GitHub Release](https://img.shields.io/github/v/release/james-gates-0212/solidity-examples)
![GitHub Tag](https://img.shields.io/github/v/tag/james-gates-0212/solidity-examples)

[![Auto Assign](https://github.com/james-gates-0212/solidity-examples/actions/workflows/auto-assign.yml/badge.svg)](https://github.com/james-gates-0212/solidity-examples/actions/workflows/auto-assign.yml)
[![CodeQL](https://github.com/james-gates-0212/solidity-examples/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/james-gates-0212/solidity-examples/actions/workflows/github-code-scanning/codeql)
[![Proof HTML](https://github.com/james-gates-0212/solidity-examples/actions/workflows/proof-html.yml/badge.svg)](https://github.com/james-gates-0212/solidity-examples/actions/workflows/proof-html.yml)

# Solidity Examples

This is a compilation of Solidity examples that I worked on while learning about Solidity and developing smart contracts.

Nearly all the smart contracts are accompanied by tests, so feel free to experiment with them to gain a deeper understanding of the Solidity programming language and the business logic within the contracts themselves.

## Table of Contents

### Basic

1. [Hello World](basic/01-hello-world/contracts/HelloWorld.sol)
2. [First App](basic/02-first-app/contracts/FirstApp.sol)
3. [Primary Data Types](basic/03-primary-data-types/contracts/PrimaryDataTypes.sol)
4. [Variables](basic/04-variables/contracts/Variables.sol)
5. [Constants](basic/05-constants/contracts/Constants.sol)
6. [Immutable](basic/06-immutable/contracts/Immutable.sol)
7. [Reading & Writing to a State Variable](basic/07-reading-and-writing-to-a-state-variable/contracts/SimpleStorage.sol)
8. [Ether and Wei](basic/08-ether-and-wei/contracts/EtherUnits.sol)
9. [Gas and Gas Price](basic/09-gas-and-gas-price/contracts/Gas.sol)
10. [If and Else](basic/10-if-and-else/contracts/IfElse.sol)
11. [For and While Loop](basic/11-for-and-while-loop/contracts/Loop.sol)
12. [Mapping](basic/12-mapping/contracts/Mapping.sol)
13. [Array](basic/13-array/contracts/Array.sol)
14. [Enum](basic/14-enum/contracts/Enum.sol)
15. [Structs](basic/15-structs/contracts/Structs.sol)
16. [Data Locations - Storage, Memory, and Calldata](basic/16-data-locations/contracts/DataLocations.sol)
17. [Transient Storage :construction:](basic/17-transient-storage/contracts/TransientStorage.sol)
18. [Function](basic/18-function/contracts/Function.sol)
19. [View and Pure Functions](basic/19-view-and-pure-functions/contracts/ViewAndPure.sol)
20. [Error](basic/20-error/contracts/Error.sol)
21. [Function Modifier](basic/21-function-modifier/contracts/FunctionModifier.sol)
22. [Events](basic/22-events/contracts/Event.sol)
23. [Constructor](basic/23-constructor/contracts/Constructor.sol)
24. [Inheritance](basic/24-inheritance/contracts/Inheritance.sol)
25. [Shadowing Inherited State Variables](basic/25-shadowing-inherited-state-variables/contracts/ShadowingInherits.sol)
26. [Calling Parent Contracts](basic/26-calling-parent-contracts/contracts/CallingParentContracts.sol)
27. [Visibility](basic/27-visibility/contracts/Visibility.sol)
28. [Interface](basic/28-interface/contracts/Interface.sol)
29. [Payable](basic/29-payable/contracts/Payable.sol)
30. [Sending Ether (transfer, send, call)](basic/30-sending-ether/contracts/SendingEther.sol)
31. [Fallback](basic/31-fallback/contracts/Fallback.sol)
32. [Call](basic/32-call/contracts/Call.sol)

## Contributors

We enthusiastically welcome pull requests from all contributors. By actively participating in submitting examples, we firmly believe that others will find them invaluable when embarking on their Solidity journey.

[![@james-gates-0212](https://github.com/james-gates-0212.png?size=150)](https://github.com/james-gates-0212)
[![@clive-goldminer](https://github.com/clive-goldminer.png?size=150)](https://github.com/clive-goldminer)

## License

The software is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

## Preparation

```bash
npm i -g pnpm
pnpm install
```

## Git commit

> [!NOTE]\
> Please use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for your commits.

e.g.

```
{emoji}<type>[scope]: <subject>
[body]
[footer]
```

### Types

> [!IMPORTANT]\
> `type` should be one of belows.

```
add
adopt
apply
build
chore
config
delete
docs
feat
fix
init
refactor
remove
style
test
update
upgrade
```

### Emoji

> [!IMPORTANT]\
> Your commit should start with gitmoji code.\
> Please check the emoji code on https://gitmoji.dev/

| Description                                                   | Emoji | Code                          |
| :------------------------------------------------------------ | :---: | :---------------------------- |
| Add a dependency.                                             |  ➕   | `:heavy_plus_sign:`           |
| Add a failing test.                                           |  🧪   | `:test_tube:`                 |
| Add or update a .gitignore file.                              |  🙈   | `:see_no_evil:`               |
| Add or update an easter egg.                                  |  🥚   | `:egg:`                       |
| Add or update analytics or track code.                        |  📈   | `:chart_with_upwards_trend:`  |
| Add or update animations and transitions.                     |  💫   | `:dizzy:`                     |
| Add or update assets.                                         |  🍱   | `:bento:`                     |
| Add or update business logic.                                 |  👔   | `:necktie:`                   |
| Add or update CI build system.                                |  👷   | `:construction_worker:`       |
| Add or update code related to multithreading or concurrency.  |  🧵   | `:thread:`                    |
| Add or update code related to validation.                     |  🦺   | `:safety_vest:`               |
| Add or update comments in source code.                        |  💡   | `:bulb:`                      |
| Add or update compiled files or packages.                     |  📦️  | `:package:`                   |
| Add or update configuration files.                            |  🔧   | `:wrench:`                    |
| Add or update contributor(s).                                 |  👥   | `:busts_in_silhouette:`       |
| Add or update development scripts.                            |  🔨   | `:hammer:`                    |
| Add or update documentation.                                  |  📝   | `:memo:`                      |
| Add or update healthcheck.                                    |  🩺   | `:stethoscope:`               |
| Add or update license.                                        |  📄   | `:page_facing_up:`            |
| Add or update logs.                                           |  🔊   | `:loud_sound:`                |
| Add or update secrets.                                        |  🔐   | `:closed_lock_with_key:`      |
| Add or update seed files.                                     |  🌱   | `:seedling:`                  |
| Add or update snapshots.                                      |  📸   | `:camera_flash:`              |
| Add or update text and literals.                              |  💬   | `:speech_balloon:`            |
| Add or update the UI and style files.                         |  💄   | `:lipstick:`                  |
| Add or update types.                                          |  🏷️   | `:label:`                     |
| Add sponsorships or money related infrastructure.             |  💸   | `:money_with_wings:`          |
| Add, update, or pass tests.                                   |  ✅   | `:white_check_mark:`          |
| Add, update, or remove feature flags.                         |  🚩   | `:triangular_flag_on_post:`   |
| Begin a project.                                              |  🎉   | `:tada:`                      |
| Catch errors.                                                 |  🥅   | `:goal_net:`                  |
| Critical hotfix.                                              |  🚑️  | `:ambulance:`                 |
| Data exploration/inspection.                                  |  🧐   | `:monocle_face:`              |
| Deploy stuff.                                                 |  🚀   | `:rocket:`                    |
| Deprecate code that needs to be cleaned up.                   |  🗑️   | `:wastebasket:`               |
| Downgrade dependencies.                                       |  ⬇️   | `:arrow_down:`                |
| Fix a bug.                                                    |  🐛   | `:bug:`                       |
| Fix CI Build.                                                 |  💚   | `:green_heart:`               |
| Fix compiler / linter warnings.                               |  🚨   | `:rotating_light:`            |
| Fix security or privacy issues.                               |  🔒️  | `:lock:`                      |
| Fix typos.                                                    |  ✏️   | `:pencil2:`                   |
| Improve accessibility.                                        |  ♿️   | `:wheelchair:`                |
| Improve developer experience.                                 |  🧑‍💻   | `:technologist:`              |
| Improve performance.                                          |  ⚡️  | `:zap:`                       |
| Improve SEO.                                                  |  🔍️  | `:mag:`                       |
| Improve structure / format of the code.                       |  🎨   | `:art:`                       |
| Improve user experience / usability.                          |  🚸   | `:children_crossing:`         |
| Infrastructure related changes.                               |  🧱   | `:bricks:`                    |
| Internationalization and localization.                        |  🌐   | `:globe_with_meridians:`      |
| Introduce breaking changes.                                   |  💥   | `:boom:`                      |
| Introduce new features.                                       |  ✨   | `:sparkles:`                  |
| Make architectural changes.                                   |  🏗️   | `:building_construction:`     |
| Merge branches.                                               |  🔀   | `:twisted_rightwards_arrows:` |
| Mock things.                                                  |  🤡   | `:clown_face:`                |
| Move or rename resources (e.g.:` files, paths, routes).       |  🚚   | `:truck:`                     |
| Perform database related changes.                             |  🗃️   | `:card_file_box:`             |
| Perform experiments.                                          |  ⚗️   | `:alembic:`                   |
| Pin dependencies to specific versions.                        |  📌   | `:pushpin:`                   |
| Refactor code.                                                |  ♻️   | `:recycle:`                   |
| Release / Version tags.                                       |  🔖   | `:bookmark:`                  |
| Remove a dependency.                                          |  ➖   | `:heavy_minus_sign:`          |
| Remove code or files.                                         |  🔥   | `:fire:`                      |
| Remove dead code.                                             |  ⚰️   | `:coffin:`                    |
| Remove logs.                                                  |  🔇   | `:mute:`                      |
| Revert changes.                                               |  ⏪️  | `:rewind:`                    |
| Simple fix for a non-critical issue.                          |  🩹   | `:adhesive_bandage:`          |
| Update code due to external API changes.                      |  👽️  | `:alien:`                     |
| Upgrade dependencies.                                         |  ⬆️   | `:arrow_up:`                  |
| Work in progress.                                             |  🚧   | `:construction:`              |
| Work on code related to authorization, roles and permissions. |  🛂   | `:passport_control:`          |
| Work on responsive design.                                    |  📱   | `:iphone:`                    |
| Write bad code that needs to be improved.                     |  💩   | `:poop:`                      |
| Write code drunkenly.                                         |  🍻   | `:beers:`                     |

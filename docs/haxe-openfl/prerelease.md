---
id: prerelease
title: Install Feathers UI prerelease from Github
sidebar_label: Install Prerelease Builds
---

> ⚠ Be careful! The newest [Feathers UI](/) source code from Github is more likely to contain bugs and incomplete features. It is not recommended for production use.
>
> Most people should probably [install the newest official build from Haxelib](./installation.md).

[Feathers UI](/) developers who want to live on the cutting edge may install the library directly from [its Github repository](https://github.com/feathersui/feathersui-openfl). Installing from Github provides access to new components and features that may not have been released on Haxelib yet, but it also has a higher risk of bugs in code that hasn't been thoroughly tested yet.

## Prerequisites

- [Haxe 4.0.0 or newer](https://haxe.org/download/)

## Install

To install Feathers UI from Github, use the [**haxelib git**](https://lib.haxe.org/documentation/using-haxelib/#git) command.

```sh
haxelib git feathersui https://github.com/feathersui/feathersui-openfl.git
```

This command will automatically install any required dependencies, including [OpenFL](https://openfl.org/). If this is the first time OpenFL has been installed on your computer, you should also run its setup command.

```sh
haxelib run openfl setup
```

## Update

When installed from Github, the [**haxelib update**](https://lib.haxe.org/documentation/using-haxelib/#update) command works too. It will pull the newest commits.

```sh
haxelib update feathersui
```

## Documentation

Every commit to Github automatically updates the [Unstable API reference](https://api.feathersui.com/unstable/).

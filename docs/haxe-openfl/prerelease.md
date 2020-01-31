---
id: prerelease
title: Install Feathers UI prerelease from Github
sidebar_label: Install Prerelease Builds
---

> ⚠ Be careful! The newest [Feathers UI](/) source code from Github is more likely to contain bugs and incomplete features. It is not recommended for production use.
>
> Most people should probably [install the newest official build from Haxelib](./installation.md).

[Feathers UI](/) developers who want to live on the cutting edge may install the library directly from [its Github repository](https://github.com/BowlerHatLLC/feathersui-openfl). Installing from Github provides access to new components and features that may not have been released on Haxelib yet, but it also has a higher risk of bugs in code that hasn't been thoroughly tested yet.

## Install

To install Feathers UI from Github, use the [**haxelib git**](https://lib.haxe.org/documentation/using-haxelib/#git) command.

```sh
haxelib git feathersui https://github.com/BowlerHatLLC/feathersui-openfl.git
```

## Update

When installed from Github, the [**haxelib update**](https://lib.haxe.org/documentation/using-haxelib/#update) command works too. It will pull the newest commits.

```sh
haxelib update feathersui
```

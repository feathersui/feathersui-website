---
id: installation
title: Install Feathers UI for Haxe and OpenFL
sidebar_label: Installation
---

> 🚨 Feathers UI for Haxe/OpenFL is currently in a **pre-alpha** state. Everything is considered unstable and subject to change without notice. Use at your own risk.
>
> For a more stable version of Feathers UI, try out the original [AS3/Starling version](../as3-starling/getting-started) instead.

[Feathers UI](/) is not yet published on [Haxelib](https://lib.haxe.org). Instead, it must be installed from the [Github repository](https://github.com/BowlerHatLLC/feathersui-openfl). This is temporary. A future build will be published on Haxelib, once things are more stable.

## Prerequisites

**Haxe 4.0.0-rc.3** or newer is required. Find the latest release candidate on the [Haxe Download List](https://haxe.org/download/list/).

## Installation

In a terminal, use the [**haxelib git**](https://lib.haxe.org/documentation/using-haxelib/#git) command to install Feathers UI from its Github repository:

```sh
haxelib git feathersui https://github.com/BowlerHatLLC/feathersui-openfl.git
```

This command will automatically install any required dependencies too, including [OpenFL](https://openfl.org/).

## Update

When a new version of Feathers UI is released, you can update/upgrade by running the following command:

```sh
haxelib update feathersui
```

> When Feathers UI is installed from Github, this command will pull the latest commits.

## Next Steps

Now that Feathers UI and its dependencies are installed, you can create a project in your favorite editor.

- [Create a project in HaxeDevelop](haxedevelop.md)

- [Create a project in Visual Studio Code](visual-studio-code.md)

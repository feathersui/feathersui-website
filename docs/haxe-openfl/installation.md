---
id: installation
title: Install Feathers UI for Haxe and OpenFL
sidebar_label: Installation
---

> 🚨 Feathers UI for Haxe/OpenFL is currently in a **pre-alpha** state. Everything is considered unstable and subject to change without notice. Use at your own risk.
>
> For a more stable version of Feathers UI, try out the original [AS3/Starling version](../as3-starling/getting-started) instead.

Feathers UI is **not** currently available on [Haxelib](https://lib.haxe.org). Because this new version of the framework is still in a pre-alpha state, it's only [available on Github](https://github.com/BowlerHatLLC/feathersui-openfl). **This is temporary.** In the future, installing Feathers UI will be much easier.

## Prerequisites

**Haxe 4.0.0-rc.3** or newer is required. Find the latest release candidate on the [Haxe Download List](https://haxe.org/download/list/).

## Installation

For now, you can install Feathers UI by following these steps:

1. Open a terminal.

2. Run [**haxelib install**](https://lib.haxe.org/documentation/using-haxelib/#install) to download the [OpenFL](https://openfl.org/) and [Actuate](https://lib.haxe.org/p/actuate/) dependencies from [Haxelib](https://lib.haxe.org/):

   ```sh
   haxelib install openfl
   haxelib install actuate
   ```

   OpenFL provides cross-platform graphics rendering, networking, and other core APIs. Actuate is a library to create animations programatically.

3. Run [**git clone**](https://git-scm.com/docs/git-clone) to check out [BowlerHatLLC/feathersui-openfl](https://github.com/BowlerHatLLC/feathersui-openfl) from Github.

   ```sh
   git clone git@github.com:BowlerHatLLC/feathersui-openfl.git
   ```

4. Run [**haxelib dev**](https://lib.haxe.org/documentation/using-haxelib/#dev) to tell Haxe where to find Feathers UI when you want to use it as a dependency in your project.

   ```sh
   haxelib dev feathersui feathersui-openfl
   ```

### In the future

After Feathers UI is officially released on Haxelib, you will need to run the following command to stop using the development version of Feathers UI:

```sh
haxelib dev feathersui
```

## Next Steps

Now that Feathers UI and its dependencies are installed, you can create a project in your favorite editor.

- [Create a project in HaxeDevelop](haxedevelop.md)
- [Create a project in Visual Studio Code](visual-studio-code.md)

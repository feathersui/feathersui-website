---
title: Build a Feathers UI project as a Neko VM desktop app
sidebar_label: Neko VM
---

[Feathers UI](/) may be used to build desktop applications targeting the [Neko](https://nekovm.org) virtual machine.

> Note: Targeting Neko is best suited for debugging purposes only. For production applications, consider targeting [HashLink](./build-hashlink.md) or native C++ (with the [Windows](./build-windows.md), [macOS](./build-macos.md), and [Linux](./build-linux.md) targets) instead.

## Prerequisites

Follow the standard [Feathers UI installation instructions](./installation.md).

No additional dependencies are required to target the Neko virtual machine.

## Build

To build for the `neko` target, run the following command.

```sh
openfl build neko
```

Use the `-debug` flag to create a build to include extra debugging information, including full stack traces when there's an exception or crash.

```sh
openfl build neko -debug
```

The build's output will be written to the _bin/neko/bin_ folder.

> Your [_project.xml_ file](https://lime.openfl.org/docs/project-files/xml-format/) may optionally specify an output folder different from _bin_.
>
> ```xml
> <app path="Export"/>
> ```
>
> In the example above, the output would be generated in _Export/neko/bin_ instead.

## Run / Debug

OpenFL provides the `test` command to launch your project using the Neko virtual machine.

```sh
openfl test neko
```

## Troubleshooting

In the future, common error messages and their solutions will appear in this section.

> ### Did you get some other error message that you don't understand?
>
> Configuring OpenFL builds for various targets can be a little tricky! Head over to either the [Feathers UI community forum](https://community.feathersui.com/) or the [Feathers UI Discord](https://discord.feathersui.com/). Explain which command you tried to run, be sure to mention that you are targeting **neko**, and post the error message (and any additional relevant output). Ideally, we can help you figure out a solution, and then we'll also add it to this troubleshooting section, so that everyone can benefit.

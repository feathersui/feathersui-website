---
title: Build a Feathers UI project as a HashLink VM desktop app
layout: "docs.html"
sidebarTitle: HashLink VM
ogDescription: "Build for Windows, macOS, and Linux with Haxe and HashLink"
ogImageURL: /img/feathersui-hashlink-og.png
---

[Feathers UI](/) may be used to build desktop applications targeting the [HashLink](https://hashlink.haxe.org) virtual machine.

## Prerequisites

Follow the standard [Feathers UI installation instructions](./installation.md).

No additional dependencies are required to target the HashLink virtual machine.

## Build

To build for the `hl` target, run the following command.

```sh
openfl build hl
```

Use the `-debug` flag to create a build to include extra debugging information, including full stack traces when there's an exception or crash.

```sh
openfl build hl -debug
```

The build's output will be written to the _bin/hl/bin_ folder.

> Your [_project.xml_ file](https://lime.openfl.org/docs/project-files/xml-format/) may optionally specify an output folder different from _bin_.
>
> ```xml
> <app path="Export"/>
> ```
>
> In the example above, the output would be generated in _Export/hl/bin_ instead.

## Run / Debug

OpenFL provides the `test` command to launch your project using the HashLink virtual machine.

```sh
openfl test hl
```

## Troubleshooting

In the future, common error messages and their solutions will appear in this section.

> ### Did you get some other error message that you don't understand?
>
> Configuring OpenFL builds for various targets can be a little tricky! Head over to either the [Feathers UI community forum](https://community.feathersui.com/) or the [Feathers UI Discord](https://discord.feathersui.com/). Explain which command you tried to run, be sure to mention that you are targeting **hashlink**, and post the error message (and any additional relevant output). Ideally, we can help you figure out a solution, and then we'll also add it to this troubleshooting section, so that everyone can benefit.

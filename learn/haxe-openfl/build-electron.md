---
title: Build a Feathers UI project as an Electron desktop app
layout: "docs.html"
sidebarTitle: Electron
ogDescription: "Build for Windows, macOS, and Linux with Haxe and Electron"
ogImageURL: /img/feathersui-electron-og.png
---

[Feathers UI](/) may be used to build [Electron](https://www.electronjs.org) desktop applications with HTML/JS.

> Note: Consider using a different target than Electron for creating desktop applications, such as native C++ (with the [Windows](./build-windows.md), [macOS](./build-macos.md), and [Linux](./build-linux.md) targets). While Electron is technically available for OpenFL, other targets are more mature and offer better performance.

## Prerequisites

In addition to the dependencies specified in the [Feathers UI installation instructions](./installation.md), building an Electron application with Feathers UI has some additional requirements.

- [Node.js](https://nodejs.org/)
- [Electron](https://www.electronjs.org/) may be installed using the following command:

  ```sh
  npm install -g electron
  ```

## Build

To build for the `electron` target, run the following command.

```sh
openfl build electron
```

Use the `-debug` flag to create a build to include extra debugging information that a web browser can use to map exceptions and stack traces back to the original _.hx_ files.

```sh
openfl build electron -debug
```

The build's output will be written to the _bin/electron/bin_ folder.

> Your [_project.xml_ file](https://lime.openfl.org/docs/project-files/xml-format/) may optionally specify an output folder different from _bin_.
>
> ```xml
> <app path="Export"/>
> ```
>
> In the example above, the output would be generated in _Export/electron/bin_ instead.

## Run / Debug

OpenFL provides the `test` command to launch your project using Electron.

```sh
openfl test electron
```

## Troubleshooting

### Error on macOS says "electron: command not found"

Electron is not installed globally. Run the following command to install Electron.

```sh
npm install -g electron
```

### Error on Windows says "'electron' is not recognized as an internal or external command, operable program or batch file."

Electron is not installed globally. Run the following command to install Electron.

```sh
npm install -g electron
```

> ### Did you get some other error message that you don't understand?
>
> Configuring OpenFL builds for various targets can be a little tricky! Head over to either the [Feathers UI community forum](https://community.feathersui.com/) or the [Feathers UI Discord](https://discord.feathersui.com/). Explain which command you tried to run, be sure to mention that you are targeting **electron**, and post the error message (and any additional relevant output). Ideally, we can help you figure out a solution, and then we'll also add it to this troubleshooting section, so that everyone can benefit.

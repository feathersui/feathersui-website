---
id: build-macos
title: Build a Feathers UI project as a macOS app
sidebar_label: macOS
---

[Feathers UI](/) may be used to build desktop applications targeting Apple's macOS operating system.

## Prerequisites

In addition to the dependencies specified in the [Feathers UI installation instructions](./installation.md), building a macOS application with Feathers UI has some additional requirements.

- An Apple computer running macOS. macOS apps cannot be built on Windows or Linux.

- Install [Xcode](https://developer.apple.com/xcode/) from the macOS App Store.

  - Launch Xcode at least once to "install additional required components".

## Build

To build for the `mac` target, run the following command.

```sh
openfl build mac
```

Use the `-debug` flag to create a build to include extra debugging information, including full stack traces when there's an exception or crash.

```sh
openfl build mac -debug
```

The build's output will be written to the _bin/mac/bin_ folder.

> Your [_project.xml_ file](https://lime.software/docs/project-files/xml-format/) may optionally specify an output folder different from _bin_.
>
> ```xml
> <app path="Export"/>
> ```
>
> In the example above, the output would be generated in _Export/mac/bin_ instead.

## Troubleshooting

In the future, common error messages and their solutions will appear in this section.

> ### Did you get some other error message that you don't understand?
>
> Configuring OpenFL to build for native targets, like macOS or Windows, can be a little tricky! Head over to either the [Feathers UI community forum](https://community.feathersui.com/) or the [Feathers UI Discord](https://discord.feathersui.com/). Explain which command you tried to run, be sure to mention that you are targeting **mac**, and post the error message (and any additional relevant output). Ideally, we can help you figure out a solution, and then we'll also add it to this troubleshooting section, so that everyone can benefit.

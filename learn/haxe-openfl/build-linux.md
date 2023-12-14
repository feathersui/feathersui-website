---
title: Build a Feathers UI project as a Linux app
layout: "docs.html"
sidebarTitle: Linux
---

[Feathers UI](/) may be used to build desktop applications targeting Linux distributions.

## Prerequisites

In addition to the dependencies specified in the [Feathers UI installation instructions](./installation.md), building a Linux application with Feathers UI has some additional requirements.

- A computer running a distribution of Linux. Linux apps cannot be built on other operating systems, such as Windows or macOS.

No additional software needs to be installed on most Linux computers. If you need to build 32-bit apps from a 64-bit distribution, see the official [Linux setup instructions for Lime/OpenFL](https://lime.openfl.org/docs/advanced-setup/linux/).

## Build

To build for the `linux` target, run the following command.

```sh
openfl build linux
```

Use the `-debug` flag to create a build to include extra debugging information, including full stack traces when there's an exception or crash.

```sh
openfl build linux -debug
```

The build's output will be written to the _bin/linux/bin_ folder.

> Your [_project.xml_ file](https://lime.openfl.org/docs/project-files/xml-format/) may optionally specify an output folder different from _bin_.
>
> ```xml
> <app path="Export"/>
> ```
>
> In the example above, the output would be generated in _Export/linux/bin_ instead.

## Run / Debug

OpenFL provides the `test` command to compile and launch your project executable on Linux.

```sh
openfl test linux
```

## Troubleshooting

## App executable crashes without exception, and a try/catch around the line where it happens has no effect when targeting C++ for Windows, macOS, or Linux

Haxe's _cpp_ target is stricter than other Haxe targets when you try to access a field or method on a `null` value. Instead of throwing an exception, a Haxe C++ app immediately crashes — with no way to recover, not even with [try/catch](https://haxe.org/manual/expression-try-catch.html). However, it is possible to enable a flag to force Haxe's C++ target to behave more like other targets. Add the following define to your OpenFL _project.xml_ file, and then create a new build with the `-clean` command line option (or delete your output directory before building).

```xml
<haxedef name="HXCPP_CHECK_POINTER" />
```

Using `HXCPP_CHECK_POINTER` may add some overhead that could negatively affect performance. It may be a good idea to enable it temporarily for debugging purposes, fix the issue, and then disable it again.

> ### Did you get some other error message that you don't understand?
>
> Configuring OpenFL to build for native targets, like Linux or Windows, can be a little tricky! Head over to either the [Feathers UI community forum](https://community.feathersui.com/) or the [Feathers UI Discord](https://discord.feathersui.com/). Explain which command you tried to run, be sure to mention that you are targeting **linux**, and post the error message (and any additional relevant output). Ideally, we can help you figure out a solution, and then we'll also add it to this troubleshooting section, so that everyone can benefit.

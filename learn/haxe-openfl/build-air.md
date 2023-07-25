---
title: Build a Feathers UI project as an Adobe AIR mobile or desktop app
layout: "docs.html"
sidebarTitle: Adobe AIR
---

[Feathers UI](/) may be used to build mobile and desktop applications targeting the [Adobe AIR](https://airsdk.dev) runtime, maintained by [HARMAN](https://airsdk.harman.com/).

## Prerequisites

In addition to the dependencies specified in the [Feathers UI installation instructions](./installation.md), building an Adobe AIR application with Feathers UI has some additional requirements.

- [Download the Adobe AIR SDK](https://airsdk.harman.com/download)

Run the following command (with the correct path on your computer) to configure where OpenFL can find the AIR SDK.

```sh
openfl config AIR_SDK path/to/AIR_SDK
```

## Build Desktop

To build for the `air` target and create a desktop app, run the following command.

```sh
openfl build air
```

Use the `-debug` flag to create a build to include extra debugging information, including full stack traces when there's an exception or crash.

```sh
openfl build air -debug
```

The build's output will be written to the _bin/air/bin_ folder.

> Your [_project.xml_ file](https://lime.openfl.org/docs/project-files/xml-format/) may optionally specify an output folder different from _bin_.
>
> ```xml
> <app path="Export"/>
> ```
>
> In the example above, the output would be generated in _Export/air/bin_ instead.

### Build Android

Run the following command to build an _.apk_ file for Android:

```sh
openfl build air -android
```

### Build iOS

Run the following command to build an _.ipa_ file for iOS and iPadOS:

```sh
openfl build air -ios
```

## Run / Debug

OpenFL provides the `test` command to launch your project using the Adobe AIR runtime.

```sh
openfl test air
```

### Mobile simulator

The Adobe AIR debug launcher supports simulating mobile devices. Use the `-air-simulator` option to skip packaging the _.apk_ or _.ipa_ file.

```sh
openfl test air -android -air-simulator
```

## Troubleshooting

## Error on macOS says "adl: No such file or directory"

The configured path to the Adobe AIR SDK may be invalid.

Run the following command (replace _path/to/AIR\_SDK_ with the correct path on your computer) to re-configure the AIR SDK path.

```sh
openfl config AIR_SDK path/to/AIR_SDK
```

## Error on Windows says "The system cannot find the path specified."

The configured path to the Adobe AIR SDK may be invalid.

Run the following command (replace _path/to/AIR\_SDK_ with the correct path on your computer) to re-configure the AIR SDK path.

```sh
openfl config AIR_SDK path/to/AIR_SDK
```

> ### Did you get some other error message that you don't understand?
>
> Configuring OpenFL builds for various targets can be a little tricky! Head over to either the [Feathers UI community forum](https://community.feathersui.com/) or the [Feathers UI Discord](https://discord.feathersui.com/). Explain which command you tried to run, be sure to mention that you are targeting **air**, and post the error message (and any additional relevant output). Ideally, we can help you figure out a solution, and then we'll also add it to this troubleshooting section, so that everyone can benefit.

---
title: Build a Feathers UI project as an iOS app
layout: "docs.html"
sidebarTitle: iOS
ogDescription: "Native iOS C++ mobile app with Haxe and Feathers UI"
ogImageURL: /img/feathersui-ios-og.png
---

[Feathers UI](/) may be used to build mobile applications targeting Apple's iOS operating system (including iPadOS).

## Prerequisites

In addition to the dependencies specified in the [Feathers UI installation instructions](./installation.md), building an iOS application with Feathers UI has some additional requirements.

- An Apple computer running macOS. iOS apps cannot be built on Windows or Linux.

- Install [Xcode](https://developer.apple.com/xcode/) from the macOS App Store.

  - Launch Xcode at least once to "install additional required components".

## Build

To build for the `ios` target, run the following command.

```sh
openfl build ios
```

Use the `-debug` flag to create a build to include extra debugging information, including full stack traces when there's an exception or crash.

```sh
openfl build ios -debug
```

The build's output will be written to the _bin/android/bin_ folder. The _.apk_ file may be found in _bin/android/bin/app/build/outputs/apk/debug_ (including release builds).

> Your [_project.xml_ file](https://lime.openfl.org/docs/project-files/xml-format/) may optionally specify an output folder different from _bin_.
>
> ```xml
> <app path="Export"/>
> ```
>
> In the example above, the output would be generated in _Export/android/bin_ instead.

### iOS Simulator

Add the `-simulator` flag to build your app for Xcode's device simulator on your development machine.

```sh
openfl build ios -simulator
```

To install the app in the iOS simulator, follow these steps.

1. Launch **Simulator.app**.
1. Select your desired device by opening the **File** menu, then **Open Device**.
1. Wait a moment for the simulated device to start.
1. Drag and drop your Feathers UI _.app_ file from the Finder to the simulated device's home screen.
1. Click the app icon to launch.

## Troubleshooting

### Error: Signing for "ProjectName" requires a development team. Select the development team in the Signing & Capabilities editor.

The signing options for iOS have not been specified in the OpenFL _project.xml_ file.

One way to resolve this issue is to add your **Team ID** to your [_project.xml_ file](https://lime.openfl.org/docs/project-files/xml-format/). The Team ID is assigned by Apple, and it may be found in the _Membership_ section of the [Apple Developer Portal](https://developer.apple.com/account/).

```xml
<certificate team-id="XXXXXXXX" />
```

### Error: xcode-select: error: tool 'xcodebuild' requires Xcode, but active developer directory '/Library/Developer/CommandLineTools' is a command line tools instance

Run the following command in a terminal to resolve this issue.

```sh
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
```

## App executable crashes without exception, and a try/catch around the line where it happens has no effect when targeting C++ for Android or iOS

Haxe's _cpp_ target is stricter than other Haxe targets when you try to access a field or method on a `null` value. Instead of throwing an exception, a Haxe C++ app immediately crashes — with no way to recover, not even with [try/catch](https://haxe.org/manual/expression-try-catch.html). However, it is possible to enable a flag to force Haxe's C++ target to behave more like other targets. Add the following define to your OpenFL _project.xml_ file, and then create a new build with the `-clean` command line option (or delete your output directory before building).

```xml
<haxedef name="HXCPP_CHECK_POINTER" />
```

Using `HXCPP_CHECK_POINTER` may add some overhead that could negatively affect performance. It may be a good idea to enable it temporarily for debugging purposes, fix the issue, and then disable it again.

> ### Did you get some other error message that you don't understand?
>
> Configuring OpenFL to build for native targets, like iOS or Android, can be a little tricky! Head over to either the [Feathers UI community forum](https://community.feathersui.com/) or the [Feathers UI Discord](https://discord.feathersui.com/). Explain which command you tried to run, be sure to mention that you are targeting **ios**, and post the error message (and any additional relevant output). Ideally, we can help you figure out a solution, and then we'll also add it to this troubleshooting section, so that everyone can benefit.

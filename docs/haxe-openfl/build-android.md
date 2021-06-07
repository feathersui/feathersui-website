---
id: build-android
title: Build a Feathers UI project as an Android app
sidebar_label: Android
---

[Feathers UI](/) may be used to build mobile applications targeting Google's Android operating system.

## Prerequisites

In addition to the dependencies specified in the [Feathers UI installation instructions](./installation.md), building an Android application with Feathers UI has some additional requirements.

- [Install the Java OpenJDK](https://adoptopenjdk.net/) (version 8 or newer)

- [Download Android Studio](https://developer.android.com/studio)

  - Launch Android Studio at least once to go through its setup wizard that downloads the Android SDK components.

- [Download Android NDK **r21e**](https://developer.android.com/ndk/downloads/older_releases)

  - Note: The Android NDK is not the same as the Android SDK. You need both.

  - Do **not** download versions that are newer than NDK r21. NDK r22 and newer are not currently compatible with Haxe. The version of the NDK that Android Studio offers to install will be too new for Haxe.

  - Extract the archive somewhere on your file system, and take note of the absolute path because it will be used in a later step.

  > On macOS, be sure to download the _Mac App Bundle_ rather than the _.zip_ bundle. You will download a _.dmg_ file. By using the signed and notarized _Mac App Bundle_, you will ensure that Gatekeeper does not block the executables from the NDK from running.
  >
  > When you open the _.dmg_ file, it will contain an _.app_ file. Right click this _.app_ file, and choose **Show Package Contents**. Inside the _.app_ file, the NDK is located at _Contents/NDK_. Copy this folder somewhere on your hard drive.

### Configure OpenFL for Android

To set the locations of various tools required to build Android apps, you need to run the following command:

```hx
openfl setup android
```

It will request the paths to several of the required tools that were installed in previous steps.

#### Android SDK

Pass in the absolute path of the Android SDK.

> Run Android Studio at least one time to go through its setup wizard that downloads the Android SDK components.

Typically, when the Android SDK is installed by Android Studio, it is located at a standard location on each platform:

- Windows: _C:\Users\\**username**\AppData\Local\Android\Sdk_
- macOS: _~/Library/Android/sdk_
- Linux: _~/Android/Sdk_

#### Android NDK

Pass in the absolute path where you extracted the Android NDK.

#### Java JDK

The Java JDK may be installed in a variety of locations, depending on which operating system you are using:

- Windows: Typically, Java is installed to _C:\Program Files\AdoptOpenJDK_ or _C:\Program Files\Java_
- macOS: Run the **/usr/libexec/java_home** command in the Terminal app to find the JDK location.
- Linux: Run the **whereis java** command in a terminal to find the JDK location. `JAVA_HOME` should be set to parent of the _bin_ folder that contains the **java** executable.

## Build

To build for the `android` target, run the following command.

```sh
openfl build android
```

Use the `-debug` flag to create a build to include extra debugging information, including full stack traces when there's an exception or crash.

```sh
openfl build android -debug
```

The build's output will be written to the _bin/android/bin_ folder. The _.apk_ file may be found in _bin/android/bin/app/build/outputs/apk/debug_ (including release builds).

> Your [_project.xml_ file](https://lime.software/docs/project-files/xml-format/) may optionally specify an output folder different from _bin_.
>
> ```xml
> <app path="Export"/>
> ```
>
> In the example above, the output would be generated in _Export/android/bin_ instead.

## Troubleshooting

### Error on macOS says executables from the Android NDK "cannot be opened because the developer cannot be verified"

You may have downloaded the _.zip_ version of the NDK, instead of the _Mac App Bundle_ version of the NDK. The _Mac App Bundle_ version of the NDK is signed and notarized, which means that macOS Gatekeeper trusts this version more, and you won't see these errors.

If, for some reason, you must use the _.zip_ bundle, you can manually allow the executables through macOS Gatekeeper. However, be warned that it's a tedious process to get everything working correctly.

1. In the "developer cannot be verified" error dialog, click **Cancel** and stop the current build in your terminal.

1. Open the **System Preferences** app.

1. Choose **Security & Privacy**.

1. Go to the **General** tab.

1. In the **Allow apps downloaded from:** section, click the **Allow Anyway** button.

1. Start the build again.

1. This time the pop-up will ask if you are sure that you want to open the executable. Click **Open**.

You may need to repeat this process many times, so keep the **System Preferences** app open so that you can click the **Allow Anyway** button when it appears again. The same executable name may fail more than once. This is normal. Android supports many CPU architectures, and each has its own set of executables.

### Error: arm-linux-androideabi-g++: command not found

There is more than one possible reason for seeing this error:

1. You may have downloaded the wrong version of the Android NDK. You must not use NDK versions newer than **NDK r21** (and you probably shouldn't use versions older than **r15c**).

1. You may have used the wrong path to the Android NDK on your file system. Check that the root folder of the SDK contains multiple sub-folders and files, including a README file.

### Error: Failed to install the following Android SDK packages as some licences have not been accepted.

YOu may need to install a specific version of the Android SDK platform tools in **Android Studio**. The error message will include the version that you need, in a format like this:

> platforms;android-28 Android SDK Platform 28

Open the **Android Studio** settings, and install the Android SDK platform tools with the specified API version. For the example above, API version _28_ refers to _Android 9.0 (Pie)_.

> ### Did you get some other error message that you don't understand?
>
> Configuring OpenFL to build for native targets, like iOS or Android, can be a little tricky! Head over to either the [Feathers UI community forum](https://community.feathersui.com/) or the [Feathers UI Discord](https://discord.feathersui.com/). Explain which command you tried to run, be sure to mention that you are targeting **android**, and post the error message (and any additional relevant output). Ideally, we can help you figure out a solution, and then we'll also add it to this troubleshooting section, so that everyone can benefit.

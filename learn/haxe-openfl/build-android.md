---
title: Build a Feathers UI project as an Android app
layout: "docs.html"
sidebarTitle: Android
ogDescription: "Native Android C++ mobile app with Haxe and Feathers UI"
ogImageURL: /img/feathersui-android-og.png
---

[Feathers UI](/) may be used to build mobile applications targeting Google's Android operating system.

## Prerequisites

In addition to the dependencies specified in the [Feathers UI installation instructions](./installation.md), building an Android application with Feathers UI has some additional requirements.

- [Install the Java OpenJDK](https://adoptium.net/) (version 11 or newer)

- [Download Android Studio](https://developer.android.com/studio)

  - Launch Android Studio at least once to go through its setup wizard that downloads the Android SDK components.

- Download Android NDK **r21e** (21.4.7075529) or newer

  - _Note:_ The Android NDK is not the same as the Android SDK. You need both.

  - In Android Studio's **SDK Manager**, you can find the NDK in the **SDK Tools** tab. It will try to download the newest version by default. To see older versions of the NDK, you may need to select **Show Package Details**.

  - To use **NDK version 22 or newer**, you may need to download the latest [hxcpp release from GitHub](https://github.com/HaxeFoundation/hxcpp/releases), and install it manually using the following command.
  
    ```sh
    haxelib install ./hxcpp-x.y.z.zip
    ```

    > This is temporary. If the latest release on Haxelib is newer than 4.3.2 at the time that you read this, then you should be able to safely use the Haxelib version instead of downloading from GitHub.

### Configure OpenFL for Android

To set the locations of various tools required to build Android apps, you need to run the following command:

```haxe
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

Pass in the absolute path to the Android NDK.

Typically, Android Studio installs the NDK inside the SDK. The default path should be similar to below for each platform:

- Windows: _C:\Users\\**username**\AppData\Local\Android\Sdk\ndk\21.4.7075529_
- macOS: _~/Library/Android/sdk/ndk/21.4.7075529_
- Linux: _~/Android/Sdk/ndk/21.4.7075529_

#### Java JDK

The Java JDK may be installed in a variety of locations, depending on which operating system you are using:

- Windows: Typically, Java is installed to _C:\Program Files\Temurin_ or _C:\Program Files\Java_
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

> Your [_project.xml_ file](https://lime.openfl.org/docs/project-files/xml-format/) may optionally specify an output folder different from _bin_.
>
> ```xml
> <app path="Export"/>
> ```
>
> In the example above, the output would be generated in _Export/android/bin_ instead.

## Run / Debug

OpenFL provides the `test` command to compile and launch your project executable on an Android device connected to your computer with USB.

```sh
openfl test android
```

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

You may need to install a specific version of the Android SDK platform tools in **Android Studio**. The error message will include the version that you need, in a format like this:

> platforms;android-28 Android SDK Platform 28

Open the **Android Studio** settings, and install the Android SDK platform tools with the specified API version. For the example above, API version _28_ refers to _Android 9.0 (Pie)_.

### Error: cannot locate symbol "__atomic_compare_exchange_4"

This run-time error can occur on Android when using Haxe 4.3 with hxcpp 4.3.2. When it happens, a dialog appears on the Android device with a message similar to the following:

> **SDL Error**
>
> An error occurred while trying to start the application. Please try again and/or reinstall.
>
> Error: dlopen failed: cannot locate symbol "__atomic_compare_exchange_4" referenced by "/data/app/com.example.myapp/lib/arm/libApplicationMain.so" …

There are two known workarounds:

- Downgrade to Haxe 4.2.5 and hxcpp 4.2.1.
- Install a version of hxcpp that is newer than 4.3.2.

If Haxelib does not yet have a newer release than hxcpp 4.3.2, you may download a [hxcpp release from GitHub](https://github.com/HaxeFoundation/hxcpp/releases). Download the compiled _.zip_ bundle and install it in a terminal with the following command:

```sh
haxelib install ./hxcpp-x.y.z.zip
```

### Error: Unsupported class file major version XYZ

In some cases, error means that the current version of Java that you have configured for Lime is too old. However, even if you have the newest version of Java configured, this error may still be reported.

Sometimes, if you have customized the Android `target-sdk-version` configuration value in your _project.xml_, this error could indicate that the Gradle version and AGP (Android Gradle Plugin) version need to be customized because the default values are too old for the `target-sdk-version`.

If you need to customize the `target-sdk-version`, please see the various charts in the [Android Gradle Plugin Release Notes](https://developer.android.com/build/releases/gradle-plugin) to determine which values you need to specify for `gradle-version` and `gradle-plugin` in your _project.xml_ file.

As an example, to target Android SDK version 35, the following Gradle and AGP versions should be valid:

```xml
<config:android target-sdk-version="35" gradle-version="8.9" gradle-plugin="8.7.3" />
```

## App executable crashes without exception, and a try/catch around the line where it happens has no effect when targeting C++ for Android or iOS

Haxe's _cpp_ target is stricter than other Haxe targets when you try to access a field or method on a `null` value. Instead of throwing an exception, a Haxe C++ app immediately crashes — with no way to recover, not even with [try/catch](https://haxe.org/manual/expression-try-catch.html). However, it is possible to enable a flag to force Haxe's C++ target to behave more like other targets. Add the following define to your OpenFL _project.xml_ file, and then create a new build with the `-clean` command line option (or delete your output directory before building).

```xml
<haxedef name="HXCPP_CHECK_POINTER" />
```

Using `HXCPP_CHECK_POINTER` may add some overhead that could negatively affect performance. It may be a good idea to enable it temporarily for debugging purposes, fix the issue, and then disable it again.

> ### Did you get some other error message that you don't understand?
>
> Configuring OpenFL to build for native targets, like iOS or Android, can be a little tricky! Head over to either the [Feathers UI community forum](https://community.feathersui.com/) or the [Feathers UI Discord](https://discord.feathersui.com/). Explain which command you tried to run, be sure to mention that you are targeting **android**, and post the error message (and any additional relevant output). Ideally, we can help you figure out a solution, and then we'll also add it to this troubleshooting section, so that everyone can benefit.

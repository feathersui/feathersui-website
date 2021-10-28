---
title: Build the Feathers SDK from Source Code (Starling version)
sidebar_label: Build SDK from Source
---

The document explains how to build the Feathers SDK from source code.

> Most developers should use the [Feathers SDK Manager](./installation-instructions.md) instead. This tutorial is meant for advanced developers who want to modify the Feathers SDK compiler source code to contribute or to create a fork.

## Requirements

- [Apache Ant](http://ant.apache.org) 1.9.1 or newer
- Java 8 update 101 or newer
- _playerglobal.swc_ for Flash Player 32.0 (Download from [Adobe Flash Player Downloads](https://www.adobe.com/support/flashplayer/downloads.html))
- Adobe AIR SDK 32.0 _without_ the ASC 2.0 compiler (Download from [Archived Adobe AIR SDK versions](https://helpx.adobe.com/air/kb/archived-air-sdk-version.html))

## Build Steps

1.  Clone the Feathers SDK repository from Github:

        git clone --recursive git@github.com:feathersui/feathersui-starling-sdk.git ./feathersui-starling-sdk

    You must include the `--recursive` flag to load the required sub-modules for Starling Framework and Feathers.

1.  Copy the _playerglobal.swc_ file to _frameworks/libs/player/32.0/playerglobal.swc_.

1.  In the root of the cloned repository, create a file named _env.properties_ and set `env.AIR_HOME` to the path of the Adobe AIR SDK.

    Example:

    ```txt
    env.AIR_HOME = /path/to/AIR_SDK
    ```

1.  Run the following command in the root of the cloned repository:

        ant main

    When asked if you want to integrate with Adobe's embedded font support, type `y` and press the `Enter` key.

1.  Continue by following the instructions to [Build the Feathers SDK from a Binary Distribution](./build-binary-distribution.md).

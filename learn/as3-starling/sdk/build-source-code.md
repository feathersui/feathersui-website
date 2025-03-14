---
title: Build the Feathers SDK from Source Code (legacy AS3/Starling version)
layout: "docs.html"
sidebarTitle: Build SDK from Source
---

The document explains how to build the [Feathers SDK](/learn/as3-starling/sdk/) from source code.

> Most developers should use the [Feathers SDK Manager](./installation-instructions.md) instead. This tutorial is meant for advanced developers who want to modify the Feathers SDK compiler source code to contribute or to create a fork.

## Requirements

- [Apache Ant](https://ant.apache.org) 1.9.1 or newer
- Java 8 update 101 or newer
- [_playerglobal.swc_](https://fpdownload.macromedia.com/get/flashplayer/updaters/32/playerglobal32_0.swc) for Flash Player 32.0
- Adobe AIR SDK _for Flex developers_ (Download from [Harman's AIR SDK website](https://airsdk.harman.com/download/))

## Build Steps

1.  Clone the Feathers SDK repository from Github:

    ```sh
    git clone --recursive https://github.com/feathersui/feathersui-starling-sdk.git ./feathersui-starling-sdk
    ```

    You must include the `--recursive` flag to load the required sub-modules for Starling Framework and Feathers.

1.  Copy the _playerglobal.swc_ file to _frameworks/libs/player/32.0/playerglobal.swc_.

1.  In the root of the cloned repository, create a file named _env.properties_ and set `env.AIR_HOME` to the path of the Adobe AIR SDK.

    Example:

    ```txt
    env.AIR_HOME = /path/to/AIR_SDK
    ```

1.  Run the following command in the root of the cloned repository:

    ```sh
    ant main
    ```

    When asked if you want to integrate with Adobe's embedded font support, type `y` and press the `Enter` key.

1.  Continue by following the instructions to [Build the Feathers SDK from a Binary Distribution](./build-binary-distribution.md).

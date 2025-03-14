---
title: Setting up Feathers in FlashDevelop (legacy AS3/Starling version)
layout: "docs.html"
sidebarTitle: FlashDevelop
---

Let's create a [Feathers](/learn/as3-starling/getting-started/), [Starling](https://gamua.com/starling/), and [ActionScript 3](https://github.com/joshtynjala/learning-actionscript-3.0) project in [FlashDevelop](https://github.com/fdorg/flashdevelop).

> These instructions apply to FlashDevelop 4.2. Minor variations may exist between different versions of FlashDevelop.

1.  Download the latest stable versions of [Feathers](./installation.md) and [Starling Framework](https://gamua.com/starling/download/).

2.  In FlashDevelop, select the **Project** menu → **New Project**. Select to **ActionScript 3 - AIR Mobile AS3 App** project type. Enter your project **Name**, and project **Location** in your system. Then click **Ok**.

3.  Next, select the **Project** menu → **Properties…**. Go to the **SDK** tab and select the appropriate combined Flex or AIR SDK to use.

4.  Edit `bat/SetupSDK.bat` to point to your SDK folder.

    ```code
    set FLEX_SDK=C:\flex-sdk
    ```

5.  Make sure in **Project** menu → **Properties…**, in **Output** tab to select the appropriate version of Adobe AIR. Check the Feathers README file to see the minimum required versions of Adobe AIR and Flash Player for the build of Feathers that you are using.

6.  Edit the **application.xml** file to update the Adobe AIR namespace. This version should be the same as the Adobe AIR version in the previous step. For example, to target Adobe AIR 32, the namespace should read:

    ```xml
    <application xmlns="http://ns.adobe.com/air/application/32.0">
    ```

7.  Now that the project is created, you will need to add Feathers and Starling Framework to the project. Move **starling.swc** and **feathers.swc** into the `lib` folder.

8.  Right-click **starling.swc** file in the Project pane, and select **Add to library**. The color of the file should change to blue. Repeat this step with **feathers.swc** .

Your project is ready. If you're unsure how to proceed, start by using the code in the **Create your Game** section of the [Starling First Steps Tutorial](https://gamua.com/starling/first-steps/). Then take a look at the [Feathers Hello World Tutorial](./hello-world.md).

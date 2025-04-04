---
title: Setting up Feathers in Adobe Flash Builder (legacy AS3/Starling version)
layout: "docs.html"
sidebarTitle: Adobe Flash Builder
---

Let's create a [Feathers](/learn/as3-starling/getting-started/) and [Starling](https://gamua.com/starling/) project in [Adobe Flash Builder](https://en.wikipedia.org/wiki/Adobe_Flash_Builder).

> These instructions apply to Flash Builder 4.7. Minor variations may exist between different versions of Flash Builder.

1. Follow Adobe's guide [How to update AIR SDK for Adobe Flash Builder 4.7](https://web.archive.org/web/20220820143150/https://helpx.adobe.com/flash-builder/kb/overlay-air-sdk-flash-builder.html) to ensure that Flash Builder is using the latest version of the [Adobe AIR SDK](https://airsdk.harman.com/download/).

2. Download the latest stable versions of [Feathers](./installation.md) and [Starling Framework](https://gamua.com/starling/download/).

3. In Flash Builder, select the **File** menu → **New** → **ActionScript Mobile Project**.

4. Enter your **Project name**. The default Project location is usually okay.

5. In the next section, select your preferred mobile platform settings for iOS and Android. Often, you will not need to change anything in this section. If you're unsure, you can update these values in the `-app.xml` file later. Click **Next**.

6. In the final **Build Paths** section of the wizard, go to the **Library path** tab.

7. Choose the **Add SWC…** button and select the location of **starling.swc**. Repeat for **feathers.swc**.

   Alternatively, you can choose **Add SWC Folder…** and select a folder where both Starling and Feathers SWCs are located.

8. Click **Finish**.

9. Open your project's **-app.xml** file. Inside the `<initialWindow>` section, add `<renderMode>direct</renderMode>`.

Your project is ready. If you're unsure how to proceed, start by using the code in the **Create your Game** section of the [Starling First Steps Tutorial](https://gamua.com/starling/first-steps/). Then take a look at the [Feathers Hello World Tutorial](./hello-world.md).

---
title: Feathers Frequently Asked Questions (FAQ) (legacy AS3/Starling version)
layout: "docs.html"
sidebarTitle: FAQ
---

Frequently asked questions about Feathers (Starling version).

## General Questions

### Who is behind the development of Feathers?

Feathers is designed and developed by [Josh Tynjala](https://github.com/joshtynjala), an experienced, frontend software developer who has worked in the Adobe Flash ecosystem since 2004. He has years of experience developing custom Flash user interface components, and he has built many apps with Adobe Flash Player and Adobe AIR for web, desktop, and mobile.

Feathers originated during a time when Josh was developing mobile games for iOS and Android with Adobe AIR. Josh needed UI components that offered excellent performance, touch-centric behavior, and flexible skinning options. None of the Flash UI frameworks at the time were optimized for mobile, and everything was designed for a keyboard and mouse instead of touch screens. He needed to start fresh — focusing on mobile first.

Before long, Josh released Feathers as an open source project, built on top of the excellent [Starling Framework](http://starling-framework.org/). Feathers soon gained the attention of Adobe, and Josh continues to expand the Feathers library with the company's support.

### Where did the name "Feathers" come from?

A bird's feathers provide functional and aesthetic benefits that I think closely match how user interface components can enhance a graphics library like [Starling Framework](http://starling-framework.org/).

### Where can I download the most recent stable version of Feathers?

Visit the [Feathers website](https://feathersui.com/) for the most recent stable version of Feathers.

### Where can I download the most recent unstable/development/beta version of Feathers?

Visit the [Feathers project on Github](https://github.com/feathersui/feathersui-starling) for the newest Feathers code that will eventually become a part of the next stable version. Watch out for bugs!

### How do I know that you won't abandon Feathers next week?

Though Feathers is an independent open source project, development of Feathers is supported by Adobe. As a first step in this partnership, Feathers is included with the [Adobe Gaming SDK](http://gaming.adobe.com/technologies/gamingsdk/), along with Starling Framework and other tools for developing games with Adobe technologies. Looking forward, Adobe plans to integrate Starling Framework and Feathers more tightly into its upcoming design and development tools.

### Where can I get help?

Please visit the [Feathers forum](http://forum.starling-framework.org/forum/feathers). Be sure to try a couple of searches to see if someone else has had the same issue. Maybe your questions have been answered already. If not, then feel free to start a new thread.

### How can I contribute?

Feel free to [report bugs and request features](https://github.com/feathersui/feathersui-starling/issues) on Github at any time.

Pull requests are welcome for bug fixes. Before submitting a pull request, be sure to take a look at the [Feathers Coding Conventions for Contributors](../coding-conventions.md). All code in Feathers is expected to match the coding style described in that document. Contributions that don't follow the coding conventions may be given a lower priority due to the extra effort required to reformat your code.

For new components and other major contributions, I encourage you to create your own project on [Github](https://github.com/) as an extension to Feathers or as a fork. [Share a link on the forums](https://forum.starling-framework.org/t/feathers), and I'll be happy to share it with the community. If enough developers show interest in your project, and there's demand for including it in the core Feathers library, we can discuss the details further.

## Technical Requirements

### What operating systems can run apps made with Feathers?

Feathers uses [Adobe AIR](https://airsdk.dev), which can create completely standalone, native apps on iOS, Android (including Barnes & Noble's NOOK devices, Amazon's Kindle devices, and the OUYA console), Windows, and macOS. It also works with the Adobe Flash Player plugin in web browsers.

### Doesn't Adobe AIR require a separate runtime to be installed?

Not anymore. Adobe AIR's _captive runtime_ feature lets you bundle everything you need into one package. It makes your app's install size a little bit bigger, but this isn't any different than linking in third party frameworks for graphics, audio, and scripting that you might need to build any kind of native app.

If you prefer to use the separate runtime that Adobe provides, that's remains an option too. iOS support always requires the captive runtime, due to Apple's rules for distributing apps in their App Store.

### Which versions of the Adobe runtimes are supported or required?

Typically, the most recent version of Adobe AIR or Adobe Flash Player is supported. Feathers may still work with older versions, but it's not guaranteed. Be sure to check the README file for the current requirements.

### Which version of Starling Framework is supported or required?

Generally, the version of Feathers that is available from the [Feathers website](../installation.md) will work with the most recent version of Starling Framework that is available from the [official Starling download page](http://gamua.com/starling/download/). Older versions of Starling may remain compatible with the latest version of Feathers, but they are not officially supported.

Use the latest, bleeding edge code from the [Feathers Github project](https://github.com/feathersui/feathersui-starling) at your own risk. This code is in development, and it may be unstable at times. The newest code from the [Starling Github project](https://github.com/Gamua/Starling-Framework) may be required to use it if Feathers has begun using new features or if anything in the Starling APIs has changed. Check the [Feathers README file](https://github.com/feathersui/feathersui-starling/blob/master/README.md) to see which version of Starling is currently required by the unstable version of Feathers.

### Does Feathers support visual debugging similar to "inspect element" in web browsers?

Check out the [monsterdebugger-client-starling](https://github.com/joshtynjala/monsterdebugger-client-starling) open source project. It adds support for Starling and Feathers to [Monster Debugger](http://www.monsterdebugger.com/) by De Monsters.

## Architecture

### Why don't the Feathers components have default skins?

Ideally, I'd love to provide a basic set of skins for all components that get applied automatically. However, there are some important considerations for optimizing texture atlases for the GPU, mobile performance and memory limits, and the inevitable customizations that are required for just about every app. These considerations often aren't present in a software-based UI framework due to how much easier it is to draw dynamic shapes at runtime in software than it is in hardware. Please see [this detailed explanation](./default-skins.md) for more information.

## Common Issues

A few tips for common issues you may encounter as a new Feathers user.

### Why do I get compiler errors that some classes cannot be found when I use the Feathers SWC?

Double check that your development environment has been set up correctly. Instructions are provided for setting up [Flash Builder](../flash-builder.md), [IntelliJ IDEA](../intellij-idea.md), [Animate CC](../flash-pro.md), and [FlashDevelop](../flashdevelop.md). Please see [this detailed explanation](./swc-missing-classes.md) for more information.

### When I add a Feathers component to the display list, why don't I see anything?

Have you provided skins for the component? The Feathers components don't have default skins. Default skins would add unnecessary extra filesize to your projects and they wouldn't be very styleable due to the bitmap-centric nature of GPUs. On mobile, every byte counts (especially since Adobe AIR's captive runtime is rather large), and forcing every Feathers app to include a texture atlas for a default skin would be too much of a burden for many developers.

To quickly get up and running with some sample skins, you may want to use a [theme](../themes.md). Take a look at the [Hello World tutorial for Feathers](../hello-world.md) to see how to instantiate an example theme to help you get started. It's only one line of code.

### Why do I get null object reference runtime errors the first time I try to display a Feathers component?

Have you provided skins for the component? The Feathers components don't have default skins. Default skins would add unnecessary extra filesize to your projects, and they wouldn't be very styleable due to the bitmap-centric nature of GPUs. On mobile, every byte counts (especially since Adobe AIR's captive runtime is rather large), and forcing every Feathers app to include a texture atlas for default skins would be too much of a burden for many developers.

To quickly get up and running with some sample skins, you may want to use a [theme](../themes.md). Take a look at the [Hello World tutorial for Feathers](../hello-world.md) to see how to instantiate an example theme to help you get started. It's only one line of code.

### Why do the Feathers component skins and font sizes appear very small when I run my app on a mobile device?

Did you chose a strategy for [scaling Starling to multiple screen resolutions](http://manual.starling-framework.org/en/#_multi_resolution_development)? In addition to the techniques mentioned in the _Starling Manual_, Feathers also provides the [`ScreenDensityScaleFactorManager`](/api-reference/feathers/utils/ScreenDensityScaleFactorManager.html) class to scale your application like native mobile apps on iOS and Android.

### Why do the Feathers component skins and font sizes appear very small when simulating a mobile app on my computer?

Your development environment may not be properly simulating the display density of the target mobile device. Please follow [these instructions](./display-density.md) for fixing this issue.

### When I try to access the `width` or `height` properties of a Feathers component, why do I get `0`?

You can call `component.validate()` to force a component to immediately measure itself and handle changes to its properties. Normally, a component will queue up a number of changes and process them all in one batch right before Starling renders a new frame. Please see [this detailed explanation](./zero-dimensions.md) for more information.

### When I try to change a component's skins, why do I always see the theme's skins?

Before Feathers 3.1, it was possible for the theme to replace styles that you set on a component before the component initialized. However, the architecture has been redesigned so that components will ignore a theme's styles if they are customized outside of the theme before initialization. If you are supporting a legacy application using a version of Feathers before 3.1, please see [this detailed explanation](./cannot-change-skins.md) for more information.

### Why does my Feathers app throw "Error #1056: Cannot create property `elementFormat`"?

Before Feathers 3.1, different [text renderers](../text-renderers.md) each had unique ways of setting font styles that were not compatible. If you passed the wrong type of object to a text renderer, an error like this could occur. However, all text renderers now support customizing font styles using `starling.text.TextFormat`. If you are supporting a legacy application using a version of Feathers before 3.1, please see [this detailed explanation](./cannot-create-property-element-format.md) for more information.

### Why are there so many draw calls? Aren't those bad?

Drawing text in the GPU involves many tradeoffs. Sometimes it is impossible to avoid extra draw calls. Sometimes, you can get increased performance in situations that require more draw calls. Feathers has been tuned to get the best performance most of the time, but there are options to control this behavior, if needed. Please see [this detailed explanation](./draw-calls.md) for more information.

### Why do my custom item renderers show the wrong data?

The `List`, `DataGrid`, `Tree`, and `GroupedList` components use something called _layout virtualization_ to minimize the number of item renderers that need to be created at any time. Additionally, lists will reuse item renderers when they scroll off screen to display different data that has scrolled on screen. This provides a significant performance boost, especially on mobile.

When you create a custom item renderer, you need to ensure that it is designed to properly update when the list asks it to display a different item from the data provider. Please see [this detailed explanation](./layout-virtualization.md) for more information.

### Why can't I see a filter in a `List` or `ScrollContainer`?

Starling filters aren't compatible with the clipping rectangle. You need to turn off clipping.

```actionscript
list.clipContent = false;
```

This applies to any scrolling component or container, and a few others like `StackScreenNavigator` and `ScreenNavigator`.

### Why isn't the text visible when I flatten a Feathers component?

Unfortunately, `flash.text.TextField` often does not draw correctly `BitmapData` until a frame later. If you are using the Feathers `TextFieldTextRenderer`, it will wait a frame before uploading its text as a texture on the GPU. Since flattening happens immediately, the `TextField` won't be ready in time. The best workaround is to immediately validate the component and wait a frame before flattening.

### How do I create a `List` where each item renderer can have a different height?

Pass in a [`VerticalLayout`](../vertical-layout.md) with its [`hasVariableItemDimensions`](/api-reference/feathers/layout/VerticalLayout.html#hasVariableItemDimensions) property set to `true`. By default, `VerticalLayout` forces all item renderers to have the same height because this improves performance for most lists.

### How do I update an item renderer in a list after I change a property on an item?

You can pass the item's index to [`updateItemAt()`](</api-reference/feathers/data/IListCollection.html#updateItemAt()>) on the list's data provider. The list will force the item renderer to redraw.

```actionscript
list.dataProvider.updateItemAt( itemIndex );
```

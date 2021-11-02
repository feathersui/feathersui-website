---
title: Feathers UI beta.1 preview build on Haxelib
author: Josh Tynjala
authorURL: https://bowlerhat.dev/
authorTwitter: joshtynjala
authorImageURL: /img/authors/josh.jpg
---

Today, Feathers UI **beta.1** is now officially available [on Haxelib](https://lib.haxe.org/p/feathersui). This is the latest of multiple preview builds that are planned before the first stable release in early 2022. We've now made it past the _alpha_ stage, which means that the core framework architecture has settled down, and breaking changes are much less likely to happen. Developers who don't mind a few rough edges here and there should consider Feathers UI ready for starting development on new projects!

![](/blog/img/feathersui-beta-1.png)

[Feathers UI](https://feathersui.com/) is an open source framework of [user interface components](https://feathersui.com/learn/haxe-openfl/ui-components) for creative, [cross-platform](https://feathersui.com/cross-platform-guis/) projects. Using the [Haxe](https://haxe.org/) programming language, Feathers UI is built on [OpenFL](https://openfl.org/) — a user-friendly library for rendering, input, networking, and more. Deploy native apps to iOS, Android, Windows, macOS, Linux (and even publish your project to the web!) using the same Haxe codebase.

> 🚨 Please note that this is a **beta** version of Feathers UI. Some components and features may still be missing, and occasional bugs should be expected.

Feathers UI has reached this milestone thanks the very generous support of all of the backers from the [Feathers UI Kickstarter campaign](https://www.kickstarter.com/projects/feathersui/feathers-ui-cross-platform-components-for-haxe-and-openfl), which completed successfully in the summer of 2019. A big, enthusastic thank you to everyone who has supported the project, whether you are a backer, shared the Kickstarter with your friends on social media, or simply encouraged me ([Josh](https://twitter.com/joshtynjala)) to keep up the good work!

## What's new in beta.1?

Let's take a look at some of the new UI components and features that are included with Feathers UI beta.1.

### New UI Components

- [`Drawer`](https://feathersui.com/learn/haxe-openfl/drawer) is a container that adds a special drawer that slides in and out, above all other content. It may be opened or closed with a swipe gesture from one of the four edges. ([Live Demo](https://feathersui.com/samples/haxe-openfl/components-explorer/drawer))

  <div style="text-align:center;"><a href="https://feathersui.com/learn/haxe-openfl/drawer"><img src="/blog/img/beta-1-feathersui-drawer.png" style="width:450px"/></a></div>

- [`HDividedBox` and `VDividedBox`](https://feathersui.com/learn/haxe-openfl/divided-box) are containers display dividers between each of their children, and the dividers may be dragged to resize the children. ([Live Demo 1](https://feathersui.com/samples/haxe-openfl/components-explorer/horizontal-divided-box) and [Live Demo 2](https://feathersui.com/samples/haxe-openfl/components-explorer/vertical-divided-box))

  <div style="text-align:center;"><a href="https://feathersui.com/learn/haxe-openfl/divided-box"><img src="/blog/img/beta-1-feathersui-horizontal-divided-box.png" style="width:450px"/></a></div>

- [`LayoutGroupItemRenderer`](https://feathersui.com/learn/haxe-openfl/layout-group-item-renderer) is a base class for creating custom item renderers to display in data containers, such as [`ListView`](https://feathersui.com/learn/haxe-openfl/list-view) and [`GridView`](https://feathersui.com/learn/haxe-openfl/grid-view). This class allows item renderers with any number of children added to a layout (like [`LayoutGroup`](https://feathersui.com/learn/haxe-openfl/layout-group)), and it also supports skinning based on mouse/touch states (like [`ItemRenderer`](https://feathersui.com/learn/haxe-openfl/item-renderer)).

### New Samples

This build includes three new samples that demonstrate how to create custom skins for Feathers UI components.

<div style="text-align:center;"><a href="https://feathersui.com/samples/haxe-openfl/custom-programmatic-skin"><img src="/blog/img/beta-1-feathersui-custom-programmatic-skin-sample.png" style="width:400px"/></a></div>

The [custom-programmatic-skin sample](https://feathersui.com/samples/haxe-openfl/custom-programmatic-skin) demonstrates how to create a custom skin with your own drawing commands. [Source Code on Github](https://github.com/feathersui/feathersui-openfl/tree/v1.0.0-beta.1/samples/custom-programmatic-skin/)

<div style="text-align:center;"><a href="https://feathersui.com/samples/haxe-openfl/custom-programmatic-skin-with-states"><img src="/blog/img/beta-1-feathersui-custom-programmatic-skin-with-states-sample.png" style="width:400px"/></a></div>

The [custom-programmatic-skin-with-states sample](https://feathersui.com/samples/haxe-openfl/custom-programmatic-skin-with-states) creates a custom skin for a [`Button`](https://feathersui.com/learn/haxe-openfl/button) component that changes appearance when the button's state changes. [Source Code on Github](https://github.com/feathersui/feathersui-openfl/tree/v1.0.0-beta.1/samples/custom-programmatic-skin-with-states/)

<div style="text-align:center;"><a href="https://feathersui.com/samples/haxe-openfl/animated-tween-skin"><img src="/blog/img/beta-1-feathersui-animated-tween-skin-sample.png" style="width:400px"/></a></div>

The [animated-tween-skin sample](https://feathersui.com/samples/haxe-openfl/animated-tween-skin) creates a custom skin that triggers animations based on mouse/touch events. [Source Code on Github](https://github.com/feathersui/feathersui-openfl/tree/v1.0.0-beta.1/samples/animated-tween-skin/)

## A big release

This build also includes a ton of minor improvements. Here's a few worth highlighting:

<div style="text-align:center;"><img src="/blog/img/beta-1-feathersui-grid-view-resizable-columns.png" style="width:450px"/></div>

- Drag-and-drop column resizing in the [`GridView`](https://feathersui.com/learn/haxe-openfl/grid-view) component
- Multiple selection in the [`ListView`](https://feathersui.com/learn/haxe-openfl/list-view) and [`GridView`](https://feathersui.com/learn/haxe-openfl/grid-view) components
- A new [`ResponsiveGridLayout`](https://api.feathersui.com/v1.0.0-beta.1/feathers/layout/ResponsiveGridLayout.html) class
- New shape skins ([`TriangleSkin`](https://api.feathersui.com/v1.0.0-beta.1/feathers/skins/TriangleSkin.html), [`PillSkin`](https://api.feathersui.com/v1.0.0-beta.1/feathers/skins/PillSkin.html), and [`TabSkin`](https://api.feathersui.com/v1.0.0-beta.1/feathers/skins/TabSkin.html))
- Big improvements to the focus manager
- Touch gestures for the navigator components

For complete details, check out the [beta.1 CHANGELOG](https://github.com/feathersui/feathersui-openfl/blob/v1.0.0-beta.1/CHANGELOG.md).

## Install Feathers UI beta.1

Feathers UI may be [installed](https://feathersui.com/learn/haxe-openfl/installation) using the [**haxelib install**](https://lib.haxe.org/documentation/using-haxelib/#install) command in your terminal.

```sh
haxelib install feathersui
```

If you already have the library installed, and you simply want the latest version, run the [**haxelib update**](https://lib.haxe.org/documentation/using-haxelib/#update) command instead.

```sh
haxelib update feathersui
```

Be sure to take a look at the complete [installation instructions](https://feathersui.com/learn/haxe-openfl/installation) for details about installing required dependencies, along with links to step-by-step tutorials for setting up supported editors and IDEs.

## Documentation

- The [Feathers UI Getting Started guide](https://feathersui.com/learn/haxe-openfl/getting-started) provides the most essential links for creating your first Feathers UI project and learning about all of the features and [UI components](https://feathersui.com/learn/haxe-openfl/ui-components) that are available in the framework.
- The [v1.0.0-beta.1 API Reference](https://api.feathersui.com/v1.0.0-beta.1/) includes descriptions of all APIs available on Feathers UI components, layouts, utility functions, and more.

## Community

- Start a thread in the [Feathers UI Community forum](https://community.feathersui.com/) to ask for help.
- Join the [Feathers UI Discord](https://discord.feathersui.com/) to chat with Josh and others in the community.

## Questions or comments?

Everyone, I just want to say thank you again for your support. I'm looking forward to hearing what you think of the new Feathers UI so far. If you create anything with this build — even a simple prototype — I'd love it if you could share your experiences (and maybe even a screenshot 🖼!).

I've created an [official beta.1 discussion thread](https://community.feathersui.com/d/44-feathers-ui-beta1-preview-build-on-haxelib) in the community forums. Head over there to leave a comment!

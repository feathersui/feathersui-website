---
title: Feathers UI beta.5 preview build on Haxelib
author: Josh Tynjala
authorURL: https://bowlerhat.dev/
authorTwitter: joshtynjala
authorImageURL: /img/authors/josh.jpg
---

Today, Feathers UI **beta.5** is now officially available [on Haxelib](https://lib.haxe.org/p/feathersui). This is the latest of multiple preview builds that are planned before the first stable release in early 2022. Since we're in the _beta_ stage, the core framework architecture has settled down, and breaking changes are much less likely to happen going forward. Developers who don't mind a few rough edges here and there should consider Feathers UI ready for starting development on new projects!

![](/blog/img/feathersui-beta-5.png)

[Feathers UI](https://feathersui.com/) is an open source framework of [graphical user interface (GUI) components](https://feathersui.com/learn/haxe-openfl/ui-components) for creative, [cross-platform](https://feathersui.com/cross-platform-guis/) projects. Using the [Haxe](https://haxe.org/) programming language, Feathers UI is built on [OpenFL](https://openfl.org/) — a user-friendly library for rendering, input, networking, and more. Deploy native apps to iOS, Android, Windows, macOS, Linux (and even publish your project to the web!) using the same Haxe codebase.

> 🚨 Please note that this is a **beta** version of Feathers UI. Some components and features may still be missing, and occasional bugs should be expected.

Feathers UI continues to achieve each new milestone thanks the very generous support from the contributors on [Github Sponsors](https://github.com/sponsors/joshtynjala), and everyone who backed the successful [2019 Feathers UI Kickstarter campaign](https://www.kickstarter.com/projects/feathersui/feathers-ui-cross-platform-components-for-haxe-and-openfl). A big, enthusastic thank you to you all!

## What's new in beta.5?

Let's take a look at some of the new UI components and features that are included with Feathers UI beta.5.

### New Layouts

- [`TiledRowsLayout`](https://api.feathersui.com/current/feathers/layout/TiledRowsLayout.html), [`TiledRowsListLayout`](https://api.feathersui.com/current/feathers/layout/TiledRowsListLayout.html), and [`PagedTiledRowsListLayout`](https://api.feathersui.com/current/feathers/layout/PagedTiledRowsListLayout.html) all position items as tiles (where all items have equal dimensions) in one or more rows. `TiledRowsLayout` is meant to be used with simple containers, like `LayoutGroup` and `ScrollContainer`. `TiledRowsListLayout` and `PagedTiledRowsLayout` are meant to be used with data containers, like `ListView`. `PagedTiledRowsLayout` will split tiles among multiple pages, if they don't all fit on one page.

    <div style="text-align:center;"><a href="https://api.feathersui.com/current/feathers/layout/TiledRowsLayout.html"><img src="/blog/img/beta-5-feathersui-tiled-rows-layout.png" style="width:450px"/></a></div>

- The `gap` property of [`HorizontalLayout`](https://feathersui.com/learn/haxe-openfl/horizontal-layout/) and [`VerticalLayout`](https://feathersui.com/learn/haxe-openfl/vertical-layout/) now accepts a value of `Math.POSITIVE_INFINITY` to indicate that it should try to add as much space as possible between items. If the container is resized, the gap will be adjusted to match. If the content is larger than the container, these layouts will fall back to the new `minGap` property.

    <div style="text-align:center;"><img src="/blog/img/beta-5-feathersui-flexible-gap.png" style="width:450px"></div>

  (By the way, the new tiled layouts also support `Math.POSITIVE_INFINITY` for their `horizontalGap` and `verticalGap` properties.)

### New Features

This build also fixes a ton of bugs, and it includes many new features too. Here's a few worth highlighting:

- Scrolling containers, like [`ListView`](https://feathersui.com/learn/haxe-openfl/list-view/) and [`ScrollContainer`](https://feathersui.com/learn/haxe-openfl/scroll-container/), now support snapping to pages. These snap positions, which may be arbitrary values (not just pages), may be specified by layouts. For instance, the new [`PagedTiledRowsListLayout`](https://api.feathersui.com/current/feathers/layout/PagedTiledRowsListLayout.html), mentioned above, returns either an array of x or y values, depending on whether the pages are oriented horizontally or vertically.

- Layouts may now implement the new [`IKeyboardNavigationLayout`](https://api.feathersui.com/current/feathers/layout/IKeyboardNavigationLayout.html) interface, if they need to customize how selection in components like [`ListView`](https://feathersui.com/learn/haxe-openfl/list-view/) changes when the keyboard arrow keys, page up/down keys, or home/end keys are pressed. This is used primarily by the new tiled layouts, but custom layouts will be able to use the same interface to customize their own behavior too, if they have interesting positioning algorithms.

- [`LayoutGroup`](https://feathersui.com/learn/haxe-openfl/layout-group/) and scrolling containers like [`ListView`](https://feathersui.com/learn/haxe-openfl/list-view/), [`ScrollContainer`](https://feathersui.com/learn/haxe-openfl/scroll-container/), and [`Panel`](https://feathersui.com/learn/haxe-openfl/panel/) have a new `maskSkin` property. This mask will automatically resize when the container resizes. Scrolling containers also add a similar `viewPortMaskSkin` property to mask only the view port (which is the region containing scrollable content).

This list would be far too long if it included all of the bug fixes related item renderers, word wrap, data container selection, focus management, and more. For complete details, check out the [beta.5 CHANGELOG](https://github.com/feathersui/feathersui-openfl/blob/v1.0.0-beta.5/CHANGELOG.md).

## Install Feathers UI beta.5

Feathers UI beta.5 may be [installed](https://feathersui.com/learn/haxe-openfl/installation) using the [**haxelib install**](https://lib.haxe.org/documentation/using-haxelib/#install) command in your terminal.

```sh
haxelib install feathersui 1.0.0-beta.5
```

Be sure to take a look at the complete [installation instructions](https://feathersui.com/learn/haxe-openfl/installation) for details about installing required dependencies, along with links to step-by-step tutorials for setting up supported editors and IDEs.

## Documentation

- The [Feathers UI Getting Started guide](https://feathersui.com/learn/haxe-openfl/getting-started) provides the most essential links for creating your first Feathers UI project and learning about all of the features and [UI components](https://feathersui.com/learn/haxe-openfl/ui-components) that are available in the framework.
- The [v1.0.0-beta.5 API Reference](https://api.feathersui.com/v1.0.0-beta.5/) includes descriptions of all APIs available on Feathers UI components, layouts, utility functions, and more.

## Community

- Start a thread in the [Feathers UI Community forum](https://community.feathersui.com/) to ask for help.
- Join the [Feathers UI Discord](https://discord.feathersui.com/) to chat with Josh and others in the community.

## How to help the project

Want to help keep the lights on and servers running? Make a monthly (or one-time) contribution on [Github Sponsors](https://github.com/sponsors/joshtynjala).

## Questions or comments?

Everyone, I just want to say thank you again for your support. I'm looking forward to hearing what you think of the new Feathers UI so far. If you create anything with this build — even a simple prototype — I'd love it if you could share your experiences (and maybe even a screenshot 🖼!).

I've created an [official beta.5 discussion thread](https://community.feathersui.com/d/65-feathers-ui-beta5-preview-build-on-haxelib) in the community forums. Head over there to leave a comment!

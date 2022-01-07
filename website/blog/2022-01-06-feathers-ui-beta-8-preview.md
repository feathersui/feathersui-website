---
title: Feathers UI beta.8 preview build on Haxelib
author: Josh Tynjala
authorURL: https://bowlerhat.dev/
authorTwitter: joshtynjala
authorImageURL: /img/authors/josh.jpg
---

Today, Feathers UI **beta.8** is now officially available [on Haxelib](https://lib.haxe.org/p/feathersui). This is the latest of multiple preview builds that are planned before the first stable release in the first half of 2022. Since we're in the _beta_ stage, the core framework architecture has settled down, and breaking changes are much less likely to happen going forward. Developers who don't mind some minor rough edges here and there should consider Feathers UI ready for starting development on new projects!

![](/blog/img/feathersui-beta-8.png)

[Feathers UI](https://feathersui.com/) is an [open source](https://github.com/feathersui/feathersui-openfl) framework of [graphical user interface (GUI) components](https://feathersui.com/learn/haxe-openfl/ui-components) for creative, [cross-platform](https://feathersui.com/cross-platform-guis/) projects. Using the [Haxe](https://haxe.org/) programming language, Feathers UI is built on [OpenFL](https://openfl.org/), a user-friendly library for rendering, input, networking, and more. Deploy native apps to iOS, Android, Windows, macOS, Linux… and even publish your project to the web — all using the same Haxe codebase.

> 🚨 Please note that this is a **beta** version of Feathers UI. Some components and features may still be missing, and occasional bugs should be expected.

Feathers UI continues to achieve each new milestone thanks the very generous support from the contributors on [Github Sponsors](https://github.com/sponsors/joshtynjala), and everyone who backed the successful [2019 Feathers UI Kickstarter campaign](https://www.kickstarter.com/projects/feathersui/feathers-ui-cross-platform-components-for-haxe-and-openfl). A big, enthusastic thank you to you all!

## What's new in beta.8

Let's take a look at some of the new components and features that are included with Feathers UI beta.8.

### New Components

A couple of new [UI components](https://feathersui.com/learn/haxe-openfl/ui-components/) are included in this update.

<div style="text-align:center;"><a href="https://feathersui.com/learn/haxe-openfl/tree-grid-view/"><img src="/blog/img/beta-8-feathersui-tree-grid-view.png" width="450"></a></div>

[`TreeGridView`](https://feathersui.com/learn/haxe-openfl/tree-grid-view/) displays a tree of hierarchical data with multiple columns, like a mix between [`TreeView`](https://feathersui.com/learn/haxe-openfl/tree-view/) and [`GridView`](https://feathersui.com/learn/haxe-openfl/grid-view/). In each row of the [`TreeGridView`](https://feathersui.com/learn/haxe-openfl/tree-grid-view/) the first column's cells include the branch open/close toggle, allowing the user to navigate the hierarchical data. Additional columns display to the right, but they don't show branch/leaf status.

<div style="text-align:center;"><a href="https://feathersui.com/learn/haxe-openfl/hierarchical-item-renderer/"><img src="/blog/img/beta-8-feathersui-hierarchical-item-renderer.png" width="250"></a></div>

[`HierarchicalItemRenderer`](https://feathersui.com/learn/haxe-openfl/hierarchical-item-renderer/) is a new subclass of [`ItemRenderer`](https://feathersui.com/learn/haxe-openfl/item-renderer/) that is used by both [`TreeView`](https://feathersui.com/learn/haxe-openfl/tree-view/) and [`TreeGridView`](https://feathersui.com/learn/haxe-openfl/tree-grid-view/). It includes a toggle button (positioned on the left) to open and close branches, in additional to an optional branch or leaf icon (which you might use to display folder and file icons, for instance), primary text, secondary text, another basic icon, and and accessory view. This component replaces `TreeViewItemRenderer`, which is now deprecated and will be removed in a future update.

### New Layouts

A new [layout](https://feathersui.com/learn/haxe-openfl/layouts-and-containers/) is included in this update.

<div style="text-align:center;"><a href="https://feathersui.com/learn/haxe-openfl/flow-rows-layout/"><img src="/blog/img/beta-8-feathersui-flow-rows-layout.png" width="450"></a></div>

[`FlowRowsLayout`](https://feathersui.com/learn/haxe-openfl/flow-rows-layout/) displays items in multiple rows. It starts by positioning items from left to right. When the combined width of items in a row reaches the width of the container, a new row will be created below. This layout is very similar to [`TiledRowsLayout`](https://feathersui.com/learn/haxe-openfl/tiled-rows-layout/), but a big difference is that the items in a flow layout may be different sizes.

### New Features

This build also fixes several bugs, and it includes a some new features too. Here are a few worth highlighting:

- [`FormItem`](https://feathersui.com/learn/haxe-openfl/form/) now includes a [`required`](https://api.feathersui.com/current/feathers/controls/FormItem.html#required) property to display an icon that indicates if the item is required before submitting the form. You can customize this icon with the [`requiredSkin`](https://api.feathersui.com/current/feathers/controls/FormItem.html#requiredSkin) style.
- [`FormItem`](https://feathersui.com/learn/haxe-openfl/form/) also gets a new [`submitOnEnterEnabled`](https://api.feathersui.com/current/feathers/controls/FormItem.html#submitOnEnterEnabled) property that makes it possible to disable submitting the form if the Enter/Return key is pressed when the item's content has focus. This is useful for compoennts like [`TextArea`](https://feathersui.com/learn/haxe-openfl/text-area/) that use the Enter/Return key for other purposes and should not trigger a form submit event.

For complete details, check out the [beta.8 CHANGELOG](https://github.com/feathersui/feathersui-openfl/blob/v1.0.0-beta.8/CHANGELOG.md).

## Roadmap Update

The first stable build of Feathers UI will be released in the first half of 2022. It's been a long road, but the destination is finally in sight. Right now, I'm expecting the possibility of one more beta build, to potentially get a couple more minor features added. The plan is to move into the **release candidate** stage as soon as possible. At that point, only bug fixes will be included, and any new features will need to wait until after the release.

Between now and the stable release, I intend to spend time focused on filling in any missing documentation and polishing up everything I can. I also plan to wait for the next Lime and OpenFL updates to be released before I release the first stable version of Feathers UI, since their Github repos currently have a lot of bug fixes and other improvements that I consider absolutely critical. I don't want to force people to install those libraries from Github to get the best experience with Feathers UI.

## Install Feathers UI beta.8

Feathers UI beta.8 may be [installed](https://feathersui.com/learn/haxe-openfl/installation) using the [**haxelib install**](https://lib.haxe.org/documentation/using-haxelib/#install) command in your terminal.

```sh
haxelib install feathersui 1.0.0-beta.8
```

Be sure to take a look at the complete [installation instructions](https://feathersui.com/learn/haxe-openfl/installation) for details about installing required dependencies, along with links to step-by-step tutorials for setting up supported editors and IDEs.

## Documentation

- The [Feathers UI Getting Started guide](https://feathersui.com/learn/haxe-openfl/getting-started) provides the most essential links for creating your first Feathers UI project and learning about all of the features and [UI components](https://feathersui.com/learn/haxe-openfl/ui-components) that are available in the framework.
- The [v1.0.0-beta.8 API Reference](https://api.feathersui.com/v1.0.0-beta.8/) includes descriptions of all APIs available on Feathers UI components, layouts, utility functions, and more.

## Community

- Start a thread in the [Feathers UI Community forum](https://community.feathersui.com/) to ask for help.
- Join the [Feathers UI Discord](https://discord.feathersui.com/) to chat with Josh and others in the community.

## How to help the project

Want to help keep the lights on and servers running? Make a monthly (or one-time) contribution on [Github Sponsors](https://github.com/sponsors/joshtynjala).

## Questions or comments?

Everyone, I just want to say thank you again for your support. I'm looking forward to hearing what you think of the new Feathers UI so far. If you create anything with this build — even a simple prototype — I'd love it if you could share your experiences (and maybe even a screenshot 🖼!).

I've created an [official beta.8 discussion thread](https://community.feathersui.com/d/79-feathers-ui-beta8-preview-build-on-haxelib) in the community forums. Head over there to leave a comment!

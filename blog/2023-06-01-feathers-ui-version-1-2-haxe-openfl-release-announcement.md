---
title: Feathers UI v1.2 — Big performance boosts
author: Josh Tynjala
authorURL: https://bowlerhat.dev/
authorTwitter: joshtynjala
authorImageURL: /img/authors/josh.jpg
layout: "blog-post.html"
permalink: "{{ page | blog_permalink }}"
tags: ["blog"]
---

Today, Feathers UI **v1.2.0** is now officially available [on Haxelib](https://lib.haxe.org/p/feathersui/1.2.0). This release includes a ton of great performance optimizations (especially for scrolling containers), support for the [Haxe 4.3](https://www.elitemastereric.com/Haxe-430/) compiler, and various bug fixes.

<img src="/blog/img/feathers-ui-1-2-0-update-release.png">

If you're not aware, [Feathers UI](https://feathersui.com/) is an [open source](https://github.com/feathersui/feathersui-openfl) framework of [graphical user interface (GUI) components](https://feathersui.com/learn/haxe-openfl/ui-components) for creative, [cross-platform](https://feathersui.com/cross-platform-guis/) projects. Using the [Haxe](https://haxe.org/) programming language, Feathers UI is built on [OpenFL](https://openfl.org/) — a user-friendly library for rendering, input, networking, and more. Deploy native apps to iOS, Android, Windows, macOS, Linux (and even publish your project to the web!) all using the same Haxe codebase.

## What's new in 1.2.0

This release doesn't include any new UI components. Instead, it focuses on impactful improvements to the existing implementations. Normally, this section includes screenshots and short descriptions of what's been added. This time, it include more of a deeper dive of Feathers UI internals. If you're interested in that, keep reading. If not, that's fine. Just update and enjoy the 

### Performance Improvements

The biggest focus for this release was on optimizing performance of the framework — both overall, and within individual components. Things like scrolling and other animations should be smoother, initialization of data-heavy components should complete faster, and Feathers UI apps should run better on lower end devices, especially on mobile and the web.

Here are a few things that should make things _measurably_ faster:

- Removed unecessary calls to [`setInvalid()`](https://api.feathersui.com/v1.2.0/feathers/core/ValidatingSprite.html#setInvalid), which means fewer duplicate component validations between rendering updates.
- The code that determines when scroll bars are needed has been refactored to reduce the number of content measurement passes that are required before the final stable layout is ready.
- Data containers, like [`ListView`](https://feathersui.com/learn/haxe-openfl/list-view/), won't call the update function on [`DisplayObjectRecycler`](https://api.feathersui.com/v1.2.0/feathers/utils/DisplayObjectRecycler.html) as often. They now detect when the state object, like [`ListViewItemState`](https://api.feathersui.com/v1.2.0/feathers/data/ListViewItemState.html#ListViewItemState), is unchanged, and they skip the function call when it's not required. Previously, that update function could be called multiple times for each item on container creation, and also every time the container scrolled.
- List layouts have been optimized to better handle their item measurement cache, which means that item renderers don't need to be measured as often, and there is significantly less chance that all item renderers need to be thrown away and re-created from scratch.
- It's now less expensive to call [`dataProvider.updateAt()`](https://api.feathersui.com/v1.2.0/feathers/data/IFlatCollection.html#updateAt) or [`dataProvider.updateAll()`](https://api.feathersui.com/v1.2.0/feathers/data/IFlatCollection.html#updateAll) to notify a data container of changes.

> **Warning!** After updating to Feathers UI 1.2, may find that some item renderers are missing data, or they may display stale data. This is most likely _not_ a bug in Feathers UI. It's likely that your code is missing a call to [`dataProvider.updateAt()`](https://api.feathersui.com/v1.2.0/feathers/data/IFlatCollection.html#updateAt) or [`dataProvider.updateAll()`](https://api.feathersui.com/v1.2.0/feathers/data/IFlatCollection.html#updateAll) after changing some variables used in [`DisplayObjectRecycler.update()`](https://api.feathersui.com/v1.2.0/feathers/utils/DisplayObjectRecycler.html#update). In previous versions, there were so many extra calls to [`DisplayObjectRecycler.update()`](https://api.feathersui.com/v1.2.0/feathers/utils/DisplayObjectRecycler.html#update) that it could be easy to miss that the [`dataProvider.updateAt()`](https://api.feathersui.com/v1.2.0/feathers/data/IFlatCollection.html#updateAt) and [`dataProvider.updateAll()`](https://api.feathersui.com/v1.2.0/feathers/data/IFlatCollection.html#updateAll) calls were missing.
>
> As a temporary workaround, if you don't have time to add calls to [`dataProvider.updateAt()`](https://api.feathersui.com/v1.2.0/feathers/data/IFlatCollection.html#updateAt) or [`dataProvider.updateAll()`](https://api.feathersui.com/v1.2.0/feathers/data/IFlatCollection.html#updateAll) right away, you can set [`listView.forceItemStateUpdate = true`](https://api.feathersui.com/v1.2.0/feathers/controls/ListView.html#forceItemStateUpdate), and Feathers UI will restore the previous behavior that includes extra calls to [`DisplayObjectRecycler.update()`](https://api.feathersui.com/v1.2.0/feathers/utils/DisplayObjectRecycler.html#update) (but you won't benefit from some of the performance improvements mentioned above). The new [`forceItemStateUpdate`](https://api.feathersui.com/v1.2.0/feathers/controls/ListView.html#forceItemStateUpdate) property may be deprecated and removed in a future version of Feathers UI, so if you enable this workaround, try to switch over to the proper calls to [`dataProvider.updateAt()`](https://api.feathersui.com/v1.2.0/feathers/data/IFlatCollection.html#updateAt) or [`dataProvider.updateAll()`](https://api.feathersui.com/v1.2.0/feathers/data/IFlatCollection.html#updateAll) as quickly as possible.

### Haxe 4.3 support

For most targets, building Feathers UI projects with Haxe 4.3 should work without any changes. However, Haxe 4.3 adds some new deprecation warnings for `@:extern` and `@:enum abstract` that encourage the use of the proper keywords `extern` and `enum` instead. If you see these deprecation warnings when compiling your Feathers UI project, you should update to OpenFL 9.2.2 and Lime 8.0.2 or newer. A number of fixes for these warnings can be found in the updated versions of OpenFL and Lime.

If you're building an [Adobe AIR](https://airsdk.dev/) app with Feathers UI, and you want to use Haxe 4.3, you'll be strictly required to update to Feathers UI 1.2.0, OpenFL 9.2.2, and Lime 8.0.2 or newer. While each version of the Haxe compiler ships with valid [externs](https://haxe.org/manual/lf-externs.html) for Adobe AIR, OpenFL bundles some of its own customized AIR externs. Haxe 4.3 insists that getter/setter properties for AIR are written a certain way, so Lime, OpenFL, and Feathers UI all needed updates to produce valid code for AIR. If you're not targeting Adobe AIR, or if you're sticking with Haxe 4.0-4.2 a bit longer, this issue won't affect you.

### Anything else?

- A new `feathersui_strict_set_invalid` define may be declared to enable performance debugging. When using this define, a component will throw an exception if its [`setInvalid()`](https://api.feathersui.com/v1.2.0/feathers/core/ValidatingSprite.html#setInvalid) method is called while the same component is validating. If you're developing a custom component or item renderer, this define can help you ensure that the component is optimized for better performance. Inside your `update()` function, use the new [`runWithInvalidationFlagsOnly()`](https://api.feathersui.com/v1.2.0/feathers/core/ValidatingSprite.html#runWithInvalidationFlagsOnly) method to redirect [`setInvalid()`](https://api.feathersui.com/v1.2.0/feathers/core/ValidatingSprite.html#setInvalid) calls to [`setInvalidationFlag()`](https://api.feathersui.com/v1.2.0/feathers/core/ValidatingSprite.html#setInvalidationFlag) instead.
- [`StackNavigator`](https://feathersui.com/learn/haxe-openfl/stack-navigator/) has a new [`popMultipleItems()`](https://api.feathersui.com/v1.2.0/feathers/controls/navigators/StackNavigator.html#popMultipleItems) method that allows you to go back in history to any position between [`popItem()`](https://api.feathersui.com/v1.2.0/feathers/controls/navigators/StackNavigator.html#popItem) and [`popToRootItem()`](https://api.feathersui.com/v1.2.0/feathers/controls/navigators/StackNavigator.html#popToRootItem).
- The [`Scroller`](https://api.feathersui.com/v1.2.0/feathers/utils/Scroller.html) class has a new, advanced [`applyLayoutShift()`](https://api.feathersui.com/v1.2.0/feathers/utils/Scroller.html#applyLayoutShift) method that may be used by virtual layouts to prevent changes between estimated item size and real item size from causing sudden large jumps in scroll position.

## Install Feathers UI v1.2.0

Feathers UI v1.2.0 may be [installed](https://feathersui.com/learn/haxe-openfl/installation) using the [**haxelib install**](https://lib.haxe.org/documentation/using-haxelib/#install) command in your terminal.

```sh
haxelib install feathersui 1.2.0
```

Be sure to take a look at the complete [installation instructions](https://feathersui.com/learn/haxe-openfl/installation) for details about installing required dependencies, along with links to step-by-step tutorials for setting up supported editors and IDEs.

## Documentation

- The [Feathers UI Getting Started guide](https://feathersui.com/learn/haxe-openfl/getting-started) provides the most essential links for creating your first Feathers UI project. Start there to learn about all of the [UI components](https://feathersui.com/learn/haxe-openfl/ui-components), [layouts](https://feathersui.com/learn/haxe-openfl/layouts-and-containers/), [skins](https://feathersui.com/learn/haxe-openfl/shape-skins/), and the many other features that are available in the framework.
- The [v1.2.0 API Reference](https://api.feathersui.com/v1.2.0/) includes descriptions of all classes, interfaces, enums, utility functions, and the various other APIs available to developers working with Feathers UI.

## Community

- Start a new thread in the [Feathers UI Community forum](https://community.feathersui.com/) to ask for help.
- Join the [Feathers UI Discord](https://discord.feathersui.com/) to chat with Josh (me) and other experts in the community.

## How to help the project

Want to help new components get added and keep the servers running? Please contribute on [Github Sponsors](https://github.com/sponsors/joshtynjala).

## Questions or comments?

I've created an [official v1.2.0 discussion thread](https://community.feathersui.com/d/121-feathers-ui-v12-update-for-haxe-and-openfl) in the [community forums](https://community.feathersui.com/). Do you love one of the new features? Ran into a strange bug that wasn't in the last release? Head over there to leave a comment about this release!

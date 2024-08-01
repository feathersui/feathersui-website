---
title: Feathers UI v1.3 — Drag-and-drop, Collapsible component, dispose() method, and tons of bugs fixed
author: Josh Tynjala
authorURL: https://bowlerhat.dev/
authorTwitter: joshtynjala
authorImageURL: /img/authors/josh.jpg
layout: "blog-post.html"
permalink: "{{ page | blog_permalink }}"
tags: ["blog"]
---

Today, Feathers UI **v1.3.0** is now officially available [on Haxelib](https://lib.haxe.org/p/feathersui/1.3.0). This release includes a new `DragDropManager` used by components like `ListView` and `GridView`, a new [`Collapsible`](https://feathersui.com/learn/haxe-openfl/collapsible/) component with a clickable header to toggle the visibility of its content, and a new `dispose()` method to help with UI component cleanup. It also includes over a year of bug fixes, which means even more stability for your projects.

<img src="/blog/img/feathers-ui-1-3-0-update-release.png">

If you're not aware, [Feathers UI](https://feathersui.com/) is an [open source](https://github.com/feathersui/feathersui-openfl) framework of [graphical user interface (GUI) components](https://feathersui.com/learn/haxe-openfl/ui-components) for creative, [cross-platform](https://feathersui.com/cross-platform-guis/) projects. Using the [Haxe](https://haxe.org/) programming language, Feathers UI is built on [OpenFL](https://openfl.org/) — a user-friendly library for rendering, input, networking, and more. Deploy native apps to iOS, Android, Windows, macOS, Linux (and even publish your project to the web!) all using the same Haxe codebase.

## What's new in 1.3.0

### Drag and Drop

[Drag and drop](https://feathersui.com/learn/haxe-openfl/drag-and-drop) is now supported using either mouse or touch. Both [`ListView`](https://feathersui.com/learn/haxe-openfl/list-view) and [`GridView`](https://feathersui.com/learn/haxe-openfl/grid-view) support drag-and-drop by enabling a few built-in properties.

<div style="text-align:center;"><a href="https://feathersui.com/learn/haxe-openfl/drag-and-drop"><video src="/blog/img/drag-and-drop-v1-3-0.mp4" height="200" autoplay muted loop></video></a></div>

```haxe
var listView = new ListView();
listView.dragEnabled = true;
listView.dropEnabled = true;
listView.removeOnDragDropComplete = true;
```

Custom components may also implement the [`IDragSource`](https://api.feathersui.com/current/feathers/dragDrop/IDragSource.html) and [`IDropTarget`](https://api.feathersui.com/current/feathers/dragDrop/IDropTarget.html) interfaces, and add listeners for certain [`DragDropEvent`](https://api.feathersui.com/current/feathers/events/DragDropEvent.html) constants to add their own support for drag-and-drop.

See the [Drag and drop](https://feathersui.com/learn/haxe-openfl/drag-and-drop) page for more details, and try out the new sample projects.

- [Sample: `ListView` Drag and Drop](https://github.com/feathersui/feathersui-openfl/tree/v1.3.0/samples/list-view-drag-and-drop)
- [Sample: Custom Drag and Drop](https://github.com/feathersui/feathersui-openfl/tree/v1.3.0/samples/drag-and-drop)

### `Collapsible` component

The new [`Collapsible`](https://feathersui.com/learn/haxe-openfl/collapsible) component displays a clickable header that collapses or expands its content. It might be useful for hiding long, detailed text or for creating your own accordion view.

<div style="text-align:center;"><a href="https://feathersui.com/learn/haxe-openfl/collapsible"><video src="/blog/img/collapsible-v1-3-0.mp4" height="160" autoplay muted loop></video></a></div>

```haxe
var collapsible = new Collapsible();
collapsible.text = "Who is Wolverine?";
collapsible.opened = false;
var textContent = new Label();
textContent.width = 200.0;
textContent.wordWrap = true;
textContent.text = "Wolverine is a mutant with animal-keen senses, a powerful regenerative healing factor, an adamantium skeleton, prolonged lifespan, and retractable claws in each hand.";
collapsible.content = textContent;
addChild(collapsible);
```

### The `dispose()` method

All UI components in Feathers UI now have a new [`dispose()`](https://api.feathersui.com/current/feathers/core/IUIControl.html#dispose) method that may be used to clean things up before the object will be garbage collected. Disposal can perform actions like clearing data providers, removing and disposing children, unloading assets, and removing event listeners. It's basically intended to make things a little bit easier for the garbage collector when you know that a UI component will no longer be used in your app.

```haxe
myComponent.dispose();
myComponent = null;
```

Calling the `dispose()` method is optional. Don't feel obligated to use it, and don't feel like you're required to update your existing apps to use it. Components still work the same as before, so skipping disposal won't create memory leaks. It's basically just a hint to Feathers UI that you won't need a certain component anymore, so maybe it can optimize memory cleanup to go a bit faster.

## Install Feathers UI v1.3.0

Feathers UI v1.3.0 may be [installed](https://feathersui.com/learn/haxe-openfl/installation) using the [**haxelib install**](https://lib.haxe.org/documentation/using-haxelib/#install) command in your terminal.

```sh
haxelib install feathersui 1.3.0
```

Be sure to take a look at the complete [installation instructions](https://feathersui.com/learn/haxe-openfl/installation) for details about installing required dependencies, along with links to step-by-step tutorials for setting up supported editors and IDEs.

## Documentation

- The [Feathers UI Getting Started guide](https://feathersui.com/learn/haxe-openfl/getting-started) provides the most essential links for creating your first Feathers UI project. Start there to learn about all of the [UI components](https://feathersui.com/learn/haxe-openfl/ui-components), [layouts](https://feathersui.com/learn/haxe-openfl/layouts-and-containers/), [skins](https://feathersui.com/learn/haxe-openfl/shape-skins/), and the many other features that are available in the framework.
- The [v1.3.0 API Reference](https://api.feathersui.com/v1.3.0/) includes descriptions of all classes, interfaces, enums, utility functions, and the various other APIs available to developers working with Feathers UI.

## Community

- Start a new thread in the [Feathers UI Community forum](https://community.feathersui.com/) to ask for help.
- Join the [Feathers UI Discord](https://discord.feathersui.com/) to chat with Josh (me) and other experts in the community.

## How to help the project

Send a monthly or one-time donation to [Josh Tynjala on Github Sponsors](https://github.com/sponsors/joshtynjala) to show your support for Feathers UI.

## Questions or comments?

I've created an [official v1.3.0 discussion thread](https://community.feathersui.com/d/147-feathers-ui-v13-update-for-haxe-and-openfl) in the [community forums](https://community.feathersui.com/). Do you love one of the new features? Ran into a strange bug that wasn't in the last release? Head over there to leave a comment about this release!

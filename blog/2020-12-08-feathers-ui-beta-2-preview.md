---
title: Feathers UI beta.2 preview build on Haxelib
author: Josh Tynjala
authorURL: https://bowlerhat.dev/
authorImageURL: /img/authors/josh.jpg
layout: "blog-post.html"
permalink: "{{ page | blog_permalink }}"
tags: ["blog"]
---

Today, Feathers UI **beta.2** is now officially available [on Haxelib](https://lib.haxe.org/p/feathersui). This is the latest of multiple preview builds that are planned before the first stable release in early 2022. We've now made it past the _alpha_ stage, which means that the core framework architecture has settled down, and breaking changes are much less likely to happen. Developers who don't mind a few rough edges here and there should consider Feathers UI ready for starting development on new projects!

![](/blog/img/feathersui-beta-2.png)

[Feathers UI](https://feathersui.com/) is an open source framework of [user interface components](https://feathersui.com/learn/haxe-openfl/ui-components) for creative, [cross-platform](https://feathersui.com/cross-platform-guis/) projects. Using the [Haxe](https://haxe.org/) programming language, Feathers UI is built on [OpenFL](https://openfl.org/) — a user-friendly library for rendering, input, networking, and more. Deploy native apps to iOS, Android, Windows, macOS, Linux (and even publish your project to the web!) using the same Haxe codebase.

> 🚨 Please note that this is a **beta** version of Feathers UI. Some components and features may still be missing, and occasional bugs should be expected.

Feathers UI has reached this milestone thanks the very generous support of all of the backers from the [Feathers UI Kickstarter campaign](https://www.kickstarter.com/projects/feathersui/feathers-ui-cross-platform-components-for-haxe-and-openfl), which completed successfully in the summer of 2019. A big, enthusastic thank you to everyone who has supported the project, whether you are a backer, shared the Kickstarter with your friends on social media, or simply encouraged me ([Josh](https://github.com/joshtynjala)) to keep up the good work!

## What's new in beta.2?

Let's take a look at some of the new features that are included with Feathers UI beta.2.

### Restored support for OpenFL 8.9

The [previous beta.1 build](/blog/2020/11/16/feathers-ui-beta-1-preview/) was unintentionally released containing some incompatibilties with OpenFL 8.9. This was a mistake. Obviously, not everyone is ready to upgrade to [OpenFL 9](https://community.openfl.org/t/openfl-9-is-here/12637) yet. To ensure that this doesn't happen again, the CI server now builds using OpenFL 8.9 so that any new incompatible changes can be caught immediately.

### ToolTipManager

![](/blog/img/beta-2-feathersui-tool-tip-manager.png)

In desktop apps, a tool tip may be added to a UI component so that a helpful description is displayed when the mouse hovers over it. Now, all Feathers UI components have a [`toolTip` property](https://api.feathersui.com/current/feathers/core/IUIControl.html#toolTip) that accepts a string value.

```hx
var button = new Button();
button.text = "Click Me";
button.toolTip = "If you click me, you'll win a prize!";
addChild(button);
```

The [`Application`](https://feathersui.com/learn/haxe-openfl/application) component enables the [`ToolTipManager`](https://api.feathersui.com/current/feathers/core/ToolTipManager.html) automatically, but it may be disabled with `<haxdef name="disable_tool_tip_manager">` in your [_project.xml_ file](https://lime.openfl.org/docs/project-files/xml-format/). If your root class isn't an [`Application`](https://feathersui.com/learn/haxe-openfl/application), you may manually call [`ToolTipManager.addRoot()`](https://api.feathersui.com/current/feathers/core/ToolTipManager.html#addRoot) to enable tool tips.

As with all "managers" in Feathers UI, there is an [`IToolTipManager` interface](https://api.feathersui.com/current/feathers/core/IToolTipManager.html) that may be used to implement a custom tool-tip manager, if the default one does not completely meet your needs.

### Multiple item renderers

The [`ListView`](https://feathersui.com/learn/haxe-openfl/list-view), [`GridView`](https://feathersui.com/learn/haxe-openfl/grid-view), and [`TreeView`](https://feathersui.com/learn/haxe-openfl/tree-view) components have been updated to support displaying multiple types of item renderers for the same data collection.

The following example uses custom item renderers for the first and last items displayed by the `ListView`:

```hx
var regularItemRecycler = DisplayObjectRecycler.withClass(ItemRenderer);
var firstItemRecycler = DisplayObjectRecycler.withClass(CustomFirstItemRenderer);
var lastItemRecycler = DisplayObjectRecycler.withClass(CustomLastItemRenderer);

var listView = new ListView();
listView.itemRendererRecycler = regularItemRecycler;
listView.setItemRendererRecycler("first-item", firstItemRecycler);
listView.setItemRendererRecycler("last-item", lastItemRecycler);

listView.itemRendererRecyclerIDFunction = function(state:ListViewItemState):String {
  if(state.index == 0) {
    return "first-item";
  }
  if(state.index == listView.dataProvider.length - 1) {
    return "last-item";
  }
  // return null to use the default itemRendererRecycler
  return null;
};
```

For complete details about what else is included in this build, check out the [beta.2 CHANGELOG](https://github.com/feathersui/feathersui-openfl/blob/v1.0.0-beta.2/CHANGELOG.md).

## Install Feathers UI beta.2

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
- The [v1.0.0-beta.2 API Reference](https://api.feathersui.com/v1.0.0-beta.2/) includes descriptions of all APIs available on Feathers UI components, layouts, utility functions, and more.

## Community

- Start a thread in the [Feathers UI Community forum](https://community.feathersui.com/) to ask for help.
- Join the [Feathers UI Discord](https://discord.feathersui.com/) to chat with Josh and others in the community.

## Questions or comments?

Everyone, I just want to say thank you again for your support. I'm looking forward to hearing what you think of the new Feathers UI so far. If you create anything with this build — even a simple prototype — I'd love it if you could share your experiences (and maybe even a screenshot 🖼!).

I've created an [official beta.2 discussion thread](https://community.feathersui.com/d/46-feathers-ui-beta2-preview-build-on-haxelib) in the community forums. Head over there to leave a comment!

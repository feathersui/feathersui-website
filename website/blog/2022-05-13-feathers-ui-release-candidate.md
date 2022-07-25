---
title: Feathers UI 1.0 Release Candidate
author: Josh Tynjala
authorURL: https://bowlerhat.dev/
authorTwitter: joshtynjala
authorImageURL: /img/authors/josh.jpg
---

Today, Feathers UI **v1.0.0-rc.1** is now officially available [on Haxelib](https://lib.haxe.org/p/feathersui). If all goes well, the stable 1.0 release should happen by the end of June, or possibly in early July. The current plan is to wait until updates for both [OpenFL](https://openfl.org/) and [Lime](https://lime.openfl.org/) are released. The getting started experience for new developers will be significantly smoother with the latest bug fixes and other improvements from both of these critical dependencies.

![](/blog/img/feathersui-rc-1.png)

If you're not aware, [Feathers UI](https://feathersui.com/) is an [open source](https://github.com/feathersui/feathersui-openfl) framework of [graphical user interface (GUI) components](https://feathersui.com/learn/haxe-openfl/ui-components) for creative, [cross-platform](https://feathersui.com/cross-platform-guis/) projects. Using the [Haxe](https://haxe.org/) programming language, Feathers UI is built on [OpenFL](https://openfl.org/), a user-friendly library for rendering, input, networking, and more. Deploy native apps to iOS, Android, Windows, macOS, Linux… and even publish your project to the web — all using the same Haxe codebase.

> 🎉 Please note that this is a **release candidate** version of Feathers UI. It should be considered ready for production use.

Feathers UI continues to achieve each new milestone thanks the very generous support from the contributors on [Github Sponsors](https://github.com/sponsors/joshtynjala), and everyone who backed the successful [2019 Feathers UI Kickstarter campaign](https://www.kickstarter.com/projects/feathersui/feathers-ui-cross-platform-components-for-haxe-and-openfl). A big, enthusastic thank you to you all!

## What's new in rc.1

The focus for this release candidate has been primarily on fixing bugs and improving stability, but there are a few things worth mentioning:

- Most of the APIs marked `@:deprecated` in previous beta builds have been removed. Developers must migrate to specified replacement APIs. A few of the more recent `@:deprecated` APIs remain in this build only, and they will be removed in the final 1.0 stable release.

- [`ResponsiveGridLayout`](https://feathersui.com/learn/haxe-openfl/responsive-grid-layout/) supports a new "xxl" breakpoint, and [`ResponsiveGridLayoutData`](https://api.feathersui.com/v1.0.0-rc.1/feathers/layout/ResponsiveGridLayoutData.html) adds a new [`display`](https://api.feathersui.com/v1.0.0-rc.1/feathers/layout/ResponsiveGridLayoutData.html#display) property (and [`smDisplay`](https://api.feathersui.com/v1.0.0-rc.1/feathers/layout/ResponsiveGridLayoutData.html#smDisplay), [`mdDisplay`](https://api.feathersui.com/v1.0.0-rc.1/feathers/layout/ResponsiveGridLayoutData.html#mdDisplay), [`lgDisplay`](https://api.feathersui.com/v1.0.0-rc.1/feathers/layout/ResponsiveGridLayoutData.html#lgDisplay), etc.) to allow items to be shown or hidden from specific breakpoints.

- If `<haxedef name="feathersui_theme_manage_stage_color"/>` is defined in your [_project.xml_](https://lime.openfl.org/docs/project-files/xml-format/) file, the current theme will choose an appropriate color for OpenFL's stage. This is disabled by default to avoid conflicts.

- The [`toggleBranch()`](https://api.feathersui.com/v1.0.0-rc.1/feathers/controls/TreeView.html#toggleBranch) and [`toggleChildrenOf()`](https://api.feathersui.com/v1.0.0-rc.1/feathers/controls/TreeView.html#toggleChildrenOf) methods of [`TreeView`](https://feathersui.com/learn/haxe-openfl/tree-view/) and [`TreeGridView`](https://feathersui.com/learn/haxe-openfl/tree-grid-view/) received significant performance optimizations.

For complete details about what's new in this build, check out the [rc.1 CHANGELOG](https://github.com/feathersui/feathersui-openfl/blob/v1.0.0-rc.1/CHANGELOG.md).

## Install Feathers UI rc.1

Feathers UI rc.1 may be [installed](https://feathersui.com/learn/haxe-openfl/installation) using the [**haxelib install**](https://lib.haxe.org/documentation/using-haxelib/#install) command in your terminal.

```sh
haxelib install feathersui 1.0.0-rc.1
```

Be sure to take a look at the complete [installation instructions](https://feathersui.com/learn/haxe-openfl/installation) for details about installing required dependencies, along with links to step-by-step tutorials for setting up supported editors and IDEs.

## Documentation

- The [Feathers UI Getting Started guide](https://feathersui.com/learn/haxe-openfl/getting-started) provides the most essential links for creating your first Feathers UI project and learning about all of the features and [UI components](https://feathersui.com/learn/haxe-openfl/ui-components) that are available in the framework.
- The [v1.0.0-rc.1 API Reference](https://api.feathersui.com/v1.0.0-rc.1/) includes descriptions of all APIs available on Feathers UI components, layouts, utility functions, and more.

## Community

- Start a thread in the [Feathers UI Community forum](https://community.feathersui.com/) to ask for help.
- Join the [Feathers UI Discord](https://discord.feathersui.com/) to chat with Josh and others in the community.

## How to help the project

Want to help keep the lights on and servers running? Make a monthly (or one-time) contribution on [Github Sponsors](https://github.com/sponsors/joshtynjala).

## Questions or comments?

Everyone, I just want to say thank you again for your support. I'm looking forward to hearing what you think of the new Feathers UI so far. If you create anything with this build — even a simple prototype — I'd love it if you could share your experiences (and maybe even a screenshot 🖼!).

I've created an [official rc.1 discussion thread](https://community.feathersui.com/d/89-feathers-ui-release-candidate) in the community forums. Head over there to leave a comment!

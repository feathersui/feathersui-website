---
title: Feathers UI beta.6 preview build on Haxelib
author: Josh Tynjala
authorURL: https://bowlerhat.dev/
authorTwitter: joshtynjala
authorImageURL: /img/authors/josh.jpg
---

Today, Feathers UI **beta.6** is now officially available [on Haxelib](https://lib.haxe.org/p/feathersui). This is the latest of multiple preview builds that are planned before the first stable release in early 2022. Since we're in the _beta_ stage, the core framework architecture has settled down, and breaking changes are much less likely to happen going forward. Developers who don't mind a few rough edges here and there should consider Feathers UI ready for starting development on new projects!

![](/blog/img/feathersui-beta-6.png)

[Feathers UI](https://feathersui.com/) is an open source framework of [graphical user interface (GUI) components](https://feathersui.com/learn/haxe-openfl/ui-components) for creative, [cross-platform](https://feathersui.com/cross-platform-guis/) projects. Using the [Haxe](https://haxe.org/) programming language, Feathers UI is built on [OpenFL](https://openfl.org/), a user-friendly library for rendering, input, networking, and more. Deploy native apps to iOS, Android, Windows, macOS, Linux, and even publish your project to the web — all using the same Haxe codebase.

> 🚨 Please note that this is a **beta** version of Feathers UI. Some components and features may still be missing, and occasional bugs should be expected.

Feathers UI continues to achieve each new milestone thanks the very generous support from the contributors on [Github Sponsors](https://github.com/sponsors/joshtynjala), and everyone who backed the successful [2019 Feathers UI Kickstarter campaign](https://www.kickstarter.com/projects/feathersui/feathers-ui-cross-platform-components-for-haxe-and-openfl). A big, enthusastic thank you to you all!

## What's new in beta.6?

Let's take a look at some of the new features that are included with Feathers UI beta.6.

### New Transition Builders

A number of new [animated transitions](https://feathersui.com/learn/haxe-openfl/navigator-transitions/) are now available for Feathers UI navigator components.

<div style="text-align:center;"><a href="https://feathersui.com/learn/haxe-openfl/navigator-transitions/"><img src="/blog/img/beta-6-feathersui-transitions.png"></a></div>

- [`ColorFadeTransitionBuilder`](https://api.feathersui.com/current/feathers/motion/transitions/ColorFadeTransitionBuilder.html) offers a classic "fade to black" sort of effect. Obviously, you can fade to any color that you prefer. It doesn't need to be black.

- [`CoverTransitionBuilder`](https://api.feathersui.com/current/feathers/motion/transitions/CoverTransitionBuilder.html) "covers" the old view a new one by sliding in the new view on top.

- [`FadeTransitionBuilder`](https://api.feathersui.com/current/feathers/motion/transitions/FadeTransitionBuilder.html) fades the new view in, fades the old view out, or cross-fades both views at the same time.

- [`IrisTransitionBuilder`](https://api.feathersui.com/current/feathers/motion/transitions/IrisTransitionBuilder.html) animates the scale of a circular mask to replace the old view with the new view.

- [`RevealTransitionBuilder`](https://api.feathersui.com/current/feathers/motion/transitions/RevealTransitionBuilder.html) is the opposite of [`CoverTransitionBuilder`](https://api.feathersui.com/current/feathers/motion/transitions/CoverTransitionBuilder.html). It "reveals" the new view below the old view, by sliding the old view out of the way.

- [`SlideTransitionBuilder`](https://api.feathersui.com/current/feathers/motion/transitions/SlideTransitionBuilder.html) "slides" both views in the same direction by translating their position, with the new view starting out of bounds and ending where the old view started.

- [`WipeTransitionBuilder`](https://api.feathersui.com/current/feathers/motion/transitions/WipeTransitionBuilder.html) uses a retangular mask to "wipe" the old view away to reveal the new view below.

Want to see the transitions in action? Check out the new [Transitions Story Explorer](https://feathersui.com/samples/haxe-openfl/story-explorer/transitions/).

<div style="text-align:center;"><a href="https://feathersui.com/samples/haxe-openfl/story-explorer/transitions/"><img src="/blog/img/beta-6-feathersui-transitions-story-explorer.png" width="450"></a></div>

Each animated transition includes a number of configurable parameters, such as the duration in seconds, and the story explorer exposes controls for each transition so that you can play around with them.

### New Features

This build also fixes several bugs, and it includes many new features too. Here's a few worth highlighting:

- [`TreeView`](https://feathersui.com/learn/haxe-openfl/tree-view/) has a new [`toggleChildrenOf()`](https://api.feathersui.com/current/feathers/controls/TreeView.html#toggleChildrenOf) method that allows you to programmatically open and close all children of a branch. It also now supports using the keyboard's left and right arrow keys to open and close branches interactively, like how native UI trees work on desktop operating systems.

- Scrolling containers have a new [`scrollMode`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseScrollContainer.html#scrollMode) property that controls whether the internal implementation uses `scrollRect` or `mask` on its internal view port. This is an advanced property, and the difference will be subtle, but there may be times when one or the other works better. I wanted to make that choice available.

For complete details, check out the [beta.6 CHANGELOG](https://github.com/feathersui/feathersui-openfl/blob/v1.0.0-beta.6/CHANGELOG.md).

## Install Feathers UI beta.6

Feathers UI beta.6 may be [installed](https://feathersui.com/learn/haxe-openfl/installation) using the [**haxelib install**](https://lib.haxe.org/documentation/using-haxelib/#install) command in your terminal.

```sh
haxelib install feathersui 1.0.0-beta.6
```

Be sure to take a look at the complete [installation instructions](https://feathersui.com/learn/haxe-openfl/installation) for details about installing required dependencies, along with links to step-by-step tutorials for setting up supported editors and IDEs.

## Documentation

- The [Feathers UI Getting Started guide](https://feathersui.com/learn/haxe-openfl/getting-started) provides the most essential links for creating your first Feathers UI project and learning about all of the features and [UI components](https://feathersui.com/learn/haxe-openfl/ui-components) that are available in the framework.
- The [v1.0.0-beta.6 API Reference](https://api.feathersui.com/v1.0.0-beta.6/) includes descriptions of all APIs available on Feathers UI components, layouts, utility functions, and more.

## Community

- Start a thread in the [Feathers UI Community forum](https://community.feathersui.com/) to ask for help.
- Join the [Feathers UI Discord](https://discord.feathersui.com/) to chat with Josh and others in the community.

## How to help the project

Want to help keep the lights on and servers running? Make a monthly (or one-time) contribution on [Github Sponsors](https://github.com/sponsors/joshtynjala).

## Questions or comments?

Everyone, I just want to say thank you again for your support. I'm looking forward to hearing what you think of the new Feathers UI so far. If you create anything with this build — even a simple prototype — I'd love it if you could share your experiences (and maybe even a screenshot 🖼!).

I've created an [official beta.6 discussion thread](https://community.feathersui.com/d/73-feathers-ui-beta6-preview-build-on-haxelib) in the community forums. Head over there to leave a comment!

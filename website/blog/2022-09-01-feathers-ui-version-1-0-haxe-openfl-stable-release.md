---
title: Feathers UI version 1.0 for Haxe and OpenFL
author: Josh Tynjala
authorURL: https://bowlerhat.dev/
authorTwitter: joshtynjala
authorImageURL: /img/authors/josh.jpg
---

Today, Feathers UI **v1.0.0** is now officially available [on Haxelib](https://lib.haxe.org/p/feathersui). This is the first stable, major release of the library after three years of effort porting the original Starling codebase to [OpenFL](https://openfl.org/) and [Haxe](https://haxe.org) — including many new UI components and improvements to the core APIs. Going forward, Feathers UI should be considered ready to be deployed to production, and its API should be considered stable — changing only with major versions, when necessary.

_Be sure to read to the very end of this post for an exciting **bonus** announcement…_

<img src="/blog/img/feathers-ui-1-0-0-release.png">

By the way, a _massive_ thank you to everyone who contributed to the [2019 Feathers UI Kickstarter campaign](https://www.kickstarter.com/projects/feathersui/feathers-ui-cross-platform-components-for-haxe-and-openfl) and everyone who continues to support the project on [Github Sponsors](https://github.com/sponsors/joshtynjala). Though this first release took longer than I hoped, we're finally here. It couldn't have been done without the generous support of the community.

<a href="https://feathersui.com/samples/haxe-openfl/todomvc/" target="_blank"><img src="/blog/img/feathersui-todomvc-sample.png"></a>

If you're not aware, [Feathers UI](https://feathersui.com/) is an [open source](https://github.com/feathersui/feathersui-openfl) framework of [graphical user interface (GUI) components](https://feathersui.com/learn/haxe-openfl/ui-components) for creative, [cross-platform](https://feathersui.com/cross-platform-guis/) projects. Using the [Haxe](https://haxe.org/) programming language, Feathers UI is built on [OpenFL](https://openfl.org/), a user-friendly library for rendering, input, networking, and more. Deploy native apps to iOS, Android, Windows, macOS, Linux… and even publish your project to the web — all using the same Haxe codebase.

## What's new in 1.0.0

As should be expected, since [rc.2](https://feathersui.com/blog/2022/06/15/feathers-ui-release-candidate-2/) was released in June, only a couple of small bug fixes have been committed. For complete details about what's new in this build, check out the [v1.0.0 CHANGELOG](https://github.com/feathersui/feathersui-openfl/blob/v1.0.0/CHANGELOG.md).

Instead, let's look at some things that are new in the Haxe and OpenFL version of Feathers UI versus the original Starling version.

If you've never used Feathers UI before, everything is new to you. In that case, you should check out the [list of Feathers UI components](https://feathersui.com/learn/haxe-openfl/ui-components/) and the [Getting Started guide](https://feathersui.com/learn/haxe-openfl/getting-started) for an overview of the library and its capabilities. Be sure to visit the [Feathers UI Samples](https://feathersui.com/samples/haxe-openfl/) page to see example apps and demonstrations of individual features. And drop by the [Showcase](https://feathersui.com/showcase/) to see what other developers have built with Feathers UI.

If you're experienced with the original Starling version of Feathers UI, you might be interested in some of the new features that have been added in the Haxe and OpenFL version of Feathers UI.

### UI Components

Several new UI components have been added that didn't exist in the Starling version.

<a href="https://feathersui.com/learn/haxe-openfl/pop-up-date-picker/" target="_blank"><img src="/blog/img/feathersui-pop-up-date-picker.png"></a>

- [`ComboBox`](https://feathersui.com/learn/haxe-openfl/combo-box/)
- [`DatePicker`](https://feathersui.com/learn/haxe-openfl/date-picker/)
- [`Form` and `FormItem`](https://feathersui.com/learn/haxe-openfl/form/)
- [`HDividedBox` and `VDividedBox`](https://feathersui.com/learn/haxe-openfl/divided-box/)
- [`PageNavigator`](https://feathersui.com/learn/haxe-openfl/page-navigator/)
- [`PopUpDatePicker`](https://feathersui.com/learn/haxe-openfl/pop-up-date-picker/)
- [`RouterNavigator`](https://feathersui.com/learn/haxe-openfl/router-navigator/)
- [`TreeGridView`](https://feathersui.com/learn/haxe-openfl/tree-grid-view/)

### Layouts

A new [`ResponsiveGridLayout`](https://feathersui.com/learn/haxe-openfl/responsive-grid-layout/) gives you a 12 column layout that can change appearance based on device screen width — similar to Bootstrap and other web frameworks.

<a href="https://feathersui.com/learn/haxe-openfl/responsive-grid-layout/" target="_blank"><img src="/blog/img/feathersui-responsive-grid-layout.png"></a>

Plus, one thing to point out about existing layouts: As you can see below, a few of the core layouts were separated into two or more variations for **simple containers** (like [`LayoutGroup`](https://feathersui.com/learn/haxe-openfl/layout-group/) and [`ScrollContainer`](https://feathersui.com/learn/haxe-openfl/scroll-container/)) and **data containers** (like [`ListView`](https://feathersui.com/learn/haxe-openfl/list-view/) and [`TreeView`](https://feathersui.com/learn/haxe-openfl/tree-view/)).

- [`HorizontalLayout`](https://feathersui.com/learn/haxe-openfl/horizontal-layout/) and [`HorizontalListLayout`](https://feathersui.com/learn/haxe-openfl/horizontal-list-layout/)
- [`VerticalLayout`](https://feathersui.com/learn/haxe-openfl/vertical-layout/), [`VerticalListLayout`](https://feathersui.com/learn/haxe-openfl/vertical-list-layout/), and [`VerticaListFixedRowLayout`](https://feathersui.com/learn/haxe-openfl/vertical-list-fixed-row-layout/)
- [`TiledRowsLayout`](https://feathersui.com/learn/haxe-openfl/tiled-rows-layout/), [`TiledRowsListLayout`](https://feathersui.com/learn/haxe-openfl/tiled-rows-list-layout/), and [`PagedTiledRowsListLayout`](https://feathersui.com/learn/haxe-openfl/paged-tiled-rows-list-layout/)

The benefits of this refactoring include 1) smaller output file sizes when you don't need every feature, 2) easier subclassing, and 3) less complex custom layout classes.

### Skinning

Finally, be sure to check out the new skinning capabilities using OpenFL's graphics API.

<a href="https://feathersui.com/samples/haxe-openfl/custom-theme/" target="_blank"><img src="/blog/img/feathersui-custom-theme-sample.png"></a>

- [Common shape skins](https://feathersui.com/learn/haxe-openfl/shape-skins/) explains how to skin a UI component with vector graphic shapes, such as rectangles, circles, tabs, pills, and more. Customize fills and strokes with solid colors, gradients, and tiled bitmaps.
- [Custom programmatic skins](https://feathersui.com/learn/haxe-openfl/custom-programmatic-skins/) shows you how to use the new [`ProgrammaticSkin`](https://api.feathersui.com/current/feathers/skins/ProgrammaticSkin.html) base class to create even more advanced custom skins with your own graphical shapes, state changes, and animation.

## Install Feathers UI v1.0.0

Feathers UI v1.0.0 may be [installed](https://feathersui.com/learn/haxe-openfl/installation) using the [**haxelib install**](https://lib.haxe.org/documentation/using-haxelib/#install) command in your terminal.

```sh
haxelib install feathersui 1.0.0
```

Be sure to take a look at the complete [installation instructions](https://feathersui.com/learn/haxe-openfl/installation) for details about installing required dependencies, along with links to step-by-step tutorials for setting up supported editors and IDEs.

## Documentation

- The [Feathers UI Getting Started guide](https://feathersui.com/learn/haxe-openfl/getting-started) provides the most essential links for creating your first Feathers UI project and learning about all of the features and [UI components](https://feathersui.com/learn/haxe-openfl/ui-components) that are available in the framework.
- The [v1.0.0 API Reference](https://api.feathersui.com/v1.0.0/) includes descriptions of all APIs available on Feathers UI components, layouts, utility functions, and more.

## Community

- Start a thread in the [Feathers UI Community forum](https://community.feathersui.com/) to ask for help.
- Join the [Feathers UI Discord](https://discord.feathersui.com/) to chat with Josh and others in the community.

## How to help the project

Want to help keep the lights on and servers running? Please contribute on [Github Sponsors](https://github.com/sponsors/joshtynjala).

## Questions or comments?

Everyone, I just want to say thank you again for your support. I'd love to hear about your experience so far with Feathers UI — whether it's good, bad, or in-between.

I've created an [official v1.0.0 discussion thread](https://community.feathersui.com/d/96-feathers-ui-version-10-for-haxe-and-openfl) in the community forums. Head over there to leave a comment!

## Wait, there's more…

Finally, I'd like to announce that this is the start of [**Feathers UI Release Week**](https://feathersui.com/blog/2022/09/16/release-week-summary-feathers-ui-9-open-source-projectss/). Hold on… did I say _week?!_ Yes, there's a lot more in store.

<a href="https://feathersui.com/blog/2022/09/16/release-week-summary-feathers-ui-9-open-source-projectss/"><img src="/blog/img/feathersui-release-week.png"></a>

I've [released several useful new open source projects](https://feathersui.com/blog/2022/09/16/release-week-summary-feathers-ui-9-open-source-projectss/) related to OpenFL and Feathers UI. Get ready for some new build tools, micro-frameworks, and utility libraries to make development easier.

The first of these additional open source releases happened on Tuesday, September 6, 2022 (because Monday was a holiday in USA). Then, I released something new each day until my queue was empty. It continued beyond a week, to be honest! There's just so much to share, and it's super exciting to finally release it all for you.

Please give Feathers UI v1.0 a try, and check out those [bonus open source announcements](https://feathersui.com/blog/2022/09/16/release-week-summary-feathers-ui-9-open-source-projectss/) too.

Happy coding!

Josh Tynjala, Feathers UI

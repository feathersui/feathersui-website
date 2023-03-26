---
title: Feathers UI beta.7 preview build on Haxelib
author: Josh Tynjala
authorURL: https://bowlerhat.dev/
authorTwitter: joshtynjala
authorImageURL: /img/authors/josh.jpg
layout: "blog-post.html"
permalink: "{{ page | blog_permalink }}"
tags: ["blog"]
---

Today, Feathers UI **beta.7** is now officially available [on Haxelib](https://lib.haxe.org/p/feathersui). This is the latest of multiple preview builds that are planned before the first stable release in early 2022. Since we're in the _beta_ stage, the core framework architecture has settled down, and breaking changes are much less likely to happen going forward. Developers who don't mind some minor rough edges here and there should consider Feathers UI ready for starting development on new projects!

![](/blog/img/feathersui-beta-7.png)

[Feathers UI](https://feathersui.com/) is an [open source](https://github.com/feathersui/feathersui-openfl) framework of [graphical user interface (GUI) components](https://feathersui.com/learn/haxe-openfl/ui-components) for creative, [cross-platform](https://feathersui.com/cross-platform-guis/) projects. Using the [Haxe](https://haxe.org/) programming language, Feathers UI is built on [OpenFL](https://openfl.org/), a user-friendly library for rendering, input, networking, and more. Deploy native apps to iOS, Android, Windows, macOS, Linux… and even publish your project to the web — all using the same Haxe codebase.

> 🚨 Please note that this is a **beta** version of Feathers UI. Some components and features may still be missing, and occasional bugs should be expected.

Feathers UI continues to achieve each new milestone thanks the very generous support from the contributors on [Github Sponsors](https://github.com/sponsors/joshtynjala), and everyone who backed the successful [2019 Feathers UI Kickstarter campaign](https://www.kickstarter.com/projects/feathersui/feathers-ui-cross-platform-components-for-haxe-and-openfl). A big, enthusastic thank you to you all!

## What's new in beta.7?

Let's take a look at some of the new components and features that are included with Feathers UI beta.7.

### New Components

A couple of new [UI components](https://feathersui.com/learn/haxe-openfl/ui-components/) are included in this update.

<div style="text-align:center;"><a href="https://feathersui.com/learn/haxe-openfl/date-picker/"><img src="/blog/img/beta-7-feathersui-date-picker.png" width="200"></a></div>

[`DatePicker`](https://feathersui.com/learn/haxe-openfl/date-picker/) allows the user to select a date from a month view. The month or year may be changed by clicking a button in the header (you may configure which buttons get displayed, including hiding all of them to display only one month). This component uses the new `openfl.globalization.DateTimeFormatter` class coming in the next OpenFL update to localize month and weekday names in HTML/JS (or in Adobe AIR, of course). For older versions of OpenFL, it always defaults to the _en-US_ locale.

<div style="text-align:center;"><a href="https://feathersui.com/learn/haxe-openfl/pop-up-date-picker/"><img src="/blog/img/beta-7-feathersui-pop-up-date-picker.png" width="200"></a></div>

[`PopUpDatePicker`](https://feathersui.com/learn/haxe-openfl/pop-up-date-picker/) includes an input field to display the selected date, and a button to toggle the display of a [`DatePicker`](https://feathersui.com/learn/haxe-openfl/date-picker/) as a pop-up. It's sort of like a [`ComboBox`](https://feathersui.com/learn/haxe-openfl/combo-box/) component for dates.

### New Features

This build also fixes several bugs, and it includes a some new features too. Here's a few worth highlighting:

- [`RouterNavigator`](https://feathersui.com/learn/haxe-openfl/router-navigator/) now supports URL hashes for managing history when targeting HTML/JS and full URLs are not supported. The navigator will attempt to use full URLs by default. However, when targeting Electron, or when the page is loaded with the `file:` protocol, the navigator will automatically switch to hashes. If needed, you can set a new [`preferHashRouting`](https://api.feathersui.com/current/feathers/controls/navigators/RouterNavigator.html#preferHashRouting) to `true` to always use hash routing in HTML/JS. On all other targets, same as previously, history is always saved in memory.
- [`RouterNavigator`](https://feathersui.com/learn/haxe-openfl/router-navigator/) and [`StackNavigator`](https://feathersui.com/learn/haxe-openfl/stack-navigator/) support new `saveData` and `restoreData` methods to persist a view's session data when navigating away, and to restore that data when returning to the same view later.
- Added a new [`disabledAlpha`](https://api.feathersui.com/current/feathers/core/FeathersControl.html#disabledAlpha) property to all components, to optionally lower the component's opacity when disabling it.

For complete details, check out the [beta.7 CHANGELOG](https://github.com/feathersui/feathersui-openfl/blob/v1.0.0-beta.7/CHANGELOG.md).

## Install Feathers UI beta.7

Feathers UI beta.7 may be [installed](https://feathersui.com/learn/haxe-openfl/installation) using the [**haxelib install**](https://lib.haxe.org/documentation/using-haxelib/#install) command in your terminal.

```sh
haxelib install feathersui 1.0.0-beta.7
```

Be sure to take a look at the complete [installation instructions](https://feathersui.com/learn/haxe-openfl/installation) for details about installing required dependencies, along with links to step-by-step tutorials for setting up supported editors and IDEs.

## Documentation

- The [Feathers UI Getting Started guide](https://feathersui.com/learn/haxe-openfl/getting-started) provides the most essential links for creating your first Feathers UI project and learning about all of the features and [UI components](https://feathersui.com/learn/haxe-openfl/ui-components) that are available in the framework.
- The [v1.0.0-beta.7 API Reference](https://api.feathersui.com/v1.0.0-beta.7/) includes descriptions of all APIs available on Feathers UI components, layouts, utility functions, and more.

## Community

- Start a thread in the [Feathers UI Community forum](https://community.feathersui.com/) to ask for help.
- Join the [Feathers UI Discord](https://discord.feathersui.com/) to chat with Josh and others in the community.

## How to help the project

Want to help keep the lights on and servers running? Make a monthly (or one-time) contribution on [Github Sponsors](https://github.com/sponsors/joshtynjala).

## Questions or comments?

Everyone, I just want to say thank you again for your support. I'm looking forward to hearing what you think of the new Feathers UI so far. If you create anything with this build — even a simple prototype — I'd love it if you could share your experiences (and maybe even a screenshot 🖼!).

I've created an [official beta.7 discussion thread](https://community.feathersui.com/d/75-feathers-ui-beta7-preview-build-on-haxelib) in the community forums. Head over there to leave a comment!

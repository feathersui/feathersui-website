---
title: Feathers UI beta.4 preview build on Haxelib
author: Josh Tynjala
authorURL: https://bowlerhat.dev/
authorTwitter: joshtynjala
authorImageURL: /img/authors/josh.jpg
layout: "blog-post.html"
permalink: "{{ page | blog_permalink }}"
tags: ["blog"]
---

Today, Feathers UI **beta.4** is now officially available [on Haxelib](https://lib.haxe.org/p/feathersui). This is the latest of multiple preview builds that are planned before the first stable release in early 2022. Since we're in the _beta_ stage, the core framework architecture has settled down, and breaking changes are much less likely to happen going forward. Developers who don't mind a few rough edges here and there should consider Feathers UI ready for starting development on new projects!

![](/blog/img/feathersui-beta-4.png)

[Feathers UI](https://feathersui.com/) is an open source framework of [user interface components](https://feathersui.com/learn/haxe-openfl/ui-components) for creative, [cross-platform](https://feathersui.com/cross-platform-guis/) projects. Using the [Haxe](https://haxe.org/) programming language, Feathers UI is built on [OpenFL](https://openfl.org/) — a user-friendly library for rendering, input, networking, and more. Deploy native apps to iOS, Android, Windows, macOS, Linux (and even publish your project to the web!) using the same Haxe codebase.

> 🚨 Please note that this is a **beta** version of Feathers UI. Some components and features may still be missing, and occasional bugs should be expected.

Feathers UI continues to achieve each new milestone thanks the very generous support from the contributors on [Github Sponsors](https://github.com/sponsors/joshtynjala), and everyone who backed the successful [2019 Feathers UI Kickstarter campaign](https://www.kickstarter.com/projects/feathersui/feathers-ui-cross-platform-components-for-haxe-and-openfl). A big, enthusastic thank you to you all!

## What's new in beta.4?

Let's take a look at some of the new UI components and features that are included with Feathers UI beta.4.

### New UI Components

- [`NumericStepper`](https://feathersui.com/learn/haxe-openfl/numeric-stepper/) displays editable numeric text with a set of buttons to increment and decrement the value.

    <div style="text-align:center;"><a href="https://feathersui.com/learn/haxe-openfl/numeric-stepper/"><img src="/blog/img/beta-4-feathersui-numeric-stepper.png" style="width:450px"/></a></div>

### New Features

This build also fixes a ton of bugs, and it includes many new features too. Here's a few worth highlighting:

- [`ComboBox`](https://feathersui.com/learn/haxe-openfl/combo-box/) and [`PopUpListView`](https://feathersui.com/learn/haxe-openfl/pop-up-list-view/) both have a new [`prompt`](https://api.feathersui.com/current/feathers/controls/PopUpListView.html#prompt) property to display some placeholder text when no item is currently selected.

  ```hx
  popUpListView.prompt = "Select an item";
  ```

    <div style="text-align:center;"><a href="https://api.feathersui.com/current/feathers/controls/PopUpListView.html#prompt"><img src="/blog/img/beta-4-feathersui-pop-up-list-view-prompt.png" style="width:450px"/></a></div>

- [`GridView`](https://feathersui.com/learn/haxe-openfl/grid-view/) adds a new [`sortableColumns`](https://api.feathersui.com/current/feathers/controls/GridView.html#sortableColumns) property, which updates the sort order when the user clicks a column header. Alternatively, developers may set new [`sortedColumn`](https://api.feathersui.com/current/feathers/controls/GridView.html#sortedColumn) and [`sortOrder`](https://api.feathersui.com/current/feathers/controls/GridView.html#sortOrder) properties to change the sort order programatically. When a column is sorted, a visual indicator may be displayed to the user in the column header to indicate the order (ascending or descending).

    <div style="text-align:center;"><a href="https://api.feathersui.com/current/feathers/controls/GridView.html#sortableColumns"><img src="/blog/img/beta-4-feathersui-grid-view-sortable-columns.png" style="width:450px"/></a></div>

- [`GridView`](https://feathersui.com/learn/haxe-openfl/grid-view/) also adds optional new divider skins between columns and between column headers.

    <div style="text-align:center;"><a href="https://api.feathersui.com/current/feathers/controls/GridView.html#columnDividerFactory"><img src="/blog/img/beta-4-feathersui-grid-view-column-dividers.png" style="width:450px"/></a></div>

- [`ItemRenderer`](https://feathersui.com/learn/haxe-openfl/item-renderer/) can display an optional [`accessoryView`](https://api.feathersui.com/current/feathers/controls/dataRenderers/ItemRenderer.html#accessoryView) on the far right side.

    <div style="text-align:center;"><a href="https://api.feathersui.com/current/feathers/controls/dataRenderers/ItemRenderer.html#accessoryView"><img src="/blog/img/beta-4-feathersui-item-renderer-accessory-view.png" style="width:450px"/></a></div>

- [`HorizontalLayoutData`](https://api.feathersui.com/current/feathers/layout/HorizontalLayoutData.html) and [`VerticalLayoutData`](https://api.feathersui.com/current/feathers/layout/VerticalLayoutData.html) have new static helper functions named [`fill()`](https://api.feathersui.com/current/feathers/layout/HorizontalLayoutData.html#fill), [`fillHorizontal()`](https://api.feathersui.com/current/feathers/layout/HorizontalLayoutData.html#fillHorizontal), and [`fillVertical()`](https://api.feathersui.com/current/feathers/layout/HorizontalLayoutData.html#fillVertical). These make it quick and easy to create layout data object with [`percentWidth`](https://api.feathersui.com/current/feathers/layout/HorizontalLayoutData.html#percentWidth) and [`percentHeight`](https://api.feathersui.com/current/feathers/layout/HorizontalLayoutData.html#percentHeight) values set to `100.0`.

  ```hx
  component.layoutData = VerticalLayoutData.fillVertical();
  ```

- [`TextInput`](https://feathersui.com/learn/haxe-openfl/text-input/) and [`TextArea`](https://feathersui.com/learn/haxe-openfl/text-area/) both have a new [`errorString`](https://api.feathersui.com/current/feathers/controls/TextInput.html#errorString) property that displays a callout with the error message when focused, and displays a special border.

  ```hx
  textInput.errorString = "Something is wrong";
  ```

    <div style="text-align:center;"><a href="https://api.feathersui.com/current/feathers/controls/TextInput.html#errorString"><img src="/blog/img/beta-4-feathersui-text-input-error-string.png" style="width:450px"/></a></div>

This list would be far too long if it included all of the bug fixes related focus management, scrolling, item renderer recycling, themes and styles, and more. For complete details, check out the [beta.4 CHANGELOG](https://github.com/feathersui/feathersui-openfl/blob/v1.0.0-beta.4/CHANGELOG.md).

## Install Feathers UI beta.4

Feathers UI beta.4 may be [installed](https://feathersui.com/learn/haxe-openfl/installation) using the [**haxelib install**](https://lib.haxe.org/documentation/using-haxelib/#install) command in your terminal.

```sh
haxelib install feathersui 1.0.0-beta.4
```

Be sure to take a look at the complete [installation instructions](https://feathersui.com/learn/haxe-openfl/installation) for details about installing required dependencies, along with links to step-by-step tutorials for setting up supported editors and IDEs.

## Documentation

- The [Feathers UI Getting Started guide](https://feathersui.com/learn/haxe-openfl/getting-started) provides the most essential links for creating your first Feathers UI project and learning about all of the features and [UI components](https://feathersui.com/learn/haxe-openfl/ui-components) that are available in the framework.
- The [v1.0.0-beta.4 API Reference](https://api.feathersui.com/v1.0.0-beta.4/) includes descriptions of all APIs available on Feathers UI components, layouts, utility functions, and more.

## Community

- Start a thread in the [Feathers UI Community forum](https://community.feathersui.com/) to ask for help.
- Join the [Feathers UI Discord](https://discord.feathersui.com/) to chat with Josh and others in the community.

## Questions or comments?

Everyone, I just want to say thank you again for your support. I'm looking forward to hearing what you think of the new Feathers UI so far. If you create anything with this build — even a simple prototype — I'd love it if you could share your experiences (and maybe even a screenshot 🖼!).

I've created an [official beta.4 discussion thread](https://community.feathersui.com/d/58-feathers-ui-beta4-preview-build-on-haxelib) in the community forums. Head over there to leave a comment!

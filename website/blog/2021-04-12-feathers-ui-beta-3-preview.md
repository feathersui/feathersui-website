---
title: Feathers UI beta.3 preview build on Haxelib
author: Josh Tynjala
authorURL: https://bowlerhat.dev/
authorTwitter: joshtynjala
authorImageURL: /img/authors/josh.jpg
---

Today, Feathers UI **beta.3** is now officially available [on Haxelib](https://lib.haxe.org/p/feathersui). This is the latest of multiple preview builds that are planned before the first stable release in 2021. Since we're in the _beta_ stage, the core framework architecture has settled down, and breaking changes are much less likely to happen. Developers who don't mind a few rough edges here and there should consider Feathers UI ready for starting development on new projects!

![](/blog/img/feathersui-beta-3.png)

[Feathers UI](https://feathersui.com/) is an open source framework of [user interface components](https://feathersui.com/learn/haxe-openfl/ui-components) for creative, [cross-platform](https://feathersui.com/cross-platform-guis/) projects. Using the [Haxe](https://haxe.org/) programming language, Feathers UI is built on [OpenFL](https://openfl.org/) — a user-friendly library for rendering, input, networking, and more. Deploy native apps to iOS, Android, Windows, macOS, Linux (and even publish your project to the web!) using the same Haxe codebase.

> 🚨 Please note that this is a **beta** version of Feathers UI. Some components and features may still be missing, and occasional bugs should be expected.

Feathers UI has reached this milestone thanks the very generous support of all of the backers from the [Feathers UI Kickstarter campaign](https://www.kickstarter.com/projects/feathersui/feathers-ui-cross-platform-components-for-haxe-and-openfl), which completed successfully in the summer of 2019. A big, enthusastic thank you to everyone who has supported the project, whether you are a backer, shared the Kickstarter with your friends on social media, or simply encouraged me ([Josh](https://twitter.com/joshtynjala)) to keep up the good work!

## What's new in beta.3?

Let's take a look at some of the new UI components and features that are included with Feathers UI beta.3

### New UI Components

- [`Alert`](https://feathersui.com/learn/haxe-openfl/alert/) displays a message in a modal pop-up dialog with a title and a set of buttons.

    <div style="text-align:center;"><a href="https://api.feathersui.com/current/feathers/controls/Alert.html"><img src="/blog/img/beta-3-feathersui-alert.png" style="width:450px"></a></div>

- [`ButtonBar`](https://feathersui.com/learn/haxe-openfl/button-bar/) displays a grouping of buttons based on a [data collection](https://feathersui.com/learn/haxe-openfl/data-collections).

    <div style="text-align:center;"><a href="https://api.feathersui.com/current/feathers/controls/ButtonBar.html"><img src="/blog/img/beta-3-feathersui-button-bar.png" style="width:450px"></a></div>

- [`Form`](https://feathersui.com/learn/haxe-openfl/form/) and [`FormItem`](https://api.feathersui.com/current/feathers/controls/FormItem.html) display a set of form controls with labels, including the ability to assign a specific submit button.

    <div style="text-align:center;"><a href="https://api.feathersui.com/current/feathers/controls/Form.html"><img src="/blog/img/beta-3-feathersui-form.png" style="width:450px"></a></div>

- [`Header`](https://feathersui.com/learn/haxe-openfl/header/) display a title in the center and two optional views on the left and right sides.

    <div style="text-align:center;"><a href="https://api.feathersui.com/current/feathers/controls/Header.html"><img src="/blog/img/beta-3-feathersui-header.png" style="width:450px"></a></div>

### A big release

This build also includes a ton of minor improvements. Here's a few worth highlighting:

<div style="text-align:center;"><img src="/blog/img/beta-3-feathersui-grid-view-horizontal-scrolling.png" style="width:450px"></a></div>

- Support for horizontal scrolling in the [`GridView`](https://api.feathersui.com/current/feathers/controls/GridView.html) component when the content width exceeds the container width.
- Separate [`branchIcon`](https://api.feathersui.com/current/feathers/controls/dataRenderers/TreeViewItemRenderer.html#branchIcon), [`branchOpenIcon`](https://api.feathersui.com/current/feathers/controls/dataRenderers/TreeViewItemRenderer.html#branchOpenIcon), [`branchClosedIcon`](https://api.feathersui.com/current/feathers/controls/dataRenderers/TreeViewItemRenderer.html#branchClosedIcon), and [`leafIcon`](https://api.feathersui.com/current/feathers/controls/dataRenderers/TreeViewItemRenderer.html#leafIcon) styles on the [`TreeViewItemRenderer`](https://api.feathersui.com/current/feathers/controls/renderers/TreeViewItemRenderer.html) component.
- A [`maxChars`](https://api.feathersui.com/current/feathers/controls/TextInput.html#maxChars) property for [`TextInput`](https://api.feathersui.com/current/feathers/controls/TextInput.html) and [`TextArea`](https://api.feathersui.com/current/feathers/controls/TextArea.html).
- A new `setPadding()` convenience method was added to all classes with `paddingTop`, `paddingRight`, `paddingBottom` and `paddingLeft` properties. It sets all four value at once.
- A new [`Application.topLevelApplication`](https://api.feathersui.com/current/feathers/controls/Application.html#topLevelApplication) static property that makes it easy to access the root Feathers UI application object.
- [`ArrayHierarchicalCollection`](https://api.feathersui.com/current/feathers/data/ArrayHierarchicalCollection.html) is a new implementation of [`IHierarchicalCollection`](https://api.feathersui.com/current/feathers/data/IHierarchicalCollection.html) that's a bit more flexible than the existing [`TreeCollection`](https://api.feathersui.com/current/feathers/data/TreeCollection.html).
- New [`filterFunction`](https://api.feathersui.com/current/feathers/data/IHierarchicalCollection.html#filterFunction) and [`sortCompareFunction`](https://api.feathersui.com/current/feathers/data/IHierarchicalCollection.html#sortCompareFunction) properties on [`IHierarchicalCollection`](https://api.feathersui.com/current/feathers/data/IHierarchicalCollection.html) to match the same properties on `IFlatCollection`.

For complete details, check out the [beta.3 CHANGELOG](https://github.com/feathersui/feathersui-openfl/blob/v1.0.0-beta.3/CHANGELOG.md).

## Install Feathers UI beta.3

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
- The [v1.0.0-beta.3 API Reference](https://api.feathersui.com/v1.0.0-beta.3/) includes descriptions of all APIs available on Feathers UI components, layouts, utility functions, and more.

## Community

- Start a thread in the [Feathers UI Community forum](https://community.feathersui.com/) to ask for help.
- Join the [Feathers UI Discord](https://discord.feathersui.com/) to chat with Josh and others in the community.

## Questions or comments?

Everyone, I just want to say thank you again for your support. I'm looking forward to hearing what you think of the new Feathers UI so far. If you create anything with this build — even a simple prototype — I'd love it if you could share your experiences (and maybe even a screenshot 🖼!).

I've created an [official beta.3 discussion thread](https://community.feathersui.com/d/54-feathers-ui-beta3-preview-build-on-haxelib) in the community forums. Head over there to leave a comment!

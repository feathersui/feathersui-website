---
title: Feathers UI v1.1 release for Haxe and OpenFL
author: Josh Tynjala
authorURL: https://bowlerhat.dev/
authorTwitter: joshtynjala
authorImageURL: /img/authors/josh.jpg
---

Today, Feathers UI **v1.1.0** is now officially available [on Haxelib](https://lib.haxe.org/p/feathersui/1.1.0). This is the first update after the initial stable 1.0 release of the library. It includes a number of new features, and a variety of bug fixes for various components. There are no breaking changes, so everyone is encouraged to update!

<img src="/blog/img/feathers-ui-1-1-0-update-release.png">

If you're not aware, [Feathers UI](https://feathersui.com/) is an [open source](https://github.com/feathersui/feathersui-openfl) framework of [graphical user interface (GUI) components](https://feathersui.com/learn/haxe-openfl/ui-components) for creative, [cross-platform](https://feathersui.com/cross-platform-guis/) projects. Using the [Haxe](https://haxe.org/) programming language, Feathers UI is built on [OpenFL](https://openfl.org/) — a user-friendly library for rendering, input, networking, and more. Deploy native apps to iOS, Android, Windows, macOS, Linux (and even publish your project to the web!) all using the same Haxe codebase.

## What's new in 1.1.0

### UI components

<div style="text-align:center;"><img src="/blog/img/activity-indicator-feathersui-1.1.0.png" width="70"></div>

This update adds the new [`ActivityIndicator`](https://feathersui.com/learn/haxe-openfl/activity-indicator) component, sometimes called a loading spinner. An activity indicator is meant to display _indeterminate_ progress with a repeating animation. It supports a new [`IIndeterminateSkin`](https://api.feathersui.com/current/feathers/skins/IIndeterminateSkin.html) interface for creating skins with custom graphics and animations.

The [`HProgressBar` and `VProgressBar`](https://feathersui.com/learn/haxe-openfl/progress-bar) components have a new [`fillMode`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseProgressBar.html#fillMode) property that controls how the [`fillSkin`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseProgressBar.html#fillSkin) appearance is adjusted when the [`value`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseProgressBar.html#value) changes. It defaults to [`ProgressBarFillMode.RESIZE`](https://api.feathersui.com/current/feathers/controls/ProgressBarFillMode.html#RESIZE), which matches the existing behavior in 1.0, where the `fillSkin` width or height is adjusted. However, the new `fillMode` property supports two additional modes, [`ProgressBarFillMode.MASK`](https://api.feathersui.com/current/feathers/controls/ProgressBarFillMode.html#MASK) and [`ProgressBarFillMode.SCROLL_RECT`](https://api.feathersui.com/current/feathers/controls/ProgressBarFillMode.html#SCROLL_RECT). Both of these modes keep the width or height of the `fillSkin` the same for all values, and instead, the width or height of a `mask` or `scrollRect` is adjusted. In other words, it _crops_ the fill skin instead of _stretching_ or _squishing_ it.

### Layouts

<div style="text-align:center;"><img src="/blog/img/variable-margins-horizontal-layout-feathersui-1.1.0.png" width="550"></div>

[`HorizontalLayout`](https://feathersui.com/learn/haxe-openfl/horizontal-layout) and [`VerticalLayout`](https://feathersui.com/learn/haxe-openfl/vertical-layout) now support adding extra margins to specific items in the layout. Previously, you could set the `gap` property to specify a certain amount of spacing between all items. Now you can set the [`marginLeft`](https://api.feathersui.com/current/feathers/layout/HorizontalLayoutData.html#marginLeft) and [`marginRight`](https://api.feathersui.com/current/feathers/layout/HorizontalLayoutData.html#marginRight) properties on [`HorizontalLayoutData`](https://api.feathersui.com/current/feathers/layout/HorizontalLayoutData.html), or you can set [`marginTop`](https://api.feathersui.com/current/feathers/layout/VerticalLayoutData.html#marginTop) and [`marginBottom`](https://api.feathersui.com/current/feathers/layout/VerticalLayoutData.html#marginBottom) properties on [`VerticalLayoutData`](https://api.feathersui.com/current/feathers/layout/VerticalLayoutData.html) to adjust the positioning between items in a more granular way.

### Styles and skins

<div style="text-align:center;"><img src="/blog/img/donut-skin-feathersui-1.1.0.png" width="450"></div>

[`DonutSkin`](https://api.feathersui.com/current/feathers/skins/DonutSkin.html) is a new [shape skin](https://feathersui.com/learn/haxe-openfl/shape-skins/) that similar to [`CircleSkin`](https://api.feathersui.com/current/feathers/skins/CircleSkin.html), but it has an inner radius that is not filled (like a certain sugary baked good).

[`FillStyle.Gradient`](https://api.feathersui.com/current/feathers/graphics/LineStyle.html#Gradient) and [`LineStyle.Gradient`](https://api.feathersui.com/current/feathers/graphics/LineStyle.html#Gradient) now have more ways to specify the transformation of the gradient box. Previously, you could pass in a pre-created [`openfl.geom.Matrix`](https://api.openfl.org/openfl/geom/Matrix.html), or you could pass in a `Float` value representing the rotation of the gradient in radians. These were somewhat limited compared to the parameters on [`createGradientBox()`](https://api.openfl.org/openfl/geom/Matrix.html#createGradientBox), though. The full `Matrix` couldn't be adjusted later if the skin width or height changed, x/y translation wasn't supported on its own, or in combiantion with the rotation. It's also be nice when you can choose between degress and radians, right? The new [`GradientBoxTransform`](https://api.feathersui.com/current/feathers/graphics/GradientBoxTransform.html) enum provides a number of transformation options, including:

- [`RotateRadians`](https://api.feathersui.com/current/feathers/graphics/GradientBoxTransform.html#RotateRadians)
- [`RotateRadians`](https://api.feathersui.com/current/feathers/graphics/GradientBoxTransform.html#RotateDegrees)
- [`Translate`](https://api.feathersui.com/current/feathers/graphics/GradientBoxTransform.html#Translate)
- [`RotateRadiansAndTranslate`](https://api.feathersui.com/current/feathers/graphics/GradientBoxTransform.html#RotateRadiansAndTranslate)
- [`RotateRadiansAndTranslate`](https://api.feathersui.com/current/feathers/graphics/GradientBoxTransform.html#RotateDegreesAndTranslate)

### New samples

This update includes two new sample projects to demonstrate how to use certain features of Feathers UI.

<div style="text-align:center;"><img src="/blog/img/new-samples-dark-mode-numeric-stepper-feathersui-1.1.0.png" width="550"></div>

- The [dark-mode](https://feathersui.com/samples/haxe-openfl/dark-mode/) sample demonstrates how to switch the default theme between light and dark modes.

- The [numeric-stepper-button-layouts](https://feathersui.com/samples/haxe-openfl/numeric-stepper-button-layouts/) sample displays each of the various ways that the buttons inside the [`NumericStepper`](https://feathersui.com/learn/haxe-openfl/numeric-stepper) component may be positioned relative to the text input.

For complete details about what's new in this build, check out the [v1.1.0 CHANGELOG](https://github.com/feathersui/feathersui-openfl/blob/v1.1.0/CHANGELOG.md).

## Install Feathers UI v1.1.0

Feathers UI v1.1.0 may be [installed](https://feathersui.com/learn/haxe-openfl/installation) using the [**haxelib install**](https://lib.haxe.org/documentation/using-haxelib/#install) command in your terminal.

```sh
haxelib install feathersui 1.1.0
```

Be sure to take a look at the complete [installation instructions](https://feathersui.com/learn/haxe-openfl/installation) for details about installing required dependencies, along with links to step-by-step tutorials for setting up supported editors and IDEs.

## Documentation

- The [Feathers UI Getting Started guide](https://feathersui.com/learn/haxe-openfl/getting-started) provides the most essential links for creating your first Feathers UI project. Start there to learn about all of the [UI components](https://feathersui.com/learn/haxe-openfl/ui-components), [layouts](https://feathersui.com/learn/haxe-openfl/layouts-and-containers/), [skins](https://feathersui.com/learn/haxe-openfl/shape-skins/), and the many other features that are available in the framework.
- The [v1.1.0 API Reference](https://api.feathersui.com/v1.1.0/) includes descriptions of all classes, interfaces, enums, utility functions, and the various other APIs available to developers working with Feathers UI.

## Community

- Start a new thread in the [Feathers UI Community forum](https://community.feathersui.com/) to ask for help.
- Join the [Feathers UI Discord](https://discord.feathersui.com/) to chat with Josh (me) and other experts in the community.

## How to help the project

Want to help new components get added and keep servers running? Please contribute on [Github Sponsors](https://github.com/sponsors/joshtynjala).

## Questions or comments?

I've created an [official v1.1.0 discussion thread](https://community.feathersui.com/d/114-feathers-ui-v11-update-for-haxe-and-openfl) in the [community forums](https://community.feathersui.com/). Love one of the new features? Ran into a strange bug that wasn't in the last release? Head over there to leave a comment about this release!

---
title: How to use the HProgressBar and VProgressBar components
sidebar_label: HProgressBar / VProgressBar
---

The [`HProgressBar`](https://api.feathersui.com/current/feathers/controls/HProgressBar.html) and [`VProgressBar`](https://api.feathersui.com/current/feathers/controls/VProgressBar.html) classes display a visual indicator of the percentage of a task that has been completed.

## The Basics

> For simplicity, the example code on this page will always use [`HProgressBar`](https://api.feathersui.com/current/feathers/controls/HProgressBar.html), but the same APIs are available on [`VProgressBar`](https://api.feathersui.com/current/feathers/controls/VProgressBar.html) too.

First, let's create an [`HProgressBar`](https://api.feathersui.com/current/feathers/controls/HProgressBar.html) control, set up its range of values, and add it to the [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```hx
var progressBar = new HProgressBar();
progressBar.minimum = 0.0;
progressBar.maximum = 100.0;
progressBar.value = 50.0;
this.addChild(progressBar);
```

The [`value`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseProgressBar.html#value) property indicates the current value of the progress bar, while the [`minimum`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseProgressBar.html#minimum) and [`maximum`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseProgressBar.html#maximum) properties establish a range of possible values.

## Styles

The skins for the [`HProgressBar`](https://api.feathersui.com/current/feathers/controls/HProgressBar.html) and [`VProgressBar`](https://api.feathersui.com/current/feathers/controls/VProgressBar.html) components are divided into two main parts: the background and the fill.

### Background

Give the progress bar a background using the [`backgroundSkin`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseProgressBar.html#backgroundSkin) property. The following example sets it to a [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) instance.

```hx
var skin = new RectangleSkin();
skin.border = SolidColor(1.0, 0x999999);
skin.fill = SolidColor(0xcccccc);
skin.width = 120.0;
skin.height = 16.0;
progressBar.backgroundSkin = skin;
```

The [`border`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#border) and [`fill`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#fill) properties of the [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) are used to adjust its appearance. They support a variety of values — from solid colors to gradients to bitmaps.

The progress bar automatically calculates its preferred size based on the initial dimensions of its background skin, so it's important to set a skin's `width` and `height` properties to appropriate values to use in this calculation.

> See [Skinning with common shapes](./shape-skins.md) for more details about how to use [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) with the [`LineStyle`](https://api.feathersui.com/current/feathers/graphics/LineStyle.html) and [`FillStyle`](https://api.feathersui.com/current/feathers/graphics/FillStyle.html) enums that change its border and fill appearance.

### Fill

Style the progress bar's fill using the [`fillSkin`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseProgressBar.html#fillSkin) property. The following example sets it to a [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) instance.

```hx
var skin = new RectangleSkin();
skin.border = SolidColor(1.0, 0x9999cc);
skin.fill = SolidColor(0xcccccc);
skin.width = 16.0;
skin.height = 16.0;
progressBar.fillSkin = skin;
```

## Related Links

- [`feathers.controls.HProgressBar` API Documentation](https://api.feathersui.com/current/feathers/controls/HProgressBar.html)
- [`feathers.controls.VProgressBar` API Documentation](https://api.feathersui.com/current/feathers/controls/VProgressBar.html)

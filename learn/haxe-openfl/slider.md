---
title: How to use the HSlider and VSlider components
layout: "docs.html"
sidebarTitle: HSlider / VSlider
---

The [`HSlider`](https://api.feathersui.com/current/feathers/controls/HSlider.html) and [`VSlider`](https://api.feathersui.com/current/feathers/controls/VSlider.html) classes allow a user to select a numeric value in a specific range by dragging a _thumb_ along the length of a _track_.

<figure>
<iframe src="/learn/haxe-openfl/samples/slider.html" width="100%" height="220"></iframe>
<figcaption>Live preview of the <a href="https://api.feathersui.com/current/feathers/controls/HSlider.html"><code>HSlider</code></a> and <a href="https://api.feathersui.com/current/feathers/controls/VSlider.html"><code>VSlider</code></a> components</figcaption>
</figure>

## The Basics

> For simplicity, the example code on this page will always use [`HSlider`](https://api.feathersui.com/current/feathers/controls/HSlider.html), but the same APIs are available on [`VSlider`](https://api.feathersui.com/current/feathers/controls/VSlider.html) too.

First, let's create an [`HSlider`](https://api.feathersui.com/current/feathers/controls/HSlider.html) control, set up its range of values, and add it to the [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var slider = new HSlider();
slider.minimum = 0.0;
slider.maximum = 100.0;
slider.value = 50.0;
addChild(slider);
```

The [`value`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseSlider.html#value) property indicates the current value of the slider, while the [`minimum`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseSlider.html#minimum) and [`maximum`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseSlider.html#maximum) properties establish a range of possible values.

```haxe
slider.snapInterval = 1.0;
```

The [`snapInterval`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseSlider.html#snapInterval) property controls how the slider's value is rounded as it is dragged. When the slider's [`snapInterval`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseSlider.html#snapInterval) is set to `1.0`, the slider will be dragged along whole numbers only and it cannot have a value like `4.5`.

[Add an event listener](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) for [`Event.CHANGE`](https://api.openfl.org/openfl/events/Event.html#CHANGE) to perform an action when the [`value`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseSlider.html#value) property changes.

```haxe
slider.addEventListener(Event.CHANGE, slider_changeHandler);
```

Check for the new [`value`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseSlider.html#value) in the listener.

```haxe
function slider_changeHandler(event:Event):Void {
    var slider = cast(event.currentTarget, HSlider);
    trace("slider.value change: " + slider.value);
}
```

## Styles

The skins for the [`HSlider`](https://api.feathersui.com/current/feathers/controls/HSlider.html) and [`VSlider`](https://api.feathersui.com/current/feathers/controls/VSlider.html) components are divided into two main parts: the thumb and the track. The track may either fill the full length of the slider, or it may be optionally divided in half — meeting at the center of the slider's thumb.

### Thumb

Style a slider's thumb using the [`thumbSkin`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseSlider.html#thumbSkin) property. The following example sets it to a [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) instance.

```haxe
var thumbSkin = new RectangleSkin();
thumbSkin.border = SolidColor(1.0, 0x999999);
thumbSkin.fill = SolidColor(0xcccccc);
thumbSkin.width = 32.0;
thumbSkin.height = 32.0;
slider.thumbSkin = thumbSkin;
```

The [`border`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#border) and [`fill`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#fill) properties of the [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) are used to adjust its appearance. They support a variety of values — from solid colors to gradients to bitmaps.

The slider automatically calculates its preferred size based on the initial dimensions of its skins, so it's important to set a skin's `width` and `height` properties to appropriate values to use in this calculation.

> See [Skinning with common shapes](./shape-skins.md) for more details about how to use [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) with the [`LineStyle`](https://api.feathersui.com/current/feathers/graphics/LineStyle.html) and [`FillStyle`](https://api.feathersui.com/current/feathers/graphics/FillStyle.html) enums that change its border and fill appearance.

### Track

Style a slider's track using the [`trackSkin`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseSlider.html#trackSkin) property. The following example sets it to a [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) instance.

```haxe
var trackSkin = new RectangleSkin();
trackSkin.border = SolidColor(1.0, 0x999999);
trackSkin.fill = SolidColor(0xcccccc);
trackSkin.width = 120.0;
trackSkin.height = 32.0;
slider.trackSkin = trackSkin;
```

By default, the [`trackSkin`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseSlider.html#trackSkin) will fill the entire length of the slider. In other words, it will fill the width of an [`HSlider`](https://api.feathersui.com/current/feathers/controls/HSlider.html), or it will fill the entire height of a [`VSlider`](https://api.feathersui.com/current/feathers/controls/VSlider.html).

To give the track different a appearance on each side of the thumb, set the optional [`secondaryTrackSkin`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseSlider.html#secondaryTrackSkin).

```haxe
var trackSkin = new RectangleSkin();
trackSkin.border = SolidColor(1.0, 0x999999);
trackSkin.fill = SolidColor(0xccccff);
trackSkin.width = 60.0;
trackSkin.height = 32.0;
slider.trackSkin = trackSkin;

var secondaryTrackSkin = new RectangleSkin();
secondaryTrackSkin.border = SolidColor(1.0, 0x999999);
secondaryTrackSkin.fill = SolidColor(0xcccccc);
secondaryTrackSkin.width = 60.0;
secondaryTrackSkin.height = 32.0;
slider.secondaryTrackSkin = secondaryTrackSkin;
```

On an [`HSlider`](https://api.feathersui.com/current/feathers/controls/HSlider.html), the [`trackSkin`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseSlider.html#trackSkin) appears on the left side of the thumb, and the [`secondaryTrackSkin`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseSlider.html#secondaryTrackSkin) appears on the right side. On a [`VSlider`](https://api.feathersui.com/current/feathers/controls/VSlider.html), the [`trackSkin`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseSlider.html#trackSkin) appears below the thumb, and the [`secondaryTrackSkin`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseSlider.html#secondaryTrackSkin) appears above the thumb.

## Related Links

- [`feathers.controls.HSlider` API Documentation](https://api.feathersui.com/current/feathers/controls/HSlider.html)
- [`feathers.controls.VSlider` API Documentation](https://api.feathersui.com/current/feathers/controls/VSlider.html)

---
title: How to use the Feathers UI HSlider and VSlider components
sidebar_label: HSlider / VSlider
---

The [`HSlider`](https://api.feathersui.com/current/feathers/controls/HSlider.html) and [`VSlider`](https://api.feathersui.com/current/feathers/controls/VSlider.html) classes allow a user to select a numeric value in a specific range by dragging a _thumb_ along the length of a _track_.

## The Basics

> For simplicity, the example code on this page will always use [`HSlider`](https://api.feathersui.com/current/feathers/controls/HSlider.html), but the same APIs are available on [`VSlider`](https://api.feathersui.com/current/feathers/controls/VSlider.html) too.

First, let's create an [`HSlider`](https://api.feathersui.com/current/feathers/controls/HSlider.html) control, set up its range of values, and add it to the display list.

```hx
var slider = new HSlider();
slider.minimum = 0.0;
slider.maximum = 100.0;
slider.value = 50.0;
this.addChild(slider);
```

The [`value`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseSlider.html#value) property indicates the current value of the slider, while the [`minimum`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseSlider.html#minimum) and [`maximum`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseSlider.html#maximum) properties establish a range of possible values.

```hx
slider.step = 1.0;
```

The [`step`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseSlider.html#step) property controls how the slider's value is rounded as it is dragged. If we set the slider's [`step`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseSlider.html#step) to `1.0`, as we do above, the slider will be dragged along whole numbers only and it cannot have a value like `4.5`.

Add a listener for `Event.CHANGE` to react to changes to the [`value`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseSlider.html#value) property:

```hx
slider.addEventListener(Event.CHANGE, slider_changeHandler);
```

The listener might look something like this:

```hx
function slider_changeHandler(event:Event):void
{
    var slider = cast(event.currentTarget, HSlider);
    trace("slider.value changed:", slider.value);
}
```

## Styles

The skins for a [`HSlider`](https://api.feathersui.com/current/feathers/controls/HSlider.html) and [`VSlider`](https://api.feathersui.com/current/feathers/controls/VSlider.html) components are divided into two main parts: the thumb and the track. The track may either fill the full length of the slider, or it may be optionally divided in half — meeting at the center of the slider's thumb.

### Thumb

Style a slider's thumb using the [`thumbSkin`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseSlider.html#thumbSkin) property. The following example sets it to a [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) instance.

```hx
var thumbSkin = new RectangleSkin();
thumbSkin.border = SolidColor(1.0, 0x999999);
thumbSkin.fill = SolidColor(0xcccccc);
thumbSkin.width = 32.0;
thumbSkin.height = 32.0;
slider.thumbSkin = thumbSkin;
```

The [`border`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#border) and [`fill`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#fill) properties of the [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) are used to adjust its appearance. They support a variety of values — from solid colors to gradients to bitmaps.

The slider automatically calculates its preferred size based on the initial dimensions of its skins, so it's important to set a skin's `width` and `height` properties to appropriate values to use in this calculation.

> See [Graphics API skins](./graphics-api-skins.md) for more details about how to use [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) with the [`LineStyle`](https://api.feathersui.com/current/feathers/graphics/LineStyle.html) and [`FillStyle`](https://api.feathersui.com/current/feathers/graphics/FillStyle.html) enums that change its border and fill appearance.

### Track

Style a slider's track using the [`trackSkin`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseSlider.html#trackSkin) property. The following example sets it to a [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) instance.

```hx
var trackSkin = new RectangleSkin();
trackSkin.border = SolidColor(1.0, 0x999999);
trackSkin.fill = SolidColor(0xcccccc);
trackSkin.width = 120.0;
trackSkin.height = 32.0;
slider.trackSkin = trackSkin;
```

By default, the [`trackSkin`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseSlider.html#trackSkin) will fill the entire length of the slider. In other words, it will fill the width of an [`HSlider`](https://api.feathersui.com/current/feathers/controls/HSlider.html), or it will fill the entire height of a [`VSlider`](https://api.feathersui.com/current/feathers/controls/VSlider.html).

To give the track different a appearance on each side of the thumb, set the optional [`secondaryTrackSkin`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseSlider.html#secondaryTrackSkin).

```hx
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

- [`feathers.controls.HSlider` API Documentation](/api-reference/feathers/controls/HSlider.html)
- [`feathers.controls.VSlider` API Documentation](/api-reference/feathers/controls/VSlider.html)

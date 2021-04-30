---
title: How to use the ToggleSwitch component
sidebar_label: ToggleSwitch
---

The [`ToggleSwitch`](https://api.feathersui.com/current/feathers/controls/ToggleSwitch.html) class appears somewhat like a light switch, and it may be toggled between selected and deselected states. The thumb may be dragged from side to side, or it may be tapped to change selection. A toggle switch is often used as an alternative to a [`Check`](./check.md) control — especially on devices with touchscreens.

<figure>
<iframe src="/learn/haxe-openfl/samples/toggle-switch.html" width="100%" height="150"></iframe>
<figcaption>Live preview of the <a href="https://api.feathersui.com/current/feathers/controls/ToggleSwitch.html"><code>ToggleSwitch</code></a> component</figcaption>
</figure>

## The Basics

First, let's create an [`ToggleSwitch`](https://api.feathersui.com/current/feathers/controls/ToggleSwitch.html) control, update its selection, and add it to the [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```hx
var toggle = new ToggleSwitch();
toggle.selected = true;
this.addChild(toggle);
```

The [`selected`](https://api.feathersui.com/current/feathers/controls/ToggleSwitch.html#selected) property indicates if the toggle switch is on (`true`) or off (`false`).

[Add an event listener](https://books.openfl.org/openfl-developers-guide/handling-events/basics-of-handling-events.html) for [`Event.CHANGE`](https://api.openfl.org/openfl/events/Event.html#CHANGE) to perform an action when the [`selected`](https://api.feathersui.com/current/feathers/controls/ToggleSwitch.html#selected) property changes.

```hx
toggle.addEventListener(Event.CHANGE, toggleSwitch_changeHandler);
```

Listeners for [`Event.CHANGE`](https://api.openfl.org/openfl/events/Event.html#CHANGE) have the following function signature.

```hx
function toggleSwitch_changeHandler(event:Event):Void {
    var toggle = cast(event.currentTarget, ToggleSwitch);
    trace("toggle.selected change: " + toggle.selected);
}
```

## Styles

The skins for a [`ToggleSwitch`](https://api.feathersui.com/current/feathers/controls/ToggleSwitch.html) component are divided into two main parts: the thumb and the track. The track may either fill the full length of the toggle switch, or it may be optionally divided in half — meeting at the center of the toggle switch's thumb.

### Thumb

Style a toggle switch's thumb using the [`thumbSkin`](https://api.feathersui.com/current/feathers/controls/ToggleSwitch.html#thumbSkin) property. The following example sets it to a [`CircleSkin`](https://api.feathersui.com/current/feathers/skins/CircleSkin.html) instance.

```hx
var thumbSkin = new CircleSkin();
thumbSkin.border = SolidColor(1.0, 0x999999);
thumbSkin.fill = SolidColor(0xcccccc);
thumbSkin.width = 32.0;
thumbSkin.height = 32.0;
toggle.thumbSkin = thumbSkin;
```

The [`border`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#border) and [`fill`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#fill) properties of the [`CircleSkin`](https://api.feathersui.com/current/feathers/skins/CircleSkin.html) are used to adjust its appearance. They support a variety of values — from solid colors to gradients to bitmaps.

The toggle switch automatically calculates its preferred size based on the initial dimensions of its skins, so it's important to set a skin's `width` and `height` properties to appropriate values to use in this calculation.

> See [Skinning with common shapes](./shape-skins.md) for more details about how to use [`CircleSkin`](https://api.feathersui.com/current/feathers/skins/CircleSkin.html) (and [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html), which we'll use for the track below) with the [`LineStyle`](https://api.feathersui.com/current/feathers/graphics/LineStyle.html) and [`FillStyle`](https://api.feathersui.com/current/feathers/graphics/FillStyle.html) enums that change its border and fill appearance.

### Track

Style a toggle switch's track using the [`trackSkin`](https://api.feathersui.com/current/feathers/controls/ToggleSwitch.html#trackSkin) property. The following example sets it to a [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) instance.

```hx
var trackSkin = new RectangleSkin();
trackSkin.border = SolidColor(1.0, 0x999999);
trackSkin.fill = SolidColor(0xcccccc);
trackSkin.width = 64.0;
trackSkin.height = 32.0;
toggle.trackSkin = trackSkin;
```

By default, the [`trackSkin`](https://api.feathersui.com/current/feathers/controls/ToggleSwitch.html#trackSkin) will fill the entire width of the toggle switch.

To give the track different a appearance on each side of the thumb, set the optional [`secondaryTrackSkin`](https://api.feathersui.com/current/feathers/controls/ToggleSwitch.html#secondaryTrackSkin).

```hx
var trackSkin = new RectangleSkin();
trackSkin.border = SolidColor(1.0, 0x999999);
trackSkin.fill = SolidColor(0xccccff);
trackSkin.width = 48.0;
trackSkin.height = 32.0;
toggle.trackSkin = trackSkin;

var secondaryTrackSkin = new RectangleSkin();
secondaryTrackSkin.border = SolidColor(1.0, 0x999999);
secondaryTrackSkin.fill = SolidColor(0xcccccc);
secondaryTrackSkin.width = 48.0;
secondaryTrackSkin.height = 32.0;
toggle.secondaryTrackSkin = secondaryTrackSkin;
```

The [`trackSkin`](https://api.feathersui.com/current/feathers/controls/ToggleSwitch.html#trackSkin) appears on the left side of the thumb, and the [`secondaryTrackSkin`](https://api.feathersui.com/current/feathers/controls/ToggleSwitch.html#secondaryTrackSkin) appears on the right side.

## Related Links

- [`feathers.controls.ToggleSwitch` API Documentation](https://api.feathersui.com/current/feathers/controls/ToggleSwitch.html)
- [How to use the `Check` component](./check.md)

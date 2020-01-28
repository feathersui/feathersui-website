---
title: How to use the HScrollBar and VScrollBar components
sidebar_label: HScrollBar / VScrollBar
---

The [`HScrollBar`](https://api.feathersui.com/current/feathers/controls/HScrollBar.html) and [`VScrollBar`](https://api.feathersui.com/current/feathers/controls/VScrollBar.html) classes allow a user to select a numeric value in a specific range by dragging a _thumb_ along the length of a _track_.

## The Basics

> Generally, scroll bars are created automatically by any container that supports scrolling. When creating custom components that support scrolling, you should generally extend [`BaseScrollContainer`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseScrollContainer.html).

## Styles

The skins for the [`HScrollBar`](https://api.feathersui.com/current/feathers/controls/HScrollBar.html) and [`VScrollBar`](https://api.feathersui.com/current/feathers/controls/VScrollBar.html) components are divided into two main parts: the thumb and the track. The track may either fill the full length of the scroll bar, or it may be optionally divided in half — meeting at the center of the scroll bar's thumb.

### Thumb

Style a scroll bar's thumb using the [`thumbSkin`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseScrollBar.html#thumbSkin) property. The following example sets it to a [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) instance.

```hx
var thumbSkin = new RectangleSkin();
thumbSkin.border = SolidColor(1.0, 0x999999);
thumbSkin.fill = SolidColor(0xcccccc);
thumbSkin.width = 32.0;
thumbSkin.height = 32.0;
scrollBar.thumbSkin = thumbSkin;
```

The [`border`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#border) and [`fill`](https://api.feathersui.com/current/feathers/skins/BaseGraphicsPathSkin.html#fill) properties of the [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) are used to adjust its appearance. They support a variety of values — from solid colors to gradients to bitmaps.

The scroll bar automatically calculates its preferred size based on the initial dimensions of its skins, so it's important to set a skin's `width` and `height` properties to appropriate values to use in this calculation.

> See [Graphics API skins](./graphics-api-skins.md) for more details about how to use [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) with the [`LineStyle`](https://api.feathersui.com/current/feathers/graphics/LineStyle.html) and [`FillStyle`](https://api.feathersui.com/current/feathers/graphics/FillStyle.html) enums that change its border and fill appearance.

### Track

Style a scroll bar's track using the [`trackSkin`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseScrollBar.html#trackSkin) property. The following example sets it to a [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) instance.

```hx
var trackSkin = new RectangleSkin();
trackSkin.border = SolidColor(1.0, 0x999999);
trackSkin.fill = SolidColor(0xcccccc);
trackSkin.width = 120.0;
trackSkin.height = 32.0;
scrollBar.trackSkin = trackSkin;
```

By default, the [`trackSkin`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseScrollBar.html#trackSkin) will fill the entire length of the scroll bar. In other words, it will fill the width of an [`HScrollBar`](https://api.feathersui.com/current/feathers/controls/HScrollBar.html), or it will fill the entire height of a [`VScrollBar`](https://api.feathersui.com/current/feathers/controls/VScrollBar.html).

To give the track different a appearance on each side of the thumb, set the optional [`secondaryTrackSkin`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseScrollBar.html#secondaryTrackSkin).

```hx
var trackSkin = new RectangleSkin();
trackSkin.border = SolidColor(1.0, 0x999999);
trackSkin.fill = SolidColor(0xccccff);
trackSkin.width = 60.0;
trackSkin.height = 32.0;
scrollBar.trackSkin = trackSkin;

var secondaryTrackSkin = new RectangleSkin();
secondaryTrackSkin.border = SolidColor(1.0, 0x999999);
secondaryTrackSkin.fill = SolidColor(0xcccccc);
secondaryTrackSkin.width = 60.0;
secondaryTrackSkin.height = 32.0;
scrollBar.secondaryTrackSkin = secondaryTrackSkin;
```

On an [`HScrollBar`](https://api.feathersui.com/current/feathers/controls/HScrollBar.html), the [`trackSkin`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseScrollBar.html#trackSkin) appears on the left side of the thumb, and the [`secondaryTrackSkin`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseScrollBar.html#secondaryTrackSkin) appears on the right side. On a [`VScrollBar`](https://api.feathersui.com/current/feathers/controls/VScrollBar.html), the [`trackSkin`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseScrollBar.html#trackSkin) appears below the thumb, and the [`secondaryTrackSkin`](https://api.feathersui.com/current/feathers/controls/supportClasses/BaseScrollBar.html#secondaryTrackSkin) appears above the thumb.

## Related Links

- [`feathers.controls.HScrollBar` API Documentation](https://api.feathersui.com/current/feathers/controls/HScrollBar.html)
- [`feathers.controls.VScrollBar` API Documentation](https://api.feathersui.com/current/feathers/controls/VScrollBar.html)

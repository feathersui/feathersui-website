---
title: How to use the ActivityIndicator component
layout: "docs.html"
sidebarTitle: ActivityIndicator
---

The [`ActivityIndicator`](https://api.feathersui.com/current/feathers/controls/ActivityIndicator.html) displays an animation to indicate that an activity of indeterminate length is currently happening. The animation remains active while the activity indicator is added to the display list — unless its `enabled` property is set to `false`.

<figure>
<iframe src="/learn/haxe-openfl/samples/activity-indicator.html" width="100%" height="180"></iframe>
<figcaption>Live preview of the <a href="https://api.feathersui.com/current/feathers/controls/ActivityIndicator.html"><code>ActivityIndicator</code></a> component</figcaption>
</figure>

> ⚠️ **Beta Notice**: This component is still quite new to Feathers UI. It was included in the latest release because it should be stable enough for production use. However, some APIs may go through minor changes in upcoming releases — based on feedback from developers like you. [Learn more about Beta APIs.](./semver.md#beta-apis)

## The Basics

Create an [`ActivityIndicator`](https://api.feathersui.com/current/feathers/controls/ActivityIndicator.html) control and add it to [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var activity = new ActivityIndicator();
addChild(activity);
```

To customize the duration (in seconds) of the activity indicator's animation, set the [`indeterminateDuration`](https://api.feathersui.com/current/feathers/controls/ActivityIndicator.html#indeterminateDuration) property.

```haxe
activity.indeterminateDuration = 1.0;
```

## Styles

A small number of styles may be customized on an [`ActivityIndicator`](https://api.feathersui.com/current/feathers/controls/ActivityIndicator.html) component, including a skin.

### Skin

Optionally give the activity indicator a custom skin using the [`activitySkin`](https://api.feathersui.com/current/feathers/controls/ActivityIndicator.html#activitySkin) property. The following example sets it to a [`DotsActivitySkin`](https://api.feathersui.com/current/feathers/skins/activity/DotsActivitySkin.html) instance.

```haxe
var skin = new DotsActivitySkin();
skin.numDots = 8;
skin.dotRadius = 3.0;
skin.endDotRadius = null;
skin.dotColor = 0x333333;
skin.endDotColor = null;
skin.dotAlpha = 1.0;
skin.endDotAlpha = 0.0;
var size = 1.1 * activitySkin.dotRadius * activitySkin.numDots;
skin.width = size;
skin.height = size;
skin.activitySkin = activitySkin;
```

#### Custom Skins

Any display object may be passed to the [`activitySkin`](https://api.feathersui.com/current/feathers/controls/ActivityIndicator.html#activitySkin) property. By default, the skin's `alpha` value will repeatedly fade in and out. However, if a custom skin implements the [`IIndeterminateSkin`](https://api.feathersui.com/current/feathers/skins/IIndeterminateSkin.html) interface, it can control its own animation. For instance, the [`DotsActivitySkin`](https://api.feathersui.com/current/feathers/skins/activity/DotsActivitySkin.html) used in the example above rotates its content over time.

## Related Links

- [`feathers.controls.ActivityIndicator` API Documentation](https://api.feathersui.com/current/feathers/controls/ActivityIndicator.html)

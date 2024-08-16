---
title: Animated transitions for Feathers UI view navigators
layout: "docs.html"
sidebarTitle: Navigator animated transitions
---

A _transition_ animates two views of a navigator component when it switches between them. Transitions help establish a visual relationship between these two views, such as hierarchy or proximity — providing extra context to improve the user experience. They also provide a bit of personality and polish to your project.

Feathers UI offers a number of classes to quickly create common transition animations. All view navigators support custom transitions too.

## Built-in transitions

### Color fade

Creates animated transitions for view navigators that fade a display object to a solid color.

```haxe
var transition = new ColorFadeTransitionBuilder()
    .setColor(0x000000) // range: 0x000000 to 0xFFFFFF
    .setDuration(1.5) // in seconds
    .setEase(Expo.easeOut) // Actuate easing function
    .build();
```

See [API Reference: `ColorFadeTransitionBuilder`](https://api.feathersui.com/current/feathers/motion/transitions/ColorFadeTransitionBuilder.html) for more details.

### Cover

Creates animated transitions for view navigators that slide a new display object into view by animating the `x` and `y` properties, while covering an existing display object that remains stationary below. The display object may slide up, right, down, or left (or at an arbitrary angle).

```haxe
var transition = new CoverTransitionBuilder()
    .setAngle(180.0) // range: 0.0 to 360.0
    .setDuration(1.5) // in seconds
    .setEase(Expo.easeOut) // Actuate easing function
    .build();
```

> Optionally, you can replace the call to [`setAngle(Float)`](https://api.feathersui.com/current/feathers/motion/transitions/CoverTransitionBuilder.html#setAngle) with a call to one of four convenience functions for common angles. Use [`setRight()`](https://api.feathersui.com/current/feathers/motion/transitions/CoverTransitionBuilder.html#setRight) for 0 degrees, [`setUp()`](https://api.feathersui.com/current/feathers/motion/transitions/CoverTransitionBuilder.html#setUp) for 90 degrees, [`setLeft()`](https://api.feathersui.com/current/feathers/motion/transitions/CoverTransitionBuilder.html#setLeft) for 180 degrees, or [`setDown()`](https://api.feathersui.com/current/feathers/motion/transitions/CoverTransitionBuilder.html#setDown) for 270 degrees.

See [API Reference: `CoverTransitionBuilder`](https://api.feathersui.com/current/feathers/motion/transitions/CoverTransitionBuilder.html) for more details.

### Fade

Creates animated transitions for view navigators that modify the opacity of one or both views in transition. Animates the `alpha` property of a display object to make it fade in or out.

```haxe
var transition = new FadeTransitionBuilder()
    .setFadeIn()
    .setDuration(1.5) // in seconds
    .setEase(Expo.easeOut) // Actuate easing function
    .build();
```

> [`setFadeIn()`](https://api.feathersui.com/current/feathers/motion/transitions/FadeTransitionBuilder.html#setFadeIn) fades in the new view on top of the old view. [`setFadeOut()`](https://api.feathersui.com/current/feathers/motion/transitions/FadeTransitionBuilder.html#setFadeOut) fades out the old view on top of the new view. Calling both will cross-fade both views at the same time.

See [API Reference: `FadeTransitionBuilder`](https://api.feathersui.com/current/feathers/motion/transitions/FadeTransitionBuilder.html) for more details.

### Iris

Creates transitions for view navigators that show or hide a display object masked by a growing or shrinking circle. Both display objects remain stationary while a mask is animated.

```haxe
var transition = new IrisTransitionBuilder()
    .setOpen(true) // or false to close
    .setDuration(1.5) // in seconds
    .setEase(Expo.easeOut) // Actuate easing function
    .build();
```

See [API Reference: `IrisTransitionBuilder`](https://api.feathersui.com/current/feathers/motion/transitions/IrisTransitionBuilder.html) for more details.

### Reveal

Creates animated transitions for view navigators that slide a display object out of view, by animating the `x` or `y` property, while revealing an existing display object that remains stationary below. The display object may slide up, right, down, or left (or at an arbitrary angle).

```haxe
var transition = new RevealTransitionBuilder()
    .setAngle(180.0) // range: 0.0 to 360.0
    .setDuration(1.5) // in seconds
    .setEase(Expo.easeOut) // Actuate easing function
    .build();
```

> Optionally, you can replace the call to [`setAngle(Float)`](https://api.feathersui.com/current/feathers/motion/transitions/RevealTransitionBuilder.html#setAngle) with a call to one of four convenience functions for common angles. Use [`setRight()`](https://api.feathersui.com/current/feathers/motion/transitions/RevealTransitionBuilder.html#setRight) for 0 degrees, [`setUp()`](https://api.feathersui.com/current/feathers/motion/transitions/RevealTransitionBuilder.html#setUp) for 90 degrees, [`setLeft()`](https://api.feathersui.com/current/feathers/motion/transitions/RevealTransitionBuilder.html#setLeft) for 180 degrees, or [`setDown()`](https://api.feathersui.com/current/feathers/motion/transitions/RevealTransitionBuilder.html#setDown) for 270 degrees.

See [API Reference: `RevealTransitionBuilder`](https://api.feathersui.com/current/feathers/motion/transitions/RevealTransitionBuilder.html) for more details.

### Slide

Creates animated transitions for view navigators that moves two adjacent views in the same direction (replacing one with the other), as if one view is pushing the other out of the way. Looks similar to a classic slide carousel. Animates the `x` or `y` property of the views. The views may move up, down, right, or left (or at an arbitrary angle).

```haxe
var transition = new SlideTransitionBuilder()
    .setAngle(180.0) // range: 0.0 to 360.0
    .setDuration(1.5) // in seconds
    .setEase(Expo.easeOut) // Actuate easing function
    .build();
```

> Optionally, you can replace the call to [`setAngle(Float)`](https://api.feathersui.com/current/feathers/motion/transitions/SlideTransitionBuilder.html#setAngle) with a call to one of four convenience functions for common angles. Use [`setRight()`](https://api.feathersui.com/current/feathers/motion/transitions/SlideTransitionBuilder.html#setRight) for 0 degrees, [`setUp()`](https://api.feathersui.com/current/feathers/motion/transitions/SlideTransitionBuilder.html#setUp) for 90 degrees, [`setLeft()`](https://api.feathersui.com/current/feathers/motion/transitions/SlideTransitionBuilder.html#setLeft) for 180 degrees, or [`setDown()`](https://api.feathersui.com/current/feathers/motion/transitions/SlideTransitionBuilder.html#setDown) for 270 degrees.

See [API Reference: `SlideTransitionBuilder`](https://api.feathersui.com/current/feathers/motion/transitions/SlideTransitionBuilder.html) for more details.

### Wipe

Creates transitions for view navigators that wipe a display object out of view, revealing another display object under the first. Both display objects remain stationary while the effect animates a mask. The mask may be animated up, right, down, or left (or at an arbitrary angle).

```haxe
var transition = new WipeTransitionBuilder()
    .setAngle(180.0) // range: 0.0 to 360.0
    .setDuration(1.5) // in seconds
    .setEase(Expo.easeOut) // Actuate easing function
    .build();
```

> Optionally, you can replace the call to [`setAngle(Float)`](https://api.feathersui.com/current/feathers/motion/transitions/WipeTransitionBuilder.html#setAngle) with a call to one of four convenience functions for common angles. Use [`setRight()`](https://api.feathersui.com/current/feathers/motion/transitions/WipeTransitionBuilder.html#setRight) for 0 degrees, [`setUp()`](https://api.feathersui.com/current/feathers/motion/transitions/WipeTransitionBuilder.html#setUp) for 90 degrees, [`setLeft()`](https://api.feathersui.com/current/feathers/motion/transitions/WipeTransitionBuilder.html#setLeft) for 180 degrees, or [`setDown()`](https://api.feathersui.com/current/feathers/motion/transitions/WipeTransitionBuilder.html#setDown) for 270 degrees.

See [API Reference: `WipeTransitionBuilder`](https://api.feathersui.com/current/feathers/motion/transitions/WipeTransitionBuilder.html) for more details.

## Custom transitions

See [Create custom transitions for navigator components](./custom-navigator-transitions.md) for more details about custom transitions

## Related Links

- [Live Demo: Transitions Story Explorer](/samples/haxe-openfl/story-explorer/transitions/)
- [Create custom transitions for navigator components](./custom-navigator-transitions.md)
- [How to use the `StackNavigator` component](./stack-navigator.md)
- [How to use the `RouterNavigator` component](./router-navigator.md)
- [How to use the `PageNavigator` component](./page-navigator.md)
- [How to use the `TabNavigator` component](./tab-navigator.md)

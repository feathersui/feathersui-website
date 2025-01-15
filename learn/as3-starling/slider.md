---
title: How to use the Slider component (AS3/Starling version)
layout: "docs.html"
sidebarTitle: Slider
---

The [`Slider`](/api-reference/feathers/controls/Slider.html) component selects a numeric value in a specific range by dragging a thumb along a track. A slider may be displayed in either a horizontal or a vertical direction.

<figure>
<img src="/learn/as3-starling/images/slider.png" srcset="/learn/as3-starling/images/slider@2x.png 2x" alt="Screenshot of a Feathers Slider component" />
<figcaption><code>Slider</code> components skinned with <code>MetalWorksMobileTheme</code></figcaption>
</figure>

- [The Basics](#the-basics)

- [Skinning a `Slider`](#skinning-a-slider)

## The Basics

First, let's create a `Slider` control, set up its range of values, and add it to the display list.

```actionscript
var slider:Slider = new Slider();
slider.minimum = 0;
slider.maximum = 100;
slider.value = 50;
this.addChild( slider );
```

The [`value`](/api-reference/feathers/controls/Slider.html#value) property indicates the current value of the slider, while the [`minimum`](/api-reference/feathers/controls/Slider.html#minimum) and [`maximum`](/api-reference/feathers/controls/Slider.html#maximum) properties establish a range of possible values. We can further control the slider's behavior with a couple more useful properties:

```actionscript
slider.step = 1;
slider.page = 10;
```

The [`step`](/api-reference/feathers/controls/Slider.html#step) property controls how the slider's value is rounded as it is dragged. If we set the slider's `step` to `1`, as we do above, the slider will be dragged along whole numbers only and it cannot have a value like `4.5`. The [`page`](/api-reference/feathers/controls/Slider.html#page) value comes into play when you touch the slider's track. The value will be incremented or decremented repeatedly until the touch on the track ends. Typically, the `page` is larger than the `step`.

Add a listener to the [`Event.CHANGE`](/api-reference/feathers/controls/Slider.html#event:change) event to know when the `value` property changes:

```actionscript
slider.addEventListener( Event.CHANGE, slider_changeHandler );
```

The listener might look something like this:

```actionscript
function slider_changeHandler( event:Event ):void
{
    var slider:Slider = Slider( event.currentTarget );
    trace( "slider.value changed:", slider.value );
}
```

Finally, the [`direction`](/api-reference/feathers/controls/Slider.html#direction) property may be used to change whether the slider is oriented horizontally or vertically:

```actionscript
slider.direction = Direction.VERTICAL;
```

When the slider is horizontal, the minimum value is on the left and the maximum is on the right. When the slider is vertical, the minimum value is at the bottom and the maximum is at the top.

## Skinning a `Slider`

The skins for a `Slider` control are divided into the thumb and one or two tracks. For full details about what skin and style properties are available, see the [`Slider` API reference](/api-reference/feathers/controls/Slider.html). We'll look at a few of the most common properties below.

### Track(s) and Layout

The slider's track is made from either one or two buttons, depending on the value of the [`trackLayoutMode`](/api-reference/feathers/controls/Slider.html#trackLayoutMode) property. The default value of this property is [`TrackLayoutMode.SINGLE`](/api-reference/feathers/controls/TrackLayoutMode.html#SINGLE), which creates a single track that fills the entire width or height of the slider (depending on the slider's direction).

If we'd like to have separate buttons for both sides of the track (one for the minimum side and another for the maximum side), we can set `trackLayoutMode` to [`TrackLayoutMode.SPLIT`](/api-reference/feathers/controls/TrackLayoutMode.html#SPLIT). In this mode, the width or height of each track (depending on the direction of the slider) is adjusted as the thumb moves to ensure that the two tracks always meet at the center of the thumb.

```actionscript
slider.trackLayoutMode = TrackLayoutMode.SPLIT;
```

`TrackLayoutMode.SINGLE` is often best for cases where the track's appearance is mostly static. When you want down or hover states for the track, `TrackLayoutMode.SPLIT` works better because the state will only change on one side of the thumb, making it more visually clear to the user what is happening.

When the value of `trackLayoutMode` is `TrackLayoutMode.SINGLE`, the slider's will have a minimum track, but it will not have a maximum track. The minimum track will fill the entire region that is draggable.

```actionscript
slider.trackLayoutMode = TrackLayoutMode.SINGLE;
```

Padding can be added at the beginning and end of the track to control how far the thumb may be dragged:

```actionscript
slider.minimumPadding = 6;
slider.maximumPadding = 6;
```

### Skinning the Thumb

This section only explains how to access the thumb sub-component. Please read [How to use the `Button` component](./button.md) for full details about the skinning properties that are available on `Button` components.

#### With a Theme

If you're creating a [theme](./themes.md), you can target the [`Slider.DEFAULT_CHILD_STYLE_NAME_THUMB`](/api-reference/feathers/controls/Slider.html#DEFAULT_CHILD_STYLE_NAME_THUMB) style name.

```actionscript
getStyleProviderForClass( Button )
    .setFunctionForStyleName( Slider.DEFAULT_CHILD_STYLE_NAME_THUMB, setSliderThumbStyles );
```

The styling function might look like this:

```actionscript
private function setSliderThumbStyles( thumb:Button ):void
{
    var skin:ImageSkin = new ImageSkin( texture );
    skin.scale9Grid = new Rectangle( 2, 3, 1, 6 );
    thumb.defaultSkin = skin;
}
```

You can override the default style name to use a different one in your theme, if you prefer:

```actionscript
slider.customThumbStyleName = "custom-thumb";
```

You can set the function for the [`customThumbStyleName`](/api-reference/feathers/controls/Slider.html#customThumbStyleName) like this:

```actionscript
getStyleProviderForClass( Button )
    .setFunctionForStyleName( "custom-thumb", setSliderCustomThumbStyles );
```

#### Without a Theme

If you are not using a theme, you can use [`thumbFactory`](/api-reference/feathers/controls/Slider.html#thumbFactory) to provide skins for the slider's thumb:

```actionscript
slider.thumbFactory = function():Button
{
    var thumb:Button = new Button();

    //skin the thumb here, if not using a theme
    var skin:ImageSkin = new ImageSkin( texture );
    skin.scale9Grid = new Rectangle( 2, 3, 1, 6 );
    thumb.defaultSkin = skin;

    return thumb;
}
```

### Skinning the Minimum Track

This section only explains how to access the minimum track sub-component. Please read [How to use the `Button` component](./button.md) for full details about the skinning properties that are available on `Button` components.

#### With a Theme

If you're creating a [theme](./themes.md), you can target the [`Slider.DEFAULT_CHILD_STYLE_NAME_MINIMUM_TRACK`](/api-reference/feathers/controls/Slider.html#DEFAULT_CHILD_STYLE_NAME_MINIMUM_TRACK) style name.

```actionscript
getStyleProviderForClass( Button )
    .setFunctionForStyleName( Slider.DEFAULT_CHILD_STYLE_NAME_MINIMUM_TRACK, setSliderMinimumTrackStyles );
```

The styling function might look like this:

```actionscript
private function setSliderMinimumTrackStyles( track:Button ):void
{
    var skin:ImageSkin = new ImageSkin( texture );
    skin.scale9Grid = new Rectangle( 2, 3, 1, 6 );
    track.defaultSkin = skin;
}
```

You can override the default style name to use a different one in your theme, if you prefer:

```actionscript
slider.customMinimumTrackStyleName = "custom-minimum-track";
```

You can set the function for the [`customMinimumTrackStyleName`](/api-reference/feathers/controls/Slider.html#customMinimumTrackStyleName) like this:

```actionscript
getStyleProviderForClass( Button )
    .setFunctionForStyleName( "custom-minimum-track", setSliderCustomMinimumTrackStyles );
```

#### Without a Theme

If you are not using a theme, you can use [`minimumTrackFactory`](/api-reference/feathers/controls/Slider.html#minimumTrackFactory) to provide skins for the slider's minimum track:

```actionscript
slider.minimumTrackFactory = function():Button
{
    var track:Button = new Button();

    //skin the minimum track here, if not using a theme
    var skin:ImageSkin = new ImageSkin( texture );
    skin.scale9Grid = new Rectangle( 2, 3, 1, 6 );
    track.defaultSkin = skin;

    return track;
}
```

### Skinning the Maximum Track

This section only explains how to access the maximum track sub-component. Please read [How to use the `Button` component](./button.md) for full details about the skinning properties that are available on `Button` components.

The slider's maximum track may be skinned similarly to the minimum track. The style name to use with [themes](./themes.md) is [`Slider.DEFAULT_CHILD_STYLE_NAME_MAXIMUM_TRACK`](/api-reference/feathers/controls/Slider.html#DEFAULT_CHILD_STYLE_NAME_MAXIMUM_TRACK) or you can customize the style name with [`customMaximumTrackStyleName`](/api-reference/feathers/controls/Slider.html#customMaximumTrackStyleName). If you aren't using a theme, then you can use [`maximumTrackFactory`](/api-reference/feathers/controls/Slider.html#maximumTrackFactory).

### No Thumb

A slider also provides a [`showThumb`](/api-reference/feathers/controls/Slider.html#showThumb) property. If set to `false`, the thumb will be hidden, and the track will become draggable instead. Combine this with a minimum and a maximum track to have a slider that "fills" with a color as the value increases.

## Related Links

- [`feathers.controls.Slider` API Documentation](/api-reference/feathers/controls/Slider.html)

---
title: How to use the SoundPlayer component (Starling version)
layout: "docs.html"
sidebarTitle: SoundPlayer
---

The [`SoundPlayer`](/api-reference/feathers/media/SoundPlayer.html) class provides audio playback capabilities using a `flash.media.Sound` object. Sound files may be loaded from a URL or any `Sound` object may be passed in. [Media player controls](./media-player-controls.md) may be added as children to display information such as the current time or to control playback by seeking or pausing the audio. `SoundPlayer` is a subclass of [`LayoutGroup`](./layout-group.md), so its children may be positioned and sized using layouts.

<figure>
<img src="/learn/as3-starling/images/sound-player.png" srcset="/learn/as3-starling/images/sound-player@2x.png 2x" alt="Screenshot of a Feathers SoundPlayer component" />
<figcaption>A <code>SoundPlayer</code> component with controls skinned with <code>MetalWorksMobileTheme</code></figcaption>
</figure>

- [The Basics](#the-basics)

- [Controls](#controls)

- [Layout](#layout)

- [Controlling playback programmatically](#controlling-playback-programatically)

- [Skinning a `SoundPlayer`](#skinning-a-soundplayer)

## The Basics

First, let's create a `SoundPlayer` component and add it to the display list:

```actionscript
var player:SoundPlayer = new SoundPlayer();
this.addChild( player );
```

To play a sound file, pass the URL (or a [`flash.media.Sound`](http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/media/Sound.html) object) to the [`soundSource`](/api-reference/feathers/media/SoundPlayer.html#soundSource) property:

```actionscript
player.soundSource = "http://example.com/sound.mp3";
```

Next, we'll add some components as children to control playback.

## Controls

Let's give the `SoundPlayer` a [`PlayPauseToggleButton`](/api-reference/feathers/media/PlayPauseToggleButton.html) and a [`SeekSlider`](/api-reference/feathers/media/SeekSlider.html). It's as simple as adding them as children of the `SoundPlayer`:

```actionscript
var button:PlayPauseToggleButton = new PlayPauseToggleButton();
player.addChild( button );

var slider:SeekSlider = new SeekSlider();
player.addChild( slider );
```

There's no need to add event listeners for these controls. You simply need to add them as children of the `SoundPlayer`, and everything will be set up automatically.

> The complete list of [media player controls](./media-player-controls.md) includes several more pre-built components that you can add to a `SoundPlayer`.

In the next section, we'll position these two children using a layout.

## Layout

Like a [`LayoutGroup`](./layout-group.md), a `SoundPlayer` supports using layouts to automatically position and size its children. Let's pass a [`HorizontalLayout`](/api-reference/feathers/layout/HorizontalLayout.html) to the [`layout`](/api-reference/feathers/controls/LayoutGroup.html#layout) property of the `SoundPlayer`:

```actionscript
var layout:HorizontalLayout = new HorizontalLayout();
layout.gap = 10;
group.layout = layout;
```

Here, we've set the [`gap`](/api-reference/feathers/layout/HorizontalLayout.html#gap) property, but `HorizontalLayout` provides many more useful features, including padding and alignment. See [How to use `HorizontalLayout` with Feathers containers](./horizontal-layout.md) for complete details.

If we want our `SeekSlider` to stretch to fill as much space as possible within the `SoundPlayer`, we can pass in [`HorizontalLayoutData`](/api-reference/feathers/layout/HorizontalLayoutData.html):

```actionscript
var sliderLayoutData:HorizontalLayoutData = new HorizontalLayoutData();
sliderLayoutData.percentWidth = 100;
slider.layoutData = sliderLayoutData;
```

Now, because we've set the [`percentWidth`](/api-reference/feathers/layout/HorizontalLayoutData.html#percentWidth) property, when the width of the `SoundPlayer` changes, the width of the `SeekSlider` will change too.

## Controlling playback programmatically

By default, the `SoundPlayer` will automatically start playing its `soundSource`. We can use the [`autoPlay`](/api-reference/feathers/media/SoundPlayer.html#autoPlay) property to change this behavior:

```actionscript
player.autoPlay = false;
```

If `autoPlay` is set to `false`, we can call `play()` to begin playback manually:

```actionscript
player.play();
```

To pause, we can call `pause()` to pause playback at the current position:

```actionscript
player.pause();
```

The `togglePlayPause()` method may be called to toggle between the play and pause states:

```actionscript
player.togglePlayPause();
```

To stop playback and return the sound to the beginning, we may call `stop()`:

```actionscript
player.stop();
```

The `seek()` function may be called to change the current time:

```actionscript
player.seek( 5.0 );
```

The time is measured in seconds.

To change the volume, we can pass a [`flash.media.SoundTransform`](http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/media/SoundTransform.html) object to the [`soundTransform`](/api-reference/feathers/media/SoundPlayer.html#soundTransform) property:

```actionscript
player.soundTransform = new SoundTransform( 0.5 );
```

## Skinning a `SoundPlayer`

As mentioned above, `SoundPlayer` is a subclass of `LayoutGroup`. For more detailed information about the skinning options available to `SoundPlayer`, see [How to use the `LayoutGroup` component](./layout-group.md).

## Related Links

- [`feathers.media.SoundPlayer` API Documentation](/api-reference/feathers/media/SoundPlayer.html)

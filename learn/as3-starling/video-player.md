---
title: How to use the VideoPlayer component (Starling version)
layout: "docs.html"
sidebarTitle: VideoPlayer
---

The [`VideoPlayer`](/api-reference/feathers/media/VideoPlayer.html) class provides video playback capabilities using a `flash.net.NetStream` object. Video files may be loaded from a URL and displayed as a Starling texture. [Media player controls](./media-player-controls.md) may be added as children to display information such as the current time or to control playback by seeking or pausing the audio. `VideoPlayer` is a subclass of [`LayoutGroup`](./layout-group.md), so its children may be positioned and sized using layouts.

<figure>
<img src="/learn/as3-starling/images/video-player.png" srcset="/learn/as3-starling/images/video-player@2x.png 2x" alt="Screenshot of a Feathers VideoPlayer component" />
<figcaption>A <code>VideoPlayer</code> component with controls skinned with <code>MetalWorksMobileTheme</code></figcaption>
</figure>

- [The Basics](#the-basics)

- [Controls](#controls)

- [Layout](#layout)

- [Controlling playback programmatically](#controlling-playback-programatically)

- [Loading Videos](#loading-videos)

- [Skinning a `VideoPlayer`](#skinning-a-videoplayer)

## The Basics

First, let's create a `VideoPlayer` component, set its dimensions, and add it to the display list:

```actionscript
var player:VideoPlayer = new VideoPlayer();
player.setSize( 320, 300 );
this.addChild( player );
```

To play a video file, pass the URL to the [`videoSource`](/api-reference/feathers/media/VideoPlayer.html#videoSource) property:

```actionscript
player.videoSource = "http://example.com/video.m4v";
```

> For additional ways to play videos (such as streaming from a server), see the [Loading Videos](#loading-videos) section below.

To display the video, we need to add an [`ImageLoader`](./image-loader.md) as a child of the `VideoPlayer`:

```actionscript
var loader:ImageLoader = new ImageLoader();
player.addChild( loader );
```

Notice that we have not set the [`source`](/api-reference/feathers/controls/ImageLoader.html#source) property of the `ImageLoader` yet. A video texture requires a moment to initialize on the GPU before it may be rendered by Starling. The `VideoPlayer` will dispatch [`Event.READY`](/api-reference/feathers/media/VideoPlayer.html#event:ready) once we can pass the texture to the `ImageLoader`:

```actionscript
function videoPlayer_readyHandler( event:Event ):void
{
	loader.source = player.texture;
}
player.addEventListener( Event.READY, videoPlayer_readyHandler );
```

The video texture may be accessed throught the [`texture`](/api-reference/feathers/media/VideoPlayer.html#texture) property. Until `Event.READY` is dispatched, the `texture` property of the `VideoPlayer` will be `null`.

Additionally, you should listen for [`FeathersEventType.CLEAR`](/api-reference/feathers/media/VideoPlayer.html#event:clear):

```actionscript
function videoPlayer_clearHandler( event:Event ):void
{
	loader.source = null;
}
player.addEventListener( FeathersEventType.CLEAR, videoPlayer_clearHandler );
```

This event is dispatched when the video texture has been disposed, and it must no longer be rendered.

## Controls

Let's give the `VideoPlayer` some controls. First, let's create a [`LayoutGroup`](./layout-group.md) to use as a toolbar for our controls:

```actionscript
var controls:LayoutGroup = new LayoutGroup();
controls.styleNameList.add( LayoutGroup.ALTERNATE_STYLE_NAME_TOOLBAR );
player.addChild(controls);
```

With the toolbar in place, let's add a [`PlayPauseToggleButton`](/api-reference/feathers/media/PlayPauseToggleButton.html) and a [`SeekSlider`](/api-reference/feathers/media/SeekSlider.html). It's as simple as adding them as children of the tool bar:

```actionscript
var button:PlayPauseToggleButton = new PlayPauseToggleButton();
controls.addChild( button );

var slider:SeekSlider = new SeekSlider();
controls.addChild( slider );
```

There's no need to add event listeners for these controls. You simply need to add them as children of the `VideoPlayer` (or a container that has been added as a child of the `VideoPlayer`), and everything will be set up automatically.

> The complete list of [media player controls](./media-player-controls.md) includes several more pre-built components that you can add to a `VideoPlayer`.

In the next section, we'll position everything with some layouts.

## Layout

First, let's create a layout for the toolbar with our controls. We'll pass a [`HorizontalLayout`](/api-reference/feathers/layout/HorizontalLayout.html) to the [`layout`](/api-reference/feathers/controls/LayoutGroup.html#layout) property:

```actionscript
var layout:HorizontalLayout = new HorizontalLayout();
layout.gap = 10;
controls.layout = layout;
```

Here, we've set the [`gap`](/api-reference/feathers/layout/HorizontalLayout.html#gap) property, but `HorizontalLayout` provides many more useful features, including padding and alignment. See [How to use `HorizontalLayout` with Feathers containers](./horizontal-layout.md) for complete details.

If we want our `SeekSlider` to stretch to fill as much space as possible within the `VideoPlayer`, we can pass in [`HorizontalLayoutData`](/api-reference/feathers/layout/HorizontalLayoutData.html):

```actionscript
var sliderLayoutData:HorizontalLayoutData = new HorizontalLayoutData();
sliderLayoutData.percentWidth = 100;
slider.layoutData = sliderLayoutData;
```

Now, because we set the [`percentWidth`](/api-reference/feathers/layout/HorizontalLayoutData.html#percentWidth) property, when the width of the toolbar changes, the width of the `SeekSlider` will change too.

Next, we want to position the toolbar and the `ImageLoader`. Let's use a `VerticalLayout` for that.

```actionscript
player.layout = new VerticalLayout();
```

We want the `ImageLoader` to fill as much space as possible.

```actionscript
var loaderLayoutData:VerticalLayoutData = new VerticalLayoutData();
loaderLayoutData.percentWidth = 100;
loaderLayoutData.percentHeight = 100;
loader.layoutData = loaderLayoutData;
```

Then, we want the toolbar to fill the entire width of the `VideoPlayer`:

```actionscript
var controlsLayoutData:VerticalLayoutData = new VerticalLayoutData();
controlsLayoutData.percentWidth = 100;
controls.layoutData = controlsLayoutData;
```

## Controlling playback programmatically

By default, the `VideoPlayer` will automatically start playing its `videoSource`. We can use the [`autoPlay`](/api-reference/feathers/media/VideoPlayer.html#autoPlay) property to change this behavior:

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

To stop playback and return the video to the beginning, we may call `stop()`:

```actionscript
player.stop();
```

The `seek()` function may be called to change the current time:

```actionscript
player.seek( 5.0 );
```

The time is measured in seconds.

To change the volume, we can pass a [`flash.media.SoundTransform`](http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/media/SoundTransform.html) object to the [`soundTransform`](/api-reference/feathers/media/VideoPlayer.html#soundTransform) property:

```actionscript
player.soundTransform = new SoundTransform( 0.5 );
```

The `toggleFullScreen()` function will toggle between normal and full screen modes:

```actionscript
player.toggleFullScreen();
```

When the `VideoPlayer` is displayed in full screen mode, it will be added as a modal pop-up above all Starling content.

## Loading Videos

Previously, we loaded a video using a simple URL. Let's look at all of the ways that video may be loaded by the `VideoPlayer` component.

### Loading from URLs

First, we'll review how to load a video from a URL:

```actionscript
player.videoSource = "http://example.com/video.mp4";
```

### Loading from the file system

In Adobe AIR, we can also load a video from the file system:

```actionscript
var videoFile:File = File.applicationDirectory.resolvePath("video.mp4");
player.videoSource = videoFile.url;
```

Be sure to pass the `url` property of a `flash.filesystem.File` object to `videoSource`. Attempting to use the `nativePath` property will not work.

### Streaming video

Finally, we can stream a video from a server, such as Adobe Media Server or the open source Red5 Media Server. First, we want to use the `netConnectionFactory` property of the video player to set up the connection to the server:

```actionscript
player.netConnectionFactory = function():NetConnection
{
	var nc:NetConnection = new NetConnection();
	nc.connect("rtmp://localhost/vod");
	return nc;
};
```

Next, we'll pass the name of the stream to the `videoSource` property:

```actionscript
player.videoSource = "mp4:streams/myvideo";
```

To play another video stream from the same server, set the `videoSource` property again.

## Skinning a `VideoPlayer`

As mentioned above, `VideoPlayer` is a subclass of `LayoutGroup`. For more detailed information about the skinning options available to `VideoPlayer`, see [How to use the `LayoutGroup` component](./layout-group.md).

## Related Links

- [`feathers.media.VideoPlayer` API Documentation](/api-reference/feathers/media/VideoPlayer.html)

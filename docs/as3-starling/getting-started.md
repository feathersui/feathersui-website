---
title: Getting started with Feathers (Starling version)
sidebar_label: Hello World
---

In the following beginner-level tutorial, we'll use our first Feathers [`Button`](./button.md) component. This is a very simple demonstration that sets a label, adds an event listener, and creates a theme that will apply a skin.

## Prerequisites

- You should understand how to set up a regular Starling project. Please start with the [Starling guides and tutorials](http://gamua.com/starling/help/), if you're new to Starling.

- [Download Feathers](./installation.md).

- Check the navigation for links to instructions about how to add Feathers to your favorite development environment.

- Look inside the `themes/MetalWorksMobileTheme/swc` directory of the Feathers ZIP file to find `MetalWorksMobileTheme.swc`. Add it to your project's build settings the same way that you added `feathers.swc`.

- The complete source code for the Hello World example is included with Feathers in the _examples_ directory, so please feel free to follow along.

## Final Result

[![feathers-hello-world.jpg](images/feathers-hello-world.jpg)](http://feathersui.com/examples/hello-world/)

See the [Hello World example](http://feathersui.com/examples/hello-world/) running live in your browser. Requires [Adobe Flash Player](http://get.adobe.com/flash).

## Walkthrough

Below, you'll find the basic structure of the `Main` class that we'll use as the root Starling display object. This walkthrough assumes that you already know how to initialize Starling. You may look through the example's full source code to see how this is done.

```actionscript
package feathers.examples.helloWorld
{
    import feathers.controls.Button;
    import feathers.controls.TextCallout;
    import feathers.themes.MetalWorksMobileTheme;
 
    import starling.display.Sprite;
    import starling.event.Event;
 
    public class Main extends Sprite
    {
        public function Main()
        {
            this.addEventListener( Event.ADDED_TO_STAGE, addedToStageHandler );
        }
 
        protected var button:Button;
 
        protected function addedToStageHandler( event:Event ):void
        {
        }
    }
}
```

In our `Main` class, most of the code that we add later will go into the `addedToStageHandler()` function.

Let's start by initializing a [theme](./themes.md). By default, the Feathers components don't have skins. However, several example _themes_ are included with Feathers to easily provide sample skins to all components. A theme can be instantiated in just one line of code.

```actionscript
new MetalWorksMobileTheme();
```

When a new component initializes, the theme will create appropriate skins, including backgrounds, icons, text formats, and skins for sub-components, and pass them in automatically.

> Most of the Feathers examples, including the Hello World example, use a class named `MetalWorksMobileTheme`. This is a sample [theme](./themes.md) that provides pre-made skins for Feathers components. You can find it in the _themes_ directory of the the Feathers ZIP file. Add `MetalWorksMobileTheme.swc` to your project's build settings the same way that you added `feathers.swc`.

With the theme created, let's create the `Button` and set it's label:

```actionscript
this.button = new Button();
this.button.label = "Click Me";
this.addChild( button );
```

If we want to do something when the button is tapped or clicked, we should listen to the `Event.TRIGGERED` event.

```actionscript
this.button.addEventListener( Event.TRIGGERED, button_triggeredHandler );
```

Our listener function should look something like this:

```actionscript
protected function button_triggeredHandler( event:Event ):void
{
    TextCallout.show( "Hi, I'm Feathers!\nHave a nice day.", this.button );
}
```

The button's `Event.TRIGGERED` listener displays a message in a `TextCallout` component. Like with our button, this component is automatically skinned by the theme.

Finally, let's position the button in the middle of the stage. First, though, let's take note of one thing about how Feathers controls work. Feathers uses a system of _invalidation_ that delays redraws until just immediately before Starling renders to the screen. This keeps Feathers from using too much CPU by redrawing over and over again when you need to change multiple properties all at once.

At this moment, our button still has `width` and `height` values of `0` because it hasn't drawn yet. Feathers controls automatically resize themselves to an ideal size when they redraw (unless you explicitly set your own width and height values). This is usually based on the original dimensions of the skins and other children.

In this case, we want to position our button immediately, without waiting for validation. To make a Feathers control draw **right now**, call the `validate()` function:

```actionscript
this.button.validate();
```

Now, we can properly center our button on the stage because it will correctly report appropriate dimensions based on the size of the button's skin and label:

```actionscript
this.button.x = (this.stage.stageWidth - this.button.width) / 2;
this.button.y = (this.stage.stageHeight - this.button.height) / 2;
```

## Conclusion

That should get you started with the very basics of working with Feathers. For more information about the capabilities of the `Button` class, read [How to use the Feathers `Button` component](./button.md). For the `TextCallout` class, read [How to use the Feathers `TextCallout` component](./text-callout.md).

For more extensive sample code, check out the other Feathers examples included in the _examples_ directory when you [download Feathers](./installation.md). For example themes (including `MetalWorksMobileTheme`), check out the _themes_ directory.

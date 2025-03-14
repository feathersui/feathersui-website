---
title: Creating custom Feathers themes (AS3/Starling version)
layout: "docs.html"
sidebarTitle: Creating custom themes
---

Many apps, including games, require heavy branding that involves styling every Feathers component with custom skins and fonts. In these cases, the example themes included with Feathers won't offer enough customization options to match the designer's vision. We will need a custom theme, built from scratch.

> If you haven't read [Skinning Feathers components](./skinning.md) yet, start there first to learn about how to do basic skinning without themes.

## Creating a theme class

Let's create a new theme from scratch. We'll create a subclass of [`StyleNameFunctionTheme`](/api-reference/feathers/themes/StyleNameFunctionTheme.html):

```actionscript
package
{
	public class CustomTheme extends StyleNameFunctionTheme
	{
		public function CustomTheme()
		{
			super();
		}

		private function initialize():void
		{

		}
	}
}
```

We've added a function named `initialize()`. We'll soon fill this function with calls to other functions that get different parts of the theme ready to use. However, before we can call `initialize()`, we need to decide how we're going to manage our assets like textures and fonts. We don't want to call this function until all assets are fully loaded.

## Managing assets

There are two ways to include assets with a theme. Each has its own advantages and disadvantages, and we'll need to pick which one works best for the specific app that we're building.

### Embedded assets

The simplest way to include assets to _embed_ the assets at compile time. This approach lets us simply instantiate the classes when they are needed, and we don't need to wait for an event to indicate that they are ready. However, embedding files will increase the memory that our app requires at runtime. On mobile, memory can be limited, and this approach will restrict how many textures that we can keep in memory simultaneously. For a small set of assets, that may be a small price to pay for convenience. For multiple texture atlases, using up memory that we might need at runtime is often unacceptable.

Let's start by embedding a [texture atlas](https://wiki.starling-framework.org/manual/textures_and_images#texture_atlases) in our `CustomTheme` class:

```actionscript
[Embed(source="/../assets/images/atlas.png")]
private static const ATLAS_BITMAP:Class;

[Embed(source="/../assets/images/atlas.xml",mimeType="application/octet-stream")]
private static const ATLAS_XML:Class;
```

A texture atlas requires of two files, an image and an XML file. Let's add a member variable to our theme to hold the [`TextureAtlas`](https://doc.starling-framework.org/core/starling/textures/TextureAtlas.html) once it is created:

```actionscript
private var atlas:TextureAtlas;
```

Now, we'll add a function named `createTextureAtlas()` that will instantiate the `TextureAtlas` using our embedded assets:

```actionscript
private function createTextureAtlas():void
{
	var atlasTexture:Texture = Texture.fromEmbeddedAsset( ATLAS_BITMAP );
	var atlasXML:XML = XML( new ATLAS_XML() );
	this.atlas = new TextureAtlas( atlasTexture, atlasXML );
}
```

In the `CustomTheme` constructor, we'll call `createTextureAtlas()`, and then we can immediately call `initialize()`:

```actionscript
public function CustomTheme()
{
	super();
	this.createTextureAtlas();
	this.initialize();
}
```

If our theme requires other embedded assets, such as bitmap fonts or additional texture atlases, we simply need to instantiate these assets before we call `initialize()`.

### Loading assets at runtime

Another approach to including assets with a theme is to load them from external files at runtime. Starling's [`AssetManager`](https://doc.starling-framework.org/core/starling/utils/AssetManager.html) supports loading a set of multiple files at runtime, and it provides conveniences like automatically converting bitmaps to textures and registering bitmap fonts. Once everything is loaded, our assets will use less memory than if they were embedded, meaning that we can pack in more textures and things. Loading assets doesn't happen instantaneously, though, and we cannot initialize the theme until the `AssetManager` finishes loading our assets. Additionally, our app will need to wait before it can instantiate Feathers components.

Similar to the previous example that used embedded assets, we want to load a [texture atlas](https://wiki.starling-framework.org/manual/textures_and_images#texture_atlases) to be used by our `CustomTheme` class. We'll need two files for the texture atlas, we'll call them `atlas.png` and `atlas.xml`.

> When packaging an AIR application, we need to manually add each of the files that we want to include with our app to our project's settings. They will not be included automatically, even if we put them into the same folder as our source code. Every development environment provides a different UI for including files with an AIR application, so please refer to the appropriate IDE documentation for details.

Let's define a couple of member variables, one for the texture atlas, and one for the `AssetManager` that will load the required files:

```actionscript
private var atlas:TextureAtlas;
private var assets:AssetManager;
```

Now, we'll add a function named `loadAssets()` that will instantiate the `AssetManager` and enqueue the asset files:

```actionscript
private function loadAssets():void
{
	this.assets = new AssetManager();
	this.assets.enqueue( "atlas.png" );
	this.assets.enqueue( "atlas.xml" );
	this.assets.loadQueue( this.assets_onProgress );
}
```

At the end, we call `loadQueue()` on the `AssetManager` to load our assets. We need to pass a callback to this function so that we know when the assets finish loading. The callback accepts a single parameter, a variable with a value between `0.0` and `1.0`. Once this value is equal to `1.0`, our assets have fully loaded:

```actionscript
private function assets_onProgress( progress:Number ):void
{
	if( progress < 1.0 )
	{
		return;
	}
	this.atlas = this.assets.getTextureAtlas( "atlas" );
	this.initialize();
	this.dispatchEventWith( Event.COMPLETE );
}
```

If the assets aren't loaded, we simply return. Once the assets are ready, we can access the `TextureAtlas` from the `AssetManager`. We pass the name of the texture atlas to the [`getTextureAtlas()`](<https://doc.starling-framework.org/core/starling/utils/AssetManager.html#getTextureAtlas()>) function. The name of a texture atlas is the image's file name, without the extension. In this case, our file is named `atlas.png`, so we pass `"atlas"` to `getTextureAtlas()`.

Once we've set the `atlas` member variable, we can call `initialize()`. If our custom theme needed to load more assets, we'd want to get them all from the `AssetManager` before calling `initialize()`.

Finally, we want to inform the rest of our app that it can proceed, so we'll dispatch `Event.COMPLETE`. The app can listen for this event very easily:

```actionscript
this.theme = new CustomTheme();
this.theme.addEventListener( Event.COMPLETE, theme_completeHandler );
```

Once the listener is called, the app is free to start instantiating components, and the theme will style them automatically.

## Styling components

Once our assets are loaded, we can start setting up the functions called to style each component in our app. Inside one of these functions, styling is simply a matter of directly setting a component's properties. It's the same type of styling you would do if you were using Feathers without a theme. For example, we might set some styles on a [`Button`](./button.md):

```actionscript
private function setButtonStyles( button:Button ):void
{
	button.defaultSkin = new Image( this.atlas.getTexture( "button-up" ) );
	button.downSkin = new Image( this.atlas.getTexture( "button-down" ) );

	button.padding = 20;
	button.gap = 15;

	button.fontStyles = new TextFormat( "_sans", 18, 0x333333 );
}
```

In our `initialize()` function, let's call a new function that we'll create in a moment, named `initializeStyleProviders()`:

```actionscript
private function initialize():void
{
	this.initializeStyleProviders();
}
```

Now, let's create `initializeStyleProviders()` and set up our first style provider, the one for the `Button` class:

```actionscript
private function initializeStyleProviders():void
{
	// button
	this.getStyleProviderForClass( Button ).defaultStyleFunction = this.setButtonStyles;
}
```

[`getStyleProviderForClass()`](</api-reference/feathers/themes/StyleNameFunctionTheme.html#getStyleProviderForClass()>) returns a [`StyleNameFunctionStyleProvider`](/api-reference/feathers/skins/StyleNameFunctionStyleProvider.html).

`StyleNameFunctionStyleProvider` has two main capabilities. Its [`defaultStyleFunction`](/api-reference/feathers/skins/StyleNameFunctionStyleProvider.html#defaultStyleFunction) property sets the function that will be called for the most common variation of a particular component. Using the code above, if we create regular old button, we want our `setButtonStyles()` function to be called.

However, it's common for different variations of the same component to exist together in one app. For instance, some buttons may be visually highlighted in red to indicate that something potentially dangerous is about to happen, like deleting some data. The [`Button.ALTERNATE_STYLE_NAME_DANGER_BUTTON`](/api-reference/feathers/controls/Button.html#ALTERNATE_STYLE_NAME_DANGER_BUTTON) constant is defined by Feathers to help differentiate this variation of a button. You can add this style name to the component to tell the theme that it should be styled differently:

```actionscript
button.styleNameList.add( Button.ALTERNATE_STYLE_NAME_DANGER_BUTTON );
```

Inside our theme, we can add a new function for this button variation. We'll name it `setDangerButtonStyles()`:

```actionscript
private function setDangerButtonStyles( button:Button ):void
{
	button.defaultSkin = new Image( this.atlas.getTexture( "danger-button-up" ) );
	button.downSkin = new Image( this.atlas.getTexture( "danger-button-down" ) );

	button.padding = 20;
	button.gap = 15;

	button.fontStyles = new TextFormat( "_sans", 18, 0x333333 );
}
```

Now, we can use the [`setFunctionForStyleName()`](</api-reference/feathers/skins/StyleNameFunctionStyleProvider.html#setFunctionForStyleName()>) on the `StyleNameFunctionStyleProvider`:

```actionscript
this.getStyleProviderForClass( Button )
	.setFunctionForStyleName( Button.ALTERNATE_STYLE_NAME_DANGER_BUTTON, this.setDangerButtonStyles );
```

If a component has this style name, the default `setButtonStyles()` function won't be called. Instead, `setDangerButtonStyles()` will be called.

### Styling sub-components

Some components have sub-components that need to be skinned too. For instance, the [`Slider`](./slider.md) component has a thumb that is a [`Button`](./button.md). These sub-components may be skinned using style names provided by their parent component. For instance, we can use [`Slider.DEFAULT_CHILD_STYLE_NAME_THUMB`](/api-reference/feathers/controls/Slider.html#DEFAULT_CHILD_STYLE_NAME_THUMB) to skin the thumb of a slider.

```actionscript
this.getStyleProviderForClass( Button )
	.setFunctionForStyleName( Slider.DEFAULT_CHILD_STYLE_NAME_THUMB, this.setSliderThumbStyles );
```

Components usually provide a way to customize a sub-component's style name, in case something other than the default is needed. For a `Slider`, we can set the [`customThumbStyleName`](/api-reference/feathers/controls/Slider.html#customThumbStyleName) property:

```actionscript
slider.customThumbStyleName = "custom-thumb";
```

Then, we can use that custom style name just like we would for other variations of a component:

```actionscript
this.getStyleProviderForClass( Button )
	.setFunctionForStyleName( "custom-thumb", this.setSliderThumbStyles );
```

## Setting global defaults

Certain global properties are frequently set by a theme. For instance, we might want to set [`FeathersControl.defaultTextRendererFactory`](/api-reference/feathers/core/FeathersControl.html#defaultTextRendererFactory) and [`FeathersControl.defaultTextEditorFactory`](/api-reference/feathers/core/FeathersControl.html#defaultTextEditorFactory) in our custom theme, depending on how we prefer to render text or edit it in a [`TextInput`](./text-input.md).

Let's create an `initializeGlobals()` function:

```actionscript
private function initializeGlobals():void
{
	FeathersControl.defaultTextRendererFactory = function():ITextRenderer
	{
		return new TextBlockTextRenderer();
	};

	FeathersControl.defaultTextEditorFactory = function():ITextEditor
	{
		return new StageTextTextEditor();
	};
}
```

We can call this function before the call to `initializeStyleProviders()` in `initialize()`:

```actionscript
private function initialize():void
{
	this.initializeGlobals();
	this.initializeStyleProviders();
}
```

## Related Links

- [Introduction to Feathers themes](./themes.md)

- [Extending Feathers example themes](./extending-themes.md)

- [An in-depth look at Feathers style providers](./style-providers.md)

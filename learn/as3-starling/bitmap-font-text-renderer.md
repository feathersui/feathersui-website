---
title: How to use the BitmapFontTextRenderer component (Starling version)
layout: "docs.html"
sidebarTitle: BitmapFontTextRenderer
---

The [`BitmapFontTextRenderer`](/api-reference/feathers/controls/text/BitmapFontTextRenderer.html) class renders text using [bitmap fonts](http://wiki.starling-framework.org/manual/displaying_text#bitmap_fonts).

> `BitmapFontTextRenderer` is one of many different [text renderers](./text-renderers.md) supported by Feathers. Since no method of rendering text on the GPU is considered definitively better than the others, Feathers allows you to choose the best text renderer for your project's requirements. See [Introduction to Feathers text renderers](./text-renderers.md) for complete details about all of the text rendering options supported by Feathers.

## Advantages and disadvantages

Bitmap fonts separate each character into sub-textures inside an atlas. These sub-textures are displayed as images placed next to each other to form words and paragraphs. If the text has a particularly stylized appearance, such as gradients and outlines, bitmap fonts provide the best performance because the effects can be pre-rendered at design time rather than slowing things down at runtime.

Bitmap fonts are often great for games in situations when you need to display a limited amount of text around the edges of the screen. Values that change often, such as score, ammo, health, etc. can quickly swap out characters without uploading new textures to the GPU.

Bitmap fonts can sometimes be useful for longer passages of text (assuming that you need a uniform font style throughout the whole passage) because each character is a separate sub-texture and can be reused without requiring more memory on the GPU. However, since each new character is a new image to render on Starling's display list, the transformation calculations for all of those separate display objects may eventually overwhelm the CPU as the number of characters increases. It may require testing to determine how many characters a particular device's CPU can handle at once.

While the English language has only 26 letters in the alphabet (in addition to any punctuation and other supporting characters that you might need), some languages require many hundreds of characters, or even advanced ligatures to join adjacent characters. A texture that contains all of those characters, or combinations of characters, may be impossible to use with bitmap fonts because it hits texture memory limits imposed by Stage 3D or by the GPU. In these situations, you may have no choice but to use another text renderer that supports device fonts.

Bitmap fonts may be scaled, but because they use bitmaps, only scaling down is recommended. Even then, you may lose out on text hinting that would make vector fonts more readable at smaller sizes. It's common to include separate font sizes as separate textures for bitmap fonts to achieve the best looking results, and that can require a lot of memory.

`BitmapFontTextRenderer` does not support multiple font styles in the same text renderer. A `BitmapFontTextRenderer` must use a single bitmap font to render its entire text.

### Advanced font styles

> In general, you should customize font styles on the parent component of a text renderer using a [`starling.text.TextFormat`](http://doc.starling-framework.org/current/starling/text/TextFormat.html) object. For example, to customize the font styles on a [`Button`](./button.md) component, you'd set the button's [`fontStyles`](/api-reference/feathers/controls/Button.html#fontStyles) property.
>
> ```actionscript
> button.fontStyles = new TextFormat( "Helvetica", 20, 0xcc0000 );
> ```
>
> However, `starling.text.TextFormat` object does not always expose every unique font styling feature that a text renderer supports. The next section demostrates how to set advanced font styles that may not be exposed through this class.

To display text with bitmap fonts, create a [`BitmapFontTextRenderer`](/api-reference/feathers/controls/text/BitmapFontTextRenderer.html) in the appropriate factory exposed by the parent component. In the following example, we'll use the [`labelFactory`](/api-reference/feathers/controls/Button.html#labelFactory) of a [`Button`](./button.md) component:

```actionscript
var button:Button = new Button();
button.label = "Click Me";
button.labelFactory = function():ITextRenderer
{
	var textRenderer:BitmapFontTextRenderer = new BitmapFontTextRenderer();
	textRenderer.styleProvider = null;

	//set advanced font styles here

	return textRenderer;
};
```

> You may need to remove the text renderer's style provider in the factory before changing font styles to avoid conflicts with the default styles set by a theme. That's why the `styleProvider` property is set to `null` in the code above.

Advanced font styles may be customized by passing a [`BitmapFontTextFormat`](/api-reference/feathers/text/BitmapFontTextFormat.html) instance to the text renderer's [`textFormat`](/api-reference/feathers/controls/text/BitmapFontTextRenderer.html#textFormat) property.

```actionscript
var format:BitmapFontTextFormat = new BitmapFontTextFormat( "FontName" );
```

Pass the font to display to the `BitmapFontTextFormat` constructor. In the code above, we pass in the name of a font registered with [`TextField.registerCompositor()`](<http://doc.starling-framework.org/core/starling/text/TextField.html#registerCompositor()>). We could also pass in a [`starling.text.BitmapFont`](http://doc.starling-framework.org/core/starling/text/BitmapFont.html) instance that has not been registered.

The tint of the text can be customized with the [`color`](/api-reference/feathers/text/BitmapFontTextFormat.html#color) property:

```actionscript
format.color = 0xc4c4c4;
```

The RGB values of the tint color are multiplied with the RGB values of each of the font texture's pixels, similar to [`starling.display.BlendMode.MULTIPLY`](http://doc.starling-framework.org/current/starling/display/BlendMode.html#MULTIPLY).

> To support the maximum range of colors, the bitmap font image should be exported with completely white pixels.

The alignment of the text can be customized with the [`align`](/api-reference/feathers/text/BitmapFontTextFormat.html#align) property:

```actionscript
format.align = TextFormatAlign.CENTER;
```

Bitmap fonts have one primary font size. They may be scaled, but scaled bitmap fonts may not render as nicely as scaled vector fonts. However, if needed, we can use the [`size`](/api-reference/feathers/text/BitmapFontTextFormat.html#size) property:

```actionscript
format.size = 18;
```

In most cases, it's not necessary to set the `size` property. The primary font size will be detected automatically.

> Generally, to display the same bitmap font with different sizes, it's better to use separate textures, and register each size with a different font name.

`BitmapFontTextRenderer` provides a number of other advanced properties that may be customized, but aren't included in this quick introduction. For complete details about available properties, please take a look at the [`BitmapFontTextRenderer` API reference](/api-reference/feathers/controls/text/BitmapFontTextRenderer.html) and the [`BitmapFontTextFormat` API reference](/api-reference/feathers/text/BitmapFontTextFormat.html).

### How to change advanced font styles when a parent component has multiple states

Some components, like [`Button`](./button.md) and [`TextInput`](./text-input.md), have multiple states. It's possible to pass more than one `BitmapFontTextFormat` to the `BitmapFontTextRenderer` so that the font styles change when the parent component's state changes.

For instance, we can provide a different font style for the down state of a `Button` by calling [`setTextFormatForState()`](</api-reference/feathers/controls/text/BitmapFontTextRenderer.html#setTextFormatForState()>):

```actionscript
var defaultFormat:BitmapFontTextFormat = new BitmapFontTextFormat( "FontName", 20, 0xc4c4c4 );
textRenderer.textFormat = defaultFormat;

var downFormat:BitmapFontTextFormat = new BitmapFontTextFormat( "FontName", 20, 0x343434 );
textRenderer.setTextFormatForState( ButtonState.DOWN, downFormat );
```

We didn't provide separate font styles for other states, like `ButtonState.HOVER` or `ButtonState.DISABLED`. When the `Button` is in one of these states, the `BitmapFontTextRenderer` will fall back to using the value we passed to the `textFormat` property.

## Related Links

- [`feathers.controls.text.BitmapFontTextRenderer` API Documentation](/api-reference/feathers/controls/text/BitmapFontTextRenderer.html)

- [Introduction to Feathers text renderers](./text-renderers.md)

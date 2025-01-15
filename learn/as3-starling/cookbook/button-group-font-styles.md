---
title: How to change font styles in a ButtonGroup component (AS3/Starling version)
layout: "docs.html"
---

A [`ButtonGroup`](../button-group.md) component contains one or more [`Button`](../button.md) sub-components that display some text. Let's look at how to change the font styles in the buttons outside of the theme.

## The button font styles

We can customize the buttons inside the button group's [`buttonFactory`](/api-reference/feathers/controls/ButtonGroup.html#buttonFactory). As long as we aren't setting any advanced font styles on the button's [text renderer](../text-renderers.md) (and the theme isn't either), we can pass a `starling.text.TextFormat` directly to the button's [`fontStyles`](/api-reference/feathers/controls/Button.html#fontStyles) property.

```actionscript
var group:ButtonGroup = new ButtonGroup();
group.buttonFactory = function():Button
{
	var button:Button = new Button();
	button.fontStyles = new TextFormat( "Arial", 20, 0x3c3c3c );
	return button;
};
```

If we wanted to change the button's font styles inside the theme, we could set the [`customButtonStyleName`](/api-reference/feathers/controls/ButtonGroup.html#customButtonStyleName) property on the `ButtonGroup` and [extend the theme](../extending-themes.md).

## Related Links

- [Feathers Cookbook (Starling version)](./index.md)
- [How to use the `ButtonGroup` component](../button-group.md)

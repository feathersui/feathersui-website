---
title: How to change font styles in a DateTimeSpinner component (Starling version)
layout: "docs.html"
---

A [`DateTimeSpinner`](../date-time-spinner.md) component contains two or more [`SpinnerList`](../spinner-list.md) sub-components, and each of those contains a number of [item renderers](../default-item-renderers.md) that display some text. Let's look at how to change the font styles in the item renderers outside of the theme.

## The item renderer font styles

We can customize the item renderers inside the date time spinner's [`itemRendererFactory`](/api-reference/feathers/controls/DateTimeSpinner.html#itemRendererFactory). As long as we aren't setting any advanced font styles on the item renderer's [text renderer](../text-renderers.md) (and the theme isn't either), we can pass a `starling.text.TextFormat` directly to the item renderer's [`fontStyles`](/api-reference/feathers/controls/Button.html#fontStyles) property.

```actionscript
var spinner:DateTimeSpinner = new DateTimeSpinner();
spinner.itemRendererFactory = function():IListItemRenderer
{
	var itemRenderer:DefaultListItemRenderer = new DefaultListItemRenderer();
	itemRenderer.fontStyles = new TextFormat( "Arial", 20, 0x3c3c3c );
	return itemRenderer;
};
```

If we wanted to change the item renderer's font styles inside the theme, we could set the [`customItemRendererStyleName`](/api-reference/feathers/controls/DateTimeSpinner.html#customItemRendererStyleName) property on the `DateTimeSpinner` and [extend the theme](../extending-themes.md).

## Related Links

- [Feathers Cookbook (Starling version)](./index.md)
- [How to use the `DateTimeSpinner` component](../date-time-spinner.md)

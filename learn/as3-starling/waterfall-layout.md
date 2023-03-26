---
title: Using WaterfallLayout in Feathers containers (Starling version)
layout: "docs.html"
sidebarTitle: WaterfallLayout
---

The [`WaterfallLayout`](/api-reference/feathers/layout/WaterfallLayout.html) class may be used by components that support layout, such as [`List`](./list.md), [`LayoutGroup`](./layout-group.md) and [`ScrollContainer`](./scroll-container.md), to display items with multiple columns of equal width where items may have variable heights. Items are added to the layout in order, but they may be added to any of the available columns. The layout selects the column where the column's height plus the item's height will result in the smallest possible total height.

<picture><img src="/learn/as3-starling/images/waterfall-layout.png" srcset="/learn/as3-starling/images/waterfall-layout@2x.png 2x" alt="Screenshot of Feathers WaterfallLayout" /></picture>

`WaterfallLayout` supports a number of useful options for adjusting the number of columns, the spacing between items, and the alignment of the columns.

## The Basics

First, let's create a `WaterfallLayout` and pass it to a [`LayoutGroup`](./layout-group.md):

```actionscript
var layout:WaterfallLayout = new WaterfallLayout();
 
var container:LayoutGroup = new LayoutGroup();
container.layout = layout;
this.addChild( container );
```

There are a number of simple properties that may be used to affect positioning and sizing of items in the layout. Let's look at some of the most common.

### Spacing

The _padding_ is the space around the edges of the container. Let's set the [`padding`](/api-reference/feathers/layout/WaterfallLayout.html#padding) property to `12` pixels:

```actionscript
layout.padding = 12;
```

If needed, we may set padding on each side of the container separately. Below, we set the [`paddingTop`](/api-reference/feathers/layout/WaterfallLayout.html#paddingTop) and [`paddingBottom`](/api-reference/feathers/layout/WaterfallLayout.html#paddingBottom) to `10` pixels, and we set the [`paddingLeft`](/api-reference/feathers/layout/WaterfallLayout.html#paddingLeft) and [`paddingRight`](/api-reference/feathers/layout/WaterfallLayout.html#paddingRight) to `15` pixels:

```actionscript
layout.paddingTop = 10;
layout.paddingRight = 15;
layout.paddingBottom = 10;
layout.paddingLeft = 15;
```

The _gap_ is the space between items. Let's set the [`gap`](/api-reference/feathers/layout/WaterfallLayout.html#gap) property to `5` pixels:

```actionscript
layout.gap = 5;
```

If needed, we can set the horizontal and vertical gaps separately. We'll set the [`horizontalGap`](/api-reference/feathers/layout/WaterfallLayout.html#horizontalGap) property to `4` pixels and the [`verticalGap`](/api-reference/feathers/layout/WaterfallLayout.html#verticalGap) property to `6` pixels:

```actionscript
layout.horizontalGap = 4;
layout.verticalGap = 6;
```

### Columns

We can _align_ the columns in the layout using the [`horizontalAlign`](/api-reference/feathers/layout/WaterfallLayout.html#horizontalAlign) property. Let's adjust the horizontal alignment so that the content will be pulled to the right:

```actionscript
layout.horizontalAlign = HorizontalAlign.RIGHT;
```

It's possible to request a specific number of columns for the layout to display. The layout may not always be able to accomodate this value because the container may be too small, but if there is enough room for the requested number of columns, that's the number it will display. Let's tell the layout to use three columns by setting the [`requestedColumnCount`](/api-reference/feathers/layout/WaterfallLayout.html#requestedColumnCount) property:

```actionscript
layout.requestedColumnCount = 3;
```

Now, the layout will always display three columns, even if the container can fit four or more. However, if only one or two columns can be fit into the container, the layout will display the maximum number that will fit.

> If the width of the container is not set, the layout will automatically calculate a width that accomodates the `requestedColumnCount`.

## Related Links

- [`feathers.layout.WaterfallLayout` API Documentation](/api-reference/feathers/layout/WaterfallLayout.html)

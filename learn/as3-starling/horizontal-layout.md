---
title: Using HorizontalLayout in Feathers containers (Starling version)
layout: "docs.html"
sidebarTitle: HorizontalLayout
---

The [`HorizontalLayout`](/api-reference/feathers/layout/HorizontalLayout.html) class may be used by components that support layout, such as [`List`](./list.md), [`LayoutGroup`](./layout-group.md) and [`ScrollContainer`](./scroll-container.md), to display items from left to right in a single row. It supports a number of useful options for adjusting the spacing and alignment.

<picture><img src="/learn/as3-starling/images/horizontal-layout.png" srcset="/learn/as3-starling/images/horizontal-layout@2x.png 2x" alt="Screenshot of Feathers HorizontalLayout" /></picture>

## The Basics

First, let's create a horizontal layout and pass it to a [`LayoutGroup`](./layout-group.md):

```actionscript
var layout:HorizontalLayout = new HorizontalLayout();
 
var container:LayoutGroup = new LayoutGroup();
container.layout = layout;
this.addChild( container );
```

There are a number of simple properties that may be used to affect positioning and sizing of items in the layout. Let's look at some of the most common.

### Spacing

The _padding_ is the space around the edges of the container. Let's set the [`padding`](/api-reference/feathers/layout/HorizontalLayout.html#padding) property to `12` pixels:

```actionscript
layout.padding = 12;
```

If needed, the padding on each side of the container may be set separately. Below, we set the [`paddingTop`](/api-reference/feathers/layout/HorizontalLayout.html#paddingTop) and [`paddingBottom`](/api-reference/feathers/layout/HorizontalLayout.html#paddingBottom) properties to `10` pixels, and we set the [`paddingLeft`](/api-reference/feathers/layout/HorizontalLayout.html#paddingLeft) and [`paddingRight`](/api-reference/feathers/layout/HorizontalLayout.html#paddingRight) to `15` pixels:

```actionscript
layout.paddingTop = 10;
layout.paddingRight = 15;
layout.paddingBottom = 10;
layout.paddingLeft = 15;
```

The _gap_ is the space between items. Let's set the [`gap`](/api-reference/feathers/layout/HorizontalLayout.html#gap) property to `5` pixels:

```actionscript
layout.gap = 5;
```

### Alignment

We can _align_ the items in the layout using the [`horizontalAlign`](/api-reference/feathers/layout/HorizontalLayout.html#horizontalAlign) and [`verticalAlign`](/api-reference/feathers/layout/HorizontalLayout.html#verticalAlign) properties. Horizontal alignment may be used only when the total width of the content (including padding and gap values) is less than or equal to the width of the container that uses the layout. Let's adjust the alignments so that the content will be aligned to the horizontal center and vertical middle:

```actionscript
layout.horizontalAlign = HorizontalAlign.CENTER;
layout.verticalAlign = VerticalAlign.MIDDLE;
```

> The `verticalAlign` property has a special value, named [`VerticalAlign.JUSTIFY`](/api-reference/feathers/layout/VerticalAlign.html#JUSTIFY). When vertical justification is specified, the height of all items in the layout is adjusted to fill the full height of the container.

## Percentage Dimensions

We can pass [`HorizontalLayoutData`](/api-reference/feathers/layout/HorizontalLayoutData.html) to a component's [`layoutData`](/api-reference/feathers/core/FeathersControl.html#layoutData) property to specify the width or height using a percentage value. In the simplest, very common case, this is a percentage of the parent container's width or height.

In the following example, we add two buttons to a container using `HorizontalLayout`. The first button takes up 25% of the container's width, and the second button takes up 75% of the container's width:

```actionscript
var button1:Button = new Button();
button1.label = "1";
var button1LayoutData:HorizontalLayoutData = new HorizontalLayoutData();
button1LayoutData.percentWidth = 25;
button1.layoutData = button1LayoutData;
container.addChild(button1);
 
var button2:Button = new Button();
button2.label = "2";
var button2LayoutData:HorizontalLayoutData = new HorizontalLayoutData();
button2LayoutData.percentWidth = 75;
button2.layoutData = button2LayoutData;
container.addChild(button2);
```

If there are other children in the container with fixed pixel widths, [`percentWidth`](/api-reference/feathers/layout/HorizontalLayoutData.html#percentWidth) will be based on the remaining space in the parent container after the fixed pixel width is subtracted from the container's height.

In the following example, we have two buttons again, but this time, the first button is a fixed 300 pixels wide. Now, the percentages are based on the width of the container _minus 300 pixels_. We want the second button to simply fill the remaining horizontal space in the container, so we set `percentWidth` to `100`:

```actionscript
var button1:Button = new Button();
button1.label = "1";
button1.width = 300;
container.addChild(button1);
 
var button2:Button = new Button();
button2.label = "2";
var button2LayoutData:HorizontalLayoutData = new HorizontalLayoutData();
button2LayoutData.percentWidth = 100;
button2.layoutData = button2LayoutData;
container.addChild(button2);
```

Because the first button's width is 300 pixels, and not a percentage, the second button's width won't be equal to the width of the container, even though `percentWidth` is equal to `100`. Percentages are always calculated after fixed values in pixels are accounted for.

We can also set [`percentHeight`](/api-reference/feathers/layout/HorizontalLayoutData.html#percentHeight) to fill a percentage of the container's height. For `HorizontalLayout`, since the children are positioned one after the other from the left to the right, there are never fixed values to account for vertically.

Let's use the same width values from the previous example, but we'll specify 100% height on the first button:

```actionscript
var button1:Button = new Button();
button1.label = "1";
button1.width = 300;
var button1LayoutData:HorizontalLayoutData = new HorizontalLayoutData();
button1LayoutData.percentHeight = 100;
button1.layoutData = button1LayoutData;
container.addChild(button1);
 
var button2:Button = new Button();
button2.label = "2";
var button2LayoutData:HorizontalLayoutData = new HorizontalLayoutData();
button2LayoutData.percentWidth = 100;
button2.layoutData = button2LayoutData;
container.addChild(button2);
```

Notice that we can mix and match fixed pixel values with percentage values on the same child. The width of the first button is still 300 pixels, but the height is 100%.

As a shortcut, we can optionally specify both `percentWidth` and `percentHeight` in the `HorizontalLayoutData` constructor:

```actionscript
new HorizontalLayoutData( 50, 100 ); //width: 50%, height: 100%
```

The value `NaN` may be used to say that we do not want to use percentage dimensions. For instance, if we wanted a button that is 300 pixels wide and 100% high, like in the earlier example, we might do it like this:

```actionscript
button1.width = 300;
button1.layoutData = new HorizontalLayoutData( NaN, 100 );
```

Percentage dimensions always take precedence, so if we were to pass a numeric value instead of `NaN` as the first parameter of the constructor, then the fixed width of 300 pixels would be ignored.

## Virtual Horizontal Layout

In a [`List`](./list.md), [`Tree`](./tree.md), or [`GroupedList`](./grouped-list.md), the layout may be _virtualized_, meaning that some items in the layout will not actually exist if they are not visible. This helps to improve performance of a scrolling list because only a limited number of item renderers will be created at any given moment. If the list's data provider is very large, a virtual layout is essential, even on desktop computers that have incredible processing power compared to mobile devices.

A virtualized layout will need as estimate about how big a "virtual" item renderer should be. We should set the [`typicalItem`](/api-reference/feathers/controls/List.html#typicalItem) property of the list to have it determine the _typical_ width and height of an item renderer to use as this estimated value. If we don't pass in a typical item, the first item in the data provider is used for this estimate.

By default [`useVirtualLayout`](/api-reference/feathers/layout/HorizontalLayout.html#useVirtualLayout) is `true` for containers that support it. We can disable virtual layouts by setting it to `false`. When a layout is not virtualized, every single item renderer must be created by the component. If a list has thousands of items, this means that thousands of item renderers need to be created. This can lead to significant performance issues, especially on mobile. In general, `useVirtualLayout` should rarely be disabled.

```actionscript
layout.useVirtualLayout = false;
```

The [`LayoutGroup`](./layout-group.md) and [`ScrollContainer`](./scroll-container.md) components never use virtual layouts.

### Variable Item Dimensions in a Virtual Horizontal Layout

By default, a virtualized horizontal layout will assume that all items will have the same width. This restriction helps improve performance, and most lists won't need items with variable widths. However, we can set the [`hasVariableItemDimensions`](/api-reference/feathers/layout/HorizontalLayout.html#hasVariableItemDimensions) property to `true`, if we need our list's item renderers to have different width values. When we do this, the typical item width is used as an estimated width for virtual item renderers, and the real width value for each item renderer is stored as it comes into view, improving the accuracy of the layout over time.

```actionscript
layout.hasVariableItemDimensions = false;
```

## Related Links

- [`feathers.layout.HorizontalLayout` API Documentation](/api-reference/feathers/layout/HorizontalLayout.html)

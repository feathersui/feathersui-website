---
title: How to use the PageIndicator component (Starling version)
layout: "docs.html"
sidebarTitle: PageIndicator
---

The [`PageIndicator`](/api-reference/feathers/controls/PageIndicator.html) component displays a series of symbols, with one being highlighted, to show the user which index among a limited set is selected. Typically, it is paired with a [`List`](./list.md) or a similar component that supports scrolling and paging. The user can tap the `PageIndicator` to either side of the selected symbol to navigate forward or backward.

<figure>
<img src="/learn/as3-starling/images/page-indicator.png" srcset="/learn/as3-starling/images/page-indicator@2x.png 2x" alt="Screenshot of a Feathers PageIndicator component" />
<figcaption>A <code>PageIndicator</code> component skinned with <code>MetalWorksMobileTheme</code></figcaption>
</figure>

- [The Basics](#the-basics)

- [Skinning a `PageIndicator`](#skinning-a-pageindicator)

## The Basics

First, let's create a `PageIndicator` control, give it a number of pages, and add it to the display list.

```actionscript
var pages:PageIndicator = new PageIndicator();
pages.pageCount = 5;
this.addChild( pages );
```

The number of symbols that a page indicator displays is controlled by the [`pageCount`](/api-reference/feathers/controls/PageIndicator.html#pageCount) property. You'll see that the first symbol is automatically selected. If you tap the page indicator on the right side, it will advance to the next index.

If we want to react to the selected index changing, we can add a listener for [`Event.CHANGE`](/api-reference/feathers/controls/PageIndicator.html#event:change):

```actionscript
pages.addEventListener( Event.CHANGE, pageIndicator_changeHandler );
```

The listener might look something like this:

```actionscript
function pageIndicator_changeHandler( event:Event ):void
{
    var pages:PageIndicator = PageIndicator( event.currentTarget );
    trace( "selected index:", pages.selectedIndex );
}
```

## Skinning a `PageIndicator`

You can customize the layout of a page indicator, and you can customize the appearance of a its "normal" and "selected" symbols. For full details about which properties are available, see the [`PageIndicator` API reference](/api-reference/feathers/controls/PageIndicator.html). We'll look at a few of the most common ways of styling a list below.

### Layout

You may set the [`direction`](/api-reference/feathers/controls/PageIndicator.html#direction) of a page indicator to [`Direction.HORIZONTAL`](/api-reference/feathers/layout/Direction.html#HORIZONTAL) or [`Direction.VERTICAL`](/api-reference/feathers/layout/Direction.html#VERTICAL). The default layout direction is horizontal. Below, we change it to vertical:

```actionscript
pages.direction = Direction.VERTICAL;
```

We can set other layout properies, such as the [`gap`](/api-reference/feathers/controls/PageIndicator.html#gap) between symbols, the padding around the edges, and the alignment, both [`horizontalAlign`](/api-reference/feathers/controls/PageIndicator.html#horizontalAlign) and [`verticalAlign`](/api-reference/feathers/controls/PageIndicator.html#verticalAlign):

```actionscript
pages.gap = 4;
pages.paddingTop = 4;
pages.paddingRight = 4;
pages.paddingBottom = 4;
pages.paddingLeft = 10;
pages.horizontalAlign = HorizontalAlign.CENTER;
pages.verticalAlign = VerticalAlign.MIDDLE;
```

### Symbol Skins

The symbols may be created using the [`normalSymbolFactory`](/api-reference/feathers/controls/PageIndicator.html#normalSymbolFactory) and [`selectedSymbolFactory`](/api-reference/feathers/controls/PageIndicator.html#selectedSymbolFactory) for normal and selected symbols, respectively. These functions may return any type of Starling display object. Below, we return Starling Images with different textures for normal and selected states:

```actionscript
pages.normalSymbolFactory = function():DisplayObject
{
    return new Image( normalSymbolTexture );
};
 
pages.selectedSymbolFactory = function():DisplayObject
{
    return new Image( selectedSymbolTexture );
};
```

The page indicator will automatically reuse symbols if the page count or the selected index changes.

## Related Links

- [`feathers.controls.PageIndicator` API Documentation](/api-reference/feathers/controls/PageIndicator.html)

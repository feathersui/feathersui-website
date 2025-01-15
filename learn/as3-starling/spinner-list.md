---
title: How to use the SpinnerList component (AS3/Starling version)
layout: "docs.html"
sidebarTitle: SpinnerList
---

The [`SpinnerList`](/api-reference/feathers/controls/SpinnerList.html) class extends the [`List`](./list.md) component to allow the user to change the selected item by scrolling. Typically, the selected item is positioned in the center of the list, and it may be visually highlighted in some way. A `SpinnerList` will often loop infinitely, repeating its items as the user scrolls.

<figure>
<img src="/learn/as3-starling/images/spinner-list.png" srcset="/learn/as3-starling/images/spinner-list@2x.png 2x" alt="Screenshot of a Feathers SpinnerList component" />
<figcaption>A <code>SpinnerList</code> component skinned with <code>MetalWorksMobileTheme</code></figcaption>
</figure>

- [The Basics](#the-basics)

- [Skinning a `SpinnerList`](#skinning-a-spinnerlist)

## The Basics

First, let's create a `SpinnerList` control and add it to the display list:

```actionscript
var list:SpinnerList = new SpinnerList();
this.addChild( list );
```

Similar to a `List`, we can pass an [`IListCollection`](/api-reference/feathers/data/IListCollection.html) implementation, such as [`ArrayCollection`](/api-reference/feathers/data/ArrayCollection.html) or [`VectorCollection`](/api-reference/feathers/data/VectorCollection.html), to the [`dataProvider`](/api-reference/feathers/controls/List.html#dataProvider) property:

```actionscript
list.dataProvider = new ArrayCollection(
[
    { text: "Milk", thumbnail: textureAtlas.getTexture( "milk" ) },
    { text: "Eggs", thumbnail: textureAtlas.getTexture( "eggs" ) },
    { text: "Bread", thumbnail: textureAtlas.getTexture( "bread" ) },
    { text: "Chicken", thumbnail: textureAtlas.getTexture( "chicken" ) },
]);
```

We'll set up the label and icon in the item renderer the same way too:

```actionscript
list.itemRendererFactory = function():IListItemRenderer
{
    var itemRenderer:DefaultListItemRenderer = new DefaultListItemRenderer();
    itemRenderer.labelField = "text";
    itemRenderer.iconSourceField = "thumbnail";
    return itemRenderer;
};
```

We can listen for selection changes with [`Event.CHANGE`](/api-reference/feathers/controls/List.html#event:change):

```actionscript
list.addEventListener( Event.CHANGE, list_changeHandler );
```

Likewise, we can use the [`selectedIndex`](/api-reference/feathers/controls/List.html#selectedIndex) and [`selectedItem`](/api-reference/feathers/controls/List.html#selectedItem) properties:

```actionscript
list.selectedIndex = 3;
trace( list.selectedItem.text ); //Chicken
```

One way that `SpinnerList` behaves differently is that selection may not be disabled. A regular `List` may be used to display read-only content without selection, but the purpose of `SpinnerList` is to select an item. If you attempt to set the [`isSelectable`](/api-reference/feathers/controls/List.html#isSelectable) property to `false`, a runtime error will be thrown.

## Skinning a `SpinnerList`

A spinner list provides a number of properties to customize its appearance. For full details about what skin and style properties are available, see the [`SpinnerList` API reference](/api-reference/feathers/controls/SpinnerList.html). We'll look at a few of the most common properties below.

> As mentioned above, `SpinnerList` is a subclass of `List`. For more detailed information about the skinning options available to `SpinnerList`, see [How to use the `List` component](./list.md).

### Highlight the selected item

We can add a display object above the selected item to visually highlight it. For instance, we might display a border with a transparency in the center that reveals the selected item. In the following example, we pass in a `starling.display.Image` to the [`selectionOverlaySkin`](/api-reference/feathers/controls/SpinnerList.html#selectionOverlaySkin) property, but the skin may be any Starling display object:

```actionscript
list.selectionOverlaySkin = new Image( texture );
```

This skin will be displayed in the center of the list, positioned either horizontally or vertically, depending on which way the list may be scrolled.

## Related Links

- [`feathers.controls.SpinnerList` API Documentation](/api-reference/feathers/controls/SpinnerList.html)

- [How to Use the `List` Component](./list.md)

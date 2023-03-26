---
title: Creating custom item renderers with the LayoutGroup container (Starling version)
layout: "docs.html"
sidebarTitle: Custom item renderers with LayoutGroup
---

The [`LayoutGroup`](./layout-group.md) container is a simple Feathers component that holds children and provides the ability to specify a layout. This makes an ideal base for any [custom component](./component-properties-methods.md), but it's especially useful for custom item renderers in the [`List`](./list.md), [`DataGrid`](./data-grid.md), [`Tree`](./tree.md) and [`GroupedList`](./grouped-list.md) components.

Feathers includes several subclasses of `LayoutGroup` that are designed specifically to help you get started creating custom item renderers (or "cell" renderers in a `DataGrid`).

- [`LayoutGroupListItemRenderer`](/api-reference/feathers/controls/renderers/LayoutGroupListItemRenderer.html) can be used as an item renderer in a [`List`](./list.md).

- [`LayoutGroupDataGridCellRenderer`](/api-reference/feathers/controls/renderers/LayoutGroupDataGridCellRenderer.html) can be used as a cell renderer in a [`DataGrid`](./data-grid.md).

- [`LayoutGroupTreeItemRenderer`](/api-reference/feathers/controls/renderers/LayoutGroupTreeItemRenderer.html) can be used as an item renderer in a [`Tree`](./tree.md).

- [`LayoutGroupGroupedListItemRenderer`](/api-reference/feathers/controls/renderers/LayoutGroupGroupedListItemRenderer.html) can be used as an item renderer in a [`GroupedList`](./grouped-list.md).

- [`LayoutGroupGroupedListHeaderOrFooterRenderer`](/api-reference/feathers/controls/renderers/LayoutGroupGroupedListHeaderOrFooterRenderer.html) can be used as either a header renderer or a footer renderer in a [`GroupedList`](./grouped-list.md).

All of these classes implement the required functions from their respective interfaces, to save you time on bootstrapping code, and they provide a couple of useful functions that you can override the update the layout and the parse the data without worrying about the lowest level parts of the Feathers component architecture.

Below, we will look at how to create a simple custom item renderer by extending one of these classes. At the very end, the complete source code for a simple custom item renderer will be provided to offer a starting point for other custom item renderers.

> These base classes for item renderers based on `LayoutGroup` provide the easiest way to build custom item renderers in Feathers. However, they have the risk of slightly lower performance. For a more advanced approach at a lower level in the Feathers architecture, please see [Creating custom Item Renderers with `FeathersControl` and `IListItemRenderer`](./feathers-control-item-renderers.md) instead.

## The Simplest Item Renderer

Let's implement a very simple item renderer. It will contain a [`Label`](./label.md) component to display some text and it will be possible to customize some padding around the edges.

When it's finished, we'll want to use it like this:

```actionscript
var list:List = new List();
list.itemRendererFactory = function():IListItemRenderer
{
    var itemRenderer:CustomLayoutGroupItemRenderer = new CustomLayoutGroupItemRenderer();
    itemRenderer.padding = 10;
    return itemRenderer;
};
list.dataProvider = new ArrayCollection(
[
    { label: "One" },
    { label: "Two" },
    { label: "Three" },
    { label: "Four" },
    { label: "Five" },
]);
this.addChild(list);
```

Notice that we set a `padding` property to adjust the layout. The item renderer will get the text for its `Label` sub-component from the `label` property of an item in the data provider.

We could go crazy and add background skins, icons, the ability to customize the which field from the item that the label text comes from, and many more things. We're going to keep it simple for now because this is just a basic example.

For this example, we're creating an item renderer for a [`List`](./list.md) component, but it will be virtually the exact same process to create an item renderer for a `Tree` or `GroupedList` component, or a header renderer or footer renderer for a `GroupedList` component. You simply need to change the class that you extend.

## Implementation Details

Let's start out with the basic framework for our custom item renderer. We want to subclass [`feathers.controls.renderers.LayoutGroupListItemRenderer`](/api-reference/feathers/controls/renderers/LayoutGroupListItemRenderer.html):

```actionscript
package
{
    import feathers.controls.renderers.LayoutGroupListItemRenderer;
 
    public class CustomLayoutGroupItemRenderer extends LayoutGroupListItemRenderer
    {
        public function CustomLayoutGroupItemRenderer()
        {
        }
    }
}
```

This base class implements the [`IListItemRenderer`](/api-reference/feathers/controls/renderers/IListItemRenderer.html) interface, so the [`data`](/api-reference/feathers/controls/renderers/IListItemRenderer.html#data), [`index`](/api-reference/feathers/controls/renderers/IListItemRenderer.html#index), and [`owner`](/api-reference/feathers/controls/renderers/IListItemRenderer.html#owner) properties that the `List` component require on an item renderer are already there for us.

### Adding Children

We want to display a [`Label`](./label.md) component, so let's add a member variable for it:

```actionscript
protected var _label:Label;
```

Next, we want to create a new instance and add it as a child. We need to override `initialize()` function:

```actionscript
override protected function initialize():void
{
    this._label = new Label();
    this.addChild(this._label);
}
```

The `initialize()` function is called once the very first time that the component is added to the stage. It's a good place to create sub-components and other children and possibly to do things like add event listeners that you don't intend to remove until the component is disposed. In general, it is better to use `initialize()` for this sort of thing instead of the constructor.

> For more information about the `initialize()` function and other parts of the Feathers architecture, see [Anatomy of a Feathers Component](./component-properties-methods.md).

### Parsing the data

Next, we want to access the item renderer's [`data`](/api-reference/feathers/controls/renderers/LayoutGroupListItemRenderer.html#data) property and display something in our `Label` component. Override the convenient [`commitData()`](</api-reference/feathers/controls/renderers/LayoutGroupListItemRenderer.html#commitData()>) function to do this:

```actionscript
override protected function commitData():void
{
    if(this._data)
    {
        this._label.text = this._data.label;
    }
    else
    {
        this._label.text = null;
    }
}
```

For this particular item renderer, we're requiring all items in the data provider to have a `label` property that holds the text to display in the `Label` component. If we were building a generic item renderer, ideally, we might like to make that field name customizable, like the [`labelField`](/api-reference/feathers/controls/renderers/DefaultListItemRenderer.html#labelField) property in [`DefaultListItemRenderer`](./default-item-renderers.md). However, let's keep it simple for this example.

Don't forget to handle the case where the data property is `null`. You don't want any runtime errors causing you trouble.

### Adjusting the layout

Let's handle how the `Label` sub-component will be positioned and sized within the item renderer. We generally want to use a fluid layout that can handle changes in the dimensions of the item renderer (which are ultimately controlled by the parent `List` component). [`AnchorLayout`](./anchor-layout.md) is ideal for this situation.

At the beginning of the `initialize()` function, let's create our `AnchorLayout` instance:

```actionscript
override protected function initialize():void
{
    this.layout = new AnchorLayout();
```

Now, in order to have the `AnchorLayout` control the `Label` component's positioning and dimensions, we need to pass an [`AnchorLayoutData`](/api-reference/feathers/layout/AnchorLayoutData.html) instance to the `Label` component. Let's do that next:

```actionscript
override protected function initialize():void
{
    this.layout = new AnchorLayout();
 
    var labelLayoutData:AnchorLayoutData = new AnchorLayoutData();
    labelLayoutData.top = 0;
    labelLayoutData.right = 0;
    labelLayoutData.bottom = 0;
    labelLayoutData.left = 0;
 
    this._label = new Label();
    this._label.layoutData = this._labelLayoutData;
```

We've constrained the `Label` component to all four edges of the item renderer. If the item renderer's width grows or shrinks, the `Label` component will be resized appropriately.

With that finished, we now have a fully working item renderer. However, we probably don't want the `Label` component to fill the item renderer right up to the edges. We probably want a little space around the edge to allow the labels to breathe when they appear next to each other in the list. Let's add a `padding` property to customize this spacing around the edges:

```actionscript
protected var _padding:Number = 0;
 
public function get padding():Number
{
    return this._padding;
}
 
public function set padding(value:Number):void
{
    if(this._padding == value)
    {
        return;
    }
    this._padding = value;
    this.invalidate(INVALIDATION_FLAG_LAYOUT);
}
```

When we change a property that requires the component to change something about its appearance, we need to call the [`invalidate()`](</api-reference/feathers/core/FeathersControl.html#invalidate()>) function. This will tell the component that it needs to update its appearance before the next time that Starling renders to the screen. We'll explain that constant, `INVALIDATION_FLAG_LAYOUT`, in a moment.

> For more information about the `invalidate()` function and other parts of the Feathers architecture, see [Anatomy of a Feathers Component](./component-properties-methods.md).

The base class offers a [`preLayout()`](</api-reference/feathers/controls/renderers/LayoutGroupListItemRenderer.html#preLayout()>) function that you can override to update layout properties on children _before_ the layout code is run. We're going to update the `Label` component's `AnchorLayoutData` in this function:

```actionscript
override protected function preLayout():void
{
    var labelLayoutData:AnchorLayoutData = AnchorLayoutData(this._label.layoutData);
    labelLayoutData.top = this._padding;
    labelLayoutData.right = this._padding;
    labelLayoutData.bottom = this._padding;
    labelLayoutData.left = this._padding;
}
```

If we had additional children in the item renderer, we'd adjust their `layoutData` properties in this function too. With `AnchorLayoutData`, we're not limited to constraining children to the edges of their parent container. We can also position those children relative to the center of the container, both horizontally and vertical. We can even position children relative to each other too! For complete details, see [How to use `AnchorLayout` in Feathers containers](./anchor-layout.md).

The base class also offers a [`postLayout()`](</api-reference/feathers/controls/renderers/LayoutGroupListItemRenderer.html#postLayout()>) function that can be overridden to update anything _after_ the layout code has run. We won't be using that one here, though.

## Source Code

The complete source code for the `CustomLayoutGroupItemRenderer` class is included below:

```actionscript
package
{
    import feathers.controls.Label;
    import feathers.controls.renderers.LayoutGroupListItemRenderer;
    import feathers.layout.AnchorLayout;
    import feathers.layout.AnchorLayoutData;
 
    public class CustomLayoutGroupItemRenderer extends LayoutGroupListItemRenderer
    {
        public function CustomLayoutGroupItemRenderer()
        {
        }
 
        protected var _label:Label;
 
        protected var _padding:Number = 0;
 
        public function get padding():Number
        {
            return this._padding;
        }
 
        public function set padding(value:Number):void
        {
            if(this._padding == value)
            {
                return;
            }
            this._padding = value;
            this.invalidate(INVALIDATION_FLAG_LAYOUT);
        }
 
        override protected function initialize():void
        {
            this.layout = new AnchorLayout();
 
            var labelLayoutData:AnchorLayoutData = new AnchorLayoutData();
            labelLayoutData.top = 0;
            labelLayoutData.right = 0;
            labelLayoutData.bottom = 0;
            labelLayoutData.left = 0;
 
            this._label = new Label();
            this._label.layoutData = labelLayoutData;
            this.addChild(this._label);
        }
 
        override protected function commitData():void
        {
            if(this._data && this._owner)
            {
                this._label.text = this._data.label;
            }
            else
            {
                this._label.text = null;
            }
        }
 
        override protected function preLayout():void
        {
            var labelLayoutData:AnchorLayoutData = AnchorLayoutData(this._label.layoutData);
            labelLayoutData.top = this._padding;
            labelLayoutData.right = this._padding;
            labelLayoutData.bottom = this._padding;
            labelLayoutData.left = this._padding;
        }
    }
}
```

## Next Steps

Looking to do more with your custom item renderer? Check out the [Feathers Cookbook](./cookbook/index.,d) for "recipes" that show you how to implement typical features in custom item renderers and in other Feathers UI components.

## Related Links

- [Introduction to Custom Item Renderers](./item-renderers.md)

- [Feathers Cookbook: Recipes for Custom Item Renderers](./cookbook/index.md#custom-item-renderers)

- [`feathers.controls.renderers.LayoutGroupListItemRenderer` API Documentation](/api-reference/feathers/controls/renderers/LayoutGroupListItemRenderer.html)

- [`feathers.controls.renderers.LayoutGroupDataGridCellRenderer` API Documentation](/api-reference/feathers/controls/renderers/LayoutGroupDataGridCellRenderer.html)

- [`feathers.controls.renderers.LayoutGroupTreeItemRenderer` API Documentation](/api-reference/feathers/controls/renderers/LayoutGroupTreeItemRenderer.html)

- [`feathers.controls.renderers.LayoutGroupGroupedListItemRenderer` API Documentation](/api-reference/feathers/controls/renderers/LayoutGroupGroupedListItemRenderer.html)

- [`feathers.controls.renderers.LayoutGroupGroupedListHeaderOrFooterRenderer` API Documentation](/api-reference/feathers/controls/renderers/LayoutGroupGroupedListHeaderOrFooterRenderer.html)

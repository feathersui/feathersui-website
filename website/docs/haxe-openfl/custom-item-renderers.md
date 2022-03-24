---
title: Create custom item renderers for Feathers UI data containers
sidebar_label: Custom item renderers
---

By default, any container that renders a [data collection](./data-collections.md) (such as [`ListView`](./list-view.md) or [`GridView`](./grid-view.md)) uses the [`ItemRenderer`](./item-renderer.md) class to display each item from its collection. However, translating from design to code sometimes requires more advanced capabilities for layout and styling than the basic [`ItemRenderer`](./item-renderer.md) can provide. In these situations, a developer can create a _custom item renderer_ for the data container.

Generally, the easiest option for creating a custom item renderer is using [`LayoutGroupItemRenderer`](./layout-group-item-renderer.md). This component provides the same background skins with multiple states as [`ItemRenderer`](./item-renderer.md), but it is based on the [`LayoutGroup`](./layout-group.md) component, which allows any number of children to be added with support for [layouts](./layouts-and-containers.md).

However, any Feathers UI component may be used to create a custom item renderer. Want to use a [`Check`](./check.md) or a [`PopUpListView`](./pop-up-list-view.md)? No problem!

## Create in a function

Any Feathers UI component may be used as a custom item renderer by instantiating it inside a function passed to [`DisplayObjectRecycler.withFunction()`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html#withFunction).

The example below creates a [`LayoutGroupItemRenderer`](./layout-group-item-renderer.md) with a [`Label`](./label.md) subcomponent to display some text.

```haxe
var recycler = DisplayObjectRecycler.withFunction(() -> {
    var itemRenderer = new LayoutGroupItemRenderer();
    var label = new Label();
    label.name = "label";
    itemRenderer.addChild(label);
    return itemRenderer;
});
recycler.update = (itemRenderer:LayoutGroupListItemRenderer, state:ListViewItemState) -> {
    var label = cast(itemRenderer.getChildByName("label"), Label);
    label.text = state.data.title;
});
listView.itemRendererRecycler = recycler;
```

## Create a subclass

It's also possible to extend any Feathers UI component to create a custom item renderer. The example below creates a subclass of [`LayoutGroupItemRenderer`](./layout-group-item-renderer.md) that works similarly to the custom item renderer in the previous example.

```haxe
class MyCustomItemRenderer extends LayoutGroupItemRenderer {
    public function new() {
        super();
    }

    private var label:Label;

    override private function initialize():Void {
        super.initialize();
        label = new Label();
        addChild(label);
    }

    override private function update():Void {
        var dataInvalid = isInvalid(DATA);
        if (dataInvalid) {
            if (data != null) {
                label.text = data.title;
            }
            else {
                label.text = null;
            }
        }
        super.update();
    }
}
```

Pass the subclass to [`DisplayObjectRecycler.withClass()`](https://api.feathersui.com/current/feathers/utils/DisplayObjectRecycler.html#withClass) to use it with a data container.

```haxe
listView.itemRendererRecycler = DisplayObjectRecycler.withClass(MyCustomItemRenderer);
```

For more details about managing the custom item renderer's data within a subclass of another component, see [Class-based custom item renderers](./class-based-custom-item-renderers.md).

## Should I use a function or class?

Using a function or class largely depends on developer preference, and also how complicated the custom item renderer implementation needs to be. A function works best for simple custom item renderers with a small number of sub-components and not much in the way of custom user interaction. A subclass is better for a custom item renderer that might need event listeners, a lot of children, or if it might change state based on data changes or user interaction.

## Related Links

- [How to use the `LayoutGroupItemRenderer` component](./layout-group-item-renderer.md)
- [Class-based custom item renderers](./class-based-custom-item-renderers.md)
- [How to use the `GridView` component](./grid-view.md)
- [How to use the `GroupListView` component](./group-list-view.md)
- [How to use the `ListView` component](./list-view.md)
- [How to use the `TreeView` component](./tree-view.md)
- [How to use the `TreeGridView` component](./tree-grid-view.md)

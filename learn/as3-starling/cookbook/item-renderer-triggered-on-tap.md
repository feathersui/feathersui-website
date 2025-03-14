---
title: How to dispatch a triggered event from a custom item renderer (AS3/Starling version)
layout: "docs.html"
---

A [custom item renderer](../item-renderers.md) should dispatch [`Event.TRIGGERED`](https://doc.starling-framework.org/core/starling/events/Event.html#TRIGGERED) when it is tapped or clicked, similar to a [`Button`](../button.md).

Using the [`TapToTrigger`](/api-reference/feathers/utils/touch/TapToTrigger.html) class, it's easy to dispatch `Event.TRIGGERED` on tap or click:

```actionscript
public class CustomItemRenderer extends LayoutGroupListItemRenderer
{
    public function CustomItemRenderer()
    {
        super();
        this._trigger = new TapToTrigger(this);
    }

    private var _trigger:TapToTrigger;
}
```

That's it! The `TouchEvent.TOUCH` listeners will be added automatically, and your item renderer will dispatch `Event.TRIGGERED` like a button.

You should also [learn how to use `TapToSelect`](./item-renderer-select-on-tap.md) to change `isSelected` and dispatch `Event.CHANGE` when tapped or clicked.

## Related Links

- [Feathers Cookbook (Starling version)](./index.md)
- [Introduction to Custom Item Renderers](../item-renderers.md)
- [Feathers Cookbook: Selecting a custom item renderer on tap or click](./item-renderer-select-on-tap.md)
- [Feathers Cookbook: Dispatching a long press event from a custom item renderer](./item-renderer-long-press.md)

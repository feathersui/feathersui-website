---
title: How to add a background skin to a custom item renderer based on FeathersControl and IListItemRenderer (AS3/Starling version)
layout: "docs.html"
---

The example [custom item renderer with `FeathersControl` and `IListItemRenderer`](../feathers-control-item-renderers.md) offers an easy-to-understand foundation to build upon. It's pretty limited in features, though. For instance, you may want some kind of background skin.

> If you've created a [custom item renderer based on `LayoutGroup`](../layout-group-item-renderers.md), you don't need to implement the background skin yourself. You can simply set the [`backgroundSkin`](/api-reference/feathers/controls/LayoutGroup.html#backgroundSkin) property.

## A backgroundSkin getter and setter

Let's start by adding a `backgroundSkin` property to our custom item renderer class:

```actionscript
private var _backgroundSkin:DisplayObject;
 
public function get backgroundSkin():DisplayObject
{
    return this._backgroundSkin;
}
 
public function set backgroundSkin(value:DisplayObject):void
{
    if(this._backgroundSkin == value)
    {
        return;
    }
    if(this._backgroundSkin)
    {
        this.removeChild(this._backgroundSkin, true);
    }
    this._backgroundSkin = value;
    if(this._backgroundSkin)
    {
        this.addChildAt(this._backgroundSkin, 0);
    }
    this.invalidate(INVALIDATION_FLAG_SKIN);
}
```

Notice that if an old background skin already exists, we remove it. Then, if the new background skin isn't `null`, we add it as a child at index `0`. This will ensure that the background skin is always at the bottom.

### Resizing the background skin

As you may recall, the example custom item renderer based on `FeathersControl` and `IListItemRenderer` had a `layoutChildren()` function. Let's simply set the width and height of the background skin in there.

```actionscript
protected function layoutChildren():void
{
    if(this._backgroundSkin)
    {
        this._backgroundSkin.width = this.actualWidth;
        this._backgroundSkin.height = this.actualHeight;
    }
 
    // position and resize other children here
}
```

You probably also want to include the background skin with the measurement calculations inside the `autoSizeIfNeeded()` function:

```actionscript
var newWidth:Number = this.explicitWidth;
if(needsWidth)
{
    newWidth = this._label.width + 2 * this._padding;
    var backgroundWidth:Number = this._backgroundSkin.width;
    if(backgroundWidth > newWidth)
    {
        newWidth = backgroundWidth;
    }
}
var newHeight:Number = this.explicitHeight;
if(needsHeight)
{
    newHeight = this._label.height + 2 * this._padding;
    var backgroundHeight:Number = this._backgroundSkin.height;
    if(backgroundHeight > newWidth)
    {
        newWidth = backgroundHeight;
    }
}
```

Instead of always using the current dimensions of the background skin for measurement, we could save the dimensions of the background skin in member variables when the `backgroundSkin` setter is called. Let's say that we call the variables `originalBackgroundSkinWidth` and `originalBackgroundSkinHeight`. This will allow us to always measure using the original dimensions of the background skin instead of basing the measurement on the `this._backgroundSkin.width` and `this._backgroundSkin.height` values that may get changed in `layoutChildren()`.

## Multiple background skins

The example code above adds only a single background skin. What if you want to display a different background skin for each touch phase?

- [Cookbook: How to support multiple touch states in a custom item renderer](./item-renderer-touch-states.md)

## Related Links

- [Feathers Cookbook (Starling version)](./index.md)
- [Introduction to Custom Item Renderers](../item-renderers.md)

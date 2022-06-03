---
title: Create custom layouts for Feathers UI containers
sidebar_label: Custom layouts
---

Feathers UI provides a number of built-in [layouts](./layouts-and-containers.md) for containers, including [`HorizontalLayout`](./horizontal-layout.md), [`VerticalLayout`](./vertical-layout.md) and [`AnchorLayout`](./anchor-layout.md). However, if these layouts don't quite fit a project's needs, a developer can create a custom layout by implementing the [`ILayout`](https://api.feathersui.com/current/feathers/layout/ILayout.html) interface. This interface provides the most basic API required to use a custom layout with a Feathers UI container, such as [`LayoutGroup`](./layout-group.md) or [`ScrollContainer`](./scroll-container.md).

## A Simple Example Layout

The complete source code for a custom layout appears below. This `SimpleVerticalLayout` class is similar to [`VerticalLayout`](./vertical-layout.md), but it doesn't offer as many options as the built-in version. It positions items from top to bottom, aligned to the top and left. It has one customizable property, the `gap` between items, measured in pixels.

```haxe
class SimpleVerticalLayout extends EventDispatcher implements ILayout {
    public function new() {
        super();
    }

    public var gap(default, set):Float = 0.0;

    private function set_gap(value:Float):Float {
        if (gap == value) {
            return gap;
        }
        gap = value;
        dispatchEvent(new Event(Event.CHANGE));
        return gap;
    }

    public function layout(items:Array<DisplayObject>, measurements:Measurements, ?result:LayoutBoundsResult):LayoutBoundsResult {
        // the starting y position
        var positionY = 0.0;
        // the max width of the items will be used to calculate bounds
        var maxItemWidth = 0.0;

        // loop through the items and position them
        for (item in items) {
            // skip items that aren't included in the layout
            if (Std.isOfType(item, ILayoutObject)) {
                var layoutItem = cast(item, ILayoutObject);
                if (!layoutItem.includeInLayout) {
                    continue;
                }
            }

            // validate Feathers UI components to get accurate measurements
            if (Std.isOfType(item, IValidating)) {
                var uiControl = cast(item, IValidating);
                uiControl.validateNow();
            }

            // position the item
            item.x = 0.0;
            item.y = positionY;

            // calculate the y position for the next item
            positionY += item.height + gap;

            // save the max width to calculate the bounds below
            maxItemWidth = Math.max(maxItemWidth, item.width);
        }

        // if the view port width or height is provided, use the provided value.
        // otherwise, calculate them based on the size of the content.
        var viewPortWidth = measurements.width;
        if (viewPortWidth == null) {
            var minWidth = measurements.minWidth;
            if (minWidth == null) {
                minWidth = 0.0;
            }
            var maxWidth = measurements.maxWidth;
            if (maxWidth == null) {
                maxWidth = Math.POSITIVE_INFINITY;
            }
            // the view port width is calculated from the maximum item width
            viewPortWidth = Math.max(minWidth, Math.min(maxWidth, maxItemWidth));
        }

        var totalContentHeight = positionY - gap;
        var viewPortHeight = measurements.height;
        if (viewPortHeight == null) {
            var minHeight = measurements.minHeight;
            if (minHeight == null) {
                minHeight = 0.0;
            }
            var maxHeight = measurements.maxHeight;
            if (maxHeight == null) {
                maxHeight = Math.POSITIVE_INFINITY;
            }
            // the view port height is calculated from the sum of all item
            // heights plus the gaps between items.
            viewPortHeight = Math.max(minHeight, Math.min(maxHeight, totalContentHeight));
        }

        // prepare the result object and return it
        if (result == null) {
            result = new LayoutBoundsResult();
        }
        result.viewPortWidth = viewPortWidth;
        result.viewPortHeight = viewPortHeight;
        // it's okay if the content width and height are larger than the
        // view port width and height. in some containers, that will simply
        // enable scrolling.
        result.contentWidth = Math.max(maxItemWidth, viewPortWidth);
        result.contentHeight = Math.max(totalContentHeight, viewPortHeight);
        return result;
    }
}
```

## The `ILayout` interface

The `SimpleVerticalLayout` class implements the [`feathers.layout.ILayout`](https://api.feathersui.com/current/feathers/layout/ILayout.html) interface. This interface is very simple, with a [`layout()`](https://api.feathersui.com/current/feathers/layout/ILayout.html#layout) method.

`SimpleVerticalLayout` also extends the standard [`openfl.events.EventDispatcher`](https://api.openfl.org/openfl/events/EventDispatcher.html) class because the [`ILayout`](https://api.feathersui.com/current/feathers/layout/ILayout.html) interface specifies that layouts should dispatch `Event.CHANGE` when their properties change. This will allow containers that use layouts to know when they need to call [`layout()`](https://api.feathersui.com/current/feathers/layout/ILayout.html#layout) method again to reposition their children.

## The `layout()` method

The [`layout()`](https://api.feathersui.com/current/feathers/layout/ILayout.html#layout) method has the following function signature:

```haxe
function layout(items:Array<DisplayObject>, measurements:Measurements, ?result:LayoutBoundsResult):LayoutBoundsResult
```

This method's main purpose is to position and size the container's children. In `SimpleVerticalLayout`, it sets the `y` position of all children. Additionally, if the final dimensions of the container's view port aren't specified, the [`layout()`](https://api.feathersui.com/current/feathers/layout/ILayout.html#layout) method will also calculate those values and return them in a [`LayoutBoundsResult`](https://api.feathersui.com/current/feathers/layout/LayoutBoundsResult.html) object.

### Looping through children

The first argument is an `Array<DisplayObject>` that contains the children in the container. An [`ILayout`](https://api.feathersui.com/current/feathers/layout/ILayout.html) implementation can loop through these items and transform them as needed. The loop from the `SimpleVerticalLayout` class appears again below.

```haxe
for (item in items) {
    // skip items that aren't included in the layout
    if (Std.isOfType(item, ILayoutObject)) {
        var layoutItem = cast(item, ILayoutObject);
        if (!layoutItem.includeInLayout) {
            continue;
        }
    }

    // validate Feathers UI components to get accurate measurements
    if (Std.isOfType(item, IValidating)) {
        var uiControl = cast(item, IValidating);
        uiControl.validateNow();
    }

    // position the item
    item.x = 0.0;
    item.y = positionY;

    // calculate the y position for the next item
    positionY += item.height + gap;

    // save the max width to calculate the bounds below
    maxItemWidth = Math.max(maxItemWidth, item.width);
}
```

At the start of the loop, there are two checks for the data type of each child, using `Std.isOfType()`.

The first check determines if the child implements the [`ILayoutObject`](https://api.feathersui.com/current/feathers/layout/ILayoutObject.html) interface. If the [`includeInLayout`](https://api.feathersui.com/current/feathers/layout/ILayoutObject.html#includeInLayout) property of an [`ILayoutObject`](https://api.feathersui.com/current/feathers/layout/ILayoutObject.html) is `false`, that child won't affect the measurement of the parent container and the layout won't position, resize, or otherwise transform the display object. This property makes it possible to exclude a child from a layout to position it manually.

The second check determines if the child implements the [`IValidating`](https://api.feathersui.com/current/feathers/core/IValidating.html) interface. If the child is invalid, its `width` and `height` properties may not have been calculated yet, or they may return older values from a previous validation. Calling [`validateNow()`](https://api.feathersui.com/current/feathers/core/IValidating.html#validateNow) will force an invalid child to validate immediately to ensure that the `width` and `height` properties return the correct measurements.

> For more information about the Feathers UI validation system, please refer to [UI Component Lifecycle](./ui-component-lifecycle.md).

After checking for these special cases, the main part of the loop is next. This is where `SimpleVerticalLayout` sets the `y` position of each child. If this were a more advanced layout, it might perform other transformations, like setting the width or height, or even rotating the child. It is also keeping track of maximum width of each child, which will be used later to calculate the final view port width, if necessary.

Finally, the loop checks if the curernt child's widht is larger than any of the child widths that we've already encountered. We'll use this maximum width value later.

### `Measurements`

The second argument of the [`layout()`](https://api.feathersui.com/current/feathers/layout/ILayout.html#layout) method is a [`Measurements`](https://api.feathersui.com/current/feathers/layout/Measurements.html) object containing any bounds of the container that were already set explicitly. This includes the container's `width`, `height`, `minWidth`, `minHeight`, `maxWidth`, and `maxHeight`. However, any of these properties may be `null`, which means that these values were not set explicitly, and they need to be calculated by the layout.

```haxe
// if the view port width or height is provided, use the provided value.
// otherwise, calculate them based on the size of the content.
var viewPortWidth = measurements.width;
if (viewPortWidth == null) {
    var minWidth = measurements.minWidth;
    if (minWidth == null) {
        minWidth = 0.0;
    }
    var maxWidth = measurements.maxWidth;
    if (maxWidth == null) {
        maxWidth = Math.POSITIVE_INFINITY;
    }
    // the view port width is calculated from the maximum item width
    viewPortWidth = Math.max(minWidth, Math.min(maxWidth, maxItemWidth));
}
```

If the width of the view port needs to be calculated, use the maximum item width that was saved in the loop above. Be sure to account for `minWidth` and `maxWidth`, if they are not `null`.

```haxe
var totalContentHeight = positionY - gap;
var viewPortHeight = measurements.height;
if (viewPortHeight == null) {
    var minHeight = measurements.minHeight;
    if (minHeight == null) {
        minHeight = 0.0;
    }
    var maxHeight = measurements.maxHeight;
    if (maxHeight == null) {
        maxHeight = Math.POSITIVE_INFINITY;
    }
    // the view port height is calculated from the sum of all item
    // heights plus the gaps between items.
    viewPortHeight = Math.max(minHeight, Math.min(maxHeight, totalContentHeight));
}
```

If the height of the view port needs to be calculated, use the last value of the `positionY` variable after the loop completes. Be sure to account for `minHeight` and `maxHeight`, if they are not `null`.

### `LayoutBoundsResult`

The final argument is an optional [`LayoutBoundsResult`](https://api.feathersui.com/current/feathers/layout/LayoutBoundsResult.html) object. This object is used to return the final view port dimensions, and the dimensions of the content within the view port, so that the container may use them. The content may be larger than the view port, and a component like [`ScrollContainer`](./scroll-bar.md) will use that to determine if it needs to scroll.

> This [`LayoutBoundsResult`](https://api.feathersui.com/current/feathers/layout/LayoutBoundsResult.html) argument actually becomes the return value of the [`layout()`](https://api.feathersui.com/current/feathers/layout/ILayout.html#layout) method. By passing in (and reusing) a pre-created [`LayoutBoundsResult`](https://api.feathersui.com/current/feathers/layout/LayoutBoundsResult.html) object, Feathers UI can avoid unnecessary garbage collection. It is optional, though, so the layout is expected to create a new instance of [`LayoutBoundsResult`](https://api.feathersui.com/current/feathers/layout/LayoutBoundsResult.html), if the argument is `null`.

```haxe
// prepare the result object and return it
if (result == null) {
    result = new LayoutBoundsResult();
}
result.viewPortWidth = viewPortWidth;
result.viewPortHeight = viewPortHeight;
// it's okay if the content width and height are larger than the
// view port width and height. in some containers, that will simply
// enable scrolling.
result.contentWidth = Math.max(maxItemWidth, viewPortWidth);
result.contentHeight = Math.max(totalContentHeight, viewPortHeight);
return result;
```

The [`viewPortWidth`](https://api.feathersui.com/current/feathers/layout/LayoutBoundsResult.html#viewPortWidth) and [`viewPortHeight`](https://api.feathersui.com/current/feathers/layout/LayoutBoundsResult.html#viewPortHeight) properties specify the calculated width and height of the container's view port. If the [`Measurements`](https://api.feathersui.com/current/feathers/layout/Measurements.html) object specifies `width` and `height` values that are not `null`, those existing values should _always_ be passed to [`viewPortWidth`](https://api.feathersui.com/current/feathers/layout/LayoutBoundsResult.html#viewPortWidth) and [`viewPortHeight`](https://api.feathersui.com/current/feathers/layout/LayoutBoundsResult.html#viewPortHeight), without changes. If they are `null`, then these values must be calculated by the layout (which we did in the previous section).

The [`contentWidth`](https://api.feathersui.com/current/feathers/layout/LayoutBoundsResult.html#contentWidth) and [`contentHeight`](https://api.feathersui.com/current/feathers/layout/LayoutBoundsResult.html#contentHeight) properties specify the total bounds of the content. These values may be larger than [`viewPortWidth`](https://api.feathersui.com/current/feathers/layout/LayoutBoundsResult.html#viewPortWidth) and [`viewPortHeight`](https://api.feathersui.com/current/feathers/layout/LayoutBoundsResult.html#viewPortHeight), which will cause some containers to enable scrolling.

> Generally, developers should strive to ensure that [`contentWidth`](https://api.feathersui.com/current/feathers/layout/LayoutBoundsResult.html#contentWidth) is smaller than [`viewPortWidth`](https://api.feathersui.com/current/feathers/layout/LayoutBoundsResult.html#viewPortWidth), and [`contentHeight`](https://api.feathersui.com/current/feathers/layout/LayoutBoundsResult.html#contentHeight) is not smaller than [`viewPortHeight`](https://api.feathersui.com/current/feathers/layout/LayoutBoundsResult.html#viewPortHeight). It's not strictly required, but it's a good practice.

## Related Links

- [Introduction to layouts and containers](./layouts-and-containers.md)

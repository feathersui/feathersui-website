---
title: How to use the Line sparkline type
layout: "docs.html"
sidebarTitle: Line Sparkline
---

The [`SparklineType.Line`](https://api.feathersui.com/premium-components/sparklines/com/feathersui/sparklines/SparklineType.html#Line) enum value is used to configure the [`Sparkline`](https://api.feathersui.com/premium-components/sparklines/com/feathersui/sparklines/Sparkline.html) component to display the data as a series of lines.

> ⚠️ **Beta Notice**: This component is still quite new. Some APIs may go through minor changes in upcoming releases.

## The Basics

Create a [`Sparkline`](https://api.feathersui.com/premium-components/sparklines/com/feathersui/sparklines/Sparkline.html) control, set its type to [`SparklineType.Line`](https://api.feathersui.com/premium-components/sparklines/com/feathersui/sparklines/SparklineType.html#Line), and add it to the [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var sparkline = new Sparkline();
sparkline.type = Line;
addChild(sparkline);
```

## Data Provider

To render some data in the sparkline, pass in a [collection](../data-collections.md) that contains separate value for each point on the line.

```haxe
sparkline.dataProvider = new ArrayCollection([
    5.0, 2.1, 4.0, 3.2, 6.0, 5.4, 2.0, 5.0, 3.6, 2.5
]);
```

If the data provider contains only numeric values, they will represent the vertical position along the y-axis, and the points on the line will be evenly spaced horizontally along the x-axis.

A sparkline's data provider may contain items of any type, including [classe instances](https://haxe.org/manual/types-class-instance.html) and [anonymous structures](https://haxe.org/manual/types-anonymous-structure.html). In the next example, the data provider is populated with [`openfl.geom.Point`](https://api.openfl.org/openfl/geom/Point.html) objects.

```haxe
sparkline.dataProvider = new ArrayCollection([
    new Point(0.0, 5.0), new Point(1.2, 2.1), new Point(1.8, 4.0),
    new Point(3.4, 3.2), new Point(4.8, 6.0), new Point(5.1, 5.4),
    new Point(5.6, 2.0), new Point(7.0, 5.0), new Point(7.5, 3.6),
    new Point(10.0, 2.5)
]);
```

When using complex values, set the [`itemToX()`](https://api.feathersui.com/premium-components/sparklines/com/feathersui/sparklines/Sparkline.html#itemToX) and [`itemToY()`](https://api.feathersui.com/premium-components/sparklines/com/feathersui/sparklines/Sparkline.html#itemToY) methods to get the value from each item to determine its position along the x and y axes.

```haxe
sparkline.itemToX = function(point:Point):Float -> {
    return point.x;
}
sparkline.itemToY = function(point:Point):Float {
    return point.y;
}
```

## Normal Range

```haxe
sparkline.normalRangeMinY = 3.0;
sparkline.normalRangeMaxY = 4.5;
```

## Customizing Points

A number of properties may be used to change the appearance of points on the line.

### Showing and Hiding Points

To show all points, set the [`showPoints`](https://api.feathersui.com/premium-components/sparklines/com/feathersui/sparklines/Sparkline.html#showPoints) property to [`SparklinePointDisplayMode.All`](https://api.feathersui.com/premium-components/sparklines/com/feathersui/sparklines/SparklinePointDisplayMode.html#All).

```haxe
sparkline.showPoints = All;
```

To hide all points, set the [`showPoints`](https://api.feathersui.com/premium-components/sparklines/com/feathersui/sparklines/Sparkline.html#showPoints) property to [`SparklinePointDisplayMode.All`](https://api.feathersui.com/premium-components/sparklines/com/feathersui/sparklines/SparklinePointDisplayMode.html#None).

```haxe
sparkline.showPoints = None;
```

To show only points with customized colors, set the [`showPoints`](https://api.feathersui.com/premium-components/sparklines/com/feathersui/sparklines/Sparkline.html#showPoints) property to [`SparklinePointDisplayMode.Color`](https://api.feathersui.com/premium-components/sparklines/com/feathersui/sparklines/SparklinePointDisplayMode.html#Color).

```haxe
sparkline.showPoints = Color;
```

### Point Size

To customize the size of the points that are shown, set the [`pointRadius`](https://api.feathersui.com/premium-components/sparklines/com/feathersui/sparklines/Sparkline.html#pointRadius) property.

```haxe
sparkline.pointRadius = 4.0;
```

### Point Colors

The [`maxColor`](https://api.feathersui.com/premium-components/sparklines/com/feathersui/sparklines/Sparkline.html#maxColor) and [`minColor`](https://api.feathersui.com/premium-components/sparklines/com/feathersui/sparklines/Sparkline.html#minColor) properties may optionally customize the color of the points that have the highest and lowest values compared to all other items in the data provider.

```haxe
sparkline.maxColor = 0x00cc00;
sparkline.minColor = 0xcc0000;
```

Set the [`itemToColor()`](https://api.feathersui.com/premium-components/sparklines/com/feathersui/sparklines/Sparkline.html#itemToColor) method to customize the color of each individual point.

```haxe
final colors:Array<UInt> = [
    0x881177, 0xaa3355, 0xcc6666, 0xee9944, 0xeedd00, 0x99dd55,
    0x44dd88, 0x22ccbb, 0x00bbcc, 0x0099cc, 0x3366bb, 0x663399
];
sparkline.itemToColor = function(item:Float, index:Int):Null<UInt> {
    return colors[index % colors.length];
}
```

## Related Links

- [`com.feathersui.sparklines.Sparkline` API Documentation](https://api.feathersui.com/premium-components/sparklines/com/feathersui/sparklines/Sparkline.html)
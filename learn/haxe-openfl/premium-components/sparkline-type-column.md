---
title: How to use the Column sparkline type
layout: "docs.html"
sidebarTitle: Column Sparkline
---

The [`SparklineType.Column`](https://api.feathersui.com/premium-components/sparklines/com/feathersui/sparklines/SparklineType.html#Column) enum value is used to configure the [`Sparkline`](https://api.feathersui.com/premium-components/sparklines/com/feathersui/sparklines/Sparkline.html) component to display the data as a series of vertical columns or bars, arranged horizontally.

> ⚠️ **Beta Notice**: This component is still quite new. Some APIs may go through minor changes in upcoming releases.

## The Basics

Create a [`Sparkline`](https://api.feathersui.com/premium-components/sparklines/com/feathersui/sparklines/Sparkline.html) control, set its type to [`SparklineType.Column`](https://api.feathersui.com/premium-components/sparklines/com/feathersui/sparklines/SparklineType.html#Column), and add it to the [the display list](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html).

```haxe
var sparkline = new Sparkline();
sparkline.type = Column;
addChild(sparkline);
```

## Data Provider

To render some data in the sparkline, pass in a [collection](../data-collections.md) that contains separate value for each column.

```haxe
sparkline.dataProvider = new ArrayCollection([
    5.0, 2.1, 4.0, 3.2, 6.0, 5.4, 2.0, 5.0, 3.6, 2.5
]);
```

## Customizing Columns

A number of properties may be used to change the appearance of columns on the line.

### Column Size and Spacing

To customize the width of the columns that are shown, set the [`columnWidth`](https://api.feathersui.com/premium-components/sparklines/com/feathersui/sparklines/Sparkline.html#columnWidth) property.

```haxe
sparkline.columnWidth = 4.0;
```

To customize the horizontal spacing between columns, set the [`columnGap`](https://api.feathersui.com/premium-components/sparklines/com/feathersui/sparklines/Sparkline.html#columnGap) property.

```haxe
sparkline.columnGap = 2.0;
```

### Column Colors

The [`maxColor`](https://api.feathersui.com/premium-components/sparklines/com/feathersui/sparklines/Sparkline.html#maxColor) and [`minColor`](https://api.feathersui.com/premium-components/sparklines/com/feathersui/sparklines/Sparkline.html#minColor) properties may optionally customize the color of the columns that have the highest and lowest values compared to all other items in the data provider.

```haxe
sparkline.maxColor = 0x00cc00;
sparkline.minColor = 0xcc0000;
```
The [`negativeColor`](https://api.feathersui.com/premium-components/sparklines/com/feathersui/sparklines/Sparkline.html#negativeColor) property may optionally customize the color of the columns that have negative values (values less than zero (`< 0.0`)).

```haxe
sparkline.negativeColor = 0xcc0000;
```

Set the [`itemToColor()`](https://api.feathersui.com/premium-components/sparklines/com/feathersui/sparklines/Sparkline.html#itemToColor) method to customize the color of each individual column.

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
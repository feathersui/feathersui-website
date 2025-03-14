---
title: How to use the Line sparkline type
layout: "docs.html"
sidebarTitle: Line Sparkline
---

```haxe
var sparkline = new Sparkline(Line);
addChild(sparkline);
```

```haxe
sparkline.dataProvider = new ArrayCollection([
    5.0, 2.1, 4.0, 3.2, 6.0, 5.4, 2.0, 5.0, 3.6, 2.5
]);
```

```haxe
sparkline.normalRangeMinY = 3.0;
sparkline.normalRangeMaxY = 4.5;
```

```haxe
sparkline.minColor = 0xcc0000;
sparkline.maxColor = 0x00cc00;
```

```haxe
final colors:Array<UInt> = [
    0x881177, 0xaa3355, 0xcc6666, 0xee9944, 0xeedd00, 0x99dd55,
    0x44dd88, 0x22ccbb, 0x00bbcc, 0x0099cc, 0x3366bb, 0x663399
];
sparkline.itemToColor = function(item:Float, index:Int):UInt {
    return colors[index % colors.length];
}
```

```haxe
sparkline.showPoints = All;
sparkline.showPoints = Color;
```

```haxe
sparkline.pointRadius = 4.0;
```

```haxe
sparkline.dataProvider = new ArrayCollection([
    new Point(0.0, 5.0), new Point(1.2, 2.1), new Point(1.8, 4.0),
    new Point(3.4, 3.2), new Point(4.8, 6.0), new Point(5.1, 5.4),
    new Point(5.6, 2.0), new Point(7.0, 5.0), new Point(7.5, 3.6),
    new Point(10.0, 2.5)
]);
sparkline.itemToX = function(point:Point):Float -> {
    return point.x;
}
sparkline.itemToY = function(point:Point):Float {
    return point.y;
}
```

## Related Links

- [`com.feathersui.sparklines.Sparkline` API Documentation](https://api.feathersui.com/premium-components/sparklines/com/feathersui/sparklines/Sparkline.html)
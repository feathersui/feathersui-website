---
title: How to use the Column sparkline type
layout: "docs.html"
sidebarTitle: Column Sparkline
---

```haxe
var sparkline = new Sparkline(Column);
addChild(sparkline);
```

```haxe
sparkline.dataProvider = new ArrayCollection([
    5.0, 2.1, 4.0, 3.2, 6.0, 5.4, 2.0, 5.0, 3.6, 2.5
]);
```

```haxe
sparkline.columnGap = 2.0;
```

```haxe
sparkline.columnWidth = 4.0;
```

```haxe
sparkline.minColor = 0xcc0000;
sparkline.maxColor = 0x00cc00;
```

```haxe
sparkline.negativeColor = 0xcc0000;
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

## Related Links

- [`com.feathersui.sparklines.Sparkline` API Documentation](https://api.feathersui.com/premium-components/sparklines/com/feathersui/sparklines/Sparkline.html)
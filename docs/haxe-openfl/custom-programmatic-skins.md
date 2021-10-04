---
title: Create custom programmatic skins for Feathers UI components
sidebar_label: Custom programmatic skins
---

[`ProgrammaticSkin`](https://api.feathersui.com/current/feathers/skins/ProgrammaticSkin.html) may be used as a base class for drawing custom graphics to use as a skin for a [Feathers UI](/) component. While the framework provides a number of built-in skins with [common shapes](./shape-skins.md), like rectangles, circles, and ellipses, sometimes a design needs a more customize appearance with multiple borders, transparent overlays, or even animations.

> The code below is based on the [custom-programmatic-skin sample project](https://feathersui.com/samples/haxe-openfl/custom-programmatic-skin/). Full [source code](https://github.com/feathersui/feathersui-openfl/tree/v1.0.0-beta.6/samples/custom-programmatic-skin) for this sample is available on Github.

To create a custom programmatic skin, subclass [`ProgrammaticSkin`](https://api.feathersui.com/current/feathers/skins/ProgrammaticSkin.html) and override its `update()` method.

```hx
class CustomSkin extends ProgrammaticSkin {
    public function new() {
        super();
    }

    override private function update():Void {
        // draw your skin here
    }
}
```

Inside the `update()` method, draw vector graphics or add/update children to achieve the requirements of the design.

```hx
override private function update():Void {
    this.graphics.clear();
    this.graphics.lineStyle(10.0, 0xff6666);
    this.graphics.beginFill(0xffcccc);
    this.graphics.moveTo(20.0, 5.0);
    this.graphics.lineTo(this.actualWidth - 20.0, 5.0);
    this.graphics.curveTo(this.actualWidth - 20.0, 20.0, this.actualWidth - 5.0, 20.0);
    this.graphics.lineTo(this.actualWidth - 5.0, this.actualHeight - 20.0);
    this.graphics.curveTo(this.actualWidth - 20.0, this.actualHeight - 20.0, this.actualWidth - 20.0, this.actualHeight - 5.0);
    this.graphics.lineTo(20.0, this.actualHeight - 5.0);
    this.graphics.curveTo(20.0, this.actualHeight - 20.0, 5.0, this.actualHeight - 20.0);
    this.graphics.lineTo(5.0, 20.0);
    this.graphics.curveTo(20.0, 20.0, 20.0, 5.0);
}
```

Whether you've set the dimensions explicitly, or they've been calculated dynamically, the `actualWidth` and `actualHeight` properties will contain the correct values for drawing your graphics or applying a layout.

## Sample projects

Several sample projects demonstrate how to create different types of custom programmatic skins for Feathers UI components.

- [Sample: Custom Programmatic Skin](https://feathersui.com/samples/haxe-openfl/custom-programmatic-skin/) ([Source Code on Github](https://github.com/feathersui/feathersui-openfl/tree/v1.0.0-beta.6/samples/custom-programmatic-skin))
- [Sample: Custom Programmatic Skin with States](https://feathersui.com/samples/haxe-openfl/custom-programmatic-skin-with-states/) ([Source Code on Github](https://github.com/feathersui/feathersui-openfl/tree/v1.0.0-beta.6/samples/custom-programmatic-skin-with-states))
- [Sample: Animated Skin with Tween](https://feathersui.com/samples/haxe-openfl/animated-tween-skin/) ([Source Code on Github](https://github.com/feathersui/feathersui-openfl/tree/v1.0.0-beta.6/samples/animated-tween-skin))

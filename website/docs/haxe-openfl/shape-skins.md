---
title: Skinning with common shapes
sidebar_label: Common shape skins
---

[Feathers UI](/) offers a number of built-in skin classes that draw common shapes using OpenFL's [`Graphics` API](https://api.openfl.org/openfl/display/Graphics.html). The border and fill of these skins may be easily customized with solid colors, gradients, and bitmaps. These skins automatically redraw themselves when resized or when the state of their parent component changes.

> Skinning in Feathers UI is not limited to the classes described below. If you need something a little more powerful, consider subclassing the [`ProgrammaticSkin`](./custom-programmatic-skins.md) class and drawing you own custom graphics. Additionally, any OpenFL display object may be used as a skin, so you can use primitives like [`Bitmap`](https://api.openfl.org/openfl/display/Bitmap.html) or [`Sprite`](https://api.openfl.org/openfl/display/Sprite.html), if you prefer.

## Shape skins

- [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html)
- [`EllipseSkin`](https://api.feathersui.com/current/feathers/skins/EllipseSkin.html)
- [`CircleSkin`](https://api.feathersui.com/current/feathers/skins/CircleSkin.html)
- [`PillSkin`](https://api.feathersui.com/current/feathers/skins/PillSkin.html)
- [`UnderlineSkin`](https://api.feathersui.com/current/feathers/skins/UnderlineSkin.html)
- [`OverAndUnderlineSkin`](https://api.feathersui.com/current/feathers/skins/OverAndUnderlineSkin.html)
- [`TabSkin`](https://api.feathersui.com/current/feathers/skins/TabSkin.html)
- [`TriangleSkin`](https://api.feathersui.com/current/feathers/skins/TriangleSkin.html)

## Fill

The [`FillStyle`](https://api.feathersui.com/current/feathers/graphics/FillStyle.html) enum is used to customize the shape's fill appearance.

- [`SolidColor`](https://api.feathersui.com/current/feathers/graphics/FillStyle.html#SolidColor)
- [`Gradient`](https://api.feathersui.com/current/feathers/graphics/FillStyle.html#Gradient)
- [`Bitmap`](https://api.feathersui.com/current/feathers/graphics/FillStyle.html#Bitmap)

## Border

The [`LineStyle`](https://api.feathersui.com/current/feathers/graphics/LineStyle.html) enum is used to customize the shape's border appearance.

- [`SolidColor`](https://api.feathersui.com/current/feathers/graphics/LineStyle.html#SolidColor)
- [`Gradient`](https://api.feathersui.com/current/feathers/graphics/LineStyle.html#Gradient)

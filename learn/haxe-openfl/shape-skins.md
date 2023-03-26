---
title: Skinning with common shapes
layout: "docs.html"
sidebarTitle: Common shape skins
---

[Feathers UI](/) offers a number of built-in skin classes that draw common shapes using OpenFL's [`Graphics` API](https://api.openfl.org/openfl/display/Graphics.html). The border and fill of these skins may be easily customized with solid colors, gradients, and bitmaps. These skins automatically redraw themselves when resized or when the state of their parent component changes.

> Skinning in Feathers UI is not limited to the classes described below. If you need something a little more powerful, consider subclassing the [`ProgrammaticSkin`](./custom-programmatic-skins.md) class and drawing you own custom graphics. Additionally, any OpenFL display object may be used as a skin, so you can use primitives like [`Bitmap`](https://api.openfl.org/openfl/display/Bitmap.html) or [`Sprite`](https://api.openfl.org/openfl/display/Sprite.html), if you prefer.

## Shape skins

- [`CircleSkin`](https://api.feathersui.com/current/feathers/skins/CircleSkin.html) renders as a circle.
- [`DonutSkin`](https://api.feathersui.com/current/feathers/skins/DonutSkin.html) renders as a circle with its center cut out.
- [`EllipseSkin`](https://api.feathersui.com/current/feathers/skins/EllipseSkin.html) renders as an ellipse.
- [`HorizontalLineSkin`](https://api.feathersui.com/current/feathers/skins/HorizontalLineSkin.html) renders as a single horizontal line, which may be aligned to the top, middle, or bottom.
- [`LeftAndRightBorderSkin`](https://api.feathersui.com/current/feathers/skins/TopAndBottomBorderSkin.html) renders as a rectangle, with the border on the left and right edges only.
- [`PillSkin`](https://api.feathersui.com/current/feathers/skins/PillSkin.html) renders similarly to a "pill", with semi-circle "caps" on the edges of a rectangle in the center.
- [`RectangleSkin`](https://api.feathersui.com/current/feathers/skins/RectangleSkin.html) renders as a rectangle or square, with optional rounded corners.
- [`TabSkin`](https://api.feathersui.com/current/feathers/skins/TabSkin.html) renders as a tab, which is a rectangle with two rounded corners along the same edge.
- [`TopAndBottomBorderSkin`](https://api.feathersui.com/current/feathers/skins/TopAndBottomBorderSkin.html) renders as a rectangle, with the border on the top and bottom edges only.
- [`TriangleSkin`](https://api.feathersui.com/current/feathers/skins/TriangleSkin.html) renders as a triangle, with the option to omit the border on one of its sides.
- [`UnderlineSkin`](https://api.feathersui.com/current/feathers/skins/UnderlineSkin.html) renders as a rectangle, with the border on the bottom edge only.
- [`VerticalLineSkin`](https://api.feathersui.com/current/feathers/skins/VerticalLineSkin.html) renders as a single vertical line, which may be aligned to the left, center, or right.

## Fill

The [`FillStyle`](https://api.feathersui.com/current/feathers/graphics/FillStyle.html) enum is used to customize the shape's fill appearance.

- [`SolidColor`](https://api.feathersui.com/current/feathers/graphics/FillStyle.html#SolidColor) displays the fill as a solid color. Its parameters are passed to the [`Graphics.beginFill()`](https://api.openfl.org/openfl/display/Graphics.html#beginFill) method.
- [`Gradient`](https://api.feathersui.com/current/feathers/graphics/FillStyle.html#Gradient) displays the fill as a gradient. Its parameters are passed to the [`Graphics.beginGradientFill()`](https://api.openfl.org/openfl/display/Graphics.html#beginGradientFill) method.
- [`Bitmap`](https://api.feathersui.com/current/feathers/graphics/FillStyle.html#Bitmap) displays the fill using [`BitmapData`](https://api.openfl.org/openfl/display/BitmapData.html). Its parameters are passed to the [`Graphics.beginBitmapFill()`](https://api.openfl.org/openfl/display/Graphics.html#beginBitmapFill) method.

## Border

The [`LineStyle`](https://api.feathersui.com/current/feathers/graphics/LineStyle.html) enum is used to customize the shape's border appearance.

- [`SolidColor`](https://api.feathersui.com/current/feathers/graphics/LineStyle.html#SolidColor) displays the border using a solid color. Its parameters are passed to the [`Graphics.lineStyle()`](https://api.openfl.org/openfl/display/Graphics.html#lineStyle) method.
- [`Gradient`](https://api.feathersui.com/current/feathers/graphics/LineStyle.html#Gradient) displays the border as a gradient. Its parameters are passed to the [`Graphics.lineGradientStyle()`](https://api.openfl.org/openfl/display/Graphics.html#lineGradientStyle) method.
- [`Bitmap`](https://api.feathersui.com/current/feathers/graphics/LineStyle.html#Bitmap) displays the border using [`BitmapData`](https://api.openfl.org/openfl/display/BitmapData.html). Its parameters are passed to the [`Graphics.lineBitmapStyle()`](https://api.openfl.org/openfl/display/Graphics.html#lineBitmapStyle) method.

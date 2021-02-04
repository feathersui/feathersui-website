---
title: Create a custom Feathers UI theme
sidebar_label: Create a custom theme
---

[Feathers UI](/) provides a system for styling all UI components in the same project by packaging all of the skins and styling code into single unit, called a [_theme_](./themes.md). Many projects will a require custom look and feel that conveys a certain mood or integrates with established branding guidelines. The best way to add these styling requirements to a project is to create a custom theme.

## The theme class

To start building a new theme from scratch, create a subclass of [`ClassVariantTheme`](https://api.feathersui.com/current/feathers/themes/ClassVariantTheme.html). This base class makes it easy to register a function that sets styles on a particular type of UI component.

```hx
package com.example;

import feathers.themes.ClassVariantTheme;

class CustomTheme extends ClassVariantTheme {
    public function new() {
        super();

        this.initialize();
    }

    private function initialize():Void {

    }
}
```

## Set UI component styles

Typically, a theme will define a number of functions to style different types of UI components. For example, the following function might be used to set the default styles for all [`Button`](./button.md) components.

```hx
private function setButtonStyles(button:Button):Void {
    var backgroundSkin = new RectangleSkin();
    backgroundSkin.border = SolidColor(1.0, 0xff0000);
    backgroundSkin.fill = SolidColor(0xffffff);
    backgroundSkin.cornerRadius = 10.0;
    button.backgroundSkin = backgroundSkin;

    var downSkin = new RectangleSkin();
    downSkin.border = SolidColor(1.0, 0xcc0000);
    downSkin.fill = SolidColor(0xffeeee);
    downSkin.cornerRadius = 10.0;
    button.setSkinForState(ButtonState.DOWN, downSkin);

    var format = new TextFormat("_sans", 16, 0xff0000);
    button.textFormat = format;

    var downFormat = new TextFormat("_sans", 16, 0xcc0000);
    button.setTextFormatForState(ButtonState.DOWN, downFormat);

    button.paddingTop = 10.0;
    button.paddingBottom = 10.0;
    button.paddingLeft = 20.0;
    button.paddingRight = 20.0;
}
```

Inside the `initialize()` method of the theme class, register this function with the theme by adding the following call to [`setStyleFunction()`](https://api.feathersui.com/current/feathers/style/ClassVariantStyleProvider.html#setStyleFunction).

```hx
this.styleProvider.setStyleFunction(Button, null, setButtonStyles);
```

[`setStyleFunction()`](https://api.feathersui.com/current/feathers/style/ClassVariantStyleProvider.html#setStyleFunction) accepts three arguments.

1. The UI component class that should be styled. In this case, it's [`Button`](./button.md).
2. An optional [_variant_](#variants). We aren't using a variant here, so we pass `null`.
3. A function that will receive a UI component instance and set its styles.

### Variants

If a project uses the same type of UI component in multiple places, but different instances need different appearances, a _variant_ may be registered for that type of component. For example, a [button](./button.md) that performs a destructive action (such as deleting data) might be given a red appearance.

Similar to above, here's another function that styles a [`Button`](./button.md) with fancier styles.

```hx
private function setFancyButtonStyles(button:Button):Void {
    var backgroundSkin = new RectangleSkin();
    backgroundSkin.cornerRadius = 10.0;
    backgroundSkin.border = Gradient(2, GradientType.LINEAR, [0xff9999, 0xcc0000], [1.0, 1.0], [0, 255], 90 * Math.PI / 180);
    backgroundSkin.fill = Gradient(GradientType.LINEAR, [0xff9999, 0xff0000], [1.0, 1.0], [0, 255], 90 * Math.PI / 180);
    button.backgroundSkin = backgroundSkin;

    var downSkin = new RectangleSkin();
    downSkin.cornerRadius = 10.0;
    downSkin.border = Gradient(2, GradientType.LINEAR, [0xff0000, 0xcc0000], [1.0, 1.0], [0, 255], 90 * Math.PI / 180);
    downSkin.fill = Gradient(GradientType.LINEAR, [0xff9999, 0xff0000], [1.0, 1.0], [0, 255], 270 * Math.PI / 180);
    button.setSkinForState(ButtonState.DOWN, downSkin);

    var format = new TextFormat("_sans", 20, 0xffeeee, true, true);
    button.textFormat = format;

    button.paddingTop = 10.0;
    button.paddingBottom = 10.0;
    button.paddingLeft = 20.0;
    button.paddingRight = 20.0;
}
```

The call to [`setStyleFunction()`](https://api.feathersui.com/current/feathers/style/ClassVariantStyleProvider.html#setStyleFunction) will look similar, but this time, it should include a variant string.

```hx
this.styleProvider.setStyleFunction(Button, "fancy-button", setFancyButtonStyles);
```

This same string may be passed to the [`variant`](https://api.feathersui.com/current/feathers/core/FeathersControl.html#variant) property of an individual UI component.

```hx
var button = new Button();
button.variant = "fancy-button";
```

As a best practice, it's a good idea to define custom variants as constants in the theme class.

```hx
public static final VARIANT_FANCY_BUTTON:String = "fancy-button";
```

Then, use the constant instead of the string value, for better compiler checking.

```hx
button.variant = CustomTheme.VARIANT_FANCY_BUTTON;
```

## Related Links

- [Introduction to Feathers UI themes](./themes.md)

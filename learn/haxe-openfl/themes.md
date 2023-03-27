---
title: Introduction to Feathers UI themes
layout: "docs.html"
sidebarTitle: Intro to themes
---

A _theme_ packages up styling code into a single unit that may be used to modify the appearance of all Feathers UI components in the same project. One advantage of using a theme is that it keeps styling code from getting mixed up with other logic throughout a project's code. This separation helps make a project more maintainable. A theme also makes it easier to share styles among multiple related projects or to more easily swap out one design for another when a project needs a fresh coat of paint.

Feathers UI provides a default theme, named _Steel_, which provides default styles to all of the core UI components. If a design requires a different appearance for UI components, it's possible to create a [custom theme](./custom-themes.md). Custom themes may completely replace all of the styles from the default theme, or they may enhance the default theme with some extra _variants_ — falling back to the defaults when no customization is required.

> While placing all styling code inside the theme is encouraged, this is not a strict requirement. You can style any UI component manually, from anywhere in your project. Styling properties that are set outside of the theme will take precedence over style properties that are set inside of the theme.

## Variants

Any UI component may be given a _variant_, which allows multiple instances to to behave the same, but to give some different appearances. For instance, the [`Label`](./label.md) component has two built-in variants, [`Label.VARIANT_HEADING`](https://api.feathersui.com/current/feathers/controls/Label.html#VARIANT_HEADING) and [`Label.VARIANT_DETAIL`](https://api.feathersui.com/current/feathers/controls/Label.html#VARIANT_DETAIL). A heading label is usually displayed in a slightly larger font size than a regular label, and it is meant for more prominent text, such as a title. Similarly, a detail label is usually displayed in a smaller font size, perhaps with a lighter color, for less prominent text.

Set the [`variant`](https://api.feathersui.com/current/feathers/style/IVariantStyleObject.html#variant) property to specify that a UI component instance should be styled as a specific variant.

```haxe
var label = new Label();
label.variant = Label.VARIANT_HEADING;
addChild(label);
```

While some variants are built-in, like the heading and detail variants for labels, custom variants may be created too. The [`variant`](https://api.feathersui.com/current/feathers/style/IVariantStyleObject.html#variant) property is a string, and any value may be used. Inside a custom theme, that variant may be referenced to provide custom styles.

## Instantiating a custom theme

If you create or download a [custom theme](./custom-themes.md), using it is generally as simple as calling [`Theme.setTheme()`](https://api.feathersui.com/current/feathers/style/Theme.html#setTheme) in your project's entry point.

```haxe
class MyApp extends Application {
    public function new() {
        Theme.setTheme(new MyCustomTheme());
        super();
    }
}
```

If you're using the [`Application`](./application.md) component, that should be before the call to the `super` constructor. If you're not using the [`Application`](./application.md) component, instantiate the custom theme before creating all Feathers UI components.

## Excluding an instance from the theme

**(Advanced)** Set the [`themeEnabled`](https://api.feathersui.com/current/feathers/style/IStyleObject.html#themeEnabled) property of a UI component instance to `false` to exclude it from the theme's styles (including the default theme).

```haxe
var button = new Button();
button.themeEnabled = false;
button.backgroundSkin = new RectangleSkin(SolidColor(0xCCCCCC), SolidColor(1.0, 0x000000));
button.textFormat = new TextFormat("_sans", 14, 0x000000);
addChild(button);
```

Since the theme won't provide default styles to the instance, be sure to provide custom styles to replace the defaults.

## Disabling the default theme

**(Advanced)** When a [custom theme](./custom-themes.md) is used, the default theme will always be available as a fallback option, because a custom theme is not required to customize the styles of every type of UI component.

It's not encouraged, but if you prefer to completely disable the default theme, the `feathersui_disable_default_theme` define may be specified in your [OpenFL _project.xml_ file](https://lime.openfl.org/docs/project-files/xml-format/).

```xml
<haxedef name="feathersui_disable_default_theme"/>
```

You might do this to save on final output file size, if you are certain that your custom theme provides all of the styles that you need, and your project never needs to fall back to the default theme.

## Related Links

- [Create a custom Feathers UI theme](./custom-themes.md)
- [Sample: Theme Dark Mode](https://github.com/feathersui/feathersui-openfl/tree/v1.1.0/samples/dark-mode/)
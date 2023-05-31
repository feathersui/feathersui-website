---
title: Feathers UI haxedef option reference
layout: "docs.html"
sidebarTitle: haxedef options
---

[Feathers UI](/) provides some Haxe defines (haxedefs) that can change how your project is built.

## Usage

To use one of the options below, add a [`<haxedef>`](https://lime.openfl.org/docs/project-files/xml-format/#haxedef) element in your [_project.xml_ file](https://lime.openfl.org/docs/project-files/xml-format/).

```xml
<haxedef name="name_of_haxedef"/>
```

## Haxedefs

### `feathersui_disable_default_theme`

If your project uses a [custom theme](./custom-themes.md), and the custom theme fully style all UI components in your project, you can disable the default fallback theme to reduce the file size of your build.

```xml
<haxedef name="feathersui_disable_default_theme"/>
```

### `feathersui_theme_manage_stage_color`

Themes are often designed with a specific background color in mind. Add this define to tell the theme to set the color of the stage to the theme's preferred background color when styling the [`Application`](./application.md) component.

```xml
<haxedef name="feathersui_theme_manage_stage_color"/>
```

### `feathersui_disable_application_focus_manager`

May be used to disable the default focus manager initialized by the [`Application`](./application.md) component.

```xml
<haxedef name="feathersui_disable_application_focus_manager"/>
```

A focus manager may be enabled manually, if desired. Otherwise, the default focus behavior of OpenFL will be used.

### `feathersui_disable_application_pop_up_manager`

May be used to disable the default pop-up manager initialized by the [`Application`](./application.md) component.

```xml
<haxedef name="feathersui_disable_application_pop_up_manager"/>
```

If the `PopUpManager` is accessed, pop-ups will be added directly to the stage, instead of to a container maintained by the application.

### `feathersui_disable_application_tool_tip_manager`

May be used to disable the default tool tip manager initialized by the [`Application`](./application.md) component.

```xml
<haxedef name="feathersui_disable_application_tool_tip_manager"/>
```

A tool tip manager may be enabled manually, if desired. Otherwise, the `toolTip` property will be ignored.

### `feathersui_strict_set_invalid`

When this define is enabled, Feathers UI will throw an exception if `setInvalid()` is called during validation. Useful when developing custom components or item renderers to find performance issues.

```xml
<haxedef name="feathersui_strict_set_invalid"/>
```
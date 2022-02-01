---
title: Feathers UI haxedef option reference
sidebar_label: haxedef options
---

[Feathers UI](/) provides some Haxe defines (haxedefs) that can change how your project is built.

## Usage

To use one of the options below, add a [`<haxedef>`](https://lime.software/docs/project-files/xml-format/#haxedef) element in your [_project.xml_ file](https://lime.software/docs/project-files/xml-format/).

```xml
<haxedef name="name_of_haxedef"/>
```

## Haxedefs

### `disable_default_theme`

If your project uses a [custom theme](./custom-themes.md), and the custom theme fully style all UI components in your project, you can disable the default fallback theme to reduce the file size of your build.

```xml
<haxedef name="disable_default_theme"/>
```

### `disable_focus_manager`

May be used to disable the default focus manager initialized by the [`Application`](./application.md) component.

```xml
<haxedef name="disable_focus_manager"/>
```

### `disable_tool_tip_manager`

May be used to disable the default tool tip manager initialized by the [`Application`](./application.md) component.

```xml
<haxedef name="disable_tool_tip_manager"/>
```

---
id: haxedef-options
title: Feathers UI haxedef option reference
sidebar_label: haxedef options
---

[Feathers UI](/) provides some Haxe defines (haxedefs) that can change how your project is built.

## Usage

To use one of the options below, add a [`<haxdef>`](https://lime.software/docs/project-files/xml-format/#haxedef) element in your [_project.xml_ file](https://lime.software/docs/project-files/xml-format/).

```xml
<haxdef name="name_of_haxdef"/>
```

## Haxedefs

### `disable_default_theme`

If you project uses a [custom theme](./custom-themes.md), and the custom theme fully style all UI components in your project, you can disable the default fallback theme to reduce the file size of your build.

```xml
<haxdef name="disable_default_theme"/>
```

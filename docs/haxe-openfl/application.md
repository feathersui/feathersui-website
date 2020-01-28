---
title: How to use the Application component
sidebar_label: Application
---

The [`Application`](https://api.feathersui.com/current/feathers/controls/Application.html) component is an _optional_ root class for Feathers UI projects. It may use [layouts](https://api.feathersui.com/current/feathers/layout/), similar to a [`LayoutGroup`](./layout-group.md), and it provides the ability to scale your project for different screen sizes, similar to the way native applications do it.

> If you prefer, you may use OpenFL's [`Sprite`](https://api.openfl.org/openfl/display/Sprite.html) as a root class for Feathers UI projects. The use of [`Application`](https://api.feathersui.com/current/feathers/controls/Application.html) is completely optional.

## The Basics

Create a new class that extends [`Application`](https://api.feathersui.com/current/feathers/controls/Application.html).

```hx
import feathers.core.Application;

class MyProject extends Application {
    public function new() {
        super();

        var label = new Label();
        label.text = "Hello from Feathers UI and OpenFL";
        this.addChild(label);
    }
}
```

To use this class as your project's entry point, you must reference it in your _project.xml_ file. The `<app>` element has a `main` attribute that should be set to the name of this class.

```xml
<app main="MyProject" />
```

Here's a sample _project.xml_ file for context.

```xml
<?xml version="1.0" encoding="utf-8"?>
<project>
    <meta title="MyProject" package="com.example" version="1.0.0" company="My Company" />
    <app main="MyProject" path="build" file="MyProject" />
    <window allow-high-dpi="true"/>
    <window fps="60"/>
    <window fps="0" if="html5"/>
    <source path="src" />
    <haxelib name="openfl" />
    <haxelib name="feathersui" />
</project>
```

## Related Links

- [`feathers.controls.Application` API Documentation](https://api.feathersui.com/current/feathers/controls/Application.html)

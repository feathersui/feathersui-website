---
id: visual-studio-code
title: Create a Feathers UI project in Visual Studio Code
sidebar_label: Visual Studio Code
---

With a few free extensions, [Visual Studio Code](https://code.visualstudio.com/) may be configured as a fully-featured development environment for [Feathers UI](/) projects built with [Haxe](https://haxe.org/) and [OpenFL](https://openfl.org/).

## Prerequisites

- [Install Feathers UI from Haxelib](installation.md)
- Install the following extensions for Visual Studio Code:
  - [Haxe Support for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=nadako.vshaxe)
  - [Lime/OpenFL Support for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=openfl.lime-vscode-extension)
  - [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
- [Install Lime from Haxelib](https://lime.software/docs/home/) by running the following commands in a terminal:

  ```sh
  haxelib install lime
  haxelib run lime setup
  ```

## Create a project

1. From the **File** menu, choose **Open Folder…**.
1. Create a new, empty folder for your project somewhere on your computer.
1. Open the folder that you created.
1. Create a file named _project.xml_ and add the following content:

   ```xml
   <?xml version="1.0" encoding="utf-8"?>
   <project>
       <meta title="MyProject" package="com.example" version="1.0.0" company="My Company" />
       <app main="Main" path="build" file="Main" />
       <window allow-high-dpi="true"/>
       <window fps="60"/>
       <window fps="0" if="html5"/>
       <source path="src" />
       <haxelib name="openfl" />
       <haxelib name="feathersui" />
   </project>
   ```

1. Create a file named _src/Main.hx_, and add the following content:

   ```hx
   import openfl.display.Sprite;

   class Main extends Sprite {
       public function new() {
           super();
       }
   }
   ```

### Add your first Feathers UI component

1. Inside _src/Main.hx_, add the following imports:

   ```hx
   import feathers.controls.Button;
   import openfl.events.MouseEvent;
   ```

1. Modify the constructor with the following code:

   ```hx
   public function new() {
       super();

       var button = new Button();
       button.text = "Click Me";
       button.addEventListener(MouseEvent.CLICK, onButtonClick);
       addChild(button);
   }
   ```

1. Add an event listener function that logs a message:

   ```hx
   private function onButtonClick(event:MouseEvent):Void {
       trace("Clicked the button");
   }
   ```

## Run the project

1. In Visual Studio Code's status bar, you should find a button that allows you to choose a target platform. Select **HTML5/Debug**.
1. From the **Debug** menu, choose **Add Configuration…**.
1. Select **Lime** from the list of available environments.
1. From the **Debug** menu, choose **Start Debugging** (or use the <kbd>F5</kbd> keyboard shortcut).
1. The project should launch in Chrome.

   > If your project does not launch in a browser, check the **Problems** panel or the **Terminal** panel for errors.

1. If you click on the button, it will log a message to the **Debug Console** in Visual Studio Code.

## Troubleshooting

How to fix some issues that you may encounter.

### Error: Command failed: lime display html5

This error may indicate a problem in your _project.xml_ file. Check for additional error messages after this one that provide more context.

It may also indicate that [Lime](https://lime.software/) is not installed. You can install it from [Haxelib](https://lib.haxe.org/) by running the following commands in a terminal.

```sh
haxelib install lime
haxelib run lime setup
```

### Error: Could not find haxelib _[library name]_, does it need to be installed?

This error indicates that one or more of your project's dependencies is not installed. In a terminal, run the [**haxelib install**](https://lib.haxe.org/documentation/using-haxelib/#install) command with the name of the missing library. Run the following command to install [OpenFL](https://openfl.org/).

```
haxelib install openfl
```

> You may need to close and re-open your workspace folder after installing a new dependency.

## Further Reading

- [Visual Studio Code documentation](https://code.visualstudio.com/docs)
- [OpenFL/Lime project.xml format](https://lime.software/docs/project-files/xml-format/)

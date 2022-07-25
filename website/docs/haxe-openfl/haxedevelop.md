---
title: Create a Feathers UI project in HaxeDevelop
sidebar_label: HaxeDevelop
---

[HaxeDevelop](https://haxedevelop.org/) (or [FlashDevelop](https://flashdevelop.org/)) supports an [OpenFL](https://openfl.org/) project template that we'll use to create a new [Feathers UI](/) project.

## Prerequisites

- [Install Feathers UI from Haxelib](./installation.md)

## Create a project

1. From the **Project** menu, choose **New Project…**.
1. Select **OpenFL Project** from the list of templates. It should be in the **Haxe** category.
1. Give your project a **Name** and choose a **Location** to save it on your computer.
1. Click **OK** to create your project.
1. Open _project.xml_.
1. Find the line where [**openfl**](https://lib.haxe.org/p/openfl/) is specified as a [Haxelib](https://lib.haxe.org/) dependency, and add new dependencies for [**actuate**](https://lib.haxe.org/p/actuate/) and [**feathersui**](https://lib.haxe.org/p/feathersui/) after it:

   ```xml
   <haxelib name="openfl" />
   <haxelib name="actuate" />
   <haxelib name="feathersui" />
   ```

### Add your first Feathers UI component

1. Open _src/Main.hx_. This is the main entrypoint of your [OpenFL](https://openfl.org/) application.
1. Add the following imports:

   ```haxe
   import feathers.controls.Button;
   import feathers.events.TriggerEvent;
   ```

1. Modify the constructor with the following code:

   ```haxe
   public function new() {
       super();

       var button = new Button();
       button.text = "Click Me";
       button.addEventListener(TriggerEvent.TRIGGER, onButtonTrigger);
       addChild(button);
   }
   ```

1. Add an event listener function that logs a message:

   ```haxe
   private function onButtonTrigger(event:TriggerEvent):Void {
       trace("Clicked or tapped the button");
   }
   ```

## Run the project

1. In HaxeDevelop's toolbar, you should see two drop-downs. One will have either _Debug_ or _Release_ selected, and the other will have the name of the target platform, such as _html5_, _windows_, or _android_. Select **Debug** and **html5**.
1. From the **Project** menu, choose **Test Project** (or use the <kbd>F5</kbd> keyboard shortcut).
1. The project should launch in your default web browser.

   > If your project does not launch in a browser, check the **Results** panel or **Output** panel for errors.

1. If you click on the button, it will log a message to your web browser's debug console.
   > [Open your web browser's developer tools](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools) to find the debug console other other useful tools for web developers.

## Troubleshooting

How to fix some issues that you may encounter.

### Error: Library lime is not installed

This error indicates that OpenFL's setup process is not yet complete. Open a terminal and run the following command.

```sh
haxelib run openfl setup
```

### Error: Could not find haxelib _[library name]_, does it need to be installed?

This error indicates that one or more of your project's dependencies is not installed. In a terminal, run the [**haxelib install**](https://lib.haxe.org/documentation/using-haxelib/#install) command with the name of the missing library. For example, run the following command to install [Actuate](https://lib.haxe.org/p/actuate/).

```
haxelib install actuate
```

> You may need to close and re-open your project after installing a new dependency.

## Further Reading

- [HaxeDevelop documentation](https://haxedevelop.org/system-requirements.html)
- [OpenFL/Lime project.xml format](https://lime.openfl.org/docs/project-files/xml-format/)
- [MDN: What are browser developer tools?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools)

---
title: Create a Feathers UI project in Visual Studio Code
sidebar_label: Visual Studio Code
---

With a few free extensions, [Visual Studio Code](https://code.visualstudio.com/) may be configured as a fully-featured development environment for [Feathers UI](/) projects built with [Haxe](https://haxe.org/) and [OpenFL](https://openfl.org/).

## Prerequisites

- [Install Feathers UI from Haxelib](./installation.md)
- [Install the Feathers UI Extension Pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=bowlerhatllc.vscode-feathersui-extension-pack)

## Create a project

1. From the **File** menu, choose **Open Folder…** (On macOS, choose **Open…**).
1. Create a new, empty folder for your project somewhere on your computer.
1. Select the empty folder, and open it.
1. Go to the **View** menu and choose **Command Palette…**. You may also use the <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> keyboard shortcut (<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> on macOS).
1. Run the **Feathers UI: Create new project** command.

This will run the [CLI `new-project` command](./cli.md#new-project) in Visual Studio Code's terminal. The newly created project will include the following defaults:

- A standard [OpenFL _project.xml_ file](https://lime.software/docs/project-files/xml-format/)
- A _src_ folder for Haxe source files
- A default icon
- A build [task](https://code.visualstudio.com/docs/editor/tasks) for compiling the project
- A [launch configuration](https://code.visualstudio.com/docs/editor/debugging#_launch-configurations) for debugging

## Run the project

Visual Studio Code's debugger supports many of OpenFL's target platforms.

1. In Visual Studio Code's status bar, choose a target platform. For instance, you might choose **HTML5/Debug**.
1. From the **Debug** menu, choose **Start Debugging** (or use the <kbd>F5</kbd> keyboard shortcut).
1. For the **HTML5/Debug** target, the project should launch in the Chrome web browser. For other targets, a different runtime or executable will launch.

   > If your project does not launch in a browser, check the **Problems** panel or the **Terminal** panel for errors.

## Build the project

You can build a project without launching it in a debugger.

1. In Visual Studio Code's status bar, choose a target platform. For instance, you might choose **HTML5/Debug**.
1. From the **Terminal** menu, choose **Run Build Task…**. You may also use the <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> keyboard shortcut (<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> on macOS).
1. The compiled project output may be found inside the _bin_ folder. For example, the **HTML5/Debug** target compiles to the _bin/html5/bin_ folder.

## Troubleshooting

How to fix some issues that you may encounter.

### Error: Lime completion setup failed. Is the lime command available? Try running "lime setup" or changing the "lime.executable" setting.

This error indicates that OpenFL's setup process is not yet complete. Open a terminal and run the following command.

```sh
haxelib run openfl setup
```

### Error: Command failed: lime display html5

This error may indicate a problem in your _project.xml_ file. Check for additional error messages after this one that provide more context.

It may also indicate that OpenFL's setup process is not yet complete. Open a terminal and run the following command.

```sh
haxelib run openfl setup
```

### Error: Could not find haxelib _[library name]_, does it need to be installed?

This error indicates that one or more of your project's dependencies is not installed. In a terminal, run the [**haxelib install**](https://lib.haxe.org/documentation/using-haxelib/#install) command with the name of the missing library. For example, run the following command to install [Actuate](https://lib.haxe.org/p/actuate/).

```
haxelib install actuate
```

> You may need to close and re-open your workspace folder after installing a new dependency.

### Error: Failed to create project. New project folder is not empty.

This error indicates that the **Feathers UI: Create new project** command was run in a folder that contains one or more files. If the folder appears empty, it may contain hidden files.

### Error: Failed to create new Feathers UI project. Open an empty folder before running this command.

This error indicates that the **Feathers UI: Create new project** command was run without a workspace folder open in Visual Studio Code. Go to the **File** menu and choose **Open Folder…** (or choose **Open…** on macOS) to open a folder.

## Further Reading

- [Visual Studio Code documentation](https://code.visualstudio.com/docs)
- [OpenFL/Lime project.xml format](https://lime.software/docs/project-files/xml-format/)

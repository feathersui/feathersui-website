---
id: terminal-new-project
title: Create a Feathers UI project in a command line terminal
sidebar_label: Command line terminal
---

Create [Feathers UI](/) projects with [Haxe](https://haxe.org/) and [OpenFL](https://openfl.org/) in a terminal, and learn the commands needed to build your project, or run it with different targets.

## Prerequisites

- [Install Feathers UI from Haxelib](./installation.md)

## Create a project

Open a terminal, and run the following command:

```sh
haxelib run feathersui new-project HelloWorld
```

The newly created project will include the following defaults:

- A standard [OpenFL _project.xml_ file](https://lime.software/docs/project-files/xml-format/)
- A _src_ folder for Haxe source files
- A default icon
- A build [task](https://code.visualstudio.com/docs/editor/tasks) for compiling the project
- A [launch configuration](https://code.visualstudio.com/docs/editor/debugging#_launch-configurations) for debugging

## Run the project

In your terminal, run the following command to launch your project in your default web browser:

```sh
openfl test html5 -debug
```

You may open the browser's developer tools to access its debugging capabilities.

## Build the project

You can build a project without launching it in a debugger.

In your terminal, run the following command to build your project using OpenFL's `html5` target:

```sh
openfl build html5
```

The compiled project output may be found inside the _bin_ folder. For example, the **html5** target compiles to the _bin/html5/bin_ folder.

## Troubleshooting

How to fix some issues that you may encounter.

### Error: Could not find haxelib _[library name]_, does it need to be installed?

This error indicates that one or more of your project's dependencies is not installed. In a terminal, run the [**haxelib install**](https://lib.haxe.org/documentation/using-haxelib/#install) command with the name of the missing library. For example, run the following command to install [Actuate](https://lib.haxe.org/p/actuate/).

```
haxelib install actuate
```

### Error: Failed to create project. New project folder is not empty.

This error indicates that the **new-project** CLI command was run in a folder that contains one or more files. If the folder appears empty, it may contain hidden files.

## Further Reading

- [Feathers UI CLI commands](./cli.md)
- [OpenFL/Lime project.xml format](https://lime.software/docs/project-files/xml-format/)

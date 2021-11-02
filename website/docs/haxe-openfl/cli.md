---
title: Feathers UI CLI command reference
sidebar_label: CLI commands
---

[Feathers UI](/) provides an optional _cli_ interface to create new projects in a terminal.

## `new-project`

Creates a new Feathers UI project at the specified path

### Usage

```sh
haxelib run feathersui new-project <path> [options]
```

Example: The following commands create a new project named _HelloWorld_ and open the project folder in [Visual Studio Code](./visual-studio-code.md).

```sh
haxelib run feathersui new-project HelloWorld --vscode
code HelloWorld
```

### Parameters

#### `<path>`

_(Required)_ The path to a folder where the new project should be created. If the folder already exists, it must be empty. If it doesn't exist, it will be created.

### Additional Options

The following options are available for the `new-project` command.

#### `--vscode`

The new project will include supporting files for [Visual Studio Code](./visual-studio-code.md)

#### `--openfl`

The new project's main class will extend [`openfl.display.Sprite`](https://api.openfl.org/openfl/display/Sprite.html) instead of [`feathers.controls.Application`](./application.md)

#### `--verbose`

Show additional detailed output

## `help`

Displays a list of available commands or the usage of a specific command

### Usage

```sh
haxelib run feathersui help <command>
```

Example: Display a list of all available commands.

```sh
haxelib run feathersui help
```

Example: Display a list of all available options for the `new-project` command.

```sh
haxelib run feathersui help new-project
```

### Parameters

#### `<command>`

_(Optional)_ The name of the command

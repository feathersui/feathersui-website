---
title: Feathers UI extensions for Visual Studio Code
author: Josh Tynjala
authorURL: https://bowlerhat.dev/
authorTwitter: joshtynjala
authorImageURL: /img/authors/josh.jpg
---

[Visual Studio Code](https://code.visualstudio.com/) is one of the best editors for [Haxe](https://haxe.org/) and [OpenFL](https://openfl.org/) development today. Obviously, that makes it one of the best editors for [Feathers UI](https://feathersui.com/) development too. Today, Feathers UI is getting two new VSCode extensions to elevate the experience even more. Not only will you be able to create a new Feathers UI project with a single command, you can also set up everything you need for Haxe, OpenFL, and Feathers UI in just one click.

## Feathers UI Extension

When you install the official [Feathers UI extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=bowlerhatllc.vscode-feathersui), you'll be able to create a new Feathers UI project in your workspace folder by running a simple command.

1. Open an empty folder in Visual Studio Code.
1. Go to the **View** menu and choose **Command Palette…**.
1. Search for the **Feathers UI: Create new project** command.

![](/blog/img/vscode-feathers-ui-create-new-project.png)

This will create an OpenFL _project.xml_ file, a main class file that extends the [`Application`](https://feathersui.com/learn/haxe-openfl/application/) class, and VSCode's editor configuration files to create a default build task and a Lime/OpenFL launch configuration.

<div style="text-align:center;"><img src="/blog/img/vscode-feathers-ui-create-new-project-explorer.png" style="width:320px"></div>

Get the extension from the VSCode Marketplace:

- [Visual Studio Code Marketplace: Feathers UI extension](https://marketplace.visualstudio.com/items?itemName=bowlerhatllc.vscode-feathersui)

## Feathers UI "Extension Pack"

As I was writing the documentation for [creating a new Feathers UI project in Visual Studio Code](https://feathersui.com/learn/haxe-openfl/visual-studio-code), I realized that the list of prerequisites was getting pretty long. You need the [Haxe extension](https://marketplace.visualstudio.com/items?itemName=nadako.vshaxe), the [Lime extension for OpenFL](https://marketplace.visualstudio.com/items?itemName=openfl.lime-vscode-extension), and (of course) the new [Feathers UI extension](https://marketplace.visualstudio.com/items?itemName=bowlerhatllc.vscode-feathersui) mentioned above. Rather than search for each of those separately, wouldn't it be better to get them all in one click?

The second extension is actually an [_extension pack_](https://code.visualstudio.com/api/references/extension-manifest#extension-packs), which is a bundle of multiple extensions that can all be installed together.

<div style="text-align:center;"><img src="/blog/img/vscode-feathers-ui-extension-pack.png" style="width:450px"></div>

Get the Feathers UI extension pack from the VSCode Marketplace:

- [Visual Studio Code Marketplace: Feathers UI extension pack](https://marketplace.visualstudio.com/items?itemName=bowlerhatllc.vscode-feathersui-extension-pack)

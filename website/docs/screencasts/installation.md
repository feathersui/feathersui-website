---
title: "Video: How to Install Feathers UI"
sidebar_label: Install Feathers UI
---

<iframe src="https://player.vimeo.com/video/438970638" width="100%" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

## Prerequisites

- [Haxe 4.0.0 or newer](https://haxe.org/download/)

## Transcript

<details>
<summary>
Full text
</summary>

We're going to install [Feathers UI](https://feathersui.com/). With [Haxe](https://haxe.org/) already installed, let's get going.

Start by using Haxelib to download Feathers UI. In a terminal, run:

```sh
haxelib install feathersui
```

This installs the library and all of its dependencies. It may take a few minutes to complete.

Next, we need to complete the setup of [OpenFL](https://openfl.org/) by running:

```sh
haxelib run openfl setup
```

This will install some additional dependencies required for OpenFL development.

If it asks to install the **openfl** command, we'll say yes.

On some systems, we may need to enter an administrator password for this step.

Now, the installation of Feathers UI is complete.

To confirm, we'll see if the command line interface is available by running:

```sh
haxelib run feathersui
```

This should print a list of available commands.

Next, check the **openfl** command.

```sh
openfl
```

Okay, great! We're ready to create our first Feathers UI project.

</details>

## Next Steps

Now that Feathers UI and its dependencies are installed, you can create a project in your favorite editor.

- [📺 Create a project in Visual Studio Code](visual-studio-code.md)

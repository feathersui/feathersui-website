---
title: "Video: Create a Feathers UI project in Visual Studio Code"
layout: "docs.html"
sidebarTitle: Visual Studio Code
---

<iframe src="https://player.vimeo.com/video/438985481" width="100%" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

## Transcript

<details>
<summary>
Full text
</summary>

We're going to create our first [Feathers UI](https://feathersui.com/) project in [Visual Studio Code](https://code.visualstudio.com/).

First, let's set up the extensions that we need.

Switch to the **Extensions** view. Then, search for _Feathers UI_ in the Marketplace.

Let's install the [Feathers UI Extension Pack](https://marketplace.visualstudio.com/items?itemName=bowlerhatllc.vscode-feathersui-extension-pack).

This pack installs the [Haxe programming language extension](https://marketplace.visualstudio.com/items?itemName=nadako.vshaxe), the [Lime extension for OpenFL projects](https://marketplace.visualstudio.com/items?itemName=openfl.lime-vscode-extension), and (of course) the [Feathers UI extension](https://marketplace.visualstudio.com/items?itemName=bowlerhatllc.vscode-feathersui).

Just click the **Install** button to get all three in one single step. If you prefer, you can choose to install each of these extensions individually.

Now, we're ready to create a project.

Go to the File menu, and choose **Open Folder…** (on macOS, choose **Open…**).

Create a new, empty folder with the name of your project somewhere on your computer. Let's call it **HelloWorld**. We'll open this folder as the root of our Visual Studio Code workspace.

Next, go to the **View** menu, and choose **Command Palette…**.

Then, search for the **Feathers UI: Create new project** command. Make sure that the command is selected in results the list, and then run it by pressing <kbd>Enter</kbd>.

This will open a terminal and run the new-project command using the [Feathers UI command line interface](../haxe-openfl/cli.md).

Let close that and look at the **Explorer** view where we can see the new project's files. These include:

- The standard [OpenFL _project.xml_ file](https://lime.openfl.org/docs/project-files/xml-format/)
- A _src_ folder for Haxe source files
- A default icon
- And the _.vscode_ folder, which contains:
  - A build [task](https://code.visualstudio.com/docs/editor/tasks) for compiling the project
  - And a [launch configuration](https://code.visualstudio.com/docs/editor/debugging#_launch-configurations) for debugging

To debug the project, start by setting the **OpenFL target platform** in the status bar. Let's choose **HTML5/Debug**.

Switch to the **Run and debug** view, and click the button with the ▶ **play** icon to compile and launch the project.

For the HTML5 target, this will launch the Google Chrome web browser. There it is!

Back in Visual Studio Code, let's build the project only, without launching it.

From the **Terminal** menu, choose **Run Build Task…**. This will open a terminal and compile your project.

We can find the compiled output in the _build_ folder, under the name of the active OpenFL target platform. Here's the HTML5 target's output.

Awesome! Visual Studio Code is all set up for Feathers UI development.

</details>

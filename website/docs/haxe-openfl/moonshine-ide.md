---
title: Create a Feathers UI project in Moonshine IDE
sidebar_label: Moonshine IDE
---

[Moonshine IDE](https://moonshine-ide.com/) provides a built-in [Feathers UI](/) project template.

## Prerequisites

- [Install Haxe](https://haxe.org/download/)
- [Install Node.js](https://nodejs.org/) (required for code intelligence)

## Create a project

1. From the **File** menu, go to **New**, and then choose **Haxe Feathers UI Project**.
1. Give your project a **Name** and choose a **Parent Directory** to save it on your computer.
1. Click the **Create** button to create your project.

> Moonshine will automatically install all Haxelib dependencies in the [_project.xml_](https://lime.software/docs/project-files/xml-format/) file, if they are not already available. This includes both [feathersui](https://lib.haxe.org/p/feathersui/) and [openfl](https://lib.haxe.org/p/openfl/). Installation may take several minutes, and progress will be reported in Moonshine's console.

## Run the project

1. From the **Debug** menu, choose **Build and Debug**.
1. The project should launch in your default web browser.

## Troubleshooting

How to fix some issues that you may encounter.

### Warning: Haxe language code intelligence disabled. To enable, update Node.js location in application settings.

This error indicates that [Node.js](https://nodejs.org/) is not configured in Moonshine. Node.js is required to run the [Haxe language server](https://github.com/vshaxe/haxe-language-server/) that provides code intelligence for _.hx_ files.

1. Install [Node.js](https://nodejs.org/), if you haven't already.
1. From the **File** menu, choose **Settings**.
1. Go to the **JavaScript** section.
1. Under **Node.js Home** choose **Change** and select the folder where Node.js is installed.

> On Windows, the default Node.js install location is _c:\Program Files\nodejs_.

> On macOS, the default Node.js install location is _/usr/local/bin_.

## Further Reading

- [Moonshine IDE documentation](https://moonshine-ide.com/docs/moonshine/)

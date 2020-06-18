---
id: build-web
title: Build a Feathers UI project as an HTML/JS web app
sidebar_label: Web
---

[Feathers UI](/) may be used to build web applications targeting all modern web browsers — supporting both desktop and mobile. Built on top of [OpenFL](https://openfl.org/), Feathers UI components may be rendered using WebGL, Canvas, or the HTML DOM.

## Prerequisites

Follow the standard [Feathers UI installation instructions](./installation.md).

No additional dependencies are required to target HTML/JS.

## Build

To build for the `html5` target, run the following command.

```sh
openfl build html5
```

Use the `-debug` flag to create a build to include extra debugging information that a web browser can use to map exceptions and stack traces back to the original _.hx_ files.

```sh
openfl build html5 -debug
```

The build's output will be written to the _bin/html5/bin_ folder.

> Your [_project.xml_ file](https://lime.software/docs/project-files/xml-format/) may optionally specify an output folder different from _bin_.
>
> ```xml
> <app path="Export"/>
> ```
>
> In the example above, the output would be generated in _Export/html5/bin_ instead.

## Run / Debug

OpenFL provides the `test` command to launch your project using a local web server.

```sh
openfl test html5
```

When the server starts, your project will open in your default web browser. Generally, the server URL will be `http://localhost:3000/`.

> Avoid opening local _.html_ files directly, and always use a local development server. Web browsers impose extra security restrictions on local files that cause them to behave differently than files accessed from a server.

## Deploy

Create a release build, and upload the files in _bin/html5/bin_ to your production web server.

## Troubleshooting

In the future, common error messages and their solutions will appear in this section.

> ### Did you get some other error message that you don't understand?
>
> Configuring OpenFL to build for native targets, like iOS or Android, can be a little tricky! Head over to either the [Feathers UI community forum](https://community.feathersui.com/) or the [Feathers UI Discord](https://discord.feathersui.com/). Explain which command you tried to run, be sure to mention that you are targeting **html5**, and post the error message (and any additional relevant output). Ideally, we can help you figure out a solution, and then we'll also add it to this troubleshooting section, so that everyone can benefit.

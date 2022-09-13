---
title: Cairngorm 1.0 MVC framework for Feathers UI
author: Josh Tynjala
authorURL: https://bowlerhat.dev/
authorTwitter: joshtynjala
authorImageURL: /img/authors/josh.jpg
---

Today, I'm happy to introduce version 1.0 of the new [feathersui-cairngorm](https://github.com/feathersui/feathersui-cairngorm) open source project, which is a port of the Cairngorm MVC framework from [Apache Flex](https://flex.apache.org/) (formerly Adobe Flex) to [Feathers UI](https://feathersui.com/), [Haxe](https://haxe.org/) and [OpenFL](https://openfl.org/).

This is the newest of multiple projects that I'll be releasing as part of the [Feathers UI v1.0 release week celebration](http://feathersui.com/blog/2022/09/01/feathers-ui-version-1-0-haxe-openfl-stable-release/).

![](/blog/img/feathersui-cairngorm-v1.0.0.png)

The original Cairngorm was a very popular MVC microarchitecture for Adobe Flex and ActionScript application development, and it was created by Alistair McLeod and Steven Webster of the company iteration::two. They conceived Cairngorm from their experiences building large, enterprise-scale web applications — which have their own unique and special architectural and maintainability considerations compared to smaller projects.

Cairngorm powered the codebases of hundreds of intranet applications running in major corporations around the world. Many different design-pattern-based [MVC](https://en.wikipedia.org/wiki/Model–view–controller), [IoC](https://en.wikipedia.org/wiki/Inversion_of_control), and other types of architectural frameworks followed in Cairngorm's footsteps, but Cairngorm was the O.G. for many Flex developers.

Some organizations still have Flex apps running that need to migrate to another technology. Many have probably become desktop apps with Adobe AIR these days, or they might even still require Flash Player in a VM. For those who have been putting off the move away from Flex, I hope that this port of the Cairngorm MVC framework for [Feathers UI](https://feathersui.com/) and [OpenFL](https://openfl.org/) will help. Even if you're building all new applications with [Feathers UI](https://feathersui.com/), you might want to consider Cairngorm as an option for organizing your project's code.

## Getting started with feathersui-cairngorm

Check out the [_README.md_](https://github.com/feathersui/feathersui-cairngorm/blob/master/README.md) file for an overview of the classes and interfaces that make up the core of Cairngorm, such as [`IModelLocator`](https://api.feathersui.com/feathersui-cairngorm/current/com/adobe/cairngorm/model/IModelLocator.html), [`FrontController`](https://api.feathersui.com/feathersui-cairngorm/current/com/adobe/cairngorm/control/FrontController.html), [`ICommand`](https://api.feathersui.com/feathersui-cairngorm/current/com/adobe/cairngorm/commands/ICommand.html), [`ServiceLocator`](https://api.feathersui.com/feathersui-cairngorm/current/com/adobe/cairngorm/business/ServiceLocator.html), [`CairngormEventDispatcher`](https://api.feathersui.com/feathersui-cairngorm/current/com/adobe/cairngorm/control/CairngormEventDispatcher.html) and [`CairngormEvent`](https://api.feathersui.com/feathersui-cairngorm/current/com/adobe/cairngorm/control/CairngormEvent.html).

<a href="https://github.com/feathersui/feathersui-cairngorm/tree/master/samples/todomvc" target="_blank"><img src="/blog/img/feathersui-todomvc-sample.png"></a>

Follow that up by diving into the [sample projects on Github](https://github.com/feathersui/feathersui-cairngorm/tree/master/samples) to see how all of the pieces get assembled together. The [_cafe-townsend_ project](https://github.com/feathersui/feathersui-cairngorm/tree/master/samples/cafe-townsend) is a classic Cairngorm example designed to help developers learn the framework. The [_todomvc_ project](https://github.com/feathersui/feathersui-cairngorm/tree/master/samples/todomvc) project is another good one to look at because you can compare it to the Feathers UI [_todomvc_ sample that doesn't use a framework](https://github.com/feathersui/feathersui-openfl/tree/master/samples/todomvc).

## Install Cairngorm v1.0.0 for Feathers UI

Cairngorm v1.0.0 may be installed using the [**haxelib install**](https://lib.haxe.org/documentation/using-haxelib/#install) command in your terminal.

```sh
haxelib install feathersui-cairngorm 1.0.0
```

## Documentation

The [v1.0.0 API Reference](https://api.feathersui.com/feathersui-cairngorm/v1.0.0/) includes descriptions of all APIs available in Cairngorm for Feathers UI.

## Questions or comments?

If you need some help, or want to give feedback, feel free to create a thread in the [Feathers UI Community forum](https://community.feathersui.com/).

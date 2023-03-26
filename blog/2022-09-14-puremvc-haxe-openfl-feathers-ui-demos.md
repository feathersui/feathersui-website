---
title: PureMVC demos for Feathers UI and OpenFL
author: Josh Tynjala
authorURL: https://bowlerhat.dev/
authorTwitter: joshtynjala
authorImageURL: /img/authors/josh.jpg
layout: "blog-post.html"
permalink: "{{ page | blog_permalink }}"
tags: ["blog"]
---

[PureMVC](https://puremvc.org) is an architectural framework built using [Model-View-Controller](https://en.wikipedia.org/wiki/Model–view–controller) and other [software design patterns](https://en.wikipedia.org/wiki/Software_design_pattern) — and you can use it with most popular programming languages (including [Haxe](https://haxe.org/), of course). A team of application developers can use PureMVC to better organize their code, separate concerns, and improve their project's scaleabilty and maintainability.

A [Haxe version of PureMVC](https://github.com/PureMVC/puremvc-haxe-standard-framework) has been around for many years already, so I didn't need to port it myself, like I did recently with the [Cairngorm MVC framework](http://feathersui.com/blog/2022/09/12/feathers-ui-cairngorm-1-0-0-mvc-microarchitecture-framework/). With that in mind, I instead focused on creating several example projects that demonstrate how to use PureMVC specifically with [Feathers UI](https://feathersui.com/) and [OpenFL](https://openfl.org/).

This is just one of many projects/repositories that I'm releasing as part of the [Feathers UI v1.0 release week celebration](http://feathersui.com/blog/2022/09/01/feathers-ui-version-1-0-haxe-openfl-stable-release/).

![](/blog/img/puremvc-haxe-samples-feathers-ui.png)

The repository currently contains four demos:

- [**App Skeleton**](https://github.com/feathersui/puremvc-haxe-feathersui-demos/tree/master/puremvc-haxe-demo-feathersui-appskeleton) demonstrates a startup process for a PureMVC-based application that displays a splash screen with a progress bar that loads several resources.
- [**Cafe Townsend**](https://github.com/feathersui/puremvc-haxe-feathersui-demos/tree/master/puremvc-haxe-demo-feathersui-cafe-townsend) recreates the Cafe Townsend sample from the [Cairngorm MVC framework](http://feathersui.com/blog/2022/09/12/feathers-ui-cairngorm-1-0-0-mvc-microarchitecture-framework/) to allow developers to more easily compare PureMVC to Cairngorm.
- [**TodoMVC**](https://github.com/feathersui/puremvc-haxe-feathersui-demos/tree/master/puremvc-haxe-demo-feathersui-todomvc) demonstrates how to create the classic [TodoMVC](https://todomvc.com) project.
- [**Hello OpenFL**](https://github.com/feathersui/puremvc-haxe-feathersui-demos/tree/master/puremvc-haxe-demo-hello-openfl) demonstrates how to use PureMVC with OpenFL alone (no Feathers UI).

## Install PureMVC

PureMVC may be installed using the [**haxelib install**](https://lib.haxe.org/documentation/using-haxelib/#install) command in your terminal. The following command installs the "standard" version.

```sh
haxelib install puremvc-standard
```

## Documentation

The [PureMVC API Reference](http://puremvc.org/pages/docs/Haxe/standard/docs/index.html) includes descriptions of all APIs available in PureMVC.

## Questions or comments?

If you need some help implementing PureMVC with Feathers UI or OpenFL, feel free to create a thread in either the [Feathers UI Community forum](https://community.feathersui.com/) or the [OpenFL Community forum](https://community.openfl.org/).

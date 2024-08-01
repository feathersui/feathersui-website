---
title: Use Feathers UI with ActionScript 3.0
sidebarTitle: Use with ActionScript 3.0
layout: "docs.html"
---

While Feathers UI is written in the [Haxe programming language](https://haxe.org) and targets [OpenFL](https://openfl.org/), it can be used with [ActionScript 3.0](https://airsdk.dev/docs/development) instead, if you prefer. This allows Feathers UI to be integrated with AS3 projects that target [Adobe AIR](https://airsdk.dev).

## Installation

Visit the [Feathers UI releases](https://github.com/feathersui/feathersui-openfl/releases) page on GitHub, and look for the _.swc_ file attached to the version of Feathers UI that you want to use. The file name should be in the format _feathersui-openfl-x.y.z.swc_ where _x.y.z_ is replaced by the version number, such as _1.3.0_.

You can add this _.swc_ file to the compiler's **library path**, and the Feathers UI classes will be available in your project.

If using the command line compiler, you'd use the `--library-path` compiler option:

```sh
mxmlc --library-path+=libs/feathersui-openfl-x.y.z.swc src/MyProject.as
```

In the various IDEs that support AS3, you can typically add _.swc_ libraries somewhere in your project or module settings.

Before using any Feathers UI classes, and ideally as soon as possible after your app initializes, run the following code:

```as3
haxe.initSwc(null);
```

An ideal place would be in the constructor of your main class. Some things may not work properly if you forget to add this line to your AS3 project.
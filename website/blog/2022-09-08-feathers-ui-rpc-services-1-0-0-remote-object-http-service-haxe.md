---
title: RPC Services 1.0 for Feathers UI
author: Josh Tynjala
authorURL: https://bowlerhat.dev/
authorTwitter: joshtynjala
authorImageURL: /img/authors/josh.jpg
---

Today, I'm happy to introduce version 1.0 of the new [feathersui-rpc-services](https://github.com/feathersui/feathersui-rpc-services) open source project, which is a port of the RPC service classes from [Apache Flex](https://flex.apache.org/) (formerly Adobe Flex) to Feathers UI, [Haxe](https://haxe.org/) and [OpenFL](https://openfl.org/). The available service classes include [`RemoteObject`](https://api.feathersui.com/rpc-services/current/feathers/rpc/remoting/RemoteObject.html) and [`HTTPService`](https://api.feathersui.com/rpc-services/current/feathers/rpc/http/HTTPService.html).

This is the newest of multiple projects that I'll be releasing as part of the [Feathers UI v1.0 release week celebration](http://feathersui.com/blog/2022/09/01/feathers-ui-version-1-0-haxe-openfl-stable-release/).

![](/blog/img/rpc-services-v1.0.0.png)

[`RemoteObject`](https://api.feathersui.com/rpc-services/current/feathers/rpc/remoting/RemoteObject.html) sends and loads typed objects using [AMF (Action Message Format)](). This service enables developers to transfer data using the same types on both server and client. This feature is powered by the [amfio](https://feathersui.com/blog/2022/09/06/amfio-1-0-0-action-message-format-local-shared-object-haxe/) library that I released earlier this week.

[`HTTPService`](https://api.feathersui.com/rpc-services/current/feathers/rpc/http/HTTPService.html) can load various data formats from a server, similar to OpenFL's [`URLLoader`](https://api.openfl.org/openfl/net/URLLoader.html) class. Supported formats include [JSON](https://haxe.org/manual/std-Json-parsing.html), [XML](https://haxe.org/manual/std-Xml-getting-started.html), and [URL query strings](https://en.wikipedia.org/wiki/Query_string). These formats are automatically converted from strings into appropriate types, saving a manual parsing step. JSON is converted to an [anonymous structure](https://haxe.org/manual/types-anonymous-structure.html) with [`haxe.Json.parse()`](https://api.haxe.org/haxe/Json.html#parse). An URL query string is also converted into an anonymous structure, and each variable becomes a field. Finally, XML data can be automatically parsed into one of multiple types. Of course, that includes [`haxe.Xml`](https://api.haxe.org/Xml.html). However, if the XML is formatted in a particular way, it can be converted into an anonymous structure or an array as well.

## Install RPC Services v1.0.0

RPC Services v1.0.0 may be installed using the [**haxelib install**](https://lib.haxe.org/documentation/using-haxelib/#install) command in your terminal.

```sh
haxelib install feathersui-rpc-services 1.0.0
```

## Documentation

The [v1.0.0 API Reference](https://api.feathersui.com/rpc-services/v1.0.0/) includes descriptions of all APIs available in Feathers UI RPC Services.

## Questions or comments?

If you need some help, or want to give feedback, feel free to create a thread in either the [Feathers UI Community forum](https://community.feathersui.com/) or the [OpenFL Community forum](https://community.openfl.org/).

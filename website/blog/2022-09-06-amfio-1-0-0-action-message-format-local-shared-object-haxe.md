---
title: amfio 1.0 — AMF0/AMF3 and SharedObject library for OpenFL
author: Josh Tynjala
authorURL: https://bowlerhat.dev/
authorTwitter: joshtynjala
authorImageURL: /img/authors/josh.jpg
---

Today, I'm happy to introduce version 1.0 of the new [amfio](https://github.com/feathersui/amfio) open source project, which allows reading and writing AMF data using the [`ByteArray`](https://api.openfl.org/openfl/utils/ByteArray.html) class from [OpenFL](https://openfl.org/).

This is the first of many projects that I'll be releasing as part of the [Feathers UI v1.0 release week celebration](http://feathersui.com/blog/2022/09/01/feathers-ui-version-1-0-haxe-openfl-stable-release/).

![](/blog/img/amfio-v1.0.0.png)

The AMF I/O library aims to be the best and most complete implementation of the [AMF (Action Message Format)](https://en.wikipedia.org/wiki/Action_Message_Format) specification for OpenFL. For those who might not be aware, AMF0 and AMF3 are binary formats that were originally developed for Adobe Flash Player to transfer data between client and server. AMF can serialize objects in a more compact way than common plain text data formats, like JSON or XML, which means that sending AMF data over a network requires less bandwidth.

Additionally, the library includes the ability to read and write [Flash Local Shared Object _(.sol)_ files](https://en.wikipedia.org/wiki/Local_shared_object), commonly known as "Flash cookies". This file format stores serialized objects using AMF serialization. The same `SharedObject` API from Flash Player is also available in Adobe AIR, which is used to create desktop and mobile apps. Developers building apps with AIR commonly used Local Shared Objects to store application settings and other important data. The included `SolReader` and `SolWriter` classes should be considered especially useful for migrating Adobe AIR app Local Shared Object data to Haxe and OpenFL.

### Other ways of using AMF

#### Remote objects

Backend services that understand AMF can be used to transfer strongly typed objects that exist both server-side and client-side. A `RemoteObject` service on the frontend is used to call backend methods with typed parameters and to receive typed results back.

> See [feathersui-rpc-services](http://feathersui.com/blog/2022/09/08/feathers-ui-rpc-services-1-0-0-remote-object-http-service-haxe/) for a `RemoteObject` service implementation based on amfio for OpenFL and Feathers UI

Common backend libraries for passing remote objects include [BlazeDS](https://github.com/apache/flex-blazeds), and [AMFPHP](https://github.com/silexlabs/amfphp-2.0), and there are similar implementations available for many other languages too.

#### Streaming media

AMF is also used as part of [RTMP (Real Time Messaging Protocol)](https://en.wikipedia.org/wiki/Real_Time_Messaging_Protocol) for communicating with streaming media servers. RTMP not only uses AMF to reduce required bandwidth, it also keeps a persistent connection open to reduce latency.

Common backends supporting RTMP communication include the proprietary [Adobe Flash Media Server](https://en.wikipedia.org/wiki/Adobe_Media_Server) and the open source [Red5 server](https://github.com/Red5/red5-server).

### What about the Haxe "format" library?

The Haxe [_format_](https://github.com/HaxeFoundation/format) library includes support for a number of common data formats, including AMF. It's a really useful library for Haxe developers. In fact, the [`ByteArray.readObject()`](https://api.openfl.org/openfl/utils/ByteArray.html#readObject) and [`ByteArray.writeObject()`](https://api.openfl.org/openfl/utils/ByteArray.html#writeObject) APIs in OpenFL currently use the _format_ library internally, when AMF0/AMF3 [`objectEncoding`](https://api.openfl.org/openfl/utils/ByteArray.html#objectEncoding) is specified. However, the implementation of AMF0/AMF3 in the _format_ library is missing certain AMF features that prevent it from supporting all AMF use-cases.

In particular, it cannot handle serializing [class instances](https://haxe.org/manual/types-class-instance.html) — forcing the use of simpler [anonymous structures](https://haxe.org/manual/types-anonymous-structure.html) instead of stricter/stronger typing. It also cannot handle references to duplicate strings or objects (a key feature for reducing data transfer size). In certain cases, data that should be ideally deserialized as an `Array` might instead become an anonymous structure with integer index values stored as string keys instead (which makes porting existing code to Haxe a bit more tedious).

## Install amfio v1.0.0

amfio v1.0.0 may be installed using the [**haxelib install**](https://lib.haxe.org/documentation/using-haxelib/#install) command in your terminal.

```sh
haxelib install amfio 1.0.0
```

## Documentation

The [v1.0.0 API Reference](https://api.feathersui.com/amfio/v1.0.0/) includes descriptions of all APIs available in amfio.

## Questions or comments?

If you need some help, or want to give feedback, feel free to create a thread in either the [Feathers UI Community forum](https://community.feathersui.com/) or the [OpenFL Community forum](https://community.openfl.org/).

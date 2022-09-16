---
title: What a journey! The conclusion of Feathers UI v1.0 Release Week
author: Josh Tynjala
authorURL: https://bowlerhat.dev/
authorTwitter: joshtynjala
authorImageURL: /img/authors/josh.jpg
---

We've finally reached the conclusion of what I've been calling _Feathers UI Release Week_. In fact, it's been **two** full weeks of celebration. It all started out with the big release of [Feathers UI v1.0](http://feathersui.com/blog/2022/09/01/feathers-ui-version-1-0-haxe-openfl-stable-release/), a cross platform GUI library for creative frontend projects, built on [Haxe](https://haxe.org/) and [OpenFL](https://openfl.org/). Then, I released a total of _nine_ new open source projects/repos to support not only [Feathers UI](https://feathersui.com/), but also the wider [OpenFL](https://openfl.org/) ecosystem.

![](/blog/img/feathers-ui-release-week-done.png)

Want to check out those new open source projects? Here's a summary:

- [**AMF I/O**](https://feathersui.com/blog/2022/09/06/amfio-1-0-0-action-message-format-local-shared-object-haxe) is a library that aims to be the best and most complete implementation of the AMF (Action Message Format) specification for OpenFL. It also supports reading and writing Flash local shared object files.
- [**Lime and OpenFL Plugin for Maven**](https://feathersui.com/blog/2022/09/07/lime-openfl-maven-plugin-1-0-0) makes it possible to build OpenFL and Feathers UI projects with Maven, a popular build tool in the Java ecosystem.
- [**RPC Services**](https://feathersui.com/blog/2022/09/08/feathers-ui-rpc-services-1-0-0-remote-object-http-service-haxe) provides Remote Object and HTTP services, ported from Apache Flex and Royale. It uses the previously mentioned AMF I/O library as the basis for its `RemoteObject` implementation, which allows server and client to share the same typed objects.
- [**OpenFL Loader for Webpack**](https://feathersui.com/blog/2022/09/09/webpack-openfl-loader-plugin-1-0-0) makes it possible to bundle OpenFL HTML/JS projects using the popular Webpack build tool from the JS/web ecosystem. Supports tree shaking and code splitting with the Haxe Genes library to dynamically load modules at runtime.
- [**Cairngorm for Feathers UI**](https://feathersui.com/blog/2022/09/12/feathers-ui-cairngorm-1-0-0-mvc-microarchitecture-framework) provides an MVC microarchitecture for organizing and maintaining large scale applications.
- [**OpenFL Plugin for Vite**](https://feathersui.com/blog/2022/09/13/vite-openfl-plugin-1-0-0) allows bundling OpenFL HTML/JS projects using the relatively new Vite build tool from the JS/web ecosystem. Similar to the Webpack loader, it supports code splitting, tree shaking, and dynamic module loading.
- [**PureMVC Demos for Feathers UI and OpenFL**](https://feathersui.com/blog/2022/09/14/puremvc-haxe-openfl-feathers-ui-demos) provides several demo projects that show how to use Feathers UI with the PureMVC framework.
- [**Form Validators for Feathers UI**](https://feathersui.com/blog/2022/09/15/feathers-ui-form-validators-1-0-0-haxe) offers several form validation classes for numbers, dates, email address, zip codes, currency, phone numbers, string length, and more.
- [**String Formatters for Feathers UI**](https://feathersui.com/blog/2022/09/16/feathers-ui-string-validators-1-0-0-haxe) makes it possible to format numbers, dates, zip codes, and currency as strings with appropriate separators/delimiters.

It's been quite a journey, and I'd like to thank everyone who has supported the project over the last few years as I converted from AS3/Starling to Haxe/OpenFL. Now, I guess it's time to start planning the _next_ exciting release…

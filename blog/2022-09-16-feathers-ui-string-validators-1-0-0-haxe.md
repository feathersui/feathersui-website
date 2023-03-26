---
title: String Formatters 1.0 for Feathers UI
author: Josh Tynjala
authorURL: https://bowlerhat.dev/
authorTwitter: joshtynjala
authorImageURL: /img/authors/josh.jpg
layout: "blog-post.html"
permalink: "{{ page | blog_permalink }}"
tags: ["blog"]
---

Today, I'm happy to introduce version 1.0 of the new [feathersui-formatters](https://github.com/feathersui/feathersui-formatters) open source project, which is a port of the string formatting classes from [Apache Flex](https://flex.apache.org/) (formerly Adobe Flex) to [Feathers UI](https://feathersui.com/), [Haxe](https://haxe.org/) and [OpenFL](https://openfl.org/).

This is the newest of multiple projects that I'll be releasing as part of the [Feathers UI v1.0 release week celebration](http://feathersui.com/blog/2022/09/01/feathers-ui-version-1-0-haxe-openfl-stable-release/).

![](/blog/img/feathersui-formatters-v1.0.0.png)

The following formatter classes are included in the library:

- [`CurrencyFormatter`](https://api.feathersui.com/formatters/current/feathers/formatters/CurrencyFormatter.html) formats a numeric monetary value, including the currency symbol (such as `$` or `€`) and appropriate precision for things like cents/pence.
- [`DateFormatter`](https://api.feathersui.com/formatters/current/feathers/formatters/DateFormatter.html) formats a date string with a specific pattern.
- [`NumberFormatter`](https://api.feathersui.com/formatters/current/feathers/formatters/NumberFormatter.html) formats a numeric value, including support for thousands separator, decimal separator, precision, and negative values.
- [`PhoneFormatter`](https://api.feathersui.com/formatters/current/feathers/formatters/PhoneFormatter.html) formats a phone number with the appropriate separators/delimiters.
- [`ZipCodeFormatter`](https://api.feathersui.com/formatters/current/feathers/formatters/ZipCodeFormatter.html) formats a US or Canadian postal code.

## Install String Formatters v1.0.0 for Feathers UI

Form Validators v1.0.0 may be installed using the [**haxelib install**](https://lib.haxe.org/documentation/using-haxelib/#install) command in your terminal.

```sh
haxelib install feathersui-formatters 1.0.0
```

## Documentation

The [v1.0.0 API Reference](https://api.feathersui.com/formatters/v1.0.0/) includes descriptions of all APIs available in Form Validators for Feathers UI.

## Questions or comments?

If you need some help, or want to give feedback, feel free to create a thread in the [Feathers UI Community forum](https://community.feathersui.com/).

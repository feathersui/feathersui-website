---
title: Form Validators 1.0 for Feathers UI
author: Josh Tynjala
authorURL: https://bowlerhat.dev/
authorImageURL: /img/authors/josh.jpg
layout: "blog-post.html"
permalink: "{{ page | blog_permalink }}"
tags: ["blog"]
---

Today, I'm happy to introduce version 1.0 of the new [feathersui-validators](https://github.com/feathersui/feathersui-validators) open source project, which is a port of the form validation classes from [Apache Flex](https://flex.apache.org/) (formerly Adobe Flex) to [Feathers UI](https://feathersui.com/), [Haxe](https://haxe.org/) and [OpenFL](https://openfl.org/).

This is the newest of multiple projects that I'll be releasing as part of the [Feathers UI v1.0 release week celebration](http://feathersui.com/blog/2022/09/01/feathers-ui-version-1-0-haxe-openfl-stable-release/).

![](/blog/img/feathersui-validators-v1.0.0.png)

The following validator classes are included in the library:

- [`CreditCardValidator`](https://api.feathersui.com/validators/current/feathers/validators/CreditCardValidator.html) verifies Visa, MasterCard, AMEX, Discover, and Diner's Card numbers.
- [`CurrencyValidator`](https://api.feathersui.com/validators/current/feathers/validators/CurrencyValidator.html) validates the formatting of a numeric monetary value, including the currency symbol (such as `$` or `€`) and appropriate precision for things like cents/pence.
- [`DateValidator`](https://api.feathersui.com/validators/current/feathers/validators/DateValidator.html) validates a date value, including month, day, and year, to ensure that all parts are in the correct ranges and the specified formatting order.
- [`EmailValidator`](https://api.feathersui.com/validators/current/feathers/validators/EmailValidator.html) validates an email address.
- [`NumberValidator`](https://api.feathersui.com/validators/current/feathers/validators/NumberValidator.html) validates a numeric value, including support for thousands separator, decimal separator, precision, and negative values.
- [`PhoneNumberValidator`](https://api.feathersui.com/validators/current/feathers/validators/PhoneNumberValidator.html) validates 10 digit phone numbers, including formatting characters.
- [`RegExpValidator`](https://api.feathersui.com/validators/current/feathers/validators/RegExpValidator.html) is the most versitile, allowing the custom validation using regular expressions.
- [`SocialSecurityValidator`](https://api.feathersui.com/validators/current/feathers/validators/SocialSecurityValidator.html) validates the formatting of a US social security number.
- [`StringValidator`](https://api.feathersui.com/validators/current/feathers/validators/StringValidator.html) ensures that a string meets minium and maximum length requirements.
- [`ZipCodeValidator`](https://api.feathersui.com/validators/current/feathers/validators/ZipCodeValidator.html) validates US and Canadian postal codes (and it can optionally allow both at the same time).

All validators have the option to make a value required, or to optionally allow an empty value.

## Install Form Validators v1.0.0 for Feathers UI

Form Validators v1.0.0 may be installed using the [**haxelib install**](https://lib.haxe.org/documentation/using-haxelib/#install) command in your terminal.

```sh
haxelib install feathersui-validators 1.0.0
```

## Documentation

The [v1.0.0 API Reference](https://api.feathersui.com/validators/v1.0.0/) includes descriptions of all APIs available in Form Validators for Feathers UI.

## Questions or comments?

If you need some help, or want to give feedback, feel free to create a thread in the [Feathers UI Community forum](https://community.feathersui.com/).

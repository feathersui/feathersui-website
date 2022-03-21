---
title: Feathers UI semantic versioning
sidebar_label: Semantic versioning
---

[Feathers UI](/) aims to follow [semantic versioning](https://semver.org/spec/v2.0.0.html) for all [public APIs](#public-apis), meaning that all updates will follow these basic guidelines:

- Breaking changes must be limited to major version updates.
- New features that don't break backwards compatibility may be included in either major or minor version updates.
- A patch update must contain only bug fixes that are backwards compatible.

## Public APIs

Any type (class, interface, enum) or member (method, field, property) that is documented in the [Feathers UI API reference](https://api.feathersui.com/) is considered to be a _public API_. In this sense, it is not necessarily required for an API to use the `public` access modifier. Any API could be considered a public API, even if it uses the `private` access modifier, as long as it is documented.

## Internal APIs

If an API is undocumented, it isn't consided a public API, and it should be treated as internal implementation detail. These _internal APIs_ are subject to change in any type of update, without notice or deprecation. Call or override undocumented APIs at your own risk.

If you believe that any internal API should be upgraded to become a public API, please submit a [feature request](https://github.com/feathersui/feathersui-openfl/issues/new) with a detailed explanation of how and why you want to use it.

## Beta APIs

If a new public API is added, it may be marked as a _beta API_, meaning that it is not yet subject to the guidelines of semantic versioning. Breaking changes in beta APIs may not be limited to only major updates. They may also be included in minor updates too. When an API is upgraded to no longer be considered beta, that's when it will start being subject to semantic versioning.

## Deprecation

When a public API is subject to removal, it must first be _deprecated_. When an API is deprecated, the compiler or IDE will typically display a warning message about this change of status, which will give some kind of hint about how code should be updated. Generally, a replacement API will be made available, and it will be possible to switch to the replacement API before the next major version, when the deprecated API will be removed completely.

## Members of beta or deprecated types

If a type, such as a `class`, `interface`, or `enum`, is considered to be _deprecated_ or _beta_, all of its members (such as methods, fields, or properties) will have the same status.

## Example

Lets say that a public property named `oldAndBusted` is deprecated in version 1.1, in favor of its replacement, an improved public property named `newHotness`. Both `oldAndBusted` and `newHotness` will exist side by side in all future 1.x.y minor and patch updates. The compiler will display a deprecation notice when `oldAndBusted` is referenced in code, and this notice will encourage developers to migrate to `newHotness`. When verison 2.0 is released, `oldAndBusted` will be removed, and all developers will be required to migrate to `newHotness`.

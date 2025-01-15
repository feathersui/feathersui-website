---
title: Feathers deprecation policy (AS3/Starling version)
layout: "docs.html"
sidebarTitle: Deprecation policy
---

From version 1.0 forward, major API modifications to Feathers will not be common. If an API ever needs to be replaced by something new, both the old and new versions will live side by side for a short period of time. The old API will be obviously marked as deprecated in the documentation, and you will be urged to migrate as soon as possible to the new version of the API.

Deprecated APIs will not stay in Feathers forever. Currently, Feathers will support a deprecated API for at least six months time, and for two minor version number updates. Whichever takes longer.

## Example

If an API is deprecated in version 1.1, it will continue to exist side by side with the new version of the API in version 1.2. It will be clearly marked as deprecated in both 1.1 and 1.2, and you will be encouraged to migrate early. In 1.3, as long as it has been at least six months since 1.1 was released, the deprecated API may be removed. It will be clearly marked in the release notes for 1.3 that the deprecated API has been removed, and you must to migrate to the new API with this version. If it hasn't been six months by the time that version 1.3 is released, then the deprecated API won't be removed until a later version after the full six months has passed.

## Why?

A lot of software projects have a more conservative stance on deprecated APIs. Those APIs may stick around until the next major version update, or even longer. Feathers evolves more quickly. With only one primary developer, a smaller API surface without too much baggage from old APIs is essential. Feathers won't break APIs immediately because that's a pain for everyone, but the "two minor versions or six months" rule should be fair enough to keep Feathers feeling stable.

## Interfaces

Functions that are to be removed from interfaces will follow the deprecation rules defined above.

From time to time, new functions may need to be added to existing interfaces. If possible, a new interface will be included that extends the original interface. However, it may not make any sense to do it this way, and the new function may need to be added to the original interface. Unfortunately, in this case, compiler errors will result from upgrading to the new version. To ease the transition to the new version, a default implementation of the new functionality will be provided that mimics the old behavior as closely as possible. Check the release notes for details.

## Major Versions

Major versions are not subject to the same rules as above. There will be no guaranteed deprecation period if a new major version of Feathers is released. For instance, if you are upgrading from 1.x to 2.x, some APIs may be completely removed or renamed without warning.

## Ports

If Feathers is ever officially ported to another language or runtime, the port will be subject to the same rules as a major version update. In other words, the APIs may be subject to major changes without deprecating anything.

## Exceptions

In cases where it is impossible for both a deprecated API and its replacement to live side by side, the deprecated API will be removed immediately. The release notes will include a section with detailed migration instructions that explain how to use the replacement API.

In general, this option will only be used if it is expected that there will be no impact on the majority of Feathers projects. In other words, it is only possible to replace an API immediately without a deprecation period if it is not used frequently. For frequently used APIs, replacement will need to wait until the next major version.
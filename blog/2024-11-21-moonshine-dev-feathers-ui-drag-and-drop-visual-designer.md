---
title: Moonshine.dev introduces a Feathers UI drag-and-drop visual designer and MXHX markup
author: Josh Tynjala
authorURL: https://bowlerhat.dev/
authorImageURL: /img/authors/josh.jpg
layout: "blog-post.html"
permalink: "{{ page | blog_permalink }}"
tags: ["blog"]
ogDescription: Design GUIs with Feathers UI and MXHX
ogImageURL: /blog/img/moonshine-dev-og.png
---

After many months of collaboration with the Moonshine IDE team, I'm excited to help introduce their new project, [Moonshine.dev](https://moonshine.dev). In particular, I'd love for you to take a moment to try out Moonshine.dev's visual form designer. You can drag-and-drop Feathers UI controls into the design view, with the ability to move them around and resize them, add them into nested containers, apply layouts with pixel- and percentage-based sizing, and edit properties and styles.

The Moonshine.dev visual designer produces an XML format that I've named [MXHX](https://mxhx.dev/). This new markup format is inspired by MXML from Adobe Flex, I've enhanced it for the [Haxe](https://haxe.org/) language and its core types. I'm hoping that developers working with Feathers UI find MXHX to be an intuitive and powerful way to develop GUIs, especially when using this visual designer so that you can switch back and forth between code and design views with ease.

<a href="https://moonshine.dev/"><img src="/blog/img/moonshine-dev-og.png"></a>


## Getting code generation right!

One of the most important things that I personally focused on during my time developing this visual designer was how it behaves when editing existing MXHX code. My goal with MXHX is to ensure it can be read and modified by both humans and computers. If a human has formatted an MXHX document a particular way, I don't want the visual designer in Moonshine.dev to mess that up when inserting new content or changing properties.

Consider the following example where a developer chose to indent the properties of a `Label` component so that they all align:

```xml
<f:Label alpha="0.8"
         id="label"
         text="Hello World"/>
```

<div style="text-align:center;"><img src="/blog/img/moonshine-dev-edit-label-text.png" height="180"></div>

If you edit the `text` property in the visual designer, you don't want your code to suddenly get reformatted like this:

```xml
<f:Label alpha="0.8" id="label" text="New Text"/>
```

You want it to keep each attribute on a separate line with the same indentation. The visual designer's algorithms ensure that it doesn't mess up your preferred formatting, and even keeps it going when inserting new lines.

```xml
<f:Label alpha="0.8"
         id="label"
         text="New Text"/>
```

The internal memory representation of an MXHX document includes all whitespace, such as indentation and line breaks between tags and attributes, plus all extra things that don't necessarily affect the component's behavior, like comments. Moonshine.dev's visual form designer modifies the document in memory, detecting indentation on the previous or next line and adjusting whitespace as needed when inserting or removing content.

I always thought that Adobe's Flex Builder had very well-behaved code generation in its visual designer, and I spent a lot of time observing how it change the XML when dropping new components in and editing properties in the GUI. The MXHX editing algorithms that I wrote for Moonshine.dev have a ton of unit tests and cover way more edge cases than I ever expected – ensuring that I and other future contributors keep the visual editor's behavior stable and predictable.

## What's next for MXHX and Moonshine.dev?

Now that the first version of Moonshine.dev has been released publicly, I'm going to start putting the finishing touches on the first official releases of all the MXHX libraries for Haxe. There's quite a few, actually — doing various tasks from parsing XML that may not necessarily be completely valid, resolving symbols like classes and fields from MXHX tags and attributes, generating Haxe code with macros, and even parsing raw MXHX strings on-the-fly at run-time. There's even a language server under development so that editors can provide MXHX code intelligence!

Stay tuned for more updates and more detailed information about MXHX. Until then, you can visit the website [mxhx.dev](https://mxhx.dev/) for the preliminary documentation that will help you get started creating GUIs with MXHX and Feathers UI.

When you try [Moonshine.dev](https://moonshine.dev/), hopefully you won't run into any bugs or issues, but if you do, please be sure to [submit bug reports and any other feedback you have](https://moonshine-ide.topicbox.com/groups/ide) to the Moonshine.dev team. If anything seems difficult to find, or there's a killer feature that you're missing, please drop us a line because our goal is to make Moonshine.dev the best form builder out there for cross-platform GUIs.
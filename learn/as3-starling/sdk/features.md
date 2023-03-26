---
title: Feathers SDK Features (Starling version)
layout: "docs.html"
sidebarTitle: SDK Features
---

The Feathers SDK offers everything you need to build [Feathers](https://feathersui.com/) applications using [MXML](./mxml.md) and [ActionScript 3](https://www.adobe.com/devnet/actionscript/articles/actionscript3_overview.html), including compilers and user interface components, in one open source package.

## Overview

- Use [MXML](./mxml.md) to declaratively create user interfaces and layouts faster than using ActionScript.

- Compatible with popular IDEs, including [Adobe Flash Builder](./flash-builder.md), [IntelliJ IDEA](./intellij-idea.md), and [Visual Studio Code](./visual-studio-code.md).

- Built on top of [Feathers](https://feathersui.com/), [Starling Framework](http://gamua.com/starling), and a fork of the [Apache Flex SDK](http://flex.apache.org/). Targets Adobe AIR and Flash Player.

- Open source under the terms of the [Apache license, version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

- Funded by the community. Special thanks to [YETi CGI](http://yeticgi.com/).

## MXML

The following examples demonstrate a few key features in [MXML](./mxml.md):

- Add children and describe layouts with intuitive XML nesting.

  ```xml
  <f:LayoutGroup>
  	<f:layout>
  		<f:HorizontalLayout/>
  	</f:layout>

  	<f:Slider/>
  	<f:Label/>
  </f:LayoutGroup>
  ```

- Set properties and listen to events as XML attributes.

  ```xml
  <f:Slider minimum="0" maximum="100" change="slider_changeHandler(event)"/>
  ```

- Reference MXML components in embedded ActionScript by giving them an ID.

  ```xml
  <f:Slider id="slider" change="slider_changeHandler(event)"/>
  <fx:Script><![CDATA[

  	private function slider_changeHandler(event:Event):void
  	{
  		trace("slider value changed! " + this.slider.value);
  	}

  ]]></fx:Script>
  ```

- Bind components to properties with simple curly brace syntax.

  ```xml
  <f:Slider id="slider"/>
  <f:Label text="{slider.value}"/>
  ```

For more MXML features, see [The complete guide to MXML in the Feathers SDK](./mxml.md):

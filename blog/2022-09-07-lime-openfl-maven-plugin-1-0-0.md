---
title: Lime and OpenFL Maven Plugin 1.0
author: Josh Tynjala
authorURL: https://bowlerhat.dev/
authorTwitter: joshtynjala
authorImageURL: /img/authors/josh.jpg
layout: "blog-post.html"
permalink: "{{ page | blog_permalink }}"
tags: ["blog"]
---

[Apache Maven](https://maven.apache.org) is a very popular build tool in the Java ecosystem, and organizations that use Maven may want to integrate an [OpenFL](https://openfl.org/) or [Feathers UI](https://feathersui.com/) frontend into their existing build process. With that in mind, today, I'm releasing a new [Lime & OpenFL Maven Plugin](https://github.com/feathersui/lime-openfl-maven-plugin).

This is just one of many projects that I'm releasing as part of the [Feathers UI v1.0 release week celebration](http://feathersui.com/blog/2022/09/01/feathers-ui-version-1-0-haxe-openfl-stable-release/).

![](/blog/img/lime-openfl-maven-plugin-v1.0.0.png)

The Lime & OpenFL Maven plugin supports the following actions:

- It will either detect your existing [_project.xml_](https://lime.openfl.org/docs/project-files/xml-format/) file, or it can automatically generate one using a new [`<limeProject>`](https://feathersui.github.io/lime-openfl-maven-plugin/apidocs/index.html) parameter configured in your Maven _pom.xml_ file.
- The plugin installs any Haxelib libraries specified in _project.xml_ or _pom.xml_.
- It can execute the `lime build` command for the specified target (such as `html5`, `hl`, `android`, etc.) to compile your project.
- It can detect [utest](https://lib.haxe.org/p/utest) test cases and generate a runner class for them.
- It can build and launch the test runner, including detecting whether the tests passed or failed.

## Using lime-openfl-maven-plugin v1.0.0

lime-openfl-maven-plugin v1.0.0 may added to your [Maven _pom.xml_ file](https://maven.apache.org/guides/introduction/introduction-to-the-pom.html).

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>com.example</groupId>
  <artifactId>example-lime-project</artifactId>
  <version>1.0.0-SNAPSHOT</version>
  <packaging>lime-openfl</packaging>

  <build>
    <plugins>
      <plugin>
        <groupId>com.feathersui.maven.plugins</groupId>
        <artifactId>lime-openfl-maven-plugin</artifactId>
        <version>1.0.0</version>
        <extensions>true</extensions>
      </plugin>
    </plugins>
  </build>
</project>
```

The plugin will automatically detect your [_project.xml_](https://lime.openfl.org/docs/project-files/xml-format/) file. See the documentation if you'd like to generate one automatically using the [`<limeProject>`](https://feathersui.github.io/lime-openfl-maven-plugin/apidocs/index.html) parameter in _pom.xml_.

To build your project, run the following command in a terminal:

```sh
mvn compile
```

To compile and launch the tests, run this command:

```sh
mvn test
```

You may find [a few sample projects on Github](https://github.com/feathersui/lime-openfl-maven-plugin/tree/v1.0.0/samples).

## Documentation

The [API Reference](https://feathersui.github.io/lime-openfl-maven-plugin/apidocs/index.html) includes descriptions of all APIs available in lime-openfl-maven-plugin.

## Questions or comments?

If you need some help, or want to give feedback, feel free to create a thread in either the [Feathers UI Community forum](https://community.feathersui.com/) or the [OpenFL Community forum](https://community.openfl.org/).

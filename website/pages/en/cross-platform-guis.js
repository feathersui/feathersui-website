const React = require("react");
const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const CrossPlatform = (props) => {
  const { config: siteConfig, language = "" } = props;
  const { baseUrl, docsUrl } = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
  const langPart = `${language ? `${language}/` : ""}`;
  const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

  const Block = (props) => (
    <Container
      padding={["bottom", "top"]}
      id={props.id}
      background={props.background}
    >
      <GridBlock
        align={props.align}
        contents={props.children}
        layout={props.layout}
      />
    </Container>
  );

  const Mobile = () => (
    <Block layout="twoColumn" align="left">
      {[
        {
          title: "Mobile",
          content: `
Build native apps for **iOS** and **Android**. Compiled to C++ native code and GPU accelerated — for smooth performance. Fully supports multitouch and any screen resolution and form-factor, including both phones and tablets.
`,
          image: `/img/undraw_Mobile_application_mr4r.svg`,
          imageAlign: "left",
        },
      ]}
    </Block>
  );

  const Desktop = () => (
    <Block layout="twoColumn" align="left">
      {[
        {
          title: "Desktop",
          content: `
Build native programs for **Windows**, **macOS**, and **Linux**. Compiled to C++ native code and GPU accelerated — for smooth performance. Fully supports mouse and keyboard interaction (plus desktop monitors capable of multitouch).
`,
          image: `/img/undraw_responsive_6c8s.svg`,
          imageAlign: "right",
        },
      ]}
    </Block>
  );

  const Web = () => (
    <Block layout="twoColumn" align="left">
      {[
        {
          title: "Web",
          content: `
Build **single-page web applications** (SPAs) that run in both mobile and desktop browsers. Compiled to JavaScript with smooth performance from hardware-accelerated WebGL. Includes fallback to HTML Canvas on devices where WebGL is unsupported.
`,
          image: `/img/undraw_static_website_0107.svg`,
          imageAlign: "left",
        },
      ]}
    </Block>
  );

  const Haxe = () => (
    <Block layout="twoColumn" align="left">
      {[
        {
          title: "The Haxe programming language",
          content: `
Developers can target many operating systems and devices thanks to <a href="https://haxe.org/">Haxe</a>, a flexible, powerful, and modern programming language. Haxe is strictly-typed, easy to learn, and runs basically everywhere.

<div class="buttonWrapper">
  <a class="button" href="https://haxe.org/">Discover Haxe →</a>
</div>`,
          image: `/img/haxe-logo.svg`,
          imageAlign: "right",
        },
      ]}
    </Block>
  );

  const OpenFL = () => (
    <Block layout="twoColumn" align="left">
      {[
        {
          title: "OpenFL",
          content: `
The [OpenFL](https://openfl.org/) library provides APIs for vector and bitmap graphics rendering, text layout, filter and blend mode effects, networking, user input with mouse, touch, and keyboard, an event system, and asset management. At the core of OpenFL is the display list, its scene graph that groups objects together in an intuitive parent-child hierarchy.

<div class="buttonWrapper">
  <a class="button" href="${docUrl(
    "haxe-openfl/openfl-intro"
  )}">Intro to OpenFL →</a>
</div>`,
          image: `/img/openfl.png`,
          imageAlign: "left",
        },
      ]}
    </Block>
  );

  const FeathersUI = () => (
    <Block layout="twoColumn" align="left">
      {[
        {
          title: "Build cross-platform GUIs with Feathers UI",
          content: `
Create stunning, GPU-accelerated user interfaces on a variety of platforms — including mobile, desktop, and web browsers.

<div class="buttonWrapper">
  <a class="button" href="${docUrl(
    "haxe-openfl/getting-started"
  )}">Get Started</a>
  <a
  class="button quietButton"
    href="${docUrl("haxe-openfl/installation")}"
  >
    Download →
  </a>
</div>
`,
          image: `/img/cross-platform.png`,
          imageAlign: "right",
        },
      ]}
    </Block>
  );

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Cross-platform GUI development with Feathers UI</h1>
            <p>
              With <a href="/">Feathers UI</a>, developers can target a variety
              of platforms — including mobile phones and tablets, desktop
              computers, and web browsers on all types of devices.
            </p>
          </header>
          <Mobile />
          <Desktop />
          <Web />
          <h1>
            How does Feathers UI work so well on all of these different
            platforms?
          </h1>
          <p>
            The <a href="/">Feathers UI</a> framework is built on a solid
            foundation of technology optimized for cross-platform development.
          </p>
          <Haxe />
          <OpenFL />
          <FeathersUI />
        </div>
      </Container>
    </div>
  );
};
CrossPlatform.title = "Cross-platform GUI development";

module.exports = CrossPlatform;

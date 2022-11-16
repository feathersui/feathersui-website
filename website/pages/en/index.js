const React = require("react");
const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = "" } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = (props) => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = (props) => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = (props) => (
      <div className="buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <img
            className="heroImage"
            src="/img/hero-themes.png"
            alt="Three versions of the same app with different visual appearances"
          />
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl("haxe-openfl/getting-started")}>
              Get Started
            </Button>
            <div className="buttonWrapper">
              <a
                className="button quietButton"
                href={docUrl("haxe-openfl/installation")}
              >
                Download →
              </a>
            </div>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = "" } = this.props;
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

    const Features = () => (
      <Block layout="threeColumn" align="left">
        {[
          {
            title: "Dozens of UI controls",
            content: `
Mix and match a variety of UI components, including buttons, sliders, toggles, scrolling lists, layout containers, navigators, and more.

[See all UI components →](${docUrl("haxe-openfl/ui-components")})
`,
            image: `${baseUrl}img/undraw_product_teardown_elol.svg`,
            imageAlign: "top",
          },
          {
            title: "Cross-platform",
            content: `
Build stunning, GPU-accelerated user interfaces on a variety of platforms — including mobile devices, desktop computers, and web browsers.

[Available platforms →](/cross-platform-guis/)
`,
            image: `${baseUrl}img/cross-platform.png`,
            imageAlign: "top",
          },
          {
            title: "Styles and themes",
            content: `
Match your designer's requirements with a flexible styling system that supports bitmap and vector graphics, filters, blend modes, and more.

[Get inspired by the app showcase →](/showcase/)`,
            image: `${baseUrl}img/undraw_making_art_759c.svg`,
            imageAlign: "top",
          },
        ]}
      </Block>
    );

    const OpenSource = () => (
      <Block background="light">
        {[
          {
            title: "Free and open source",
            content: `
The core Feathers UI library — with dozens of user interface controls — doesn't cost anything. Everyone has access to the complete source code to read, customize, share, and extend.

- Full access to the framework internals and architecture
- MIT-licensed — Use in both commercial and open source projects
- Fork and submit pull requests on Github

[Go to Github project →](https://github.com/feathersui/feathersui-openfl)`,
            image: `${baseUrl}img/undraw_code_typing_7jnv.svg`,
            imageAlign: "left",
          },
        ]}
      </Block>
    );

    const Install = () => {
      return (
        <Block layout="twoColumn" align="left">
          {[
            {
              title: "Quick Start",
              content: `
First, install [Haxe](https://haxe.org/download/). Then, run the following commands in a terminal.

\`\`\`sh
haxelib install feathersui
haxelib run openfl setup
\`\`\`

To create your first project, run the next command.

\`\`\`sh
haxelib run feathersui new-project MyFirstProject
\`\`\`

To build and launch in a web browser, run the next command inside your project folder.

\`\`\`sh
openfl test html5
\`\`\`

If you prefer, create a project in [Visual Studio Code](${docUrl(
                "haxe-openfl/visual-studio-code"
              )}), [HaxeDevelop](${docUrl(
                "haxe-openfl/haxedevelop"
              )}), and [Moonshine IDE](${docUrl("haxe-openfl/moonshine-ide")}).
`,
            },
            {
              title: "Sample Code",
              content: `
Create your first project using the [\`Application\`](${docUrl(
                "haxe-openfl/application"
              )}) and [\`Button\`](${docUrl("haxe-openfl/button")}) components:

\`\`\`hx
import feathers.controls.Application;
import feathers.controls.Button;
import feathers.events.TriggerEvent;

class ExampleProject extends Application {
  public function new() {
    super();

    var button = new Button();
    button.text = "Click Me";
    button.addEventListener(TriggerEvent.TRIGGER, onTrigger);
    addChild(button);
  }

  private function onTrigger(event:TriggerEvent):Void {
    trace("Button was clicked or tapped");
  }
}
\`\`\`
`,
            },
          ]}
        </Block>
      );
    };

    const Testimonials = () => {
      const pageUrl = (page) =>
        baseUrl + (language ? `${language}/` : "") + page;
      return (
        <div className="avatarsContainer">
          <Block layout="threeColumn" background="light" align="left">
            {[
              {
                title: "Absolute joy to develop with",
                content: `
We have a pretty significant app completely built with Feathers UI. Very happy with the results, and early feedback has been amazing. Absolute joy to develop with it. Thank you so much.

Darren Yuhar`,
                image: `${baseUrl}img/testimonials/darren-testimonial@2x.jpg`,
                imageAlign: "top",
              },
              {
                title: "My client was really impressed",
                content: `
I really like how and Feathers has proven to be a great platform for non-gaming applications. My client was really impressed with the multi-platform performance.

Olaf Wempe`,
                image: `${baseUrl}img/testimonials/olaf-testimonial@2x.jpg`,
                imageAlign: "top",
              },
              {
                title: "Very short development times",
                content: `
I do not trust in any other tool to do 2D fast development considering that the UI has to be retina enabled, responsive and with transitions and animations to be programmed in very short development times.

Luis Guajardo Diaz
`,
                image: `${baseUrl}img/testimonials/luis-testimonial@2x.jpg`,
                imageAlign: "top",
              },
            ]}
          </Block>
          <p className="alignCenter lightBackground">
            <a className="button" href={pageUrl("testimonials")}>
              More testimonials →
            </a>
          </p>
        </div>
      );
    };

    const GithubSponsors = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const users = siteConfig.users
        .filter((user) => user.pinned && user.github)
        .map((user) => (
          <a href={user.infoLink} key={user.infoLink} rel="sponsored">
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      return (
        <Container padding={["top"]} className="productShowcaseSection">
          <p className="alignCenter">
            Many thanks to everyone on{" "}
            <a href="https://github.com/sponsors/joshtynjala">
              Github Sponsors
            </a>{" "}
            who <br />
            generously supports the Feathers UI open source project:
          </p>
          <div className="logos">
            {users}
            <a
              className="button"
              href="https://github.com/sponsors/joshtynjala"
            >
              Support this project →
            </a>
          </div>
        </Container>
      );
    };

    const KickstarterSponsors = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const users = siteConfig.users
        .filter((user) => user.pinned && user.kickstarter)
        .map((user) => (
          <a href={user.infoLink} key={user.infoLink} rel="sponsored">
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      return (
        <Container padding={["bottom"]} className="productShowcaseSection">
          <p className="alignCenter">
            An additional thank you to all of the Kickstarter backers!
          </p>
          <div className="logos">{users}</div>
        </Container>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <OpenSource />
          <Install />
          <Testimonials />
          <GithubSponsors />
          <KickstarterSponsors />
        </div>
      </div>
    );
  }
}

module.exports = Index;

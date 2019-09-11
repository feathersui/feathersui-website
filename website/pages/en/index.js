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
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
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

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl("as3-starling/getting-started")}>
              Get Started AS3/Starling
            </Button>
            <Button href={docUrl("haxe-openfl/installation")}>
              Get Started Haxe/OpenFL (Preview)
            </Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = "" } = this.props;
    const { baseUrl } = siteConfig;

    const Block = props => (
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
      <Block layout="twoColumn" align="left">
        {[
          {
            title: "Dozens of UI controls",
            content:
              "Mix and match a variety of components, including buttons, scrolling lists, sliders, toggle switches, layout containers, navigators, and more.",
            image: `${baseUrl}img/undraw_product_teardown_elol.svg`,
            imageAlign: "top"
          },
          {
            title: "GPU-powered performance",
            content:
              "Feathers UI aims for buttery smooth 60 fps performance based on the philosophy that cross-platform UI kits shouldn't sacrifice one of the most important benefits of native development.",
            image: `${baseUrl}img/undraw_site_stats_l57q.svg`,
            imageAlign: "top"
          }
        ]}
      </Block>
    );

    const CrossPlatform = () => (
      <Block background="light">
        {[
          {
            title: "Cross-platform GUIs",
            content: `
Build stunning, hardware-accelerated user interfaces on a variety of operating systems, including iOS, Android, Windows, and macOS. Soon, you'll gain access to Linux, game consoles, and web browsers too.
            
- Target smartphones, tablets, and desktop computers.
- Upload native apps to app stores and also deploy to the web.
- Supports mouse, touchscreen, and keyboard interaction.
`,
            image: `${baseUrl}img/cross-platform.png`,
            imageAlign: "left"
          }
        ]}
      </Block>
    );

    const ThemesAndStyles = () => (
      <Block>
        {[
          {
            title: "Customizable skins and styles",
            content: `
Creative multimedia experiences typically require a unique visual style to match the story that you're presenting to the audience. Feathers UI offers many skinning options on every component, and behavior may be customized to support both mobile and desktop apps.

- Supports both vector and bitmap graphics.
- Create skins in your favorite design tool.
- Package up related styles into reusable themes.`,
            image: `${baseUrl}img/theme-mockups.png`,
            imageAlign: "right"
          }
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

- Full access to the framework internals and architecture.
- Use in both commercial and open source projects.
- Fork and submit pull requests on Github.`,
            image: `${baseUrl}img/undraw_code_typing_7jnv.svg`,
            imageAlign: "left"
          }
        ]}
      </Block>
    );

    const Testimonials = () => {
      const pageUrl = page => baseUrl + (language ? `${language}/` : "") + page;
      return (
        <div className="avatarsContainer">
          <Container>
            <Block layout="threeColumn" align="left">
              {[
                {
                  title: "Absolute joy to develop with",
                  content: `
We have a pretty significant app completely built with Feathers UI. Very happy with the results, and early feedback has been amazing. Absolute joy to develop with it. Thank you so much.

Darren Yuhar`,
                  image: `${baseUrl}img/testimonials/darren-testimonial@2x.jpg`,
                  imageAlign: "top"
                },
                {
                  title: "My client was really impressed",
                  content: `
I really like how and Feathers has proven to be a great platform for non-gaming applications. My client was really impressed with the multi-platform performance.

Olaf Wempe`,
                  image: `${baseUrl}img/testimonials/olaf-testimonial@2x.jpg`,
                  imageAlign: "top"
                },
                {
                  title: "Very short development times",
                  content: `
I do not trust in any other tool to do 2D fast development considering that the UI has to be retina enabled, responsive and with transitions and animations to be programmed in very short development times.

Luis Guajardo Diaz
`,
                  image: `${baseUrl}img/testimonials/luis-testimonial@2x.jpg`,
                  imageAlign: "top"
                }
              ]}
            </Block>
            <p className="alignCenter">
              <a className="button" href={pageUrl("testimonials")}>
                More testimonials →
              </a>
            </p>
          </Container>
        </div>
      );
    };

    const KickstarterSponsors = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const users = siteConfig.users
        .filter(user => user.pinned && user.kickstarter)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink} rel="sponsored">
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      return (
        <Container
          padding={["bottom", "top"]}
          className="productShowcaseSection"
        >
          <p className="alignCenter">
            Many thanks to these generous sponsors who supported Feathers UI on
            Kickstarter:
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
          <CrossPlatform />
          <ThemesAndStyles />
          <OpenSource />
          <Testimonials />
          <KickstarterSponsors />
        </div>
      </div>
    );
  }
}

module.exports = Index;

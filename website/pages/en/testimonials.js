const React = require("react");
const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const testimonials = [
  {
    title: "I've used Feathers daily, for several years.",
    content: `
Just want to thank Feathers for the most amazing UI components. I've used them daily, for several years.
      
Mike Gowan, [on Twitter](https://twitter.com/mrmikegowan/status/674662861143150592)`,
    image: "/img/testimonials/mikegowan-testimonial@2x.jpg",
    imageAlign: "top"
  },
  {
    title: "Absolute joy to develop with",
    content: `
We have a pretty significant app completely built with the Feathers SDK. Very happy with the results, and early feedback has been amazing. Absolute joy to develop with it. Thank you so much.

Darren Yuhar, <a href="http://www.profilze.com/">Profilze</a>`,
    image: "/img/testimonials/darren-testimonial@2x.jpg",
    imageAlign: "top"
  },
  {
    title: "Very short development times",
    content: `
I do not trust in any other tool to do 2D fast development considering that the UI has to be retina enabled, responsive and with transitions and animations to be programmed in very short development times.

Luis Guajardo Diaz`,
    image: "/img/testimonials/luis-testimonial@2x.jpg",
    imageAlign: "top"
  },
  {
    title: "Runs very smoothly on all platforms",
    content: `
I started a professional tablet application based on Starling and Feathers, and these libraries save me a lot of time and pain in the development process. The app runs very smoothly on all platforms, including Android tablets, iPad, and Windows 8 Pro tablets. That's simply awesome.

Elefantz, Feathers forum member`,
    image: "/img/testimonials/elefantz-testimonial.png",
    imageAlign: "top"
  },
  {
    title: "For an enterprise of 20,000+ employees",
    content: `
I've built cross-platform mobile apps in AIR/Starling/Feathers for an enterprise of 20,000+ employees. Engineers, scientists all over the world are using it to great advantage and are extremely happy with it. The UI is snappy &amp; appealing, AIR SDK/ANEs provide access to native os/hardware features, and the application itself is easily customizable. Thank you for all your great work!

Thomas Wooldridge, AIR Developer`,
    image: "/img/testimonials/thomas-testimonial@2x.jpg",
    imageAlign: "top"
  },
  {
    title: "My client was really impressed",
    content: `
I really like how both Starling and Feathers have proven to be great platforms for non-gaming applications. From the beginning, I felt that if you can do games, you can do anything! My client was really impressed with the multi-platform performance of AIR / Starling / Feathers, so it wasn't hard to convince them to use these libraries. Thanks, Daniel and Josh. This app wouldn't have been possible without your awesome frameworks and support!

Olaf Wempe, owner at 0l4f.com`,
    image: "/img/testimonials/olaf-testimonial@2x.jpg",
    imageAlign: "top"
  },
  {
    title: "The design is right for smooth UI",
    content: `
The design is right for smooth UI, running hardware accelerated.

Thibault Imbert, Adobe Systems`,
    image: "/img/testimonials/thibault-testimonial@2x.jpg",
    imageAlign: "top"
  },
  {
    title: "Engineers and scientists using it",
    content: `
We've got engineers and scientists using it all over the world to help our clients!

Mike Cizenski, [on Twitter](https://twitter.com/mikeciz/status/546296508841484288)`,
    image: "/img/testimonials/mike-cizenski-testimonial@2x.jpg",
    imageAlign: "top"
  }
];

const Testimonials = props => {
  const { config: siteConfig, language = "" } = props;
  const { baseUrl } = siteConfig;
  const pageUrl = page => baseUrl + (language ? `${language}/` : "") + page;
  return (
    <div className="mainContainer documentContainer avatarsContainer">
      <Container>
        <div className="prose">
          <h1>Testimonials</h1>
          <p>
            What developers working with <a href="/">Feathers UI</a> have said
            about the framework.
          </p>
        </div>
        <GridBlock contents={testimonials} layout="threeColumn" />
      </Container>
      <Container background="light" padding={["top", "bottom"]}>
        <div className="prose alignCenter">
          <p>
            👓 See for yourself how Feathers UI can help you build your game or
            app. <a href={pageUrl("download")}>Download Feathers UI</a> and get
            started.
          </p>
        </div>
      </Container>
    </div>
  );
};
Testimonials.title = "Testimonials";

module.exports = Testimonials;

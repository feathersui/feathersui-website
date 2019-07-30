const React = require("react");
const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;
const MarkdownBlock = CompLibrary.MarkdownBlock;

const showcaseItems = [
  {
    title: "Open House Melbourne",
    content: `Explore the architecture and history of Melbourne with this Feathers-powered mobile app for iOS and Android.`,
    image: "/img/showcase/open-house-melbourne.jpg"
  },
  {
    title: "Lil Drum Machine",
    content: `
Experiment with different drum kits and effects to create your own unique beats. Export them to WAV, OGG, MIDI or Caustic. Built with the Feathers SDK.

<div class="buttonWrapper">
  <a class="button" href="https://www.youtube.com/watch?v=7TXARCMPfUI">Watch Video</a>
</div>`,
    image: "/img/showcase/lil-drum-machine@2x.jpg",
    imageLink: "https://www.youtube.com/watch?v=7TXARCMPfUI"
  },
  {
    title: "Missiles Kaboom",
    content: `
Steer the plane and avoid or kill the missiles to survive in this game created with Starling and Feathers.

<div class="buttonWrapper">
  <a class="button" href="https://www.youtube.com/watch?v=MHHlbM_b8u0">Watch Video</a>
</div>`,
    image: "/img/showcase/missiles-kaboom@2x.jpg",
    imageLink: "https://www.youtube.com/watch?v=MHHlbM_b8u0"
  },
  {
    title: "Tiny Climb Racing",
    content: `
Choose your favorite car and race to win! Tiny Climb Racing is powered by Starling featuring a UI built with Feathers.

<div class="buttonWrapper">
  <a class="button" href="https://www.youtube.com/watch?v=b106773utL8">Watch Video</a>
</div>`,
    image: "/img/showcase/tiny-climb-racing@2x.jpg",
    imageLink: "https://www.youtube.com/watch?v=b106773utL8"
  },
  {
    title: "World War II: TCG",
    content: `
Gather an army and take part in the most epic battles and military campaigns of World War II in this trading card game powered by Starling and Feathers.

<div class="buttonWrapper">
  <a class="button" href="https://www.youtube.com/watch?v=i1eX6CdMtRU">Watch Video</a>
</div>`,
    image: "/img/showcase/world-war-ii-tcg.jpg",
    imageLink: "https://www.youtube.com/watch?v=i1eX6CdMtRU"
  },
  {
    title: "Total Body Fitness by Prime Mover",
    content: `
Let this Feathers-powered video fitness app guide your workouts and track your progress.

<div class="buttonWrapper">
  <a class="button" href="https://www.youtube.com/watch?v=7VGSZYMabrE">Watch Video</a>
</div>`,
    image: "/img/showcase/prime-mover.jpg",
    imageLink: "https://www.youtube.com/watch?v=7VGSZYMabrE"
  },
  {
    title: "Appsfordable Appstimator",
    content: `Get a real time estimate for the cost of your new mobile app using the Appsfordable Appstimator, built with Feathers.`,
    image: "/img/showcase/appstimator@2x.jpg"
  },
  {
    title: "Joolz",
    content: `Browse stunning jewelry collections from India with easy swipe gestures, curated by Joolz. Built with Starling and Feathers.`,
    image: "/img/showcase/joolz@2x.jpg"
  },
  {
    title: "Golf Caddy Pro",
    content: `Improve your golf game with Golf Caddy Pro, this Feathers-powered app that includes features like offline satellite maps, rangefinder, and strokesaver.`,
    image: "/img/showcase/golf-caddy-pro@2x.jpg"
  },
  {
    title: "The Monster Match",
    content: `Mix, match and discover monstrous, eerie, wacky and funny combinations of characters inside this app built with Starling and Feathers.`,
    image: "/img/showcase/monster-match.jpg"
  },
  {
    title: "Paper Critters",
    content: `Feathers powers this fun arts and crafts app that lets you design your very own "paper critter".`,
    image: "/img/showcase/paper-critters.jpg"
  },
  {
    title: "Teleport",
    content: `An attractive custom skin helps bring Feathers UI to life in Teleport, a content sharing app.`,
    image: "/img/showcase/teleport.jpg"
  },
  {
    title: "Atypic Photo Editor",
    content: `
With this playful image editor, add filters and special effects simply by drawing on the screen with your finger. Powered by Starling and Feathers.

<div class="buttonWrapper">
<a class="button" href="https://www.youtube.com/watch?v=O1-OE9pycuc">Watch Video</a>
</div>`,
    image: "/img/showcase/atypic.jpg",
    imageLink: "https://www.youtube.com/watch?v=O1-OE9pycuc"
  },
  {
    title: "Dr. Woo's Twisted Clone Shop",
    content: `
Work your way through over a dozen genetic experiments (but watch out for mutations!) in this puzzle game created with Starling and Feathers.

<div class="buttonWrapper">
  <a class="button" href="https://www.pixelfarm.com/work/woo/?wvideo=nlpbaf3ofd">Watch Video</a>
</div>`,
    image: "/img/showcase/dr-woo.jpg",
    imageLink: "https://www.pixelfarm.com/work/woo/?wvideo=nlpbaf3ofd"
  },
  {
    title: "DeezCovr",
    content: `Got a favorite artist? DeezCovr knows similar bands that you'll love. Feathers looks great with a stylish custom-designed skin.`,
    image: "/img/showcase/deezcovr.jpg"
  },
  {
    title: "Isolade",
    content: `Isolade is a fast-paced blend of action and strategy running on Starling and Feathers, inside an electrifying nanoworld of chemical elements.`,
    image: "/img/showcase/isolade.jpg"
  },
  {
    image: "/img/showcase/bathplanner.jpg",
    title: "Bathplanner PRO",
    content: `Design and plan a new bathroom. Uses a variety of Feathers controls to build a stylish drag and drop editor.`
  }
];

const ShowcaseItem = props => (
  <div className="blockElement" key={props.title}>
    <div className="blockImage">
      {props.imageLink ? (
        <a href={props.imageLink}>
          <img src={props.image} alt={props.imageAlt} />
        </a>
      ) : (
        <img src={props.image} alt={props.imageAlt} />
      )}
    </div>
    <div className="blockContent">
      {props.title ? (
        <h2>
          <MarkdownBlock>{props.title}</MarkdownBlock>
        </h2>
      ) : null}
      <MarkdownBlock>{props.content}</MarkdownBlock>
    </div>
  </div>
);

const ShowcaseArchive = props => {
  const { config: siteConfig, language = "" } = props;
  const { baseUrl } = siteConfig;
  const pageUrl = page => baseUrl + (language ? `${language}/` : "") + page;

  return (
    <div className="mainContainer documentContainer showcaseContainer alignCenter">
      <Container>
        <div className="prose">
          <h1>Showcase Archive</h1>
          <p>
            Remembering a variety of classic projects built with Feathers UI and
            Starling.
          </p>
        </div>
        {showcaseItems.map(item => (
          <ShowcaseItem key={item.title} {...item} />
        ))}
      </Container>
      <Container background="light" padding={["top", "bottom"]}>
        <div className="prose alignCenter">
          <p>
            See more apps and games in the main{" "}
            <a href={pageUrl("showcase")}>Feathers UI Showcase</a>.
          </p>
        </div>
      </Container>
    </div>
  );
};
ShowcaseArchive.title = "Showcase archive";

module.exports = ShowcaseArchive;

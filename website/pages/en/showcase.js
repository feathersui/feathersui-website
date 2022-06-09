const React = require("react");
const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;
const MarkdownBlock = CompLibrary.MarkdownBlock;

const showcaseItems = [
  {
    title: "VIP Solutions",
    content: `
With this platform for managing interactive touchscreen kiosks, institutions can publicly highlight individual contributors — such as donors, hall-of-famers, and alumni. Its smooth animations are powered by Feathers UI and OpenFL.

<div class="buttonWrapper">
  <a class="button" href="https://demo.vipinteract.com">Online Demo</a>
  <a class="button" href="https://vipinteract.com/">Visit Website</a>
</div>`,
    image: "/img/showcase/vip@2x.jpg",
    imageLink: "https://vipinteract.com/",
  },
  {
    title: "NCIS: Hidden Crimes",
    content: `
Feathers UI and Starling power NCIS: Hidden Crimes, an episodic adventure where you search for clues, reveal the suspects, and make the arrest. Published by Ubisoft.

<div class="buttonWrapper">
  <a class="button" href="https://www.youtube.com/watch?v=EtrA8BDdqFo">Watch Video</a>
  <a class="button" href="https://www.ubisoft.com/nn-NO/game/ncis-hidden-crimes/">Visit Website</a>
</div>`,
    image: "/img/showcase/ncis@2x.jpg",
    imageLink: "https://www.ubisoft.com/nn-NO/game/ncis-hidden-crimes/",
  },
  {
    title: "Wake-Up Memovox",
    content: `
Who wouldn't like to wake up to the pure sound of a Master Memovox, the first automatic alarm watch? Luxury watch brand Jaeger-LeCoultre brings the Memovox to life with Feathers UI and Starling.

<div class="buttonWrapper">
  <a class="button" href="https://vimeo.com/198098592">Watch Video</a>
</div>`,
    image: "/img/showcase/memovox@2x.jpg",
    imageLink: "https://vimeo.com/198098592",
  },
  {
    title: "Battleborn Tap",
    content: `
Command your squad of heroes on the field of battle in this game powered by Starling Framework and Feathers UI. Published by 2K Games.

<div class="buttonWrapper">
  <a class="button" href="https://www.youtube.com/watch?v=7k0US8ALKoM">Watch Video</a>
  <a class="button" href="https://www.2k.com/games/battleborn-tap">Visit Website</a>
</div>`,
    image: "/img/showcase/battleborn-tap@2x.jpg",
    imageLink: "https://www.2k.com/games/battleborn-tap",
  },
  {
    title: "Drum Pad Beats",
    content: `
Drum Pad Beats is a fun beat/composer – scene/remixer to capture those ideas when that flash of inspiration hits while away from the studio. Built with Starling and the Feathers UI.

<div class="buttonWrapper">
  <a class="button" href="https://www.youtube.com/watch?v=udNEq9hEjpw">Watch Video</a>
  <a class="button" href="https://teotigraphix.com/drumpadbeats/">Visit Website</a>
</div>`,
    image: "/img/showcase/drum-pad-beats@2x.jpg",
    imageLink: "https://teotigraphix.com/drumpadbeats/",
  },
  {
    title: "Snailboy: An Epic Adventure",
    content: `
Snailboy is a physics based puzzle game, built with Starling and Feathers UI, that combines rich graphics, killer sounds and over 40 levels of gameplay.

<div class="buttonWrapper">
  <a class="button" href="http://snailboygame.com/">Visit Website</a>
</div>`,
    image: "/img/showcase/snailboy@2x.jpg",
    imageLink: "http://snailboygame.com/",
  },
  {
    title: "American Cornhole Association",
    content: `
Create your own cornhole tournaments for parties, reunions, benefits, and other gatherings with this app created by [Red Minnow Interactive](https://redminnow.com/), and powered by Feathers UI and Starling.

<div class="buttonWrapper">
  <a class="button" href="https://www.youtube.com/watch?v=aYeAzBNLosw">Watch Video</a>
  <a class="button" href="https://redminnow.com/work/american-cornhole-association-mobile-app/">Visit Website</a>
</div>`,
    image: "/img/showcase/american-cornhole-association@2x.jpg",
    imageLink: "https://www.youtube.com/watch?v=aYeAzBNLosw",
  },
  {
    title: "SmartPref",
    content: `
Preferans, the popular Eastern European card game, running smoothly on Feathers UI — with a highly polished Material theme!

<div class="buttonWrapper">
  <a class="button" href="https://www.youtube.com/watch?v=zW4tZJQ0b1o">Watch Video</a>
</div>`,
    image: "/img/showcase/smartpref@2x.jpg",
    imageLink: "https://www.youtube.com/watch?v=zW4tZJQ0b1o",
  },
  {
    title: "Aether Story",
    content: `
Fight against the darkness as you explore the pixel world of Aether Story, a multi-player co-operative adventure built using Feathers UI.

<div class="buttonWrapper">
  <a class="button" href="https://www.aetherstory.com/">Visit Website</a>
</div>`,
    image: "/img/showcase/aether-story@2x.jpg",
    imageLink: "https://www.aetherstory.com/",
  },
  {
    title: "Street Art Project",
    content: `
In a matter of weeks, the Less Rain team created an augmented reality app with Feathers UI and Starling to enable members of the Behance community to showcase and share their artwork as "street art" — on top of real-world locations.`,
    image: "/img/showcase/street-art-project@2x.jpg",
  },
  {
    title: "Estee Lauder itCOLORS",
    content: `
A Spanish language app built with Starling and Feathers UI that analyzes photos to detect makeup colors and offer product recommendations.

<div class="buttonWrapper">
  <a class="button" href="https://vimeo.com/111209138#t=28s">Watch Video</a>
</div>`,
    image: "/img/showcase/estee-lauder.jpg",
    imageLink: "https://vimeo.com/111209138#t=28s",
  },
  {
    title: "Geophysic",
    content: `
Explore the original Geophysic watch by Jaeger-LeCoultre, its modern reinterpretation, the geophysical year in 1958, and the USS Nautilus mission in this elegant app created with Feathers UI.

<div class="buttonWrapper">
  <a class="button" href="https://itunes.apple.com/us/app/geophysic/id928353438?mt=8">iOS App Store</a>
</div>`,
    image: "/img/showcase/geophysic@2x.jpg",
    imageLink: "https://itunes.apple.com/us/app/geophysic/id928353438?mt=8",
  },
  {
    title: "Fantasy Rivals",
    content: `
Collect heroes, build your army, and accomplish quests in this virtual trading card game. Use strategy to defeat opponents in live battles to become the greatest warrior of all time. Built with Starling and Feathers UI.

<div class="buttonWrapper">
  <a class="button" href="https://www.youtube.com/watch?v=TuL3VNjvJaQ">Watch Video</a>
</div>`,
    image: "/img/showcase/fantasy-rivals.jpg",
    imageLink: "https://www.youtube.com/watch?v=TuL3VNjvJaQ",
  },
  {
    title: "Letter Quest: Grimm's Journey",
    content: `
Spell words to fight your way through 40 stages in this addictive word game powered by Starling and Feathers UI.    

<div class="buttonWrapper">
<a class="button" href="https://www.youtube.com/watch?v=4ZWL5NwUYpY">Watch Video</a>
  <a class="button" href="http://letterquestgame.com/">Visit Website</a>
</div>`,
    image: "/img/showcase/letter-quest.jpg",
    imageLink: "http://letterquestgame.com/",
  },
  {
    title: "Schumacher Gallery",
    content: `
Created by [Red Minnow Interactive](https://redminnow.com/), this Starling and Feathers UI mobile app highlights the gallery's collections of artwork — with audio tours, detailed images, author bios, and behind-the-scenes info.

<div class="buttonWrapper">
  <a class="button" href="https://redminnow.com/work/schumacher-gallery/">Visit Website</a>
</div>`,
    image: "/img/showcase/schumacher-gallery@2x.jpg",
    imageLink: "https://redminnow.com/work/schumacher-gallery/",
  },
  {
    title: "Key Cards GCSE Maths",
    content: `
Memorise everything you need to get the edge in GCSE Maths with Key Cards, powered by Feathers UI.

<div class="buttonWrapper">
  <a class="button" href="https://www.youtube.com/watch?v=NK9CM1Y0bQg">Watch Video</a>
  <a class="button" href="https://www.simplyeffectiveeducation.co.uk/key-cards/gcse-maths">Visit Website</a>
</div>`,
    image: "/img/showcase/key-cards@2x.jpg",
    imageLink:
      "https://www.simplyeffectiveeducation.co.uk/key-cards/gcse-maths",
  },
  {
    title: "Spell Cubes",
    content: `
Spell Cubes is the toddlers first playful meeting with the phonetic alphabet and the preschoolers place to experience a fun way to learn to spell new words.

<div class="buttonWrapper">
  <a class="button" href="https://vimeo.com/51147143">Watch Video</a>
  <a class="button" href="http://bjeld.com/apps-i-did/spell-cubes/">Visit Website</a>
</div>`,
    image: "/img/showcase/spell-cubes.jpg",
    imageLink: "http://bjeld.com/apps-i-did/spell-cubes/",
  },
];

const ShowcaseItem = (props) => (
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

const Showcase = (props) => {
  const { config: siteConfig, language = "" } = props;
  const { baseUrl } = siteConfig;
  const pageUrl = (page) => baseUrl + (language ? `${language}/` : "") + page;

  return (
    <div className="mainContainer documentContainer showcaseContainer alignCenter">
      <Container>
        <div className="prose alignCenter">
          <div className="blockElement">
            <div className="blockContent">
              <h1>Showcase</h1>
              <p>
                Check out some beautiful games and apps that talented developers
                and designers have created using the open source{" "}
                <a href="/">Feathers UI</a> framework.
              </p>
            </div>
          </div>
        </div>
        {showcaseItems.map((item) => (
          <ShowcaseItem key={item.title} {...item} />
        ))}
      </Container>
      <Container background="light" padding={["top", "bottom"]}>
        <div className="prose alignCenter">
          <p>
            Visit the <a href={pageUrl("showcase/archive")}>Showcase Archive</a>{" "}
            to see additional, classic Feathers UI apps.
          </p>
        </div>
      </Container>
      <Container padding={["top", "bottom"]}>
        <div className="prose alignCenter">
          <p>
            🚀 Let Feathers UI help you build your game or app.{" "}
            <a href={pageUrl("download")}>Download Feathers UI</a> and get
            started.
          </p>
        </div>
      </Container>
    </div>
  );
};
Showcase.title = "Showcase";

module.exports = Showcase;

const React = require("react");
const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;
const GridBlock = require("../../../../../core/GridBlockPlus");

const PremiumSupport = (props) => {
  const { config: siteConfig } = props;
  const { baseUrl } = siteConfig;

  const donateLinks = [
    {
      title: "Priority email support",
      content: `
A premium email support contract gives your team the ability to send tickets that are given the highest priority. You'll get help from the core framework developers who work on Feathers UI — so you know that they understand the code inside and out.

- Ask questions over email with core framework developers
- Guaranteed response within two business days
- Gain access to VIP sections in the community forum and Discord
- Sponsor logo on the feathersui.com website

<div class="buttonWrapper">
  <a class="button" href="mailto:sales@feathersui.com">Contact sales@feathersui.com</a>
</div>`,
      image: `${baseUrl}img/undraw_new_message_re_fp03.svg`,
      imageAlign: "top",
      imageLink: "mailto:sales@feathersui.com",
    },
    {
      title: "Training sessions",
      content: `Is your team just getting started with Feathers UI? Or maybe your developers are aiming to advance to the next level? Request a virtual training session.

Here are some ideas for training topics, but feel free to request a deep dive into any Feathers UI (or OpenFL) topic.

- OpenFL Basics: Learn the display list, event model, tweens/animation, networking
- Feathers UI Basics: UI components, layouts, skinning and themes
- Feathers UI Intermediate: MVC frameworks and architecture
- Feathers UI Advanced: Custom UI components

<div class="buttonWrapper">
  <a class="button" href="mailto:sales@feathersui.com">Contact sales@feathersui.com</a>
</div>`,
      image: `${baseUrl}img/undraw_teaching_re_g7e3.svg`,
      imageAlign: "top",
      imageLink: "mailto:sales@feathersui.com",
    },
  ];

  return (
    <div className="mainContainer documentContainer">
      <Container>
        <div className="prose">
          <h1>Premium support for Feathers UI</h1>
          <p>
            While the core <a href="/">Feathers UI</a> framework is completely free and open source, businesses and enterprises can
            can gain additional benefits by purchasing premium commercial support options.
          </p>
        </div>
        <GridBlock contents={donateLinks} layout="threeColumn" />
      </Container>
      <Container background="light" padding={["top", "bottom"]}>
        <div className="prose alignCenter">
          <p>
            💡 <strong>Tip:</strong> If your business doesn't have an established process for donating to open source, a support contact is a great way to help Feathers UI financially.
          </p>
        </div>
      </Container>
    </div>
  );
};
PremiumSupport.title = "Premium support";

module.exports = PremiumSupport;

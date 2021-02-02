const React = require("react");
const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;
const GridBlock = require("../../../../../core/GridBlockPlus");

function Donate(props) {
  const { config: siteConfig } = props;
  const { baseUrl } = siteConfig;

  const payPalForm = (
    <form
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
      target="_top"
      style={{ textAlign: "center" }}
    >
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="9A9EB6YEHRNBN" />
      <input
        type="image"
        src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
        border="0"
        name="submit"
        title="PayPal - The safer, easier way to pay online!"
        alt="Donate with PayPal button"
      />
      <img
        alt=""
        border="0"
        src="https://www.paypal.com/en_US/i/scr/pixel.gif"
        width="1"
        height="1"
      />
    </form>
  );

  const donateLinks = [
    {
      title: "[Github Sponsors](https://github.com/sponsors/joshtynjala)",
      content: `If you become a [sponsor on Github](https://github.com/sponsors/joshtynjala), you can get some special perks as a community supporter.

  <div class="buttonWrapper">
    <a class="button" href="https://github.com/sponsors/joshtynjala">Sponsor the Project</a>
  </div>`,
      image: `${baseUrl}img/github-sponsors.png`,
      imageAlign: "top",
      imageLink: "https://github.com/sponsors/joshtynjala",
    },
    {
      title:
        "[PayPal Donation](https://www.paypal.com/donate?hosted_button_id=9A9EB6YEHRNBN&source=url)",
      content: (
        <>
          <p>
            Choose between a monthly and one-time{" "}
            <a href="https://www.paypal.com/donate?hosted_button_id=9A9EB6YEHRNBN&amp;source=url">
              donation with PayPal
            </a>
            .
          </p>
          {payPalForm}
        </>
      ),
      image: `${baseUrl}img/paypal.png`,
      imageAlign: "top",
      imageLink: "https://discord.feathersui.com/",
    },
    {
      title: `[Buy a Shirt](https://teespring.com/stores/feathers-ui)`,
      content: `Get yourself a [Feathers UI t-shirt or hoodie](https://teespring.com/stores/feathers-ui). Many colors and styles available — in both men's and women's sizes.

<div class="buttonWrapper">
  <a class="button" href="https://teespring.com/stores/feathers-ui">Shop Now</a>
</div>`,
      image: `${baseUrl}img/teespring.png`,
      imageAlign: "top",
      imageLink: "https://teespring.com/stores/feathers-ui",
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer">
        <div className="post">
          <header className="postHeader">
            <h1>How can I support Feathers UI?</h1>
            <p>
              If Feathers UI has saved you time and money, you can show your
              appreciation by financially supporting the project. Thank you!
            </p>
          </header>
          <GridBlock contents={donateLinks} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}
Donate.title = "How to support the Feathers UI open source project";

module.exports = Donate;

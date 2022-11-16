const React = require("react");

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : "") + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
              />
            )}
          </a>
          <div>
            <h5>
              <a href={this.props.config.baseUrl}>Feathers UI</a>
            </h5>
            <ul>
              <li>
                <a
                  href={this.docUrl(
                    "haxe-openfl/installation",
                    this.props.language == "en"
                      ? undefined
                      : this.props.language
                  )}
                >
                  Downloads
                </a>
              </li>
              <li>
                <a
                  href={this.pageUrl(
                    "showcase",
                    this.props.language == "en"
                      ? undefined
                      : this.props.language
                  )}
                >
                  Showcase
                </a>
              </li>
              <li>
                <a
                  href={this.pageUrl(
                    "testimonials",
                    this.props.language == "en"
                      ? undefined
                      : this.props.language
                  )}
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href={this.pageUrl(
                    "premium-support",
                    this.props.language == "en"
                      ? undefined
                      : this.props.language
                  )}
                >
                  Premium Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5>
              <a
                href={this.docUrl(
                  "haxe-openfl",
                  this.props.language == "en" ? undefined : this.props.language
                )}
              >
                Documentation
              </a>
            </h5>
            <ul>
              <li>
                <a
                  href={this.docUrl(
                    "haxe-openfl/getting-started",
                    this.props.language == "en"
                      ? undefined
                      : this.props.language
                  )}
                >
                  Getting Started
                </a>
              </li>
              <li>
                <a href="https://api.feathersui.com/">API Reference</a>
              </li>
              <li>
                <a href="/samples/haxe-openfl/">Samples</a>
              </li>
            </ul>
            <ul>
              <h5>
                <a href="https://github.com/feathersui/feathersui-openfl">
                  Github
                </a>
              </h5>
              <li>
                <a href="https://github.com/feathersui/feathersui-openfl/tree/v1.0.0">
                  Source Code
                </a>
              </li>
              <li>
                <a href="https://github.com/feathersui/feathersui-openfl/issues">
                  Issue Tracker
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5>
              <a
                href={this.pageUrl(
                  "community",
                  this.props.language == "en" ? undefined : this.props.language
                )}
              >
                Community
              </a>
            </h5>
            <ul>
              <li>
                <a href="https://community.feathersui.com/">Forum</a>
              </li>
              <li>
                <a
                  href="https://discord.feathersui.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://stackoverflow.com/questions/tagged/feathersui"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Stack Overflow
                </a>
              </li>
            </ul>
            <h5>
              <a href={`${this.props.config.baseUrl}blog`}>
                News &amp; Updates
              </a>
            </h5>
            <ul>
              <li>
                <a href={`${this.props.config.baseUrl}blog`}>Blog</a> (
                <a href={`${this.props.config.baseUrl}blog/feed.xml`}>RSS</a>,{" "}
                <a href={`${this.props.config.baseUrl}blog/atom.xml`}>Atom</a>)
              </li>
              <li>
                <a
                  href="https://twitter.com/feathersui"
                  rel="noreferrer noopener"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://fosstodon.org/@feathersui"
                  rel="noreferrer noopener"
                >
                  Mastodon
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5>
              <a
                href={this.pageUrl(
                  "donate",
                  this.props.language == "en" ? undefined : this.props.language
                )}
              >
                Make a Donation
              </a>
            </h5>
            <ul>
              <li>
                <a href="https://github.com/sponsors/joshtynjala">
                  Join Github Sponsors
                </a>
              </li>
              <li>
                <a href="https://www.paypal.com/donate?hosted_button_id=9A9EB6YEHRNBN&source=url">
                  Donate with PayPal
                </a>
              </li>
              <li>
                <a href="https://teespring.com/stores/feathers-ui">
                  Buy a T-Shirt
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="copyright">
          Copyright © {new Date().getFullYear()}{" "}
          <a href="https://bowlerhat.dev/">Bowler Hat LLC</a> — Illustrations by{" "}
          <a href="https://undraw.co/">unDraw</a>.
        </section>

        <script type="text/javascript" src="//use.typekit.net/tsu5tna.js" />
        <script type="text/javascript">
          {"try{Typekit.load();}catch(e){}"}
        </script>
      </footer>
    );
  }
}

module.exports = Footer;

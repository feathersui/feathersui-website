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
            <h5>Site</h5>
            <a
              href={this.pageUrl(
                "download",
                this.props.language == "en" ? undefined : this.props.language
              )}
            >
              Downloads
            </a>
            <a
              href={this.pageUrl(
                "showcase",
                this.props.language == "en" ? undefined : this.props.language
              )}
            >
              Showcase
            </a>
            <a
              href={this.pageUrl(
                "testimonials",
                this.props.language == "en" ? undefined : this.props.language
              )}
            >
              Testimonials
            </a>
            <a href={`${this.props.config.baseUrl}blog`}>Blog</a>
          </div>
          <div>
            <h5>ActionScript / Starling</h5>
            <a
              href={this.docUrl(
                "as3-starling/getting-started",
                this.props.language == "en" ? undefined : this.props.language
              )}
            >
              Documentation
            </a>
            <a href="/api-reference/">API Reference</a>
            <a href="https://github.com/BowlerHatLLC/feathersui-starling">
              GitHub
            </a>
            <a href="https://github.com/BowlerHatLLC/feathersui-starling/issues">
              Issue Tracker
            </a>
            <h5>Feathers SDK (Starling)</h5>
            <a
              href={this.docUrl(
                "as3-starling/sdk/getting-started-mxml",
                this.props.language == "en" ? undefined : this.props.language
              )}
            >
              Documentation
            </a>
            <a href="https://github.com/BowlerHatLLC/feathers-sdk">GitHub</a>
          </div>
          <div>
            <h5>Haxe / OpenFL</h5>
            <a
              href={this.docUrl(
                "haxe-openfl/installation",
                this.props.language == "en" ? undefined : this.props.language
              )}
            >
              Documentation
            </a>
            <a href="https://api.feathersui.com/">API Reference</a>
            <a href="https://github.com/BowlerHatLLC/feathersui-openfl">
              GitHub
            </a>
            <a href="https://github.com/BowlerHatLLC/feathersui-openfl/issues">
              Issue Tracker
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href="https://community.feathersui.com/">Forum</a>
            <a
              href="https://discord.feathersui.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Discord
            </a>
            <a
              href="https://stackoverflow.com/questions/tagged/feathersui"
              target="_blank"
              rel="noreferrer noopener"
            >
              Stack Overflow
            </a>
          </div>
          <div>
            <h5>Social</h5>
            <a href="https://twitter.com/feathersui" rel="noreferrer noopener">
              Twitter
            </a>
            <a href="https://facebook.com/feathersui" rel="noreferrer noopener">
              Facebook
            </a>
          </div>
        </section>

        <section className="copyright">{this.props.config.copyright}</section>

        <script type="text/javascript" src="//use.typekit.net/tsu5tna.js" />
        <script type="text/javascript">
          {"try{Typekit.load();}catch(e){}"}
        </script>
      </footer>
    );
  }
}

module.exports = Footer;

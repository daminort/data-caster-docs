/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {

  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <div />
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('getting-started.html', this.props.language)}>
              Getting Started
            </a>
            <a href={this.docUrl('basics.html', this.props.language)}>
              Basics
            </a>
            <a href={this.docUrl('init.html', this.props.language)}>
              API Reference
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href="https://github.com/daminort/data-caster">GitHub</a>
            <a
              href="https://opensource.facebook.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="fbOpenSource">
              <img
                src={`${this.props.config.baseUrl}img/oss_logo.png`}
                alt="Facebook Open Source"
                width="170"
                height="45"
              />
            </a>
          </div>
          <div />
        </section>

        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;

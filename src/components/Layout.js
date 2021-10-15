import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/main.scss';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreloaded: true,
    };
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ isPreloaded: false });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { children } = this.props;
    const { isPreloaded } = this.state;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Eventually' },
                { name: 'keywords', content: 'site, web' },
              ]}
            >
              <meta charSet="utf-8" />
              <title>Lambomoon Metaverse</title>
              <meta
                name="description"
                content="A blockbuster NFT metaverse powered by Moonbeam/Polkadot and Unreal Engine 5"
              />

              <meta property="twitter:card" content="summary_large_image" />
              <meta property="twitter:url" content="https://lambomoon.xyz/" />
              <meta property="twitter:title" content="Lambomoon Metaverse" />
              <meta
                property="twitter:description"
                content="A blockbuster NFT metaverse powered by Moonbeam/Polkadot and Unreal Engine 5"
              />
              <meta
                property="twitter:image"
                content="https://raw.githubusercontent.com/duyyudus/lambomoon-metaverse-web/master/static/banner-main.png"
              />

              <meta property="og:url" content="https://lambomoon.xyz" />
              <meta property="og:type" content="website" />
              <meta property="og:title" content="Lambomoon Metaverse" />
              <meta
                property="og:description"
                content="A blockbuster NFT metaverse powered by Moonbeam/Polkadot and Unreal Engine 5"
              />
              <meta
                property="og:image"
                content="https://raw.githubusercontent.com/duyyudus/lambomoon-metaverse-web/master/static/banner-main.png"
              />
            </Helmet>
            <div className={isPreloaded ? 'main-body is-preload' : 'main-body'}>
              {children}
            </div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

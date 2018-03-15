import React, { Component } from "react";
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './blog.module.css'
import ArticlePreview from '../components/article-preview'

class AboutPage extends Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    return (
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <div className="wrapper">
        <div className={styles.hero}>About</div>
        <p>About me.</p>
      </div>
      </div>
    );
  }
}

export default AboutPage;

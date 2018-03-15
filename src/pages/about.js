import React, { Component } from "react";
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './blog.module.css'
import ArticlePreview from '../components/article-preview'

class AboutPage extends Component {
  render() {
    return (
      <div className="wrapper">
        <p>About me.</p>
      </div>
    );
  }
}

export default AboutPage;

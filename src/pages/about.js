import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './blog.module.css'


class aboutPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')


    return (
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <div className="wrapper">
          <div className={styles.hero}>About</div>
          <h2 className="section-headline">About</h2>
          <p>Hey</p>
        </div>
      </div>
    )
  }
}

export default aboutPage

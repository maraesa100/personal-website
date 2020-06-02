import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

class PageHelmet extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>{this.props.pageTitle} || Siobhan McKenzie </title>
          <meta
            name='description'
            content='Siobhan McKenzie. Full Stack Software Development and MVP Consultancy'
          />
        </Helmet>
      </React.Fragment>
    )
  }
}

export default PageHelmet

// React Required
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Brand from './blocks/Brand'
import Columns from './blocks/Columns'
import ContactForm from './blocks/ContactForm'
import Counters from './blocks/Counters'
import Gallery from './blocks/Gallery'
import GoogleMap from './blocks/GoogleMap'
import Portfolio from './blocks/Portfolio'
import PricingTable from './blocks/PricingTable'
import ProgressBar from './blocks/ProgressBar'
// Blocks Layout
import Team from './blocks/Team'
import Testimonial from './blocks/Testimonial'
import VideoPopup from './blocks/VideoPopup'
import DarkMainDemo from './dark/MainDemo'
import About from './elements/About'
import Blog from './elements/Blog'
import BlogDetails from './elements/BlogDetails'
import Contact from './elements/Contact'
import error404 from './elements/error404'
import PortfolioDetails from './elements/PortfolioDetails'
import PortfolioDetailsDE from './elements/PortfolioDetailsDE'
import PortfolioDetailsUP from './elements/PortfolioDetailsUP'
import ReactNativeService from './elements/ReactNativeService'
// Element Layout
import Service from './elements/Service'
import ServiceMaintenance from './elements/Service-Maintenance'
import ServiceMVP from './elements/Service-MVP'
import ServiceDetails from './elements/ServiceDetails'
// import HomePortfolio from './home/HomePortfolio';
import DigitalAgency from './home/DigitalAgency'
import MainDemo from './home/MainDemo'
import Paralax from './home/Paralax'
import Startup from './home/Startup'
// Create Import File
import './index.scss'
import * as serviceWorker from './serviceWorker'

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={'/'}>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            component={DigitalAgency}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/main-demo`}
            component={MainDemo}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/dark-main-demo`}
            component={DarkMainDemo}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/startup`}
            component={Startup}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/paralax`}
            component={Paralax}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/digital-agency`}
            component={DigitalAgency}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/service`}
            component={Service}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/service-details`}
            component={ServiceDetails}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/service-mvp`}
            component={ServiceMVP}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/service-maintenance`}
            component={ServiceMaintenance}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/service-react-native`}
            component={ReactNativeService}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/contact`}
            component={Contact}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/about`}
            component={About}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/portfolio-details`}
            component={PortfolioDetails}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/portfolio-details-up`}
            component={PortfolioDetailsUP}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/portfolio-details-de`}
            component={PortfolioDetailsDE}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blog`}
            component={Blog}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blog-details`}
            component={BlogDetails}
          />

          {/* Blocks Elements  */}
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/team`}
            component={Team}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/counters`}
            component={Counters}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/testimonial`}
            component={Testimonial}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/portfolio`}
            component={Portfolio}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/video-popup`}
            component={VideoPopup}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/gallery`}
            component={Gallery}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/clint-logo`}
            component={Brand}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/progressbar`}
            component={ProgressBar}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/contact-form`}
            component={ContactForm}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/google-map`}
            component={GoogleMap}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/columns`}
            component={Columns}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/pricing-table`}
            component={PricingTable}
          />

          <Route path={`${process.env.PUBLIC_URL}/404`} component={error404} />
          <Route component={error404} />
        </Switch>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('root'))
serviceWorker.register()

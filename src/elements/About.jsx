import React, { Component } from 'react'
import PageHelmet from '../component/common/Helmet'
import Breadcrumb from '../elements/common/Breadcrumb'
import CounterOne from '../elements/counters/CounterOne'
import Testimonial from '../elements/Testimonial'
import BrandTwo from '../elements/BrandTwo'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import ScrollToTop from 'react-scroll-up'
import { FiChevronUp } from 'react-icons/fi'
import Header from '../component/header/Header'
import Footer from '../component/footer/Footer'

class About extends Component {
  render() {
    let title = 'About',
      description = 'About Siobhan McKenzie software development'
    return (
      <React.Fragment>
        <PageHelmet pageTitle='About' />

        <Header
          headertransparent='header--transparent'
          colorblack='color--black'
          logoname='logo.png'
        />
        {/* Start Breadcrump Area */}
        <Breadcrumb title={'About'} />
        {/* End Breadcrump Area */}

        {/* Start About Area  */}
        <div className='rn-about-area ptb--120 bg_color--1'>
          <div className='rn-about-wrapper'>
            <div className='container'>
              <div className='row row--35 align-items-center'>
                <div className='col-lg-5'>
                  <div className='thumbnail'>
                    <img
                      className='w-100'
                      src='/assets/images/about/about-3.jpg'
                      alt='About Images'
                    />
                  </div>
                </div>
                <div className='col-lg-7'>
                  <div className='about-inner inner'>
                    <div className='section-title'>
                      <h2 className='title'>{title}</h2>
                      <p className='description'>{description}</p>
                    </div>
                    <div className='row mt--30'>
                      <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                        <div className='about-us-list'>
                          <h3 className='title'>The Why</h3>
                          <p>
                            I started Siobhan McKenzie Ltd in 2020 to build
                            beautiful products that work hard for the businesses
                            that fit around them. I love Tech and Business, so
                            this is a way to offer my experience of the two as a
                            service to help your product thrive.
                          </p>

                          <h3 className='title'>My Credentials</h3>
                          <p>
                            BSc 1st Class Computing and Interaction Design -
                            Goldsmiths, University of London (2012)
                          </p>
                          <p>
                            Bid Manager: 2013 to 2014 @ Logica/CGI, Adecco and
                            MJ Quinn
                          </p>
                          <p>Director: Retail - 2014 to 2018</p>
                          <p>
                            Lead Android Full Stack Developer: Upgrade Pack -
                            2018 to 2020
                          </p>
                          <p>Full Stack Developer: Growth Method - 2020</p>

                          <h3>Awards</h3>

                          <p>ASOS New Business Awardee - 2014</p>
                          <p>Adecco Gold Superstars Award - 2013</p>

                          <h3>My Technology</h3>
                          <p>
                            React, React Native, Node.js, JavaScript, PHP,
                            Laravel
                          </p>

                          <h3>My Tooling</h3>
                          <p>Continuous Integration: Circle CI, Jenkins etc.</p>
                          <p>
                            Testing: Jest, Mocha, Chai, Cucumber, Selenium etc.
                          </p>

                          <h4 className='theme-gradient'>
                            A little more about me
                          </h4>
                          <p>
                            I'm London-based when I'm in the UK, and most of my
                            time I spend woodworking, cooking or painting. I
                            dabble in krav maga, and I speak Spanish. I donate
                            my time to non-profits, so if you have an
                            interesting humanitarian project you're working on,
                            get in touch!
                          </p>
                        </div>
                      </div>
                      {/* <div className='col-lg-6 col-md-12 col-sm-12 col-12'> */}
                      {/* <div className='about-us-list'>
                          <h3 className='title'>A Little More About Me</h3>
                          <p>
                            I'm London-based when I'm in the UK, and most of my
                            time I spend woodworking, cooking or painting. I
                            dabble in krav maga, and I speak Spanish. I donate
                            my time to non-profits, so if you have an
                            interesting humanitarian project you're working on,
                            get in touch!
                          </p>
                        </div> */}
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End About Area  */}

        {/* Start CounterUp Area */}
        {/* <div className='rn-counterup-area pb--120 bg_color--1'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='section-title text-center'>
                  <h3 className='fontWeight500'>Our Fun Facts</h3>
                </div>
              </div>
            </div>
            <CounterOne />
          </div>
        </div> */}
        {/* End CounterUp Area */}
        {/* Start Testimonial Area */}
        {/* <div className='rn-testimonial-area bg_color--5 ptb--120'>
          <div className='container'>
            <Testimonial />
          </div>
        </div> */}
        {/* End Testimonial Area */}

        {/* Start Brand Area */}
        <div className='rn-brand-area brand-separation bg_color--5 ptb--120'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <BrandTwo />
              </div>
            </div>
          </div>
        </div>
        {/* End Brand Area */}

        {/* Start Back To Top */}
        <div className='backto-top'>
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}

        <Footer />
      </React.Fragment>
    )
  }
}
export default About

import React, { Component } from 'react'
import PageHelmet from '../component/common/Helmet'
import ModalVideo from 'react-modal-video'
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn
} from 'react-icons/fa'
import ScrollToTop from 'react-scroll-up'
import { FiChevronUp } from 'react-icons/fi'
import Header from '../component/header/Header'
import Footer from '../component/footer/Footer'

const SocialShare = [
  { Social: <FaFacebookF />, link: 'https://www.facebook.com/' },
  { Social: <FaLinkedinIn />, link: 'https://www.linkedin.com/' },
  { Social: <FaInstagram />, link: 'https://www.instagram.com/' },
  { Social: <FaTwitter />, link: 'https://twitter.com/' }
]

class PortfolioDetails extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }
  openModal() {
    this.setState({ isOpen: true })
  }
  render() {
    return (
      <React.Fragment>
        <PageHelmet pageTitle='Portfolio Details' />

        <Header
          headertransparent='header--transparent'
          colorblack='color--black'
          logoname='logo.png'
        />

        {/* Start Breadcrump Area */}
        <div
          className='rn-page-title-area pt--120 pb--190 bg_image bg_image--4'
          data-black-overlay='7'
        >
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='rn-page-title text-center pt--100'>
                  <h2 className='title theme-gradient'>
                    Full Stack Developer @ Growth Method
                  </h2>
                  <p>Laravel (PHP) and React frontend development.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrump Area */}

        {/* Start Portfolio Details */}
        <div className='rn-portfolio-details ptb--120 bg_color--1'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='portfolio-details'>
                  <div className='inner'>
                    <h2>Growth Method</h2>
                    <br />
                    {/* <h3>The Goal</h3> */}
                    <p className='subtitle'>
                      Rapid development for the first wave of live users in
                      April 2020
                    </p>
                    <h3>The Tech</h3>
                    <p>React and Laravel</p>
                    <h3>Outcome</h3>
                    <p>
                      Successful launch, delivered 100% of 3 primary features on
                      time, and 4 additional features in the future roadmap were
                      delivered. The first wave of live users was supported with
                      confidence, and due to the cloud platform used. Selenium
                      was recommended and implemented to cut testing time and
                      release a portion of the budget.
                    </p>

                    <div className='portfolio-view-list d-flex flex-wrap'>
                      <div className='port-view'>
                        <span>GitHub</span>
                        <h4>Available</h4>
                      </div>

                      <div className='port-view'>
                        <span>Project Type</span>
                        <h4>SaaS (Software-as-a-service Web App)</h4>
                      </div>
                      {/* 
                      <div className='port-view'>
                        <span>Program</span>
                        <h4>View Project</h4>
                      </div> */}
                    </div>
                    {/* 
                    <div className='portfolio-share-link mt--20 pb--70 pb_sm--40'>
                      <ul className='social-share rn-lg-size d-flex justify-content-start liststyle mt--15'>
                        {SocialShare.map((val, i) => (
                          <li key={i}>
                            <a href={`${val.link}`}>{val.Social}</a>
                          </li>
                        ))}
                      </ul>
                    </div> */}
                  </div>
                  <div className='portfolio-thumb-inner'>
                    <div className='thumb position-relative mb--30'>
                      <img
                        src='/assets/images/portfolio/portfolio-big-03.jpg'
                        alt='Portfolio Images'
                      />
                      <ModalVideo
                        channel='youtube'
                        isOpen={this.state.isOpen}
                        videoId='ZOoVOfieAF8'
                        onClose={() => this.setState({ isOpen: false })}
                      />
                      <button
                        className='video-popup position-top-center'
                        onClick={this.openModal}
                      >
                        <span className='play-icon'></span>
                      </button>
                    </div>

                    <div className='thumb mb--30'>
                      <img
                        src='/assets/images/portfolio/portfolio-big-02.jpg'
                        alt='Portfolio Images'
                      />
                    </div>

                    <div className='thumb'>
                      <img
                        src='/assets/images/portfolio/portfolio-big-01.jpg'
                        alt='Portfolio Images'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Portfolio Details */}

        {/* Start Related Work */}
        <div className='portfolio-related-work pb--120 bg_color--1'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='section-title text-center'>
                  <span className='theme-color font--18 fontWeight600'>
                    Related Work
                  </span>
                  <h2>Our More Projects</h2>
                </div>
              </div>
            </div>
            <div className='row mt--10'>
              {/* Start Single Portfolio */}
              <div className='col-lg-6 col-md-6 col-12'>
                <div className='related-work text-center mt--30'>
                  <div className='thumb'>
                    <a href='/portfolio-details'>
                      <img
                        src='/assets/images/portfolio/related-image-01.jpg'
                        alt='Portfolio-images'
                      />
                    </a>
                  </div>
                  <div className='inner'>
                    <h4>
                      <a href='/portfolio-details'>Digital Analysis</a>
                    </h4>
                    <span className='category'>Technique</span>
                  </div>
                </div>
              </div>
              {/* End Single Portfolio */}
              {/* Start Single Portfolio */}
              <div className='col-lg-6 col-md-6 col-12'>
                <div className='related-work text-center mt--30'>
                  <div className='thumb'>
                    <a href='/portfolio-details'>
                      <img
                        src='/assets/images/portfolio/related-image-02.jpg'
                        alt='Portfolio-images'
                      />
                    </a>
                  </div>
                  <div className='inner'>
                    <h4>
                      <a href='/portfolio-details'>Plan Management</a>
                    </h4>
                    <span className='category'>PLANNING</span>
                  </div>
                </div>
              </div>
              {/* End Single Portfolio */}
            </div>
          </div>
        </div>
        {/* End Related Work */}

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
export default PortfolioDetails

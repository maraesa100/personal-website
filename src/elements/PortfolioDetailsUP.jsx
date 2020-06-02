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
                  <h2 className='title theme-gradient'>Full Stack Developer</h2>
                  <h2 className='title theme-gradient'>@ Upgrade Pack</h2>
                  <p>
                    Lead Android Developer on the microservices structured MVP
                    React Native App.
                  </p>
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
                    {/* <h2>Upgrade Pack</h2> */}
                    <h2 className='title'>Upgrade Pack</h2>
                    <p className='subtitle'>
                      JavaScript Full-Stack Development, DevOps and
                      Infrastructure at the travel startup 'Upgrade Pack'.{' '}
                    </p>
                    <h3>The Tech</h3>
                    <p>React (Admin Panel), React Native (App), Node (API)</p>
                    <h3>Supporting Tech</h3>
                    <p>
                      Google Firebase and Firestore (NoSQL Database,
                      Authentication, Hosting), Circle CI (Continuous
                      Integration)
                    </p>
                    <h3>Outcome</h3>
                    <p>
                      MVP Developed in 3 weeks. Small test base supported, and
                      leveraged to secure interest from prospective partners.{' '}
                    </p>

                    <h3>Problems</h3>
                    <p>
                      Design and UX tweaks made constantly by Product which were
                      generally implemented by the development team. They were
                      generally not driven by user analysis. This slowed the
                      process down, and the implementation of needed features,
                      such as connecting with our partners gateways were left
                      until last, in favour of changing frontend design.
                    </p>

                    <h3>How this experience helps YOU</h3>
                    <p>
                      We will design once, and develop once, and launch once.
                      Superficial changes are not permitted until this is driven
                      by user engagement and analysis. This will save you money:
                      often these superficial changes add little to the user
                      experience. We will use UX best practice, such as
                      accessibility standards, and apply these strategically.
                      There were also a lot of custom components built, which
                      are extremely time consuming. The usage of completely
                      custom components will be kept to a minimum.
                    </p>

                    <h3>Detail</h3>

                    <p>
                      The Upgrade Pack mission is to make accessing Travel
                      Upgrades easier more afforable. It is a B2B loyalty
                      product: originally targeted at large banks facing strong
                      competition from 'Challenger Banks', and would be offered
                      to the banks customers free of charge in order to
                      encourage loyalty
                    </p>
                    <p>
                      I lead Android development of the React Native App,
                      responsible for compatibility, managing builds, the Google
                      Play store, and ensuring smooth deployment with the
                      hundreds of Android devices that we supported.
                    </p>
                    <p>
                      The team works across a Javascript stack with a Node
                      backend and a NoSQL Firebase database, with firestore
                      oauth authentication.
                    </p>
                    <p>
                      Expo was used, and dynamic marketing content was loaded
                      into the app from a custom CMS (content management system)
                      that Product had access to. The backend was built with
                      Node, deployed using Google tooling, and communicated
                      directly with the large British Airways API. We had to
                      remain compliant with financial regulations (PCI
                      Compliance) as we held secure credit card and personal
                      information.
                    </p>
                    <p>
                      The team was originally 2 developers: we built the initial
                      MVP in 3 weeks, which was designed to secure a letter of
                      intent from a large bank.
                    </p>
                    <p>
                      The team grew to 5, and I typically cleanly closed 3-4
                      times as many tickets as other team members.
                    </p>

                    <div className='portfolio-view-list d-flex flex-wrap'>
                      <div className='port-view'>
                        <span>GitHub Code</span>
                        <h4>Available</h4>
                      </div>

                      <div className='port-view'>
                        <span></span>
                        <h4>Available</h4>
                      </div>

                      <div className='port-view'>
                        <span>Project Type</span>
                        <h4>Mobile App</h4>
                      </div>

                      {/* <div className="port-view">
                                                <span>Program</span>
                                                <h4>View Project</h4>
                                            </div> */}
                    </div>

                    {/* <div className="portfolio-share-link mt--20 pb--70 pb_sm--40">
                                            <ul className="social-share rn-lg-size d-flex justify-content-start liststyle mt--15">
                                                {SocialShare.map((val , i) => (
                                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                                ))}
                                            </ul>
                                        </div> */}
                  </div>
                  <div className='portfolio-thumb-inner'>
                    {/* <div className="thumb position-relative mb--30">
                                            <img src="/assets/images/portfolio/portfolio-big-03.jpg" alt="Portfolio Images"/>
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
                                            <button className="video-popup position-top-center" onClick={this.openModal}><span className="play-icon"></span></button>
                                        </div> */}

                    <div className='thumb mb--30'>
                      <img
                        src='/assets/images/Up-3.png'
                        alt='Portfolio Images'
                      />
                    </div>

                    <div className='thumb'>
                      <img
                        src='/assets/images/Up-2.png'
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

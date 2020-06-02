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

                    <h3>40-hour Deliverables</h3>
                    <p>Examples of what I achieved (bug-free) in 40 hours</p>

                    <ul style={{ textAlign: 'left' }}>
                      <li>
                        Implement Permissions System: Backend/Frontend - Create
                        5 new user roles, apply permissions across the entire
                        application
                      </li>
                      <li>
                        Change UI: Frontend - Apply new template to filtered
                        table list
                      </li>
                      <li>
                        Update Permissions: Backend/Frontend - Regular users
                        should only be able to edit their own user group
                      </li>
                      <li>
                        Bug Fix: Backend/Frontend - Cannot toggle user driven
                        content between private and public
                      </li>
                      <li>
                        Change Placeholder: Frontend - Make static placeholder
                        dynamic - implement API call to produce placeholder text
                        based on user settings
                      </li>
                      <li>
                        Create new user data options: Backend/Frontend - New
                        options for user generated content. New database
                        columns, routes, actions, frontend UI
                      </li>
                      <li>
                        Configure Changelog: Frontend - Implement changelog,
                        tweak styling.
                      </li>
                      <li>Update Actions: Frontend - Modify redux actions</li>
                      <li>
                        Change Navigation System: Frontend - Modify navigation
                        to new UI and apply permissions
                      </li>
                      <li>Change UI: Frontend - Overhaul dashboard</li>
                      <li>
                        Change UI: Frontend - Apply new UI design to user area
                      </li>
                      <li>
                        Bug Fix: Frontend/Backend - User who modified
                        user-generated data was being set as the original
                        submitted by Backend, and Frontend was reading the wrong
                        data
                      </li>
                      <li>
                        Bug Fix: Frontend/Backend - Ability to modify a certain
                        part of the database data
                      </li>
                      <li>
                        Change UI: Frontend - Implement Tooltip with database
                        data. Wired in existing actions.
                      </li>
                      <li>Bug Fix: Frontend - Fix Actions.</li>
                    </ul>

                    <h3>How this project helps YOU</h3>
                    <p>
                      At my recommendation, Selenium was integrated with the
                      project, which minimised the need for manual testing. It
                      emphasised the need for automated testing, and my
                      experience with Selenium can be transferred to your web
                      app project.
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
                  <h2>Product</h2>
                  <h3>Dashboard</h3>
                  <div className='portfolio-thumb-inner'>
                    <div className='thumb mb--30'>
                      <img
                        src='/assets/images/portfolio/Growth-Method-Screenshot.png'
                        alt='Portfolio Images'
                      />
                    </div>
                    <br />
                    {/* <h3>Changelog</h3>

                    <div className='thumb'>
                      <img
                        src='/assets/images/portfolio/Growth-Method-Changelog-Mobile-View.png'
                        alt='Portfolio Images'
                      />
                    </div> */}
                    <br />
                    <h3>'Experiment'</h3>
                    <p>
                      For this product, the user runs marketing 'experiments'
                      which are measured.
                    </p>
                    <div className='thumb'>
                      <img
                        src='/assets/images/portfolio/Growth-Method-Experiment.png'
                        alt='Portfolio Images'
                      />
                    </div>
                    {/* <p>Team Roles</p> */}
                    {/* 
                    <div className='thumb'>
                      <img
                        src='/assets/images/portfolio/Growth-Method-Roles.png'
                        alt='Portfolio Images'
                      />
                    </div>
                    <br /> */}
                    <br />
                    <br />
                    {/* <h2>Team Roles: Video</h2> */}

                    {/* <div className='thumb position-relative mb--30'>

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
                    </div> */}
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

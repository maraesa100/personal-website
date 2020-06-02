import React, { Component } from 'react'
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn
} from 'react-icons/fa'

const SocialShare = [
  // {Social: <FaFacebookF /> , link: 'https://www.facebook.com/'},
  {
    Social: <FaLinkedinIn />,
    link: 'https://www.linkedin.com/in/siobhanmckenzie/'
  }
  // {Social: <FaInstagram /> , link: 'https://www.instagram.com/'},
  // {Social: <FaTwitter /> , link: 'https://twitter.com/'},
]
class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className='footer-area'>
          <div className='footer-wrapper'>
            <div className='row align-items-end row--0'>
              <div className='col-lg-6'>
                <div className='footer-left'>
                  <div
                    className='inner'
                    style={{
                      display: this.props.hideContactButton ? 'none' : 'flex'
                    }}
                  >
                    {/* <span>Ready To Do This</span> */}
                    <h2>{/* Let's get <br /> to work */}</h2>
                    <a className='rn-button-style--2' href='/contact'>
                      <span>Contact Shiv</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='footer-right' data-black-overlay='6'>
                  <div className='row'>
                    {/* Start Single Widget  */}
                    <div className='col-lg-6 col-sm-6 col-12'>
                      <div className='footer-link'>
                        <h4>Quick Links</h4>
                        <ul className='ft-link'>
                          <li>
                            <a href='/portfolio'>My Work</a>
                          </li>
                          <li>
                            <a href='/about'>My Credentials</a>
                          </li>
                          <li>
                            <a href='/contact'>Let's Talk</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* End Single Widget  */}
                    {/* Start Single Widget  */}
                    <div className='col-lg-6 col-sm-6 col-12 mt_mobile--30'>
                      <div className='footer-link'>
                        <h4>Say Hello</h4>
                        <ul className='ft-link'>
                          <li>
                            <a href='mailto:hi@askshiv.co.uk'>
                              hi@askshiv.co.uk
                            </a>
                          </li>
                        </ul>

                        <div className='social-share-inner'>
                          <ul className='social-share social-style--2 d-flex justify-content-start liststyle mt--15'>
                            <a href='https://www.linkedin.com/in/siobhanmckenzie/'>
                              <FaLinkedinIn />
                            </a>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Single Widget  */}

                    <div className='col-lg-12'>
                      <div className='copyright-text'>
                        <p>
                          Copyright © 2020 Siobhan McKenzie Ltd. All Rights
                          Reserved
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    )
  }
}
export default Footer

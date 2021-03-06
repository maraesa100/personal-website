import React, { Component, Fragment } from 'react'
import { FiChevronUp } from 'react-icons/fi'
import ScrollToTop from 'react-scroll-up'
import Slider from 'react-slick'
import Helmet from '../component/common/Helmet'
import FooterTwo from '../component/footer/FooterTwo'
import Header from '../component/header/Header'
import BlogContent from '../elements/blog/BlogContent'
import CallAction from '../elements/callaction/CallAction'
import PortfolioList from '../elements/portfolio/PortfolioList'
import ServiceList from '../elements/service/ServiceList'
import { slideSlick } from '../page-demo/script'

const SlideList = [
  {
    textPosition: 'text-center',
    bgImage: 'bg_image--21',
    category: '',
    title: 'SIOBHAN MCKENZIE',
    description: `Fuss-free & Fast App Development`,
    buttonText: 'Contact Me',
    buttonLink: '/contact'
  }
]

class DigitalAgency extends Component {
  render() {
    return (
      <Fragment>
        <Helmet pageTitle='Siobhan McKenzie' />

        {/* Start Header Area  */}
        <Header logo='light' color='color-white' />
        {/* End Header Area  */}

        {/* Start Slider Area   */}
        <div className='slider-wrapper color-white'>
          <div className='slider-activation slider-digital-agency'>
            <Slider className='rn-slick-dot dot-light' {...slideSlick}>
              {SlideList.map((value, index) => (
                <div
                  className={`slide slide-style-2 fullscreen d-flex align-items-center justify-content-center bg_image ${value.bgImage}`}
                  key={index}
                  data-black-overlay='2'
                >
                  <div className='container'>
                    <div className='row'>
                      <div className='col-lg-12'>
                        <div className={`inner ${value.textPosition}`}>
                          {value.category ? <span>{value.category}</span> : ''}
                          {value.title ? (
                            <h1 className='title'>{value.title}</h1>
                          ) : (
                            ''
                          )}
                          {value.description ? (
                            <p className='description'>{value.description}</p>
                          ) : (
                            ''
                          )}
                          {/* {value.descriptionSecondary ? <p className="descriptionSecondary">{value.descriptionSecondary}</p> : ''} */}
                          {value.buttonText ? (
                            <div className='slide-btn'>
                              <a
                                className='rn-button-style--2 btn-primary-color'
                                href={`${value.buttonLink}`}
                              >
                                {value.buttonText}
                              </a>
                            </div>
                          ) : (
                            ''
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        {/* End Slider Area   */}

        {/* Start Service Area  */}
        <div className='service-area pt--120 pb--50 bg_color--1'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='section-title text-center service-style--3 mb--30'>
                  <h2 className='title'>Who Am I?</h2>
                  <p>
                    Hey! I’m Shiv. If we're working together on an MVP I’m here
                    to get you from 0 to launch within a short span of months,
                    and driving cashflow from day 1. If we're working on an
                    established product, I'll be your ticket closing{' '}
                    <span style={{ fontWeight: 'bold' }}>machine.</span>
                    {/* I will give
                    you the tools you need for success: distill your mission and
                    features, glue your team together, and I will build it for
                    you. Once. */}
                  </p>
                  <h2 className='title'>MVP Collaboration</h2>
                  <p>
                    Work with me, and your product will be built to last. It
                    will easily scale upto 100,000+ live users. There will be no
                    unexpected app crashes or emergency meetings, or
                    embarrassing delayed launches when you have a huge surge of
                    new users to support. You get my Business Development
                    experience (I’ve won 2 awards), my Developer experience
                    (Coding, DevOps, QA, Architecture).
                  </p>
                  <h2 className='title'>The Code</h2>
                  <p>
                    Your codebase will be developed in the UK, by an SC-Cleared
                    developer who understands the business of MVPs: from PCI
                    Compliance to engaging your customers. Your success has very
                    little to do with superhero coding skills, and much more to
                    do with the finesse of delivering working features that are
                    on time, aligned with your user capture machine, and on
                    budget.
                  </p>
                  <h2 className='title'>The Process</h2>
                  <p>
                    Creating apps doesn't need to be a lengthy process, or an
                    expensive one. What you want is a minimal set of features
                    that you can test on your user base of 'first adopters'. You
                    need to fail quickly and therefore iterate to success
                    quickly. Your users will tell you what works through their
                    usage and behaviour.
                  </p>
                  <h2 className='title'>Get In Touch</h2>
                  <p>
                    I’m here to build you a product to be proud of, one that
                    makes an impact, and most importantly helps people. I
                    deliver on time, on budget, with the actual list of
                    (working!!) features agreed upon. If you believe that the
                    best businesses are those that serve others as much as they
                    serve themselves, send me an email! I’d love to work with
                    you.{' '}
                  </p>
                  <a href='mailto:hi@askshiv.co.uk'>hi@askshiv.co.uk</a> <br />
                </div>
              </div>
            </div>
            <ServiceList
              item='6'
              column='col-lg-4 col-md-6 col-sm-6 col-12 text-center'
            />
          </div>
        </div>
        {/* End Service Area  */}

        {/* Start Portfolio Area */}
        <div className='portfolio-area ptb--120 bg_image bg_image--3'>
          <div className='portfolio-sacousel-inner'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='section-title text-center service-style--3 mb--15'>
                    <h2 className='title'>Work</h2>
                    <p>
                      Examples of Native Mobile App and Full-Stack Web Apps.
                    </p>
                  </div>
                </div>
              </div>
              <div className='row'>
                <PortfolioList
                  styevariation='text-center mt--40'
                  column='col-lg-4 col-md-6 col-sm-6 col-12'
                  item='6'
                />
              </div>
              {/* <div className="row">
                                <div className="col-lg-12">
                                    <div className="view-more-btn mt--60 text-center">
                                        <a className="rn-button-style--2 btn-solid" href="/portfolio"><span>View More</span></a>
                                    </div>
                                </div>
                            </div> */}
            </div>
          </div>
        </div>
        {/* End Portfolio Area */}

        {/* Start Brand Area */}
        {/* <div className='rn-brand-area ptb--120 bg_color--5'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='section-title text-center service-style--3 mb--30'>
                  <h2 className='title'>Our Clients</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                  </p>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-12 mt--40'>
                <Brand branstyle='branstyle--2' />
              </div>
            </div>
          </div>
        </div> */}
        {/* End Brand Area */}

        {/* Start call To Action  */}
        <CallAction />
        {/* End call To Action  */}

        {/* Start Footer Style  */}
        <FooterTwo />
        {/* End Footer Style  */}
        {/* Start Back To Top */}
        <div className='backto-top'>
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}
      </Fragment>
    )
  }
}

export default DigitalAgency

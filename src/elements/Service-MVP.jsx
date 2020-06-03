import React, { Component } from 'react'
import { FiChevronUp } from 'react-icons/fi'
import ScrollToTop from 'react-scroll-up'
import PageHelmet from '../component/common/Helmet'
import Footer from '../component/footer/Footer'
import Header from '../component/header/Header'
import Breadcrumb from './common/Breadcrumb'

class Service extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHelmet pageTitle='Service' />
        <Header
          headertransparent='header--transparent'
          colorblack='color--black'
          logoname='logo.png'
        />

        {/* Start Breadcrump Area */}
        <Breadcrumb title={'Service'} />
        {/* End Breadcrump Area */}

        {/* Start Service Area */}
        <div className='service-area ptb--120 bg_color--5'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='section-title text-center mb--30'>
                  <h2>MVP Development</h2>
                  {/* <p>
                    I develop MVP Web and Mobile Apps. I also do maintenance and
                    feature development on rolling contracts
                  </p> */}
                  <br />

                  <h3>How can I help you?</h3>
                  <br />
                  <h4>We'll be a good match if you:</h4>
                  <br />
                  <p>
                    Are building a{' '}
                    <span style={{ fontWeight: 'bold' }}>
                      Minimum Viable Product (MVP)
                    </span>{' '}
                    with less than 3 key features.
                  </p>
                  <p>
                    Need to get a stable product to market{' '}
                    <span style={{ fontWeight: 'bold' }}>within 12 months</span>
                  </p>
                  <p>
                    Use the lean process improvement model for this business:
                    where an initial product is launched, and initial users are
                    attacted, who are then monitored to see how new features and
                    improvements improve engagement and profitability
                  </p>
                  <p>
                    Have a{' '}
                    <span style={{ fontWeight: 'bold' }}>
                      strong business idea
                    </span>
                    , with a{' '}
                    <span style={{ fontWeight: 'bold' }}>compelling USP.</span>
                  </p>
                  <p>
                    Have a self-sustaining business model: where it will cost
                    less to attract and support users, than the long-term
                    running costs (you do not plan to perpetually attract
                    investors)
                  </p>
                  <p>
                    Want to{' '}
                    <span style={{ fontWeight: 'bold' }}>
                      focus on the business side
                    </span>{' '}
                    , and outsource day-to-day project management of the Tech
                    side.
                  </p>
                  <br />

                  {/* <h3>How our maintenance collaboration will work</h3>
                  <p>
                    You’ll send me your project information, and 'pain points'
                    (issues you've had in the past), as well as your deadline,
                    features required and budget.
                  </p>
                  <br />
                  <h3>Fees</h3>
                  <p>
                    I offer both fixed and hourly pricing, depending on project
                    type. My hourly rate is £65/hr, and MVP app costs range
                    between £6,000 and £24,000.
                  </p> */}
                </div>
              </div>
            </div>
            {/* <div className='row service-one-wrapper'>
              {ServiceList.map((val, i) => (
                <div
                  className='col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12'
                  key={i}
                >
                  <a href='/service-details'>
                    <div className='service service__style--2'>
                      <div className='icon'>{val.icon}</div>
                      <div className='content'>
                        <h3 className='title'>{val.title}</h3>
                        <p>{val.description}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div> */}
          </div>
        </div>
        {/* End Service Area */}

        {/* Start Service Area */}

        {/* End Service Area */}

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
export default Service

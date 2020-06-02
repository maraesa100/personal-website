import React, { Component } from 'react'
import PageHelmet from '../component/common/Helmet'
import Breadcrumb from '../elements/common/Breadcrumb'
import {
  FiCast,
  FiLayers,
  FiUsers,
  FiMonitor,
  FiChevronUp
} from 'react-icons/fi'
import ScrollToTop from 'react-scroll-up'
import Header from '../component/header/Header'
import Footer from '../component/footer/Footer'

const ServiceList = [
  {
    icon: <FiCast />,
    title: 'Business Stratagy',
    description:
      'I throw myself down among the tall grass by the stream as I lie close to the earth.'
  },
  {
    icon: <FiLayers />,
    title: 'Website Development',
    description:
      'I throw myself down among the tall grass by the stream as I lie close to the earth.'
  },
  {
    icon: <FiUsers />,
    title: 'Marketing & Reporting',
    description:
      'I throw myself down among the tall grass by the stream as I lie close to the earth.'
  },
  {
    icon: <FiMonitor />,
    title: 'Mobile App Development',
    description:
      'I throw myself down among the tall grass by the stream as I lie close to the earth.'
  },
  {
    icon: <FiCast />,
    title: 'Website Development',
    description:
      'I throw myself down among the tall grass by the stream as I lie close to the earth.'
  },
  {
    icon: <FiMonitor />,
    title: 'Marketing & Reporting',
    description:
      'I throw myself down among the tall grass by the stream as I lie close to the earth.'
  }
]
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
                  <p>
                    I develop MVP Web and Mobile Apps. I also do maintenance and
                    feature development on rolling contracts
                  </p>
                  <br />

                  <h3>How our MVP collaboration will work.</h3>
                  <p>
                    You’ll send me an email to include: your mission, your
                    budget, your target customer profile, and your target launch
                    date. I’ll book a 1-hour meeting with you to understand
                    where you are in the project, pick up any blindspots, and
                    put together a plan of action. I’ll send through my
                    fixed-fee quote, and once the deposit is paid I will set up
                    the tech: e.g. GitHub Project with issues, Slack channels. I
                    will send through the milestones and timings as well as your
                    MVP Roadmap with marketing and design schedules. The MVP
                    Roadmap which will take the pain out of your project
                    management, and will allow you to assume the role of
                    ‘Product Owner’ without teething problems.
                  </p>
                  <br />

                  <h3>How our maintenance collaboration will work</h3>
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
                  </p>
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

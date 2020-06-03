import React, { Component } from 'react'
import PageHelmet from '../component/common/Helmet'
import Breadcrumb from './common/Breadcrumb'
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
                  <h3>How can I help you?</h3>
                  <p>
                    We'll be a good match if you're looking for a developer who:
                  </p>
                  <ul>
                    <li>Can communicate in plain English</li>
                    <li>Requires zero micromanagement or oversight</li>
                    <li>Closes tickets quickly</li>
                    <li>
                      Has experience of working in a startup environment
                      (Upgrade Pack) as well as giant technology companies (CGI)
                    </li>
                    <li>
                      Can take on DevOps, Technical Architecture and QA
                      Responsibility
                    </li>
                    <li>Delivers on-time, every time</li>
                    <li>
                      Can deal with short issue resolution timeframes (12 hours)
                    </li>
                    <li>Stays on budget</li>
                    <li>
                      Can comply with high level security requirements (UK Based
                      and holds Security Clearance)
                    </li>
                    <li>Can coordinate with Product and Marketing directly</li>
                    <li>
                      Can contribute to your business and user capture plan
                    </li>
                  </ul>
                  <br />
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

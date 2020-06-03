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
        <div className='service-area ptb--120'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='section-title text-center mb--30'>
                  <h2>Maintenance</h2>
                  <br />
                  <h3>
                    We'll be a good match if you're looking for a developer who:
                  </h3>
                  <br />
                  <p>
                    Can communicate in{' '}
                    <span style={{ fontWeight: 'bold' }}>plain English</span>{' '}
                  </p>
                  <p>
                    Stays <span style={{ fontWeight: 'bold' }}>on budget</span>{' '}
                  </p>
                  <p>Requires zero micromanagement or oversight</p>
                  <p>
                    Closes tickets{' '}
                    <span style={{ fontWeight: 'bold' }}>quickly</span>
                  </p>
                  <p>
                    Has <span style={{ fontWeight: 'bold' }}>experience</span>{' '}
                    of working in a{' '}
                    <span style={{ fontWeight: 'bold' }}>startup</span>{' '}
                    environment (Upgrade Pack), as well as for{' '}
                    <span style={{ fontWeight: 'bold' }}>
                      large multinational
                    </span>{' '}
                    Technology companies (CGI)
                  </p>
                  <p>
                    Does DevOps, Technical Architecture and QA alongside
                    Development
                  </p>
                  <p>
                    Delivers <span style={{ fontWeight: 'bold' }}>on time</span>
                  </p>
                  <p>
                    Can comply with{' '}
                    <span style={{ fontWeight: 'bold' }}>
                      high level security
                    </span>{' '}
                    requirements (UK Based and holds Security Clearance)
                  </p>
                  <p>
                    Conducts work{' '}
                    <span style={{ fontWeight: 'bold' }}>confidentially</span>
                  </p>
                  <p>Can coordinate with Product and Marketing directly</p>
                  <p>Can contribute to your Business and User Capture plan</p>
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

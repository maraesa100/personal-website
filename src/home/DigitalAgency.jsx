import React, { Component , Fragment } from "react";
import Slider from "react-slick";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import { slideSlick } from "../page-demo/script";
import ServiceList from "../elements/service/ServiceList";
import Header from "../component/header/Header";
import FooterTwo from "../component/footer/FooterTwo";
import Testimonial from "../elements/Testimonial";
import PortfolioList from "../elements/portfolio/PortfolioList";
import BlogContent from "../elements/blog/BlogContent";
import Brand from "../elements/Brand";
import CallAction from "../elements/callaction/CallAction";
import TabOne from "../elements/tab/TabOne";
import Helmet from "../component/common/Helmet";

const SlideList = [
    {
        textPosition: 'text-center',
        bgImage: 'bg_image--21',
        category: '',
        title: 'SIOBHAN MCKENZIE',
        description: `Fuss-free & Fast App Development`,
        // descriptionSecondary: `MERN || LAMP: React / React Native, Node, Javascript, PHP, Laravel`,
        buttonText: 'Contact Me',
        buttonLink: '/contact'
    }
    // {
    //     textPosition: 'text-center',
    //     bgImage: 'bg_image--23',
    //     category: '',
    //     title: 'Development.',
    //     description: 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.',
    //     buttonText: 'Contact Us',
    //     buttonLink: '/contact'
    // },
    // {
    //     textPosition: 'text-center',
    //     bgImage: 'bg_image--22',
    //     category: '',
    //     title: 'UX Research.',
    //     description: 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.',
    //     buttonText: 'Contact Us',
    //     buttonLink: '/contact'
    // },
    // {
    //     textPosition: 'text-center',
    //     bgImage: 'bg_image--20',
    //     category: '',
    //     title: 'UX Research.',
    //     description: 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.',
    //     buttonText: 'Contact Us',
    //     buttonLink: '/contact'
    // }
]

class DigitalAgency extends Component{
    render(){
        const PostList = BlogContent.slice(0 , 3);
        let title = 'About',
        description = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,';
        return(
            <Fragment> 
                
                <Helmet pageTitle="Siobhan McKenzie" />

                {/* Start Header Area  */}
                <Header logo="light" color="color-white"/>
                {/* End Header Area  */}
                
                {/* Start Slider Area   */}
                <div className="slider-wrapper color-white">
                    <div className="slider-activation slider-digital-agency">
                        <Slider className="rn-slick-dot dot-light" {...slideSlick}>
                            {SlideList.map((value , index) => (
                                <div className={`slide slide-style-2 fullscreen d-flex align-items-center justify-content-center bg_image ${value.bgImage}`} key={index} data-black-overlay="2">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className={`inner ${value.textPosition}`}>
                                                    {value.category ? <span>{value.category}</span> : ''}
                                                    {value.title ? <h1 className="title">{value.title}</h1> : ''}
                                                    {value.description ? <p className="description">{value.description}</p> : ''}
                                                    {/* {value.descriptionSecondary ? <p className="descriptionSecondary">{value.descriptionSecondary}</p> : ''} */}
                                                    {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
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
                <div className="service-area pt--120 pb--50 bg_color--1">
                   <div className="container">
                       <div className="row">
                           <div className="col-lg-12">
                                <div className="section-title text-center service-style--3 mb--30">
                                    <h2 className="title">What I do</h2>
                                    <p>I'll slot directly into your workflow and cleanly close tickets, build out features and fix and prevent bugs.</p>
                                    <p>I'll save you time - there's no jargon, no micromanagement required. Clear daily communication and honest upfront time estimates. No need to outline absolutely everything - I make no-brainer assumptions if things are slightly unclear, and will flag these assumptions in my notes. My goal is to saving you time and effort which should be put elsewhere.</p>
                                    <p>You'll get the benefit of my technical architectur, QA (quality) and Testing experience on every job (even if you just hire me to do frontend fixes).</p>
                                    <p>My business experience means i'll push back on technical strategy if I feel you can get more value for money or efficiency doing things differently. No ego - I can make recommendations, but final choices are always yours.</p>
                                    <p>Plain english is used whether working with technical or non-technical people.</p>
                                    <p>I can scale up and down with requirements - I'm open about my available time capacity.</p>
                                    <br />
                                    <h3>My Technologies</h3>
                                    <h4>Languages: Javascript | PHP</h4>
                                    <p>I develop native mobile apps and web apps mainly using the following technologies and services.</p> 
                                    <p>React, React Native, Node, Laravel, NoSQL, SQL, Firebase, AWS, Heroku.</p> 
                                    <br />
                                    <h3>My Tooling | Testing</h3>
                                    <p>TDD: Jest</p>                                    
                                    <p>BDD: Cucumber</p>                                    
                                    <p>Continuous Integration: CircleCI</p>                                    
                                    <p>Firebase test lab</p>                                    
                                    <p>Microservices.</p>    
                                    <p>Oauth authentication.</p>    
                                    <br />
                                    <h3>Secure Projects: My Clearance</h3>    
                                    <p>I hold SC-Clearance (up for renewal in 2022). This is United Kingdom Security Vetting (one of five levels of national security vetting). Documentation available if required.</p>                            
                               </div>
                           </div>
                       </div>
                        <ServiceList item="6" column="col-lg-4 col-md-6 col-sm-6 col-12 text-center" />
                   </div>
                </div>  
                {/* End Service Area  */} 

                {/* Start Portfolio Area */}
                <div className="portfolio-area ptb--120 bg_image bg_image--3">
                    <div className="portfolio-sacousel-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center service-style--3 mb--15">
                                        <h2 className="title">Work</h2>
                                        <p>Examples of Native Mobile App development, and two Full-Stack web apps.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <PortfolioList styevariation="text-center mt--40" column="col-lg-4 col-md-6 col-sm-6 col-12" item="6" />
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="view-more-btn mt--60 text-center">
                                        <a className="rn-button-style--2 btn-solid" href="/portfolio"><span>View More</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Portfolio Area */}

                {/* Start About Area */}
                <div className="about-area ptb--120  bg_color--1">
                    <div className="about-wrapper">
                        <div className="container">
                            <div className="row row--35">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/assets/images/about/about-3.jpg" alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">{title}</h2>
                                            <p className="description">{description}</p>
                                        </div>
                                        <div className="row mt--30">
                                            <TabOne tabStyle="tab-style--1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Area */}

                {/* Start Testimonial Area */}
                <div className="rn-testimonial-area ptb--120 bg_color--5">
                    <div className="container">
                        <Testimonial />
                    </div>
                </div>
                {/* End Testimonial Area */}

                {/* Start Blog Area */}
                <div className="rn-blog-area pt--120 pb--80 bg_color--1">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12">
                                <div className="section-title text-center service-style--3">
                                    <h2>Latest News</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--60">
                            {PostList.map((value , i ) => (
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                    <div className="blog blog-style--1 text-center">
                                        <div className="thumbnail">
                                            <a href="/blog-details">
                                                <img className="w-100" src={`/assets/images/blog/blog-${value.images}.jpg`} alt="Blog Images"/>
                                            </a>
                                        </div>
                                        <div className="content">
                                            <p className="blogtype">{value.category}</p>
                                            <h4 className="title"><a href="/blog-details">{value.title}</a></h4>
                                            <div className="blog-btn">
                                                <a className="rn-btn text-white" href="/blog-details">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="view-more-btn mt--20 text-center">
                                    <a className="rn-button-style--2 btn-solid" href="/blog"><span>View More</span></a>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
                {/* End Blog Area */}

                {/* Start Brand Area */}
                <div className="rn-brand-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center service-style--3 mb--30">
                                    <h2 className="title">Our Clients</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 mt--40">
                                <Brand branstyle="branstyle--2" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area */}
                
                {/* Start call To Action  */}
                <CallAction />
                {/* End call To Action  */}

                {/* Start Footer Style  */}
                <FooterTwo />
                {/* End Footer Style  */}
                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
            </Fragment>
        )
    }
}

export default DigitalAgency;
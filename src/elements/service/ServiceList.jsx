import React ,{ Component }from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";

const ServiceList = [
    // {
    //     icon: <FiCast />,
    //     title: 'Business',
    //     description: `I develop Minimum Viable Products (MVP's) as well as maintenance and feature development contracts.`
    // },
    // {
    //     icon: <FiUsers />,
    //     title: 'Communication',
    //     description: 'Daily communication is typical on live projects with at least 1 day/week resource required. Slack, Jira Tickets or Github comments on issues.'
    // },
    { 
        icon: <FiMonitor />,
        title: 'Mobile App Development',
        description: 'React Native development for iOS and Android.'
    },
    {
        icon: <FiLayers />,
        title: 'The code',
        description: '"Keep It Simple, Stupid!" I develop a codebase which is easily testable, built to last (reusable & understable) and avoids abstraction, with a "clean code" approach. Designed to be handed over once - not again and again.'
    },
    {
        icon: <FiUsers />,
        title: 'Web App development',
        description: 'Creating products using the MERN (MEAN, EXPRESS, REACT & NODE) stacks or mixed stacks with PHP / Laravel backends. Solutions are developed from scratch with scale in mind, and stability as a priority.'
    }
    // { 
    //     icon: <FiMonitor />,
    //     title: 'Mobile App Development',
    //     description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    // }
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href="/service-details">
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;

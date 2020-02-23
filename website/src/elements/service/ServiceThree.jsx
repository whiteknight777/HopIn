import React, { Component } from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";

const btn = {
    buttonLink: "#",
    buttonText: "Join the community" 
}
const ServiceList = [
    {
        icon: "01",
        title: '',
        description: 'find the perfect route and choose the date of your trip.'
    },
    {
        icon: "02",
        title: '',
        description: 'Make your choice and choose the driver you want.'
    },
    {
        icon: "03",
        title: '',
        description: 'Book in advance or at the last minute.'
    }
]

class ServiceTwo extends Component{
    render(){
        let title = 'Get started now',
        description = '';
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
                            <h2 className="title">{title}</h2>
                            <p>{description}</p>
                            <div className="service-btn">
                            <a className="rn-button-style--2 btn-solid" href={`${btn.buttonLink}`}>{btn.buttonText}</a>
                                {/* <a className="btn-transparent rn-btn-dark" href="/service"><span className="text">Request Custom Service</span></a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-12 mt_md--50">
                        <div className="row service-one-wrapper">
                            {ServiceList.map( (val , i) => (
                                <div className="col-lg-4 col-md-4 col-sm-6 col-12" key={i}>
                                    <a href="/service-details">
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                {/* <h3 className="title">{val.title}</h3> */}
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceTwo;

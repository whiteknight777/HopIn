import React, { Component } from "react";
import { FaFastForward } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { AiFillSafetyCertificate } from "react-icons/ai";

const ServiceList = [
    {
        icon: <IoMdCheckmarkCircleOutline/>,
        title: 'Easy',
        description: 'Quickly find a carpool among the different proposed routes.'
    },
    {
        icon: <FaFastForward/>,
        title: 'Fast',
        description: 'book your next trip in just a few clicks.'
    },
    {
        icon: <AiFillSafetyCertificate />,
        title: 'Safe',
        description: 'book securely and confirm payment once arrived.'
    },
]

class ServiceOne extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceList.map( (val , i) => (
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                            <div className="service service__style--1">
                                <div className="icon header">
                                    {/* <img src={`/assets/images/icons/icon-${val.icon}.png`} alt="Hopin service"/> */}
                                    {val.icon}
                                </div>
                                <div className="content">
                                    <h4 className="title">{val.title}</h4>
                                    <p>{val.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceOne;
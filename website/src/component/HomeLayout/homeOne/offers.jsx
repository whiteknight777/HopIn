import React, { Component } from "react";
import Slider from "react-slick";
import { portfolioSlick2 } from "../../../page-demo/script";
import Avatar from "../../../../public/assets/images/icons/avatar.png"
import { MdStar } from "react-icons/md";

const PortfolioList = [
    {
        image: 'image-1',
        category: 'John',
        rating: '4.2',
        depart: "Monaco",
        arrive: "Nice",
        price: "16 $",
        title: ' Lyon >> Paris'
    },
    {
        image: 'image-2',
        category: 'Jane',
        rating: '4.2',
        depart: "Bordeaux",
        arrive: "Toulouse",
        price: "21 $",
        title: ' Lyon >> Paris'
    },
    {
        image: 'image-3',
        category: 'Olivia',
        rating: '4.2',
        depart: "Nice",
        arrive: "paris",
        price: "32 $",
        title: ' Lyon >> Paris'
    },
    {
        image: 'image-4',
        category: 'Morgan',
        rating: '4.2',
        depart: "Metz",
        arrive: "paris",
        price: "22 $",
        title: ' Lyon >> Paris'
    },
    {
        image: 'image-3',
        category: 'Smith',
        rating: '4.2',
        depart: "Lyon",
        arrive: "Marseille",
        price: "18 $",
        title: ' Lyon >> Paris'
    },
    {
        image: 'image-4',
        category: 'Peter',
        rating: '4.2',
        depart: "Lille",
        arrive: "Nantes",
        price: "16 $",
        title: ' Lyon >> Paris'
    }
]

class Portfolio extends Component{
    render(){
        let title = 'Our destinations',
        description = 'Choose the perfect route and the best offer.';
        return(
            <React.Fragment>
                <div className="portfolio-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-title">
                                    <h2>{title}</h2>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-slick-activation mt--70 mt_sm--40">
                        <Slider {...portfolioSlick2}>
                            {PortfolioList.map((value , index) => (
                                <div className="portfolio h-sm" key={index}>
                                    <div className="thumbnail-inner">
                                    </div>
                                    <div className="content">
                                        <div className="inner">
                                            <div className="userInfo"> 
                                                <img src={Avatar} alt="driver-pic"/>
                                                <p className="info">
                                                <span>{value.category}</span>
                                                <span><MdStar /> {value.rating}</span>
                                                </p>
                                             </div>
                                            <h4>
                                                <a href="/portfolio-details">
                                                     {value.depart}
                                                    <span>>></span> 
                                                    {value.arrive}
                                                 </a>
                                                 <p><b>price: {value.price}</b></p>
                                                 <p><b>date: 16/02/2020</b></p>
                                            </h4>
                                            <div className="portfolio-button">
                                                <a className="rn-btn" href="/portfolio-details">Case Study</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Portfolio;
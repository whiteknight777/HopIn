import React, { Component , Fragment } from "react";
import SliderOne from "../component/slider/SliderOne";
import ServiceThree from "../elements/service/ServiceThree";
import CounterOne from "../elements/counters/CounterOne";
import FindForm from "../elements/FindForm";
import { Parallax } from "react-parallax";
import About from "../component/HomeLayout/homeOne/AboutTwo";
import Offers from "../component/HomeLayout/homeOne/offers";
import BlogContent from "../elements/blog/BlogContent";
import BrandTwo from "../elements/BrandTwo";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const image3 =
  "/assets/images/bg/bg-image-12.jpg";

class MainDemo extends Component{
    render(){
        const PostList = BlogContent.slice(0 , 3);
        return(
            <Fragment> 
                {/* Start Slider Area   */}
                <div className="slider-wrapper">
                    <SliderOne />
                </div>
                {/* End Slider Area   */}
                

                {/* Start About Area */}
                <div className="about-area about-position-top pb--120">
                    <About />
                </div>
                {/* End About Area */}
                <div className="service-area ptb--80  bg_image bg_image--3">
                   <div className="container">
                        <ServiceThree />
                   </div>
                </div>
                {/* Start Portfolio Area */}
                {/* <div className="portfolio-area ptb--120 bg_color--1">
                    <div className="portfolio-sacousel-inner mb--55">
                        <Offers />
                    </div>
                </div> */}
                {/* End Portfolio Area */}


                {/* Start CounterUp Area */}
                {/* <div className="rn-counterup-area pt--25 pb--110 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <h3 className="fontWeight500">Our Fun Facts</h3>
                                </div>
                            </div>
                        </div>
                        <CounterOne />
                    </div>
                </div> */}
                {/* End CounterUp Area */}

                {/* Start Testimonial Area */}
                <div className="rn-testimonial-area bg_color--5 ptb--120">
                    <div className="container">
                        <FindForm />
                    </div>
                </div>
                {/* End Testimonial Area */}

                {/* Start Blog Area */}
                {/* <div className="rn-blog-area pt--120 bg_color--1 mb-dec--30">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="section-title text-left">
                                    <h2>Latest News</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="blog-btn text-left text-lg-right mt_sm--10 mt_md--10">
                                    <a className="btn-transparent rn-btn-dark" href="/blog"><span className="text">View All News</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--60 mt_sm--40">
                            {PostList.map((value , i ) => (
                                <div className="col-lg-4 col-md-6 col-12" key={i}>
                                    <div className="blog blog-style--1">
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
                    </div>    
                </div>*/}
                {/* End Blog Area  */}


                {/* Start Brand Area */}
                {/* <div className="rn-brand-area brand-separation bg_color--5 pb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandTwo />
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="rn-brand-area brand-separation ptb--120">
                    <div className="brand-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    {/* <BrandTwo /> */}
                                    <div className="social" >
                                        <h2 >Follow us </h2>
                                        <p>Some Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic labore neque delectus deleniti, voluptatibus nisi! Eveniet quis, deserunt soluta vero aspernatur esse iusto tenetur ullam? Ab cumque dolor numquam deserunt.</p>
                                        <div className="social-link">
                                        <a className="rn-btn facebook" href="/portfolio-details"><FaFacebook /> Facebook</a>
                                        <a className="rn-btn instagram" href="/portfolio-details"><FaInstagram /> Instagram</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                {/* End Brand Area */}
            </Fragment>
        )
    }
}
export default MainDemo;
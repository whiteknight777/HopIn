import React, {Component, Fragment} from "react";
import ScrollToTop from 'react-scroll-up';
import Particles from 'react-particles-js';
import {
    FaReact,
    FaSass
} from "react-icons/fa";
import Fade from 'react-reveal/Fade';
import {
    FiSmartphone,
    FiCode,
    FiDownload,
    FiCommand,
    FiHeadphones,
    FiBold,
    FiChevronUp
} from "react-icons/fi";

const featureList = [
    {
        icon: <FaReact/>,
        title: 'Latest React 16.8+',
        subtitle: 'We used latest react vertion ^16.8.6.Its a awesome design made by react.'
    },
    {
        icon: <FiSmartphone/>,
        title: 'Perfect Responsive',
        subtitle: 'Our Template is full Perfect for all device. You can visit our template all device easily.'
    },
    {
        icon: <FiCode/>,
        title: 'Well Documented Codes',
        subtitle: 'The Trydo code is awesome well documented code. And Its customization is very easily'
    },
    {
        icon: <FaSass/>,
        title: 'Sass Available',
        subtitle: 'The tamplate has Sass available for css. You can Change css by sass'
    },
    {
        icon: <FiDownload/>,
        title: 'Fast Loading Speed',
        subtitle: 'Trydo is faster loading speed.Trydo create your theme so much faster '
    },
    {
        icon: <FiCommand/>,
        title: 'Modern Design',
        subtitle: 'Trydo is a modern creatuve design for Creative Agency , Personal Portfolio etc....'
    },
    {
        icon: <FiHeadphones/>,
        title: '24 Support System',
        subtitle: 'We are provide 24 hours support for all clients.You can purchase without hesitation.'
    },
    {
        icon: <FiBold/>,
        title: 'Bootstrap Comfortable',
        subtitle: 'Bootstrap comfortable is available in trydo. So layout changes is so much easily'
    }
]

const singleDemo = [
    {
        url: 'main-demo',
        imageUrl: 'demo-home.png',
        title: 'Main Demo',
        description: 'Our Template is perfect for creative agency.All agencies use this template for all purpose.',
        label: ''
    },
    {
        url: 'dark-main-demo',
        imageUrl: 'dark-main-demo.png',
        title: 'Main Demo — Dark Version',
        description: 'Our Template is perfect for creative agency.All agencies use this template for all purpose.',
        label: 'New'
    },
    {
        url: 'creative-agency',
        imageUrl: 'creative-agency.png',
        title: 'Creative Agency',
        description: 'Its a modern design with all realted features for creative agencies company.',
        label: ''
    },

    {
        url: 'dark-portfolio-landing',
        imageUrl: 'dark-personal-portfolio-landing.png',
        title: 'Personal Portfolio 02 — One Page',
        description: 'It comes with landing page feature. This tamplate you can be used for your Personal useses,  Freelancer, Designer, and Developer etc.',
        label: 'New'
    },
    {
        url: 'portfolio-landing',
        imageUrl: 'personal-portfolio-landing.png',
        title: 'Personal Portfolio — One Page',
        description: 'It comes with landing page feature. This tamplate you can be used for your Personal useses,  Freelancer, Designer, and Developer etc.',
        label: 'New'
    },
    {
        url: 'creative-landing',
        imageUrl: 'creative-landing.png',
        title: 'Creative Agency 02 — One Page',
        description: 'Added creative agency landing page.When you need creative agency landing page you can be use it for your creative agency, Digital agency landing page page.',
        label: 'New'
    },
    {
        url: 'home-particles',
        imageUrl: 'homeparticles.png',
        title: 'Home Particle — Landing Page',
        description: 'Home particle has most feature is particles animation.It can be used for your creative agency, Business agency, Digital agency and so on, And it has Landing page added.',
        label: 'New'
    },
    {
        url: 'personal-portfolio',
        imageUrl: 'personal-portfolio.png',
        title: 'Personal Portfolio',
        description: 'Its a personal portfolio tamplate thats can be used your Personal useses,  Freelancer, Designer, and Developer etc.',
        label: ''
    },

    {
        url: 'portfolio-home',
        imageUrl: 'portfolio-home.png',
        title: 'Minimal Portfolio',
        description: 'Its a minimal portfolio template. You can be showing your portfolio perfectly by using this template.',
        label: ''
    },
    {
        url: 'digital-agency',
        imageUrl: 'digital-agency.png',
        title: 'Digital Agency',
        description: 'A Digital Agency template is a nice slider animation, faster loading and all features available for agencies.',
        label: ''
    },
    {
        url: 'business',
        imageUrl: 'business.png',
        title: 'Business',
        description: 'It has available all kinds of features for a Business corporate website.You can be use it for your Business website.',
        label: ''
    },
    {
        url: 'startup',
        imageUrl: 'startup.png',
        title: 'Startup',
        description: 'A modern and nice design template that can be all startup agencies for all kinds of startup purpose.',
        label: ''
    },
    {
        url: 'paralax',
        imageUrl: 'paralax.png',
        title: 'Paralax Home',
        description: 'Its a nice and awesome paralax background image design.You can be use it for Business, Corporate, Degital Agency and other so on.',
        label: ''
    },
    {
        url: 'studio-agency',
        imageUrl: 'studio-agency.png',
        title: 'Studio Agency',
        description: 'It has been used background video and vedio popup.You can use it for all kinds of agencies studio.',
        label: ''
    },
    {
        url: '#comingsoon',
        imageUrl: 'coming-soon.png',
        title: 'Coming Soon',
        description: 'More Feature are Coming Soon',
        label: ''
    }
    
]

const innerDemo = [
    {
        url: 'service',
        imageUrl: 'service.png',
        title: 'Service',
    },
    {
        url: 'service-details',
        imageUrl: 'service-details.png',
        title: 'Service Details',
    },
    {
        url: 'about',
        imageUrl: 'about.png',
        title: 'About',
    },
    {
        url: 'blog',
        imageUrl: 'blog-list.png',
        title: 'Blog List',
    },
    {
        url: 'blog-details',
        imageUrl: 'blog-details.png',
        title: 'Blog Details',
    },
    {
        url: 'portfolio',
        imageUrl: 'portfolio.png',
        title: 'Portfolio',
    },
    {
        url: 'portfolio-details',
        imageUrl: 'portfolio-details.png',
        title: 'Portfolio Details',
    },
    {
        url: 'contact',
        imageUrl: 'contact.png',
        title: 'Contact',
    },

]

class Demo extends Component {
    render() {
        return (
            <Fragment>
                {/* Start Banner Area  */}
                <div className="prv-banner-wrapper"
                     style={{backgroundImage: `url("assets/images/preview/preview-bg.jpg")`}}>
                    <div className="container-fluid">
                        <div className="plr--120">
                            <div className="row">
                                <div className="col-lg-8 col-xl-5">
                                    <div className="inner">
                                        <Fade bottom>
                                            <div className="logo text-left">
                                                <a href="/">
                                                    <img src="/assets/images/logo/logo-all-dark.png" alt="Trydo Images"/>
                                                </a>
                                            </div>
                                        </Fade>
                                        <Fade bottom>
                                            <p className="title">Welcome to TryDO React Creative Agency, React Portfolio and Corporate Multi Purpose Template Built With React JS. NO jQuery!</p>
                                        </Fade>
                                        <Fade bottom>
                                            <div className="purshase-btn">
                                                <a href="https://themeforest.net/checkout/from_item/25457315?license=regular" className="rn-button-style--2 btn-solid">BUY Now</a>
                                                <a href="#demo" className="rn-button-style--2 btn-border rn-btn-dark border-opacity-half">View Demos</a>
                                            </div>
                                        </Fade>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fullscreen empty-div gradient-overlay"></div>
                {/* End Banner Area  */}

                {/* Start Preview Main Wrapper */}
                <div className="main-wrapper" id="demo">
                    {/* Start Main Demo Area  */}
                    <div className="home-demo-area bg_color--1 ptb--120">
                        <div className="wrapper plr--120">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center pb--30">
                                        <Fade bottom>
                                            <h2 className="theme-gradient">Home Demo</h2>
                                        </Fade>
                                        <Fade bottom>
                                            <p>Choose one of styles or cutomize easily your site following your ideas. <br/> More
                                                demos are coming soon.</p>
                                        </Fade>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {singleDemo.map((value , index) => (
                                    // Start Single Demo 
                                    <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="single-demo">
                                            <a target="_blank" href={`/${value.url} `}>
                                                <img src={`/assets/images/preview/${value.imageUrl}`} alt="Creative Agency Images"/>
                                                <h3 className="title">{value.title}</h3>
                                                <p className="info">{value.description}</p>
                                                {value.label ? <div className="label-new"><span>{value.label}</span></div> : ''}
                                            </a>
                                        </div>
                                    </div>
                                    // End Single Demo
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* End Main Demo Area  */}

                    {/* Start Main Demo  */}
                    <div className="home-demo-area bg_color--3 ptb--120">
                        <div className="wrapper plr--120">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center pb--30">
                                        <h2 className="theme-gradient">Inner Pages</h2>
                                        <p>Choose one of styles or cutomize easily your site following your ideas</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {innerDemo.map((value , index) => (
                                    // Start Single Demo
                                    <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="single-demo">
                                            <a target="_blank" href={`/${value.url} `}>
                                                <img src={`/assets/images/preview/${value.imageUrl}`} alt="Creative Agency Images"/>
                                                <h3 className="title">{value.title}</h3>
                                            </a>
                                        </div>
                                    </div>
                                    // End Single Demo
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* End Main Demo  */}

                    {/* Start Feature Area  */}
                    <div className="prv-feature service-area bg_color--4 ptb--120">
                        <div className="wrapper plr--120">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center pb--30">
                                        <h2 className="text-white">Awesome Feature</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {/* Start Single Feature  */}
                                {featureList.map((value, i) => (
                                    <div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 col-12" key={i}>
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {value.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{value.title}</h3>
                                                <p className="subtitle">{value.subtitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* End Single Feature  */}
                            </div>
                        </div>
                    </div>
                    {/* End Feature Area  */}

                    {/* Start Footer Area  */}
                    <footer className="call-to-action-wrapper text-white-wrapper call-to-action ptb--120 with-particles">
                        <div className="frame-layout__particles">
                            <Particles
                                params={{
                                    "particles": {
                                        "number": {
                                            "value": 50
                                        },
                                        "size": {
                                            "value": 4
                                        }
                                    },
                                    "interactivity": {
                                        "events": {
                                            "onhover": {
                                                "enable": true,
                                                "mode": "repulse"
                                            }
                                        }
                                    }
                                }}
                            />
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="inner text-center">
                                        <span>Purchase The TryDo and Make Your Site super faster and easy.</span>
                                        <h2>Let's go to Purchase</h2>
                                        <a className="rn-button-style--2" href="https://themeforest.net/checkout/from_item/25457315?license=regular"><span>Purchase Now</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                    {/* End Footer Area  */}
                </div>
                {/* End Preview Main Wrapper */}
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
export default Demo;
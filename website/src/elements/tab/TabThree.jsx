import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FiCheck } from "react-icons/fi";

class TabsOne extends Component{
    render(){
        let 
        tab1 = "Driver", 
        tab2 = "Passenger";
        const btnDriver = {
            buttonLink: "#",
            buttonText: "Suggest a route" 
        }
        const btnPassenger = {
            buttonLink: "#",
            buttonText: "Find a route" 
        }
        const { tabStyle } = this.props;
        var namesItemOne = [
            'The Philosophy Of business analytics',
            'Fast-Track Your business',
            'Lies And Damn Lies About business',
            'The Ultimate Deal On business',
        ];
       
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                    </TabList>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ab aliquid, atque enim, vero nobis quam beatae nesciunt aliquam molestias, optio hic laborum esse. Deserunt architecto officiis laudantium corporis voluptatem.</p>

                                           <div className="mt--30">
                                           <a className="rn-button-style--2 btn-solid" href={`${btnDriver.buttonLink}`}>{btnDriver.buttonText}</a>
                                           </div>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <p>Nipa ipsum dolor sit amet consectetur adipisicing elit. Neque ab aliquid, atque enim, vero nobis quam beatae nesciunt aliquam molestias, optio hic laborum esse. Deserunt architecto officiis laudantium corporis voluptatem.</p>
                                           <div className="mt--30">
                                           <a className="rn-button-style--2 btn-solid" href={`${btnPassenger.buttonLink}`}>{btnPassenger.buttonText}</a>
                                           </div>
                                       </div>
                                    </TabPanel>
                                    
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsOne;
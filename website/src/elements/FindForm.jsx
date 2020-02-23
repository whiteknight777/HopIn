import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class Testimonial extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-12">
                        {/* <Tabs> */}
                            {/* <div> */}
                                <div className="text-center">
                                    <div className="inner">
                                        <h2>Where do you want to go ?</h2>
                                    </div>
                                </div>
                            {/* </div> */}


                            <div className="form-wrapper">
                                {/* <Tab> */}
                                    {/* <div className="testimonial-thumbnai"> */}
                                    <form className="search_destination">
                                        <div className="box1">
                                            <label htmlFor="item01">
                                            <input
                                                type="text"
                                                name="name"
                                                id="item01"
                                                // value={this.state.rnName}
                                                // onChange={(e)=>{this.setState({rnName: e.target.value});}}
                                                placeholder="Starting"
                                                />
                                            </label>

                                            <label htmlFor="item02">
                                                <input
                                                    type="text"
                                                    name="email"
                                                    id="item02"
                                                    // value={this.state.rnEmail}
                                                    // onChange={(e)=>{this.setState({rnEmail: e.target.value});}}
                                                    placeholder="Destination"
                                                />
                                            </label>
                                        </div>
                                        <div className="box2">
                                            <button 
                                              className="rn-button-style--2 btn-solid" 
                                              type="Research" 
                                              value="Research" 
                                              name="Research" 
                                              id="mc-embedded-subscribe">
                                                  Research
                                            </button>
                                        </div>
                                        
                                    </form>
                                    {/* </div> */}
                                {/* </Tab> */}
                                
                            </div>
                        {/* </Tabs> */}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Testimonial;
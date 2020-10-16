import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="background" style={{marginTop:"150px"}} >
            <div style={{paddingTop:"80px"}} className="col-md-9  d-flex flex-row justify-content-center container-md ">
                <div className="mr-5"  >
                    <h2>Let us handle your <br/> project, professionally.</h2>
                    <p className="mt-4">With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>

                </div>
                <div className="text-left">
                    <input className="input" placeholder="Your email address"  type="text"/>
                    <br/>
                    <input className="input  mt-3" placeholder="Your email name / company's name" type="text"/>
                    <br/>
                   
                    <textarea className="form-control mt-3" style={{
                            width: " 590px",
                            height: '277px'
                        }} type="text-area" placeholder="Your message" />
                    <br/>

                    <button type="button" class="btn btn-dark mt-3 button ">Send</button>

                </div>
                
            </div>
            <span className="copy">copyright Orange labs 2020</span>
        </div>
    );
};

export default Footer;
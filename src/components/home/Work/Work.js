import React, { useState } from 'react';
import carouselOne from '../../../images/carousel-1.png'
import carouselTwo from '../../../images/carousel-2.png'
import carouselThree from '../../../images/Ks4pFYg.png'
import WorkDetail from '../WorkDetail/WorkDetail';
import { Button, Carousel } from 'react-bootstrap';
import './Work.css'

const Work = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }
    return (
        <div className="backgroundColor " style={{marginTop:"150px"}}>
            
            <h2 className="text-center" style={{paddingTop:"70px"}} ><span style={{color:"white"}} >Here are some of</span> <span style={{color:"#7AB259"}}> our works</span> </h2>
            <div className="col-md-6 container-md " style={{paddingTop:"70px"}}>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carouselOne}
                            alt="First slide"
                        />
                       
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carouselTwo}
                            alt="Second slide"
                        />

                       
                    </Carousel.Item>
                    <Carousel.Item>
                        <img

                            className="d-block w-100 h-75 height"
                            src={carouselThree}
                            alt="Third slide"
                        />

                        
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>

    );
};

export default Work;
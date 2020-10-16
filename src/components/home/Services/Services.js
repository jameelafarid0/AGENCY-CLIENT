import React, { useEffect, useState } from 'react';
import ServicesDetail from '../ServicesDetail/ServicesDetail';


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="services-container " >
            <h3 style={{textAlign:"center", marginTop:"150px"}}>Provide awesome <span style={{color:"#7AB259"}}> services</span></h3>
           
            <div className="d-flex flex-row justify-content-center ">
                <div className="w-75 row  ">
                   {
                       services.map(services => <ServicesDetail services={services}></ServicesDetail>)
                   }
                </div>
            </div>
            
            
        </div>
    );
};

export default Services;
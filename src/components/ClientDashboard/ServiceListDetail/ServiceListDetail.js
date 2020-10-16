import React from 'react';
import './ServiceListDetail.css'

const ServiceListDetail = ({service}) => {
    return (

            <div className="main-card-container  float-left pt-5 pl-3 mt-5 ml-3">
            <h2>{service.order}</h2>
            <div className="d-flex pl-3 pt-3">
                <img style={{ height: '50px' }} src={service.icon} alt="" />
                <div style={{ paddingLeft: '180px' }}>
                    <button className="card-btn btn">Pending</button>
                </div>
            </div>
            
        </div>
        

    );
};

export default ServiceListDetail;
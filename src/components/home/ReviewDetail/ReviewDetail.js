import React from 'react';
import './ReviewDetail.css';
import customer3 from '../../../images/customer-1.png'

const ReviewDetail = ({ review }) => {
    return (
        <div className="col-md-4  " style={{marginTop:"80px"}} >
            <div className="border">
                <div className="row">
                    <img className="ml-3" height="64px" src={customer3} alt="" />
                    <div className="ml-3">
                        <h5>{review.name} </h5>
                        <h6>CEO.manpal</h6>
                    </div>
                </div>
                <p>{review.details}</p>
            </div>
        </div>
    );
};

export default ReviewDetail;
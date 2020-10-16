import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import ReviewDetail from '../ReviewDetail/ReviewDetail';


const Review = () => {
    const [reviews, setReview] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

            
    
    return (
        <div className="review-container">
            
                <h3 style={{ textAlign: "center", marginTop: "80px" }}>Clients <span style={{ color: "#7AB259" }}> Feedback</span></h3>

                <div className="d-flex flex-row justify-content-center ">
                    <div className="w-75 row ">
                        {
                            reviews.map(review => <ReviewDetail review={review}></ReviewDetail>)
                        }
                    </div>
                </div>


            
        </div>


    );
};

export default Review;
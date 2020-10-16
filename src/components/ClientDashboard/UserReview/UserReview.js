import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import DashNav from '../DashNav/DashNav';
import SideBar from '../SideBar/SideBar';


  

const UserReview = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
      
        fetch('http://localhost:5000/addReviews', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('thankyou for your feedback')
                }
            })
    };



    

    return (
        <div>
            <DashNav></DashNav>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <SideBar></SideBar>
                </div>
                <div className="container-fluid col-md-10 d-flex align-items-start" style={{
                        paddingTop:'55px',
                        backgroundColor: '#f4f7fc', height:
                            '574px'
                    }}>
                    <div className="form-contain">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" 
                                name="name"
                                placeholder="Your name"
                                className="form-input" ref={register({
                                    required: true
                                })} />
                                 {errors.name && <span className="text-danger ml-3">This field is required</span>}
                                 <br />
                            <input 
                                type="text" 
                                name="companyName"
                                placeholder="Company’s name, Designation"
                                className="form-input" 
                                ref={register({required: true})} 
                                />
                                 {errors.companyName && <span className="text-danger ml-3">This field is required</span>}
                                 <br />
                            
                            <textarea 
                                className="form-control" 
                                name="details"
                                placeholder="Description"
                                style={{ width: " 500px", height: '112px'}} 
                                type="text-area" 
                                ref={register({ required: true })} 
                            />
                            
                                 {errors.details && <span className="text-danger ml-3">This field is required</span>}
                                 <br />
                            <input style={{
                                backgroundColor: '#111430'
                            }} class="btn pr-5 pl-5 text-white" type="submit" placeholder="Send"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserReview;
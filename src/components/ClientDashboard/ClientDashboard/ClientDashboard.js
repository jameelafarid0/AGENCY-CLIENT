import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom'
import DashNav from '../DashNav/DashNav';
import SideBar from '../SideBar/SideBar';
import './ClientDashboard.css'




const ClientDashboard = () => {
    const { service } = useParams();
    const { register, handleSubmit, errors } = useForm();
    const [file, setFile] = useState(null);

    const onSubmit = data => {
        fetch('http://localhost:5000/addServiceList', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Your order is placed')
                }
            })
    };

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile)

    }

    return (
        <div>
            <DashNav></DashNav>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <SideBar></SideBar>
                </div>
                <div className="container-fluid col-md-10 d-flex align-items-center" style={{
                    backgroundColor: '#f4f7fc', height:
                        '545px', width: "500px"
                }}>
                    <div className="form-contain">
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <input
                                type="text"
                                name="email"
                                placeholder="Your email address"
                                className="form-input"
                                ref={register({ required: true })} />
                            {errors.email && <span className="text-danger ml-3">This field is required</span>}
                            <br />
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name / company's name"
                                className="form-input"
                                ref={register({ required: true })} />
                            {errors.name && <span className="text-danger ml-3">This field is required</span>}
                            <br />
                            <input
                                type="text"
                                name="order"
                                placeholder="service name"
                                style={{ color: 'black' }}
                                defaultValue={service}
                                className="form-input"
                                ref={register({ required: true })} />
                            {errors.order && <span className="text-danger ml-3">This field is required</span>}
                            <br />



                            <textarea
                                className="form-control"
                                name="details"
                                placeholder="Project details"
                                style={{ width: " 500px", height: '112px' }}
                                type="text-area"
                            />


                            {errors.details && <span className="text-danger ml-3">This field is required</span>}
                            <br />

                            <div className="d-flex">
                                <input
                                    type="text"
                                    name="price"
                                    placeholder="Price"
                                    className=" price"
                                    ref={register({ required: true })} />
                                {errors.price && <span className="text-danger ml-3">This field is required</span>}




                                <div class="form-check ">
                                    <input onChange={handleFileChange} type="file" class="form-check-input " id="exampleCheck1" />

                                </div>
                            </div>
                            <br />

                            <input style={{
                                backgroundColor: '#111430'
                            }} class="btn pr-5 pl-5 text-white" type="submit" value="Send"
                            />
                        </form>
                    </div>
                </div>
            </div>









        </div>
    );
};

export default ClientDashboard;
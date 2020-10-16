import React, { useContext, useEffect, useState } from 'react';
import DashNav from '../../ClientDashboard/DashNav/DashNav';
import SideBar from '../../ClientDashboard/SideBar/SideBar';
import ServiceHistory from '../ServiceHistory/ServiceHistory';
import image from '../../../images/logos/logo.png';
import { UserContext } from '../../../App';

const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [order, setOrder] = useState([]);


    useEffect(() => {
        fetch('https://peaceful-forest-05385.herokuapp.com/allServices')
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])
    return (
        <div>

            <div>
                <nav className="navbar  navbar-expand-lg navbar-light navbar-fixed-top pt-3">
                    <div class="d-flex">
                        <img style={{ width: '130px' }} src={image} alt="" />
                        <div className="ml-5 pl-5 " style={{ display: "flex" }}>
                            <h3>Service list</h3>
                            <h5 style={{ color: "gray", marginLeft: "700px" }} >{loggedInUser.name}</h5>

                        </div>
                    </div>
                </nav>

            </div>


            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <SideBar></SideBar>
                </div>
               
                <div className="col-md-10 d-flex align-items-center"
                    style={{ backgroundColor: '#f4f7fc' }}>
                    <div className="container-fluid" style={{
                        margin:
                            '10px', paddingTop: '10px', backgroundColor: 'white', borderRadius:
                            '10px'
                    }} >
                       <ServiceHistory order={order}></ServiceHistory>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Admin;
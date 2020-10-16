import React, { useContext, useEffect, useState } from 'react';
import DashNav from '../DashNav/DashNav';
import SideBar from '../SideBar/SideBar';
import ServiceListDetail from '../ServiceListDetail/ServiceListDetail';
import { UserContext } from '../../../App';



const ServiceList = () => {
   
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [userService, setUserService] = useState([]);
    

    useEffect( () => {
        fetch('http://localhost:5000/userService?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setUserService(data))


    }, [loggedInUser.email]);



    return (
        <div>
            <DashNav></DashNav>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <SideBar></SideBar>
                </div>
                <div className="container-fluid col-md-10" style={{ backgroundColor: '#f4f7fc', height: '574px' }}>
                    {
                        userService.map(service => <ServiceListDetail service={service}></ServiceListDetail>)
                    }
                </div>
                
            </div>

            
        </div>
    );
};

export default ServiceList;
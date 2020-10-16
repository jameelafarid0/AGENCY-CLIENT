import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import image from '../../../images/logos/logo.png';
import './DashNav.css'

const DashNav = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <nav className="navbar  navbar-expand-lg navbar-light navbar-fixed-top pt-3">
                <div class="d-flex">
                    <img style={{ width: '130px' }} src={image} alt="" />
                    <div className="ml-5 pl-5 display">
                        <h3>Order</h3> 
                        <h5 style={{color:"gray"}} className="user">{loggedInUser.name}</h5>
                        
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default DashNav;
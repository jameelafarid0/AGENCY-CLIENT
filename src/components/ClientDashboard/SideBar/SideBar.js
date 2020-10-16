import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faListAlt, faShoppingCart, faSignOutAlt, faList, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';




const SideBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://peaceful-forest-05385.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    })

    return (
        <div className="sidebar d-flex flex-column
        justify-content-between col-md-2 py-5 px-4" style={{
                height: "100vh"
            }}>
            <ul className="list-unstyled">
                <li>
                    <Link to='/order' className="">
                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                    </Link>
                </li>
                <li>
                    <Link to="/serviceList" className=" ">
                        <FontAwesomeIcon icon={faListAlt} />
                        <span>Service list</span>
                    </Link>
                </li>
                <li>
                    <Link to="/review" className=" ">
                        <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                    </Link>
                </li>
               
                  { isAdmin && <div>
                    <li>
                        <Link to="/admin" >
                            <FontAwesomeIcon icon={faList} /> <span>Service List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addService" >
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/makeAdmin" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                        </Link>
                    </li>
                </div>}
               
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default SideBar;

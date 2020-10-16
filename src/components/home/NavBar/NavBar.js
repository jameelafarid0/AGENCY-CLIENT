import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../images/logos/logo.png';
import './NavBar.css'

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light " style={{color:"#FBD062"}}>
         <div className="container-md">
         <img src={image} width="150px"  alt=""/>   

            <div className="topnav" id="myTopnav" class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item mr-3 active">
                  <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item mr-3">
                  <a class="nav-link " href="/link">Our portfolio</a>
                </li>
                <li class="nav-item mr-3">
                  <a class="nav-link" href="/link">Our team</a>
                </li>
                <li class="nav-item mr-3">
                  <a class="nav-link" href="/link">Contact us</a>
                </li>
                <Link to="/login">
                <button style={{padding: "10px 50px"}} type="button" class="btn btn-dark mr-2">Login</button>
                </Link>
                
                
              
              </ul>
              
            </div>

            
                      
         </div>
 
</nav>
    );
};

export default NavBar;
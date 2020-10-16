import React from 'react';

const LogoCard = ({logo}) => {
    return (
        <div>
            <div className="mr-5 pr-5 ">
                <img height="40px" src={logo.img} alt=""/>
            </div>
            
        </div>
    );
};

export default LogoCard;
import React from 'react';
import LogoCard from '../LogoCard/LogoCard';
import slack from '../../../images/logos/slack.png'
import google from '../../../images/logos/google.png'
import uber from '../../../images/logos/uber.png'
import netflix from '../../../images/logos/netflix.png'
import airbnb from '../../../images/logos/airbnb.png'

const logoImage = [
    {
        img:slack
    },
    {
        img: google
    },
    {
        img:uber
    },
    {
        img:netflix
    },
    {
        img:airbnb
    }
]
const LogoBn = () => {
    return (
        <div className="d-flex flex-row justify-content-center container-md">
            {
              logoImage.map(logo => <LogoCard logo={logo}></LogoCard>)
            }
            
        </div>
    );
};

export default LogoBn;
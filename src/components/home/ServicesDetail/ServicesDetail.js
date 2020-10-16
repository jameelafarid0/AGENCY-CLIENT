import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesDetail.css'

const ServicesDetail = ({ services }) => {
    return (
        <div>
            <Link to={`/order/${services.title}`}>
                <div className="box  text-center mt-5 pt-3 ml-4  "  >
                    {
                        services.image ? <img height="50px" src={`data:image/png;base64,${services.image.img}`}/>
                        :
                        <img className height="50px" src={require(`../../../images/icons/${services.img}`)} alt="" />
                    }
                    <h5 className="mt-3">{services.title}</h5>
                    <p className="text-secondary mt-3">{services.description} </p>

                </div>
            </Link>
        </div>

    );
};

export default ServicesDetail;
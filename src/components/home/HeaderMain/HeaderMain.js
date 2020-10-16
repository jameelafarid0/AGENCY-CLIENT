import React from 'react';
import frame from '../../../images/logos/Frame.png'

const HeaderMain = () => {
    return (
        <main style={{height:"600px"}} className="row mt-3 ">
            <div className="col-md-4 offset-md-1 mt-5 " style={{marginLeft:"150px"}}>
                <h1 style={{fontWeight:"bolder" }}>Let's grow your <br/> brand to the <br/> next level</h1>
                <p className="text-secondary mt-4">Lorem ipsum dolor, sit amet consectetur <br/> adipisicing elit. Veritatis rerum accusamus <br/> deserunt modi inventore sapiente.</p>
                <button style={{padding: "10px 50px"}} type="button" class="btn btn-dark mt-3 ">Hire me</button>
                

            </div>
            <div className="col-md-6 ">
                <img width="600px"src={frame} alt="" className="img-fluid"/>
            </div>

        </main>
    );
};

export default HeaderMain;
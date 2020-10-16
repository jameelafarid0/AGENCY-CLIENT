import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import image from '../../../images/logos/logo.png';
import SideBar from '../../ClientDashboard/SideBar/SideBar';

const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [file, setFile] = useState(null);
    const [info, setInfo] = useState({});

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);

    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('description', info.description); 

        fetch('https://peaceful-forest-05385.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>
            <div>
                <nav className="navbar  navbar-expand-lg navbar-light navbar-fixed-top pt-3">
                    <div class="d-flex">
                        <img style={{ width: '130px' }} src={image} alt="" />
                        <div className="ml-5 pl-5 " style={{ display: "flex" }}>
                            <h3>Add Services</h3>
                            <h5 style={{ color: "gray", marginLeft: "700px" }} >{loggedInUser.name}</h5>

                        </div>
                    </div>
                </nav>

            </div>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <SideBar></SideBar>
                </div>
                <div className="container-fluid col-md-10" style={{ backgroundColor: '#f4f7fc', height: '574px' }}>
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label >Service title</label>
                            <input onBlur={handleBlur} type="text" class="form-control" name="title" placeholder="Enter title" />

                        </div>
                        <div class="form-group">
                            <label >Description</label>
                            <input onBlur={handleBlur} type="text" class="form-control" name="description" placeholder="Enter designation" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Upload image</label>
                            <input onChange={handleFileChange} type="file" class="form-control" id="exampleInputPassword1" placeholder="Enter designation" />
                        </div>

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>

            </div>


        </div>
    );
};

export default AddService;
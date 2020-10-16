import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import image from '../../images/logos/logo.png';
import './Login.css'

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }


    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser);
            history.replace(from);
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }
    return (


        <>
            <img className="logo mt-5" src={image} alt="" />
            <div className="login-container">
                <div className="container d-flex align-items-center justify-content-center">
                    <div>
                        <h2 className="pb-3 text-center">Login with</h2>
                        <div className="text-center">
                            <button className="button2"
                                onClick={handleGoogleSignIn}>
                                <img
                                    src={'https://i.imgur.com/en07y50.png'} className="google-icon" alt=""
                                />
                     Continue with google</button>
                        </div>
                        <div className="text-center pt-3">
                            <span>Don't have an account? <a
                                href="#">Create an account</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
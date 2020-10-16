import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import LogoBn from '../LogoBn/LogoBn';
import Review from '../Review/Review';
import Services from '../Services/Services';
import Work from '../Work/Work';
import './Home.css';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <LogoBn></LogoBn>
            <Services></Services>
            <Work></Work>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;

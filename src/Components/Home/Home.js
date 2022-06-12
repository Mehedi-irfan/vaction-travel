import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Servicess from '../Servicess/Servicess';
import Slider from '../Slider/Slider';
import WatchVideo from '../WatchVideo/WatchVideo';
import WinterResort from '../WinterResort/WinterResort';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <AboutUs></AboutUs>
            <Servicess></Servicess>
            <WatchVideo></WatchVideo>
            <WinterResort></WinterResort>
            <Footer></Footer>
        </div>
    );
};

export default Home;
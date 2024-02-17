import React from 'react';
import './About.css';
import sing from '../../assets/Images/About/sing22.jpg'
import AboutPage from '../../page/AboutPage';

const About = () => {
    return (
        <div className='aboutContainer'>
            <div className="aboutSubContainer">
                <h5 className='titleAbout'>about us</h5>
                <p className='desAbout'>Divide have don't man wherein air fourth.Own itself make have night won't make. <br></br> A you under Seed appear which good give.Own give air without fowl moveth dry first heaven fruit, dominion she'd won't very all</p>
                <div className="singContainer">
                    <img src={sing} alt="" />
                </div>
            </div>
            <div className="subPageContainer">
                <AboutPage/>
            </div>

        </div>
    );
};

export default About;
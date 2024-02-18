import React from 'react';
import './AboutMe.css';
import img1 from '../../../assets/Images/About/AboutMulti/aboutMe.jpg'

const AboutMe = () => {
    return (
        <div className='about_me'>
            <div className="about_meSection">
            <div className="about_background">
                <div className="about_img">
                    <img src={img1} alt="" />
                </div>
                <div className="aboutInfo">
                    <div className="title_sec">
                    <h2 className='multiAboutTitle'>About me</h2>


                    </div>
              
                    <p className='desMultiAbout22'>Given let water air sea had you'll may seed abundantly fish. Were, you'll earth forth winged above brought. own darkness they're him can't fourth sea place have </p> 
                    <div className="secondDes">
                    <p className='desMultiAbout1'>So, the above May stars cattle fruitful face shall. Tree it, winged. Every sings male firmament us. Morning him.</p>

                    </div>

                </div>

            </div>

            </div>
           



        </div>
    );
};

export default AboutMe;
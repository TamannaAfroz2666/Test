import React from 'react';
import './HomePageContent.css';
import ContentImages from '../ContentImages/ContentImages';

const HomePageContent = () => {
    return (
        <div className='homePageContent'>
            <div className="homePageContents">
                <h5 className='titleDesign'>UI/UX & Graphic Design </h5>
                <p className='desAbout'>I am a Graphic & Web Designer based in New York, specializing  <br></br> in User Interface Design and Development</p>
            </div>
            <div className="imgSections">
                <ContentImages></ContentImages>

            </div>

        </div>
    );
};

export default HomePageContent;
import React from 'react';
import './AboutMultiPage.css';
import AboutPageHeader from '../../Layout/Header/AboutPageHeader/AboutPageHeader';
import AboutBanner from './AboutBanner/AboutBanner';
import WorkDetails from '../../components/Work/WorkDetails/WorkDetails';
import AboutMe from './AboutMe/AboutMe';

const AboutMultiPage = () => {
    return (
        <div className='aboutMultiPage'>
            <AboutPageHeader></AboutPageHeader>
            <div className="aboutMultiCon">
                <AboutBanner></AboutBanner>
                <WorkDetails></WorkDetails>
                <AboutMe></AboutMe>

            </div>
            
        </div>
    );
};

export default AboutMultiPage;
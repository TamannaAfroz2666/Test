import React from 'react';
import './AboutMultiPage.css';
import AboutPageHeader from '../../Layout/Header/AboutPageHeader/AboutPageHeader';
import AboutBanner from './AboutBanner/AboutBanner';

const AboutMultiPage = () => {
    return (
        <div className='aboutMultiPage'>
            <AboutPageHeader></AboutPageHeader>
            <div className="aboutMultiCon">
                <AboutBanner></AboutBanner>

            </div>
            
        </div>
    );
};

export default AboutMultiPage;
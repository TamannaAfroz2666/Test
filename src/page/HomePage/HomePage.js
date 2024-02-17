import React from 'react';
import './HomePage.css';
import HomePageHeader from '../../Layout/Header/HomePageHeader/HomePageHeader';

const HomePage = () => {
    return (
        <div className='home_page'>
            <div className="header_sec">
                <HomePageHeader></HomePageHeader>
            </div>
            
        </div>
    );
};

export default HomePage;
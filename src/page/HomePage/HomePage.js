import React from 'react';
import './HomePage.css';
import HomePageHeader from '../../Layout/Header/HomePageHeader/HomePageHeader';
import HomePageContent from './HomePageContent/HomePageContent';
import Footer from '../../Layout/Footer/Footer';

const HomePage = () => {
    return (
        <div className='home_page'>
            <div className="header_sec">
                <HomePageHeader></HomePageHeader>
            </div>
            <div className="homePageContent">
                <HomePageContent></HomePageContent>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default HomePage;
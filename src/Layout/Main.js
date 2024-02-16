import React from 'react';
import './Main.css';
import Header from './Header/Header';
import About from '../components/About/About';

const Main = () => {
    return (
        <div className='mainContainer'>
            <div className="headerMain">
                <Header></Header>
                <div className="aboutSec">
                    <About></About>
                </div>
            </div>
            
        </div>
    );
};

export default Main;
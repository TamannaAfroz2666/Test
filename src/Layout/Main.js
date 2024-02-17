import React from 'react';
import './Main.css';
import Header from './Header/Header';
import About from '../components/About/About';
import Work from '../components/Work/Work';

const Main = () => {
    return (
        <div className='mainContainer'>
            <div className="headerMain">
                <Header></Header>
                <div className="aboutSec">
                    <About></About>
                    <Work></Work>
                </div>
            </div>
            
        </div>
    );
};

export default Main;
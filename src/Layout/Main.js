import React from 'react';
import './Main.css';
import Header from './Header/Header';
import About from '../components/About/About';
import Work from '../components/Work/Work';
import Process from '../components/Process/Process';
import Service from '../components/Service/Service';

const Main = () => {
    return (
        <div className='mainContainer'>
            <div className="headerMain">
                <Header></Header>
                <div className="aboutSec">
                    <About></About>
                    <Work></Work>
                    <Process></Process>
                    <Service></Service>
                </div>
            </div>
            
        </div>
    );
};

export default Main;
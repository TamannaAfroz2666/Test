import React from 'react';
import './Main.css';
import Header from './Header/Header';
import About from '../components/About/About';
import Work from '../components/Work/Work';
import Process from '../components/Process/Process';
import Service from '../components/Service/Service';
import Testimonials from '../components/Testimonials/Testimonials';
import Contact from '../components/Contact/Contact'
import Footer from './Footer/Footer';

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
                  
                
                    <Testimonials></Testimonials>
                    <Contact></Contact>
                  
                </div>
                <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Main;
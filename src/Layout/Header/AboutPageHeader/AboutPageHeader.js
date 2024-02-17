import React from 'react';
import './AboutPageHeader.css';
import logo from '../../../assets/Images/Logo/logotri.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutPageHeader = () => {
    return (
        <div className='AboutPageHeaders'>
             <div className="homePageSubHeader">
            <div className="homePageSec">
                <div className="homePageNavigation">
                    <div className="navContainer1">
                        <div className="logoContainer">
                            <Link to='/'>
                                <img src={logo} alt="waiting...." />
                            </Link>
                        </div>
                        <div className="navList">
                            <ul className='navUlList'>
                                <motion.li className='navListItems'

                                >
                                    <Link className='linksTitle'  to='/'>home
                                    </Link>
                                </motion.li>
                                <motion.li className='navListItems'
                                    whileHover={{ scale: 1.09 }}

                                >
                                    <Link className='active'  to="/about">about</Link>
                                </motion.li>
                               
                                <motion.li className='navListItems'
                                    whileHover={{ scale: 1.09 }}

                                >
                                    <Link className='linksTitle' to="/contact">contact</Link>
                                </motion.li>
                            </ul>
                        </div>

                    </div>

                </div>

            </div>

            </div>
            
        </div>
    );
};

export default AboutPageHeader;
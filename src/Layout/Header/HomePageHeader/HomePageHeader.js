import React from 'react';
import './HomePageHeader.css';
import logo from '../../../assets/Images/Logo/logotri.jpg'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const HomePageHeader = () => {
    return (
        <div className='homePageHeader'>
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
                                    <Link className='active' to='/'>home
                                    </Link>
                                </motion.li>
                                <motion.li className='navListItems'
                                    whileHover={{ scale: 1.09 }}

                                >
                                    <Link className='linksTitle' to="/about">about</Link>
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

export default HomePageHeader;
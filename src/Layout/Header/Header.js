import React from 'react';
import './Header.css';
import logo from '../../assets/Images/Logo/logotri.jpg'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <div className='headerContainer'>
            <div className="headerBackGround">
                <div className="contentOfHeader">
                    <div className="navContainer">
                        <div className="logoContainer">
                            <Link to='/'>
                                <img src={logo} alt="waiting...." />
                            </Link>
                        </div>
                        <div className="navList">
                            <ul className='navUlList'>
                                <motion.li className='navListItems'

                                >
                                    <Link className='active' to='/home'>home
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
                                    <Link className='linksTitle' to="/work">work</Link>
                                </motion.li>
                                <motion.li className='navListItems'
                                    whileHover={{ scale: 1.09 }}

                                >
                                    <Link className='linksTitle' to="/process">process</Link>
                                </motion.li>
                                <motion.li className='navListItems'
                                    whileHover={{ scale: 1.09 }}

                                >
                                    <Link className='linksTitle' to="/service">service</Link>
                                </motion.li>
                                <motion.li className='navListItems'
                                    whileHover={{ scale: 1.09 }}

                                >
                                    <Link className='linksTitle' to="/testimonials">testimonials</Link>
                                </motion.li>
                                <motion.li className='navListItems'
                                    whileHover={{ scale: 1.09 }}

                                >
                                    <Link className='linksTitle' to="/contact">contact</Link>
                                </motion.li>
                            </ul>
                        </div>

                    </div>
                    <div className="bannerDesContainer">
                        <h1 className='bannerTitle'>We Design and Develop</h1>
                        <p className='bannerDes'>We are a new design studio based in USA. We have over 20 years of combined experience and know a thing or two about designing websites and design apps</p>
                        <div className="btnArea">
                            <Link to='/contact'>
                            <button className='contactBtn'>Contact us</button>
                            </Link>
                        </div>
                    </div>

                </div>



            </div>

        </div>
    );
};

export default Header;
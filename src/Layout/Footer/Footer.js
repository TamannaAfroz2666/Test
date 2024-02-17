import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className="footerSections">
                <div className="footerContent">
                    <div className="companyName">
                        <h3 className='companyNameTitle'>Piroll Design,Inc</h3>
                        <span className='footerTitle'>@2017 poroll.All rights reserved. <br />Designed by robiuruk </span>
                    </div>
                    <div className="companyEmailSec">
                        <h5 className='pirollEmail'>hello@pirolltheme.com</h5>
                        <span className='mobileFooter'>+44 987 065 908</span>

                    </div>
                    <div className="projectDetails">
                        <div className="projectContent">
                            <ul>
                                <li className='listFooter'>
                                    <Link className='footerListTitle' to='/projects'>Projects</Link>
                                </li>
                                <li className='listFooter'>
                                    <Link className='footerListTitle' to='/about'>About</Link>
                                </li>
                                <li className='listFooter'>
                                    <Link className='footerListTitle' to='/service'>Services</Link>
                                </li>
                                <li className='listFooter'>
                                    <Link className='footerListTitle' to='/career'>Career</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="projectContent">
                            <ul>
                                <li className='listFooter'>
                                    <Link className='footerListTitle' to='/news'>News</Link>
                                </li>
                                <li className='listFooter'>
                                    <Link className='footerListTitle' to='/events'>Events</Link>
                                </li>
                                <li className='listFooter'>
                                    <Link className='footerListTitle' to='/contact'>Contact</Link>
                                </li>
                                <li className='listFooter'>
                                    <Link className='footerListTitle' to='/legals'>Legals</Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="socialMedia">
                        <ul>
                            <li className='listFooter'>
                                <Link className='footerListTitle' to='/facebook'>Facebook</Link>
                            </li>
                            <li className='listFooter'>
                                <Link className='footerListTitle' to='/twitter'>Twitter</Link>
                            </li>
                            <li className='listFooter'>
                                <Link className='footerListTitle' to='/instagram'>Instagram</Link>
                            </li>
                            <li className='listFooter'>
                                <Link className='footerListTitle' to='/dribble'>Dribble</Link>
                            </li>
                        </ul>


                    </div>
                </div>

            </div>

        </div>
    );
};

export default Footer;
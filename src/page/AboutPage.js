import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className='aboutPageCon'>
            <div className="aboutPageBg">
                <div className="skillsAboutCon">
                    <h2 className='titleSkills'>professional skills</h2>
                    <div className="skillTitleCon">
                        <div className="titlesSection">
                            <h5 className='titles'>Ui/ux design</h5>
                            <h5 className='titles' >75%</h5>
                        </div>
                        <div className="progressSec">
                            <progress className='progress-bar' id="file" max="100" value="75"></progress>
                        </div>
                    </div>
                    <div className="uiDesignSec">
                        <div className="skillTitleCon">
                            <div className="titlesSection">
                                <h5 className='titles'>web development</h5>
                                <h5 className='titles' >90%</h5>
                            </div>
                            <div className="progressSec">
                                <progress className='progress-bar' id="file" max="100" value="90"></progress>
                            </div>

                        </div>

                    </div>
                    <div className="uiDesignSec">
                        <div className="skillTitleCon">
                            <div className="titlesSection">
                                <h5 className='titles'>marketing</h5>
                                <h5 className='titles' >65%</h5>
                            </div>
                            <div className="progressSec">
                                <progress className='progress-bar' id="file" max="100" value="65"></progress>
                            </div>

                        </div>

                    </div>


                </div>

            </div>
        </div>
    );
};

export default AboutPage;
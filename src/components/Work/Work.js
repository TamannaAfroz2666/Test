import React from 'react';
import './Work.css';
import { TfiBag } from "react-icons/tfi";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoIosStarOutline } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import WorkPage from '../../page/WorkPage/WorkPage';

const Work = () => {
    return (
        <div className='workContainer'>
            <div className="workSections">
                <div className="workSubCon">
                    <div className="elementsSection">
                        <div className="projectSec">
                            <div className="projectLogo">
                                <TfiBag color='white' size={35} />
                            </div>
                            <div className="projectInfo">
                                <h4 className='countTitle'>548</h4>
                                <span className='NameTitle'>project complete</span>
                            </div>
                        </div>
                        <div className="projectSec">
                            <div className="projectLogo">
                                <MdOutlineWatchLater color='white' size={40} />
                            </div>
                            <div className="projectInfo">
                                <h4 className='countTitle'>1465</h4>
                                <span className='NameTitle'>working hours</span>
                            </div>
                        </div>
                        <div className="projectSec">
                            <div className="projectLogo">
                                <IoIosStarOutline color='white' size={40} />
                            </div>
                            <div className="projectInfo">
                                <h4 className='countTitle'>612</h4>
                                <span className='NameTitle'>positive feedback</span>
                            </div>
                        </div>
                        <div className="projectSec">
                            <div className="projectLogo">
                                <MdFavoriteBorder color='white' size={40} />
                            </div>
                            <div className="projectInfo">
                                <h4 className='countTitle'>735</h4>
                                <span className='NameTitle'>happy clients</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="workActivities">
                <WorkPage></WorkPage>
            </div>
        </div>
    );
};

export default Work;
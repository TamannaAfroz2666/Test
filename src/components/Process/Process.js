import React from 'react';
import './Process.css';
import { FaPlayCircle } from "react-icons/fa";
// import { FaPlayCircle } from "react-icons/fa";
import { MdPlayCircle } from "react-icons/md";
import { FaRegPlayCircle } from "react-icons/fa";


const Process = () => {
    return (
        <div className='processContainer'>
            <div className="processSec">
                <h5 className='titleProcess'>our work process</h5>
                <p className='desAbout'>Was years its sessions was there from he in them together over that, <br></br> third sixth gathered female creeping bearing behold years</p>
            </div>
            <div className="processImg">
                <div className="imgSection">
                    <div className="watchVideoLink">
                        <a className='watchLink' href="/watch-video">  <MdPlayCircle size={80} className='faplayCir' /> </a>
                    </div>
                    {/* <FaPlayCircle  size={40}/> */}
                </div>
            </div>

        </div>
    );
};

export default Process;
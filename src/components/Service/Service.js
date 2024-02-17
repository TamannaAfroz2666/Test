import React from 'react';
import './Service.css';
import { SlDiamond } from "react-icons/sl";
import { GiCrossbow } from "react-icons/gi";
import { CiMobile4 } from "react-icons/ci";
import { PiGameControllerThin } from "react-icons/pi";
import { GiCommercialAirplane } from "react-icons/gi";
import { IoMdStarOutline } from "react-icons/io";
import { SiLinktree } from "react-icons/si";
import { GiSquareBottle } from "react-icons/gi";

const Service = () => {
    return (
        <div className='serviceContainer'>
            <div className="serviceSection">
                <div className="serviceContents">
                    <div className="serviceUi1">
                        <span className='iconField'>
                            <SlDiamond className='icons' color='gray' size={35} />
                        </span>
                        <h5 className='serviceTitle'>ui/ux design</h5>
                        <p className='serviceSortDes'>Be set fourth land god darkness make it wherein own</p>
                    </div>
                    <div className="serviceUi1">
                        <span className='iconField'>
                            <GiCrossbow className='icons' color='gray' size={40} />
                        </span>
                        <h5 className='serviceTitle'>Web Development</h5>
                        <p className='serviceSortDes'>A she'd them bring void moving third she'd kind fill. </p>
                    </div>
                    <div className="serviceUi1">
                        <span className='iconField'>
                            <CiMobile4 className='icons' color='gray' size={40} />
                        </span>
                        <h5 className='serviceTitleMobile'>app/mobile</h5>
                        <p className='serviceSortDesApp'>Dominion man second spirit he, earth they're creeping</p>
                    </div>
                    <div className="serviceUi1">
                        <span className='iconField'>
                            <PiGameControllerThin className='icons' color='gray' size={40} />
                        </span>
                        <h5 className='serviceTitle'>game design</h5>
                        <p className='serviceSortDes'>Morning his saying moveth it multiply appear life be.</p>
                    </div>
                    <div className="serviceUi">
                        <span className='iconField'>
                            <GiCommercialAirplane className='icons' color='gray' size={40} />
                        </span>
                        <h5 className='serviceTitle'>seo/ marketing</h5>
                        <p className='serviceSortDes'>Give won't after land fill creeping meat you.may</p>
                    </div>
                    <div className="serviceUi">
                        <span className='iconField'>
                            <IoMdStarOutline className='icons' color='gray' size={48} />
                        </span>
                        <h5 className='serviceTitle'>photography</h5>
                        <p className='serviceSortDes'>Creepeth one seas cattle grass give moving saw give</p>
                    </div>
                    <div className="serviceUi">
                        <span className='iconField'>
                            <SiLinktree className='icons' color='gray' size={40} />
                        </span>
                        <h5 className='serviceTitle'>graphic design</h5>
                        <p className='serviceSortDes'>Open great whales air rule for, fourth life whales.</p>
                    </div>
                    <div className="serviceUi">
                        <span className='iconField'>
                            <GiSquareBottle className='icons' color='gray' size={40} />
                        </span>
                        <h5 className='serviceTitle'>illustrations</h5>
                        <p className='serviceSortDes'>Whales likeness hath, man kind for them air two won't.</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Service;
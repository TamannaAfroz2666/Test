import React from 'react';
import './WorkPage.css';
import img1 from '../../assets/Images/Work/book1.avif';
import img2 from '../../assets/Images/Work/card1.jpg';
import img3 from '../../assets/Images/Work/honeyjar.avif'
import img4 from '../../assets/Images/Work/parfume.jpg'
import img5 from '../../assets/Images/Work/phone1.avif'
import img6 from '../../assets/Images/Work/shopping1.jpg';
import img7 from '../../assets/Images/Work/shopping22.jpg';
import img8 from '../../assets/Images/Work/showerJel.jpg';
import { IoEyeOutline } from "react-icons/io5";

const WorkPage = () => {
    return (
        <div className='workPageCon'>
            <div className="workPageSections">
                {/* <div className="imageSec">
                    <img src={img1} alt="" />
                </div> */}
                <div className="imgAll">
                    <img src={img2} alt="" className="image" />
                    <div className="overlay">
                        <div className="text">
                            <p className='textTitle'><IoEyeOutline className='iconEye' color='white' size={30} /></p>

                        </div>
                    </div>
                </div>
                <div className="imgAll">
                    <img src={img5} alt="" className="image" />
                    <div className="overlay">
                        <div className="text">
                            <p className='textTitle'><IoEyeOutline className='iconEye' color='white' size={30} /></p>

                        </div>
                    </div>
                </div>
                <div className="imgAll">
                    <img src={img6} alt="" className="image" />
                    <div className="overlay">
                        <div className="text">
                            <p className='textTitle'><IoEyeOutline className='iconEye' color='white' size={30} /></p>

                        </div>
                    </div>
                </div>
                <div className="imgAll">
                    <img src={img1} alt="" className="image" />
                    <div className="overlay">
                        <div className="text">
                            <p className='textTitle'><IoEyeOutline className='iconEye' color='white' size={30} /></p>

                        </div>
                    </div>
                </div>
                <div className="imgAll">
                    <img src={img4} alt="" className="image" />
                    <div className="overlay">
                        <div className="text">
                            <p className='textTitle'><IoEyeOutline className='iconEye' color='white' size={30} /></p>

                        </div>
                    </div>
                </div>
                <div className="imgAll">
                    <img src={img7} alt="" className="image" />
                    <div className="overlay">
                        <div className="text">
                            <p className='textTitle'><IoEyeOutline className='iconEye' color='white' size={30} /></p>

                        </div>
                    </div>
                </div>
                <div className="imgAll">
                    <img src={img3} alt="" className="image" />
                    <div className="overlay">
                        <div className="text">
                            <p className='textTitle'><IoEyeOutline className='iconEye' color='white' size={30} /></p>

                        </div>
                    </div>
                </div>
                <div className="imgAll">
                    <img src={img8} alt="" className="image" />
                    <div className="overlay">
                        <div className="text">
                            <p className='textTitle'><IoEyeOutline className='iconEye' color='white' size={30} /></p>

                        </div>
                    </div>
                </div>


            </div>


        </div>
    );
};

export default WorkPage;
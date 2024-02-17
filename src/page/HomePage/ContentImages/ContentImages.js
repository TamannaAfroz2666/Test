import React, { useState } from 'react';
import './ContentImages.css';
import { IoEyeOutline } from "react-icons/io5";
import dataImage from '../../../utils/homeContentImages.json';

const ContentImages = () => {
    const [showAllData, setShowAllData] = useState(dataImage);
    // console.log('data is', showAllData);
    return (
        <div className='contentsImages'>
            <div className="workPageSections">
                {
                    showAllData?.slice(0, 12).map((dataInfo) => {
                        return (
                            <div className="imgAll">
                                <img src={dataInfo.img} alt="" className="image" />
                                <div className="overlay">
                                    <div className="text1">
                                        <p className='textTitle'><IoEyeOutline className='iconEye' color='white' size={30} />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default ContentImages;
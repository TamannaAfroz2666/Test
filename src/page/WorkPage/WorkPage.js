import React, { useState } from 'react';
import './WorkPage.css';
import { IoEyeOutline } from "react-icons/io5";
import dataImage from '../../utils/homeContentImages.json'

const WorkPage = () => {
    const [imageAll, setImageAll] = useState(dataImage);
    console.log('images is:', imageAll);

    // show more button work 
    const [showMore, setShowMore] = useState(false);

    const showMoreHandle=()=>{
        console.log('working');
        setShowMore(true);
    }

    return (
        <div className='workPageCon'>
            <div className="workPageSections">
                {
                    imageAll?.slice(0, 8).map((dataInfo) => {
                        return (
                            <div className="imgAll">
                                <img src={dataInfo.img} alt="" className="image" />
                                <div className="overlay">
                                    <div className="text">
                                        <p className='textTitle'><IoEyeOutline className='iconEye' color='white' size={30} /></p>

                                    </div>
                                </div>
                            </div>

                        )
                    })
                }

               {/* show more products  */}

               {
                showMore && imageAll?.slice(0,4).map((dataInfo)=>{
                    return(
                        <div className="imgAll">
                                <img src={dataInfo.img} alt="" className="image" />
                                <div className="overlay">
                                    <div className="text">
                                        <p className='textTitle'><IoEyeOutline className='iconEye' color='white' size={30} /></p>

                                    </div>
                                </div>
                            </div>

                    )
                })
               }

            </div>
            <div className="moreBtnSec">
                <button onClick={showMoreHandle}>load more work</button>
            </div>


        </div>
    );
};

export default WorkPage;
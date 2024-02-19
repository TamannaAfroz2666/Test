import React, { useRef } from "react";
import './MiniProjects.css';
import Slider from "react-slick";
import ProjectContent from "./ProjectContent/ProjectContent";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const MiniProjects = () => {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='miniProjects'>
            <div className="miniProjectSub">
            <div className="slider-container">
                <Slider
                    ref={slider => {
                        sliderRef = slider;
                    }}
                    {...settings}
                >
                    <div key={1}>

                        <div className="projectShow">
                            <ProjectContent></ProjectContent>
                        </div>
                        
                    </div>
                    <div key={2}>
                    <ProjectContent></ProjectContent>
                    </div>
                    <div key={3}>
                    <ProjectContent></ProjectContent>
                    </div>
                   
                </Slider>
                <div className="previSec" style={{ textAlign: "center" }}>
                    <div className="previousCon">
                    <button className="button" onClick={previous}>
                      <span><IoIosArrowBack color="black" size={15}/></span>  Previous Project
                    </button>

                    </div>
                    <div className="nextCon">
                    <button className="button" onClick={next}>
                    Next Project
                    <span><IoIosArrowForward color="black" size={15}/></span>
                      
                    </button>

                    </div>
                   
                </div>
            </div>

            </div>
           

        </div>
    );
};

export default MiniProjects;
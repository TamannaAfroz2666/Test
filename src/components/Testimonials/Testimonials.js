import React from 'react';
import './Testimonials.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonials = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className='testimonials'>
            <div className="testimonialSec">
              
                <Slider {...settings}>
                    <div className='sliderContent'>
                        <p className='sliderDes'>"Outstanding job and exceeded all expectations.It was a pleasure to work with them on a sizeable first project and i am looking forward to start on the next one asap.</p>
                        <p className='testimonialName'>michale hopkings</p>
                       
                    </div>
                    <div className='sliderContent'>
                    <p className='sliderDes'>"Outstanding job and exceeded all expectations.It was a pleasure to work with them on a sizeable first project and i am looking forward to start on the next one asap.</p>
                        <p className='testimonialName'>michale hopkings</p>
                    </div>
                    <div className='sliderContent'>
                    <p className='sliderDes'>"Outstanding job and exceeded all expectations.It was a pleasure to work with them on a sizeable first project and i am looking forward to start on the next one asap.</p>
                        <p className='testimonialName'>michale hopkings</p>
                    </div>
                    
                </Slider>
            </div>
        </div>
    );
};

export default Testimonials;
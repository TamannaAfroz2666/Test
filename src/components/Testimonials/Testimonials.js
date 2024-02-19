import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <div className='testimonials'>
            <div className="testimonialSec">
                <button type="button" class="btn btn-primary">Primary</button>
                <br />
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2">
                            <div class="tcb-quote-carousel">
                                <div class="carousel slide carousel-fade" id="fade-quote-carousel" data-ride="carousel" data-interval="3000">
                                    {/* <!-- Carousel indicators --> */}
                                    <ol class="carousel-indicators">
                                        <li data-target="#fade-quote-carousel" data-slide-to="0" class="active"></li>
                                        <li data-target="#fade-quote-carousel" data-slide-to="1"></li>
                                        <li data-target="#fade-quote-carousel" data-slide-to="2"></li>
                                    </ol>
                                    {/* Carousel items  */}
                                    <div class="carousel-inner">
                                        <div class="item active">
                                            <div class="profile-circle"><img class="img-responsive " src="https://i.imgur.com/ctvpjSP.png" alt="" /></div>
                                            <blockquote>
                                                <p>Welcome to Apex! <br /> Now the site is running and open, we expect profiles to be done. There is a template you can fill in, instead of creating your own. Feel free to RP whenever, and start meeting people! </p>
                                            </blockquote>
                                        </div>
                                        <div class="item">
                                            <div class="profile-circle"><img class="img-responsive " src="https://i.imgur.com/hZFrbJJ.jpg" alt="" /></div>
                                            <blockquote>
                                                <p> 
                                                    <br />
                                                    Humans have been surviving against the animals ever since the first outbreak. Yet a cure has been found, and worked upon domestic dogs. This is the only species that is cured as for now. The cure is developing to spread across the whole animal kingdom and world. This is a slow process.</p>
                                            </blockquote>
                                        </div>
                                        <div class="item">
                                            <div class="profile-circle"><img class="img-responsive " src="https://i.imgur.com/e5TBLka.jpg" alt="" /></div>
                                            <blockquote>
                                                <p>
                                                    <br /> Moles have been getting into the underground system. Some areas are closed off due to weak or broken frame work. The community must find a way to remove of the moles and construct the buildings again. Points will be deducted, for any animals damaged, total points can be seen on the point page.</p>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Testimonials;
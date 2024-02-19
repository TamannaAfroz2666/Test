import React from 'react';
import './ProjectContent.css';
import img from '../../../assets/Images/MiniProject/food.jpg'

const ProjectContent = () => {
    return (
        <div className='ProjectContent'>
            <div className="projectConSub">
                <div className="project_contents">
                    <div className="projectContInfo">
                        <h3 className='lightTitle'>Light breakfast</h3>
                        <p className='desMultiProject'>Light his can't creeping.Be, bring blessed night.Replenish blessed creature good.Saw earth every creepth light days,divided abundantly form. In said given lights.Sixth the male. Upon their multiply.Kind beast.Him tree upon.  </p>
                        <div className="secondDes">
                            <p className='desMultiProject1'>Cattle, dominion day herb she'd creeping divide darkness.Which subdue had.</p>

                        </div>
                        <div className="addressCon">
                            <h4><strong className='addressTitle'>client:</strong> <span className='addressFull'>Emma Morris</span></h4>
                        </div>
                        <div className="addressCon">
                            <h4><strong className='addressTitle'>date:</strong> <span className='addressFull'>25.06.2017 </span></h4>
                        </div>
                        <div className="addressCon">
                            <h4><strong className='addressTitle'>share:</strong> <span className='addressFull'>Facebook, Twitter, Pinterest.</span></h4>
                        </div>

                    </div>
                    <div className="projectConImg">
                        <div className="imgProjectSec">
                           
                            <img src={img} alt="" />
                        </div>

                    </div>
                </div>



            </div>

        </div>
    );
};

export default ProjectContent;
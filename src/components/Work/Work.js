import React from 'react';
import './Work.css';

import WorkPage from '../../page/WorkPage/WorkPage';
import WorkDetails from './WorkDetails/WorkDetails';

const Work = () => {
    return (
        <div className='workContainer'>
            <div className="work_details">
                <WorkDetails></WorkDetails>
            </div>
           
            <div className="workActivities">
                <WorkPage></WorkPage>
            </div>
        </div>
    );
};

export default Work;
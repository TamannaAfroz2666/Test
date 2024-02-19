import React from 'react';
import './ProjectContainer.css';
import HomePageHeader from '../../../Layout/Header/HomePageHeader/HomePageHeader';
import MiniProjects from '../MiniProjects';
import Footer from '../../../Layout/Footer/Footer';
const ProjectContainer = () => {
    return (
        <div className='ProjectContainer'>
            <HomePageHeader></HomePageHeader>
            <MiniProjects></MiniProjects>
            <Footer></Footer>
            
        </div>
    );
};

export default ProjectContainer;
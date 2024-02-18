import React from 'react';
import ContactHeader from '../../Layout/Header/ContactHeader/ContactHeader';
import ContactContents from './ContactContents/ContactContents';

const ContactPage = () => {
    return (
        <div className='contactPage'>
            <ContactHeader></ContactHeader>
            <div className="contactPageBody">
            <ContactContents></ContactContents>

            </div>
       
            
           
            
        </div>
    );
};

export default ContactPage;
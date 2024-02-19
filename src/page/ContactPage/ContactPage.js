import React from 'react';
import ContactHeader from '../../Layout/Header/ContactHeader/ContactHeader';
import ContactContents from './ContactContents/ContactContents';
import Footer from '../../Layout/Footer/Footer'

const ContactPage = () => {
    return (
        <div className='contactPage'>
            <ContactHeader></ContactHeader>
            <div className="contactPageBody">
            <ContactContents></ContactContents>

            </div>
            <Footer></Footer>
            
       
            
           
            
        </div>
    );
};

export default ContactPage;
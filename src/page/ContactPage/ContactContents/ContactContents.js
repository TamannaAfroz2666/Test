import React from 'react';
import './ContactContents.css';
import ContactContentsInfo from './ContactContentsInfo/ContactContentsInfo';
import ContactInputFields from '../../../components/Contact/ContactInputFields/ContactInputFields';

const ContactContents = () => {
    return (
        <div className='contact_contents'>
            <div className="contact_section">
                <div className="containerContact11">
                    <div className="infoContainer">
                        <ContactContentsInfo></ContactContentsInfo>
                    </div>
                    <div className="fieldContainer">
                        <div className="fieldContainerDetails">
                            <ContactInputFields></ContactInputFields>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactContents;
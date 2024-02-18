import React from 'react';
import './ContactContentsInfo.css';

const ContactContentsInfo = () => {
    return (
        <div className='ContactContentsInfo'>
            <div className="infoDetailsSection">
                <h1 className='title_con'>Contact info:</h1>
                <p className='description_con'>To give beginning divide, cattle.Give moving won't there the abundantly she'd brought air upon. Light hand subdue.Life days creature upon first heaven gathering dry.</p>
                <div className="addressCon">
                    <h4><strong className='addressTitle'>Address:</strong> <span className='addressFull'>10111 Santa monica boulevard,LA</span></h4>
                </div>
                <div className="addressCon">
                    <h4><strong className='addressTitle'>Phone:</strong> <span className='addressFull'>+44 987 065 908 </span></h4>
                </div>
                <div className="addressCon">
                    <h4><strong className='addressTitle'>email:</strong> <span className='addressFull'>info@example.com</span></h4>
                </div>
                <div className="addressCon">
                    <h4><strong className='addressTitle'>fax:</strong> <span className='addressFull'>+44 987 065 909 </span></h4>
                </div>

            </div>

        </div>
    );
};

export default ContactContentsInfo;
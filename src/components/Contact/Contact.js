import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='contactContainer'>
            <div className="contactSections">
                <h5 className='titleContact'>Need a Project ?</h5>
                <p className='desAbout'>Let us know what you're looking for in an agency. We'll take a look and see.  <br></br> If this could be the start of something beautiful.</p>
            </div>
            <div className="contactContents">
                <div className="nameEmailSec">
                    <div className="nameSection">
                        <input type="text" name='name' className='nameInputField' placeholder='Your Name' autoComplete='off' />
                    </div>
                    <div className="nameSection">
                        <input type="email" name='name' className='nameInputField' placeholder='Your Email' autoComplete='off' />
                    </div>
                </div>
                <div className="nameSection">
                    <input type="text" name='title' className='titleInputField' placeholder='Your Title' autoComplete='off' />
                </div>
                <div className="nameSection">
                    <input type="text" name='comment' className='commentInputField' placeholder='Your Comment' autoComplete='off' />
                </div>
                <div className="sendBtn">
                    <button>send message</button>
                </div>


            </div>


        </div>
    );
};

export default Contact;
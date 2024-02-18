import React from 'react';
import './ContactInputFields.css';

const ContactInputFields = () => {
    return (
        <div className='ContactInputFields'>
            <div className="contactContents1">
                <form action="">
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
                </form>


            </div>

        </div>
    );
};

export default ContactInputFields;
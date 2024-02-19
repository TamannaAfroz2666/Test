import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='contactContainer'>
            <div className="contactSections">
                <h5 className='titleContact'>Need a Project ?</h5>
                <p className='desProjectContact1'>Let us know what you're looking for in an agency. We'll take a look and see.  <br></br> If this could be the start of something beautiful.</p>
            </div>

            <div className="contactContents1">
                <form action="">
                    <div className="nameEmailSec1">
                        <div className="nameSection1">
                            <input type="text" name='name' className='nameInputField1' placeholder='Your Name' autoComplete='off' />
                        </div>
                        <div className="nameSection1">
                            <input type="email" name='name' className='nameInputField1' placeholder='Your Email' autoComplete='off' />
                        </div>
                    </div>
                    <div className="nameSection1">
                        <input type="text" name='title' className='titleInputField1' placeholder='Your Title' autoComplete='off' />
                    </div>
                    <div className="nameSection1">
                        <input type="text" name='comment' className='commentInputField1' placeholder='Your Comment' autoComplete='off' />
                    </div>
                    <div className="sendBtn1">
                        <button>send message</button>
                    </div>
                </form>


            </div>


        </div>
    );
};

export default Contact;
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        title: '',
        comment:'',
    });
    // input event handler 
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,       //data exits kore niyese ager gulo
            [name]: value,     // new data added
        }))
    }

    // step 2 : data validation part 

    const [errors, setErrors] = useState({});
    const dataValidation = () => {
        let dataIsValid = true;
        let newErrors = {};

        // for name field validated check 
        if (!formData.name.trim()) {
            dataIsValid = false;
            newErrors.name = 'Required your name!';
        }
        // for email field validation check 
        const emailReges = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim() || !emailReges.test(formData.email)) {
            dataIsValid = false;
            newErrors.email = 'valid email address!'
        }

          // for tiitle field validation check
          if (!formData.title.trim()) {
            dataIsValid = false;
            newErrors.title = ' Required your project title! ';
        }
        // for comments field validation check 
        if (!formData.comment.trim()) {
            dataIsValid = false;
            newErrors.comment = ' Required your messages!';
        }
       
        setErrors(newErrors);
        return dataIsValid;

    };

    const submitHandle = (e) => {
        e.preventDefault();
        if (dataValidation()) {
            console.log('your data is submitted', formData);
        }
        else {
            console.log('form validation field');
        }
    }

    return (
        <div className='contactContainer'>
            <div className="contactSections">
                <h5 className='titleContact'>Need a Project ?</h5>
                <p className='desProjectContact1'>Let us know what you're looking for in an agency. We'll take a look and see.  <br></br> If this could be the start of something beautiful.</p>
            </div>

            <div className="contactContents1">
                <form action="" onSubmit={submitHandle}>
                    <div className="nameEmailSec1">
                        <div className="nameSection1">
                            <input type="text" name='name' className='nameInputField1' placeholder='Your Name' autoComplete='off'
                             value={formData.name}
                             onChange={handleChange}
                             />
                             <div className="message">
                             {errors.name && <span className='nameError'>
                            {errors.name}</span>}

                             </div>
                            
                            
                        </div>
                        
                        <div className="nameSection1">
                            <input type="email" name='email' className='nameInputField1' placeholder='Your Email' autoComplete='off'
                             value={formData.email}
                             onChange={handleChange} 
                            />
                            <div className="message">
                            {errors.email && <span className='nameError'>
                            {errors.email}</span>}

                             </div>
                            
                            
                        </div>
                       
                    </div>
                    <div className="nameSection1">
                        <input type="text" name='title' className='titleInputField1' placeholder='Your Title' autoComplete='off'
                         value={formData.title}
                         onChange={handleChange}
                        />
                         <div className="message">
                         {errors.title && <span className='nameError'>
                            {errors.title}</span>}

                             </div>
                         
                    </div>
                    <div className="nameSection1">
                        <input type="text" name='comment' className='commentInputField1' placeholder='Your Comment' autoComplete='off' 
                         value={formData.comment}
                         onChange={handleChange}
                        
                        />
                         <div className="message">
                         {errors.comment && <span className='nameError'>
                            {errors.comment}</span>}

                             </div>
                        
                    </div>
                    <div className="sendBtn1">
                        <button type='submit'>send message</button>
                    </div>
                </form>


            </div>


        </div>
    );
};

export default Contact;
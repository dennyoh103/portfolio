import React, { useRef, useState, useContext } from 'react'
import './Contact.css'
import phone from '../img/phone.png'
import email from '../img/email.png'
import linkedin from '../img/linkedin.png'
import web from '../img/web.png'
import emailjs from 'emailjs-com'
import { ThemeContext } from '../context'

function Contact() {

    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_1goa3wn', 'template_dejzl0j', formRef.current, 'Ss5YwKTKaZZxKhUD2')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className='c'>
            <div className="c_wrapper">
                <div className="c_left">
                    <h1 className="c_title">Let's connect!</h1>
                    <div className="c_info">
                        <div className="c_info_item">
                            <img src={phone} alt="" className="c_icon" />
                            503-432-0817
                        </div>
                        <div className="c_info_item">
                            <img src={email} alt="" className="c_icon" />
                            dennyoh103@gmail.com
                        </div>
                        <div className="c_info_item">
                            <img src={web} alt="" className="c_icon" />
                            www.dennyoh.me
                        </div>
                        <div className="c_info_item">
                            <img src={linkedin} alt="" className="c_icon" />
                            www.linkedin.com/in/denny-oh/
                        </div>
                    </div>
                </div>
                <div className="c_right">
                    <p className="c_desc">
                        Questions about my background? Feel free to reach out to me!
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: darkMode && '#333' }} type="text" placeholder='Subject' name="user_subject" />
                        <input style={{ backgroundColor: darkMode && '#333' }} type="text" placeholder='Name' name="user_name" />
                        <input style={{ backgroundColor: darkMode && '#333' }} type="text" placeholder='Email' name="user_email" />
                        <textarea style={{ backgroundColor: darkMode && '#333' }} name="message" id="" cols="30" rows="5" placeholder='message'></textarea>
                        <button>Submit</button>
                        {done && "   Email Sent. Thank you!"}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact

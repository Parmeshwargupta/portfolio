import React from "react";
import "./contact.css";
import { AiOutlineMail } from 'react-icons/ai';
import { BsMessenger } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import  emailjs  from 'emailjs-com';

const Contact = () => {
   const form = useRef();
   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dqfo9c9', 'template_sng5fnn', form.current, '9JLtLACN0KjFjnciF')
    e.target.reset();  
  };
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
         <article className="contact_option"> 
         <AiOutlineMail className='contact_option-icon'/>
         <h4>Email</h4>
         <h5>parmeshwarmrj18@gmail.com</h5>
         <a href="mailto:parmeshwarmrj18@gmail.com" target="_blank">Send a message</a>
         </article>
         <article className="contact_option"> 
         <BsMessenger className='contact_option-icon'/>
         <h4>Facebook</h4>
         <h5>Messenger</h5>
         <a href="http://m.me/parmeshwar.gupta.391" target="_blank">Send a message</a>
         </article> 
         <article className="contact_option"> 
         <BsWhatsapp className='contact_option-icon'/>
         <h4>Whatsapp</h4>
         <h5>9161026137</h5>
         <a href="https://wa.me/+919161026137" target="_blank">Send a message</a>
         </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your full name' required />
        <input type="text" name='email' placeholder='Your Email' required />
        <textarea name="message"  rows="7" placeholder='Your Message'required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
};

export default Contact;

import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vkdc9vu', 'template_0jykd4v', form.current, 'NRFxGkpgyC6nsowTw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>eddiebinion2@gmail.com</h5>
            <a href="mailto: eddiebinion2@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Edward Binion</h5>
            <a href="https://m.me/eddie.binion" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+123456789</h5>
            <a href="https://apiwhatsapp.com/send?phone=+7737592508" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text"name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
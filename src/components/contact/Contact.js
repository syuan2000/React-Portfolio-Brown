import React, {useRef} from 'react'
import {HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker} from 'react-icons/hi';
import emailjs from 'emailjs-com'
import './contact.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rla10hd', 'template_0k436fi', form.current, 'DhV8NHmIgvym5m8-C')
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
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="text" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
        <div className="contact__options">
          <div className="contact__option">
          <HiOutlineMail className="contact__icon"/>
            <h4> evali892000@gmail.com</h4>
          </div>
          <div className="contact__option">
          <HiOutlinePhone className="contact__icon"/>
            <h4> +1 573-999-7835</h4>
          </div>
          <div className="contact__option">
          <HiOutlineLocationMarker className="contact__icon "/>
            <h4> Los Angeles, California, United States</h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

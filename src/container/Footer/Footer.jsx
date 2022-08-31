import React from 'react';
import "./footer.scss";
import { useState } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import { images } from '../../constants';

const Footer = () => {
  const [formData, setFormData] = useState({name: "", email: "", message: ""});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const {name, email, message} = formData;

  const handleChangeInput = (e) => {
    const {name, value} = e.target;

    setFormData({...formData, [name]: value});
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact)
      .then(() => {
        setLoading(true);
        setIsFormSubmitted(true);
      })
  };
  

  return (
    <>
      <h2 className='head-text'>Take a coffee & chat with me</h2>
      <div className='app__footer-cards'>
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:hello@micael.com" className='p-text'>hello@micael.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +66 87 693 2644" className='p-text'>087-693-2644</a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className='app__footer-form app__flex'>
        <div className="app__flex">
          <input className='p-text' type="text" placeholder='Your Name' name='name' value={name} onChange={handleChangeInput} />
        </div>
        <div className="app__flex">
          <input className='p-text' type="text" placeholder='Your Email' name='email' value={email} onChange={handleChangeInput} />
        </div>
        <div>
          <textarea
            className='p-text'
            placeholder='Your Message'
            value={message}
            name="message"
            onChange={handleChangeInput}
          />
        </div>
        <button className='p-text' type="button" onClick={handleSubmit}>{loading ? "Sending" : "Send Message"}</button>
      </div>)
      : (<div>
          <h3 className='head-text'>Thank you for getting touch</h3>       
        </div>
        )}
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
)
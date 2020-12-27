import React, { useState } from 'react';
import style from './ContactUs.module.scss';
// import Button from '../Button/Button';

function ContactUsForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      console.log('Please insert a name');
    }

    if (!email) {
      console.log('Please enter an email');
    }

    if (!phone) {
      console.log('Please enter a phone number');
    }

    if (!message) {
      console.log('Please enter a message');
    }

    if (name && email && phone && message) {
      alert('Your information has been submitted successfully');
    }
  };

  return (
    <div className={style.container}>
      <div className={style.contentContainer}>
        <p className={style.header}>Contact Us</p>
        <p className={style.content}>
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </div>
      <div className={style.form}>
        <form>
          <input
            autoComplete='off'
            type='text'
            name='name'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            autoComplete='off'
            type='text'
            name='email'
            placeholder='Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            autoComplete='off'
            type='text'
            name='phone'
            placeholder='Phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <textarea
            autoComplete='off'
            type='text'
            name='message'
            placeholder='Your Message'
            rows='3'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className={style.btnContainer}>
            <button type='submit' onClick={handleSubmit}>
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUsForm;

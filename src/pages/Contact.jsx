import React from 'react';
import './contact.css'
function Contact() {
  const emailAddress = 'gideonkipyegon837@gmail.com';
  const phoneNumber = '0715190447';

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className='contact'>
      <p>Email: <b onClick={handleEmailClick} style={{ cursor: 'pointer', color: 'blue' }}>{emailAddress}</b></p>
      <p>Phone: <b onClick={handlePhoneClick} style={{ cursor: 'pointer', color: 'blue' }}>{phoneNumber}</b></p>
    </div>
  );
}

export default Contact;

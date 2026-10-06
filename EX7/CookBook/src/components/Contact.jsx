import React from 'react';
import CoolBtn from './CoolBtn';

function Contact() {
  const handleClick = () => {
    alert('Thank you for contacting CookBook support!');
  };

  return (
    <div style={{ padding: '30px', backgroundColor: '#fff0f3', borderRadius: '10px' }}>
      <h2 style={{ color: '#c25975', marginTop: 0 }}>Contact Us</h2>
      <p style={{ color: '#555' }}>Email: support@cookbook.com</p>
      <p style={{ color: '#555' }}>Phone: +1 234 567 890</p>
      <CoolBtn label="Send Message" onClick={handleClick} />
    </div>
  );
}

export default Contact;
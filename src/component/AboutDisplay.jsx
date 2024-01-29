import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './aboutus.css';


const AboutDisplay = () => {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    loadContact();
  }, []);

  const loadContact = async () => {
    try {
      const response = await axios.get("http://localhost:8080/contact/1");
      setContact(response.data);
    } catch (error) {
      console.error("Error loading users: ", error);
    }
  }

  const update = () => {
    window.location.href = '/contact';
  }

  return (
    <div className="custom-container">
      
      <div className="custom-notification">
        <div className="custom-glow"></div>
        <div className="custom-border-glow"></div>
        <div className="custom-title">Mission</div>
        <p>{contact.mission}</p>
        <button className="custom-update-btn" onClick={update}>Update Mission</button>
      </div>
      <div className="custom-notification">
        <div className="custom-glow"></div>
        <div className="custom-border-glow"></div>
        <div className="custom-title">Vision</div>
        <p>{contact.vision}</p>
        <button className="custom-update-btn" onClick={update}>Update Vision</button>
      </div>
      <div className="custom-notification">
        <div className="custom-glow"></div>
        <div className="custom-border-glow"></div>
        <div className="custom-title">Value</div>
        <p>{contact.aboutUs}</p>
        <button className="custom-update-btn" onClick={update}>Update About Us</button>
      </div>
      {/* <button data-label="Register" className="custom-rainbow-hover" onClick={update}>
        <span className="custom-sp">Update All</span>
      </button> */}
    </div>
  );
};

export default AboutDisplay;

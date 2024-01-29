import axios from 'axios';
import React, { useEffect, useState } from 'react';

function AboutUs() {
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

  const updateContact = async () => {
    try {
      await axios.put(`http://localhost:8080/contact/${contact.id}`, contact);
      alert('Contact updated successfully!');
      window.location.href = '/';
    } catch (error) {
      console.error("Error updating contact: ", error);
    }
  }

  const handleInputChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <div className="textfield">
        <input
          type="text"
          name="mission"
          required="required"
          value={contact.mission || ''}
          onChange={handleInputChange}
        />
        <span>Mission</span>
      </div>
      <div className="textfield">
        <input
          type="text"
          name="vision"
          required="required"
          value={contact.vision || ''}
          onChange={handleInputChange}
        />
        <span>Vision</span>
      </div>
      <div className="textfield">
        <input
          type="text"
          name="aboutUs"
          required="required"
          value={contact.aboutUs || ''}
          onChange={handleInputChange}
        />
        <span>About Us</span>
      </div>
      <button className="Update" onClick={updateContact}>Update</button>
    </div>
  );
}

export default AboutUs;
 
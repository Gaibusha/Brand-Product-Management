import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', form);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Here are the ways you can reach us:</p>
      <ul>
        <li><strong>Email:</strong> support@shopsync.com</li>
        <li><strong>Phone:</strong> +91 22 1234 5678</li>
        <li><strong>Address:</strong> 123 ShopSync Avenue, Mumbai, Maharashtra 400001, India</li>
      </ul>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name:
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </label>
        <label>
          Message:
          <textarea name="message" value={form.message} onChange={handleChange} required></textarea>
        </label>
        <button type="submit">Send Message</button>
      </form>
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8432415145674!2d72.82579431480182!3d19.08062248708695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce69a4f8d07f%3A0x2bf62a965f9d2d0e!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1607117283823!5m2!1sen!2sus"
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;

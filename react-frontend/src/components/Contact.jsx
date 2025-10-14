import { useState } from 'react'
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa'
import axios from 'axios'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'
      const response = await axios.post(`${API_URL}/api/contact`, formData)
      
      if (response.data.status === 'success') {
        setSubmitStatus({ type: 'success', message: 'Thank you for your message! I will get back to you soon.' })
        setFormData({ name: '', email: '', subject: '', message: '' })
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: error.response?.data?.message || 'Failed to send message. Please try again.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Let's work together</h3>
          <p>I'm currently seeking opportunities in data analytics and development. Whether you have a question or want to discuss a project, I'll get back to you as soon as possible!</p>
          <div className="contact-details">
            <div className="contact-item">
              <FaEnvelope />
              <span>ashleshasaxena08@gmail.com</span>
            </div>
            <div className="contact-item">
              <FaPhone />
              <span>+91 8120416660</span>
            </div>
            <div className="social-links">
              <a href="https://github.com/SAxenaAshlesha" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/ashlesha-saxena-a5078a240" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          {submitStatus && (
            <div className={`submit-status ${submitStatus.type}`}>
              {submitStatus.message}
            </div>
          )}
          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact

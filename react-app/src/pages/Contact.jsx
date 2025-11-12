import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <>
      <section className="py-5 bg-dark">
        <div className="container">
          <h1 className="section-title">Contact Us</h1>
          <p className="section-subtitle">Get in touch with our team</p>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title text-warning">📍 Location</h5>
                  <p className="card-text text-muted">123 Main Street, Your City, State 12345</p>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title text-warning">📞 Phone</h5>
                  <p className="card-text text-muted">+1 (234) 567-8900</p>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title text-warning">📧 Email</h5>
                  <p className="card-text text-muted">info@fitlifegym.com</p>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title text-warning">⏰ Hours</h5>
                  <p className="card-text text-muted">Monday - Sunday: 5:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <form onSubmit={handleSubmit} className="card">
                <div className="card-body">
                  <h5 className="card-title text-warning mb-4">Send us a Message</h5>
                  
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Phone (Optional)</label>
                    <input 
                      type="tel" 
                      className="form-control" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Subject</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea 
                      className="form-control" 
                      rows="5"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-warning w-100">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="section-title">Why Contact Us?</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card text-center">
                <div className="feature-icon">❓</div>
                <div className="card-body">
                  <h5 className="card-title">Questions</h5>
                  <p className="card-text text-muted">Have questions about our services? We're here to help!</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center">
                <div className="feature-icon">🎯</div>
                <div className="card-body">
                  <h5 className="card-title">Consultations</h5>
                  <p className="card-text text-muted">Schedule a free consultation with our fitness experts.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center">
                <div className="feature-icon">👋</div>
                <div className="card-body">
                  <h5 className="card-title">Join Us</h5>
                  <p className="card-text text-muted">Ready to start your fitness journey? Let's talk!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

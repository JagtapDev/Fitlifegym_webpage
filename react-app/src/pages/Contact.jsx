import { useState } from 'react'

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
                  <h5 className="card-title text-warning">Contact Information</h5>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-3">
                      <h6 className="mb-1 text-warning">📍 Location</h6>
                      <p className="text-muted mb-0">123 Main Street, Your City, State 12345</p>
                    </li>
                    <li className="mb-3">
                      <h6 className="mb-1 text-warning">📞 Phone</h6>
                      <p className="text-muted mb-0">+1 (234) 567-8900</p>
                    </li>
                    <li className="mb-3">
                      <h6 className="mb-1 text-warning">📧 Email</h6>
                      <p className="text-muted mb-0">info@fitlifegym.com</p>
                    </li>
                    <li>
                      <h6 className="mb-1 text-warning">⏰ Hours</h6>
                      <p className="text-muted mb-0">Monday - Sunday: 5:00 AM - 11:00 PM</p>
                    </li>
                  </ul>
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

      {/* Google Map Embed - replace the query with your real address or use Maps Embed API with a key */}
      <section className="pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h5 className="section-subtitle mb-3">Find Us</h5>
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.google.com/maps?q=123+Main+Street+Your+City&output=embed"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="FitLife Gym Location"
                ></iframe>
              </div>
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

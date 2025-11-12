import { Link } from 'react-router-dom'

export default function Home() {
  // Images will be copied to public/img/ folder
  const runningImg = '/img/running3.png'
  const yogaImg = '/img/yoga1.jpg'
  const services = [
    {
      title: 'Weight Loss Programs',
      icon: '⚖️',
      description: 'Customized nutrition and training programs designed to help you lose weight safely and sustainably.',
      link: '/weight-loss'
    },
    {
      title: 'Weight Gain Programs',
      icon: '💪',
      description: 'Build muscle mass and gain healthy weight with our expert trainers and nutrition plans.',
      link: '/weight-gain'
    },
    {
      title: 'Nutrition Planning',
      icon: '🥗',
      description: 'Get personalized nutrition guidance from our certified dietitians and nutritionists.',
      link: '/nutrition'
    },
    {
      title: 'Personal Training',
      icon: '🏋️',
      description: 'One-on-one training sessions with experienced professionals tailored to your goals.',
      link: '/personal-trainer'
    },
    {
      title: 'Group Classes',
      icon: '👥',
      description: 'Join our energetic group fitness classes including yoga, spinning, and HIIT.',
      link: '/group-classes'
    },
    {
      title: 'Online Coaching',
      icon: '💻',
      description: 'Access professional coaching and training programs from anywhere in the world.',
      link: '/online-coaching'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <header className="hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${runningImg}')` }}>
        <div className="container py-5">
          <h1 className="display-3 fw-bold mb-3">Welcome to FitLife Gym</h1>
          <p className="lead mb-4">
            Transform your body and mind with our expert trainers, modern equipment, and science-based programs. 
            Whether you're a beginner or an athlete, FitLife Gym is your partner in health and fitness.
          </p>
          <ul className="list-unstyled mb-4">
            <li><strong>📍 Location:</strong> 123 Main Street, Your City</li>
            <li><strong>📧 Contact:</strong> info@fitlifegym.com | +1 234 567 890</li>
            <li><strong>⏰ Hours:</strong> Mon-Sun, 5:00 AM – 11:00 PM</li>
          </ul>
          <Link to="/pricing" className="btn btn-warning btn-lg me-2">Become a Member</Link>
          <Link to="/bmi-calculator" className="btn btn-outline-light btn-lg">Check Your BMI</Link>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Everything you need for your fitness journey</p>
          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card h-100 text-center">
                  <div className="feature-icon">{service.icon}</div>
                  <div className="card-body">
                    <h5 className="card-title">{service.title}</h5>
                    <p className="card-text text-muted">{service.description}</p>
                    <Link to={service.link} className="btn btn-warning btn-sm">Learn More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-5 bg-dark">
        <div className="container">
          <h2 className="section-title">Why Choose FitLife Gym?</h2>
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={yogaImg} alt="Yoga Class" className="img-fluid rounded-3" style={{ border: '3px solid #ffc107' }} />
            </div>
            <div className="col-md-6">
              <h3 className="text-warning mb-3">Expert Guidance & Results</h3>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <strong className="text-warning">✓ Certified Trainers:</strong>
                  <p>All our trainers are certified professionals with years of experience.</p>
                </li>
                <li className="mb-3">
                  <strong className="text-warning">✓ Personalized Programs:</strong>
                  <p>Custom training and nutrition plans designed specifically for you.</p>
                </li>
                <li className="mb-3">
                  <strong className="text-warning">✓ State-of-the-Art Equipment:</strong>
                  <p>Latest fitness equipment and technology to maximize your results.</p>
                </li>
                <li className="mb-3">
                  <strong className="text-warning">✓ 24/7 Support:</strong>
                  <p>Round-the-clock support and guidance from our team.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="section-title">What Our Members Say</h2>
          <div className="row g-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="col-md-4">
                <div className="card text-center">
                  <div className="card-body">
                    <p className="card-text text-muted">"FitLife Gym transformed my life! The trainers are amazing and the community is so supportive. Highly recommended!"</p>
                    <h5 className="card-title mt-3 text-warning">Member {index + 1}</h5>
                    <p className="text-muted small">⭐⭐⭐⭐⭐</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-dark">
        <div className="container text-center">
          <h2 className="section-title mb-4">Ready to Transform Your Life?</h2>
          <p className="lead mb-4">Join thousands of members who have already achieved their fitness goals.</p>
          <Link to="/pricing" className="btn btn-warning btn-lg">View Our Membership Plans</Link>
        </div>
      </section>
    </>
  )
}

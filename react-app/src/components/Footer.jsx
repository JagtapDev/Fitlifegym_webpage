import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4">
            <h5 className="footer-title">FitLife Gym</h5>
            <p className="text-muted">Transforming lives through fitness and wellness since 2020.</p>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/personal-trainer">Trainers</Link></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="footer-title">Services</h5>
            <ul className="list-unstyled">
              <li><Link to="/weight-loss">Weight Loss</Link></li>
              <li><Link to="/weight-gain">Weight Gain</Link></li>
              <li><Link to="/nutrition">Nutrition</Link></li>
              <li><Link to="/rehabilitation">Rehabilitation</Link></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="footer-title">Contact Info</h5>
            <p className="text-muted">
              📍 123 Main Street, Your City<br/>
              📞 +1 234 567 890<br/>
              📧 info@fitlifegym.com<br/>
              ⏰ Mon-Sun: 5:00 AM - 11:00 PM
            </p>
          </div>
        </div>
        <hr className="bg-warning" />
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="text-muted mb-0">&copy; {currentYear} FitLife Gym. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-end">
            <p className="text-muted mb-0">Designed with 💪 for your fitness journey</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

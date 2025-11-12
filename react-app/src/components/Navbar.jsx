import { Link } from 'react-router-dom'

export default function Navbar() {
  const logo = '/img/logo.png'
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="FitLife Gym Logo" />
          FitLife Gym
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/weight-loss">Weight Loss</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/weight-gain">Weight Gain</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/nutrition">Nutrition</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/personal-trainer">Trainer</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bmi-calculator">BMI</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/group-classes">Classes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

import { Link } from 'react-router-dom'
import weightLossImg from '../../img/Weight-Loss-1.jpg'

export default function WeightLoss() {
  return (
    <>
      <section className="py-5 bg-dark">
        <div className="container">
          <h1 className="section-title">Weight Loss Programs</h1>
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={weightLossImg} alt="Weight Loss" className="img-fluid rounded-3" style={{ border: '3px solid #ffc107' }} />
            </div>
            <div className="col-md-6">
              <h2 className="text-warning mb-3">Achieve Your Weight Loss Goals</h2>
              <p className="lead">Our comprehensive weight loss programs combine personalized training, nutrition planning, and behavioral coaching to help you lose weight and keep it off.</p>
              <ul className="list-unstyled mb-4">
                <li className="mb-2">✓ Customized training plans</li>
                <li className="mb-2">✓ Professional nutrition guidance</li>
                <li className="mb-2">✓ Progress tracking and adjustments</li>
                <li className="mb-2">✓ Motivational support from trainers</li>
                <li className="mb-2">✓ Access to group weight loss classes</li>
              </ul>
              <Link to="/contact" className="btn btn-warning btn-lg">Get Started Today</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="section-title">Our Weight Loss Approach</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card">
                <div className="feature-icon">🎯</div>
                <div className="card-body text-center">
                  <h5 className="card-title">Goal Setting</h5>
                  <p className="card-text text-muted">We help you set realistic, achievable weight loss goals tailored to your lifestyle.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="feature-icon">🏋️</div>
                <div className="card-body text-center">
                  <h5 className="card-title">Training Programs</h5>
                  <p className="card-text text-muted">Effective workouts designed to maximize calorie burn and build lean muscle.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="feature-icon">🥗</div>
                <div className="card-body text-center">
                  <h5 className="card-title">Nutrition Plans</h5>
                  <p className="card-text text-muted">Balanced meal plans that are tasty, sustainable, and support your weight loss.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="feature-icon">📊</div>
                <div className="card-body text-center">
                  <h5 className="card-title">Progress Tracking</h5>
                  <p className="card-text text-muted">Monitor your progress with regular assessments and adjustments to your plan.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-dark">
        <div className="container text-center">
          <h2 className="section-title mb-4">Success Stories</h2>
          <p className="lead mb-4">Our members have lost an average of 15-30 pounds in 12 weeks!</p>
          <Link to="/pricing" className="btn btn-warning btn-lg">Start Your Transformation</Link>
        </div>
      </section>
    </>
  )
}

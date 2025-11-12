import { Link } from 'react-router-dom'

export default function OnlineCoaching() {
  return (
    <>
      <section className="py-5 bg-dark">
        <div className="container">
          <h1 className="section-title">Online Coaching</h1>
          <p className="section-subtitle">Professional fitness coaching from anywhere in the world</p>

          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="text-warning mb-3">Train Anywhere, Anytime</h2>
              <p className="lead">Get personalized coaching from our certified trainers without leaving your home. Our online coaching program provides the same expertise and accountability as in-person training.</p>
              <ul className="list-unstyled mb-4">
                <li className="mb-2">✓ Live training sessions</li>
                <li className="mb-2">✓ Recorded workout videos</li>
                <li className="mb-2">✓ Personalized meal plans</li>
                <li className="mb-2">✓ 24/7 app support</li>
                <li className="mb-2">✓ Progress tracking</li>
                <li className="mb-2">✓ Community access</li>
              </ul>
              <Link to="/contact" className="btn btn-warning btn-lg">Get Started</Link>
            </div>
            <div className="col-md-6">
              <div style={{ fontSize: '5rem', textAlign: 'center' }}>💻</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="section-title">Online Coaching Services</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card">
                <div className="feature-icon">📹</div>
                <div className="card-body text-center">
                  <h5 className="card-title">Live Classes</h5>
                  <p className="card-text text-muted">Interactive group fitness classes streamed live with real-time feedback from instructors.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="feature-icon">🎥</div>
                <div className="card-body text-center">
                  <h5 className="card-title">Workout Videos</h5>
                  <p className="card-text text-muted">Extensive library of on-demand workout videos for all fitness levels and goals.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="feature-icon">👨‍🏫</div>
                <div className="card-body text-center">
                  <h5 className="card-title">1-on-1 Coaching</h5>
                  <p className="card-text text-muted">Virtual personal training sessions with customized programs for your goals.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="feature-icon">📊</div>
                <div className="card-body text-center">
                  <h5 className="card-title">App & Tracking</h5>
                  <p className="card-text text-muted">Track workouts, nutrition, and progress with our comprehensive mobile app.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-dark">
        <div className="container">
          <h2 className="section-title">Online Coaching Plans</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title text-warning">Basic</h5>
                  <h3 className="text-warning mb-3">$39</h3>
                  <p className="card-text">per month</p>
                  <ul className="list-unstyled mb-3 text-muted">
                    <li className="mb-1">✓ Unlimited workout videos</li>
                    <li className="mb-1">✓ Nutrition guidance</li>
                    <li className="mb-1">✓ App access</li>
                  </ul>
                  <Link to="/contact" className="btn btn-warning btn-sm">Select Plan</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center" style={{ border: '3px solid #FF6B35' }}>
                <div style={{ background: '#FF6B35', color: '#000', padding: '0.5rem', fontSize: '0.9rem', fontWeight: 'bold' }}>POPULAR</div>
                <div className="card-body">
                  <h5 className="card-title text-warning">Premium</h5>
                  <h3 className="text-warning mb-3">$79</h3>
                  <p className="card-text">per month</p>
                  <ul className="list-unstyled mb-3 text-muted">
                    <li className="mb-1">✓ Everything in Basic</li>
                    <li className="mb-1">✓ Live group classes</li>
                    <li className="mb-1">✓ 2 1-on-1 sessions</li>
                    <li className="mb-1">✓ Monthly plan review</li>
                  </ul>
                  <Link to="/contact" className="btn btn-warning btn-sm">Select Plan</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title text-warning">Elite</h5>
                  <h3 className="text-warning mb-3">$149</h3>
                  <p className="card-text">per month</p>
                  <ul className="list-unstyled mb-3 text-muted">
                    <li className="mb-1">✓ Everything in Premium</li>
                    <li className="mb-1">✓ Unlimited 1-on-1 sessions</li>
                    <li className="mb-1">✓ Nutrition coaching</li>
                    <li className="mb-1">✓ Priority support</li>
                  </ul>
                  <Link to="/contact" className="btn btn-warning btn-sm">Select Plan</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container text-center">
          <h2 className="section-title mb-4">Join Our Online Community</h2>
          <p className="lead mb-4">Start your online fitness journey today!</p>
          <Link to="/contact" className="btn btn-warning btn-lg">Get Started Now</Link>
        </div>
      </section>
    </>
  )
}

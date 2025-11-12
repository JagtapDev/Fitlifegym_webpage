import { Link } from 'react-router-dom'

export default function Rehabilitation() {
  return (
    <>
      <section className="py-5 bg-dark">
        <div className="container">
          <h1 className="section-title">Rehabilitation & Recovery</h1>
          <p className="section-subtitle">Specialized programs to get you back to peak performance</p>

          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="text-warning mb-3">Professional Rehabilitation</h2>
              <p className="lead">Our rehabilitation programs are designed to help you recover from injuries and prevent future ones. Work with certified professionals trained in sports medicine and physical therapy.</p>
              <ul className="list-unstyled mb-4">
                <li className="mb-2">✓ Post-injury rehabilitation</li>
                <li className="mb-2">✓ Injury prevention training</li>
                <li className="mb-2">✓ Physical therapy guidance</li>
                <li className="mb-2">✓ Progressive recovery programs</li>
                <li className="mb-2">✓ Pain management strategies</li>
              </ul>
              <Link to="/contact" className="btn btn-warning btn-lg">Schedule Consultation</Link>
            </div>
            <div className="col-md-6">
              <div style={{ fontSize: '5rem', textAlign: 'center' }}>🏥</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="section-title">Services We Offer</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card">
                <div className="feature-icon">🦵</div>
                <div className="card-body text-center">
                  <h5 className="card-title">Joint Rehabilitation</h5>
                  <p className="card-text text-muted">Specialized programs for knee, shoulder, ankle, and other joint injuries.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="feature-icon">🏃</div>
                <div className="card-body text-center">
                  <h5 className="card-title">Sports Injury Recovery</h5>
                  <p className="card-text text-muted">Get back to your sport safely with our athletic rehabilitation programs.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="feature-icon">🧘</div>
                <div className="card-body text-center">
                  <h5 className="card-title">Flexibility & Mobility</h5>
                  <p className="card-text text-muted">Improve range of motion and prevent future injuries with targeted training.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="feature-icon">💆</div>
                <div className="card-body text-center">
                  <h5 className="card-title">Recovery Services</h5>
                  <p className="card-text text-muted">Massage therapy, stretching, and recovery techniques to accelerate healing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-dark">
        <div className="container">
          <h2 className="section-title">Our Approach</h2>
          <div className="row">
            <div className="col-md-6">
              <h4 className="text-warning mb-3">Assessment</h4>
              <p className="text-muted mb-3">We start with a comprehensive assessment of your injury and current fitness level to create a personalized rehabilitation plan.</p>
            </div>
            <div className="col-md-6">
              <h4 className="text-warning mb-3">Treatment</h4>
              <p className="text-muted mb-3">Guided rehabilitation exercises and therapies to reduce pain and restore function.</p>
            </div>
            <div className="col-md-6">
              <h4 className="text-warning mb-3">Prevention</h4>
              <p className="text-muted mb-3">Strength and conditioning programs to prevent future injuries and improve overall resilience.</p>
            </div>
            <div className="col-md-6">
              <h4 className="text-warning mb-3">Return to Activity</h4>
              <p className="text-muted mb-3">Gradual progression back to your normal activities with full support and monitoring.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container text-center">
          <h2 className="section-title mb-4">Start Your Recovery Today</h2>
          <p className="lead mb-4">Don't let injury slow you down. Get professional help and get back to what you love.</p>
          <Link to="/contact" className="btn btn-warning btn-lg">Book Consultation</Link>
        </div>
      </section>
    </>
  )
}

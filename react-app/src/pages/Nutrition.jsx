import { Link } from 'react-router-dom'

export default function Nutrition() {
  return (
    <>
      <section className="py-5 bg-dark">
        <div className="container">
          <h1 className="section-title">Nutrition Planning</h1>
          <p className="section-subtitle">Fuel your body with expert nutritional guidance</p>
          
          <div className="row">
            <div className="col-md-6">
              <h2 className="text-warning mb-3">Why Nutrition Matters</h2>
              <p className="lead">Nutrition is the foundation of all fitness success. Our certified nutritionists create personalized meal plans that support your specific goals.</p>
              <ul className="list-unstyled mb-4">
                <li className="mb-2">✓ One-on-one nutrition consultations</li>
                <li className="mb-2">✓ Customized meal plans</li>
                <li className="mb-2">✓ Macro and calorie optimization</li>
                <li className="mb-2">✓ Supplement recommendations</li>
                <li className="mb-2">✓ Monthly progress reviews</li>
              </ul>
              <Link to="/contact" className="btn btn-warning btn-lg">Schedule Consultation</Link>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-warning">What You'll Learn</h5>
                  <ul className="list-unstyled">
                    <li className="mb-2">• Balanced macro nutrition</li>
                    <li className="mb-2">• Meal prep strategies</li>
                    <li className="mb-2">• Healthy grocery shopping</li>
                    <li className="mb-2">• Eating out wisely</li>
                    <li className="mb-2">• Sustainable lifestyle changes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="section-title">Nutrition Services</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card">
                <div className="feature-icon">📋</div>
                <div className="card-body text-center">
                  <h5 className="card-title">Meal Planning</h5>
                  <p className="card-text text-muted">Customized meal plans based on your goals, preferences, and dietary restrictions.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="feature-icon">🥗</div>
                <div className="card-body text-center">
                  <h5 className="card-title">Nutrition Counseling</h5>
                  <p className="card-text text-muted">Expert guidance on nutrition principles and sustainable eating habits.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="feature-icon">💊</div>
                <div className="card-body text-center">
                  <h5 className="card-title">Supplement Advice</h5>
                  <p className="card-text text-muted">Recommendations for supplements that support your fitness goals safely.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="feature-icon">📱</div>
                <div className="card-body text-center">
                  <h5 className="card-title">App Support</h5>
                  <p className="card-text text-muted">Track your nutrition with our easy-to-use mobile application.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-dark">
        <div className="container text-center">
          <h2 className="section-title mb-4">Ready to Optimize Your Nutrition?</h2>
          <Link to="/pricing" className="btn btn-warning btn-lg">Choose a Plan</Link>
        </div>
      </section>
    </>
  )
}

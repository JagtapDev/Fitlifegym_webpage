import { Link } from 'react-router-dom'

export default function KidsTeensFitness() {
  return (
    <>
      <section className="py-5 bg-dark">
        <div className="container">
          <h1 className="section-title">Kids & Teens Fitness</h1>
          <p className="section-subtitle">Building healthy habits and strong bodies for the next generation</p>

          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="text-warning mb-3">Youth Fitness Programs</h2>
              <p className="lead">We believe fitness should start young! Our programs are designed specifically for children and teenagers to develop healthy habits, build strength, and improve confidence.</p>
              <ul className="list-unstyled mb-4">
                <li className="mb-2">✓ Age-appropriate training</li>
                <li className="mb-2">✓ Fun and engaging activities</li>
                <li className="mb-2">✓ Certified youth trainers</li>
                <li className="mb-2">✓ Social interaction and teamwork</li>
                <li className="mb-2">✓ Healthy lifestyle education</li>
              </ul>
              <Link to="/contact" className="btn btn-warning btn-lg">Enroll Your Child</Link>
            </div>
            <div className="col-md-6">
              <div style={{ fontSize: '5rem', textAlign: 'center' }}>👦👧</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="section-title">Our Programs</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card">
                <div className="feature-icon">🎾</div>
                <div className="card-body text-center">
                  <h5 className="card-title">Ages 6-9</h5>
                  <p className="card-text text-muted">Introduction to fitness through games and fun activities. Focus on coordination and basic fitness.</p>
                  <Link to="/contact" className="btn btn-warning btn-sm">Learn More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="feature-icon">⚽</div>
                <div className="card-body text-center">
                  <h5 className="card-title">Ages 10-13</h5>
                  <p className="card-text text-muted">Youth fitness class focusing on strength building and sports skills development.</p>
                  <Link to="/contact" className="btn btn-warning btn-sm">Learn More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="feature-icon">🏋️</div>
                <div className="card-body text-center">
                  <h5 className="card-title">Ages 14-18</h5>
                  <p className="card-text text-muted">Teen fitness program with strength training and athletic conditioning.</p>
                  <Link to="/contact" className="btn btn-warning btn-sm">Learn More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-dark">
        <div className="container">
          <h2 className="section-title">Why Youth Fitness?</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-warning">Health Benefits</h5>
                  <ul className="list-unstyled">
                    <li className="mb-2">• Stronger bones and muscles</li>
                    <li className="mb-2">• Better cardiovascular health</li>
                    <li className="mb-2">• Improved flexibility</li>
                    <li className="mb-2">• Healthier weight management</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-warning">Life Skills</h5>
                  <ul className="list-unstyled">
                    <li className="mb-2">• Confidence building</li>
                    <li className="mb-2">• Discipline and goal-setting</li>
                    <li className="mb-2">• Teamwork and social skills</li>
                    <li className="mb-2">• Mental health improvement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container text-center">
          <h2 className="section-title mb-4">Ready to Get Your Kids Active?</h2>
          <p className="lead mb-4">Schedule a free consultation today!</p>
          <Link to="/contact" className="btn btn-warning btn-lg">Get Started</Link>
        </div>
      </section>
    </>
  )
}

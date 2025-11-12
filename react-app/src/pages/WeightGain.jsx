import { Link } from 'react-router-dom'

export default function WeightGain() {
  const gainImg = '/img/gain6.png'
  return (
    <>
      <section className="py-5 bg-dark">
        <div className="container">
          <h1 className="section-title">Weight Gain Programs</h1>
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={gainImg} alt="Weight Gain" className="img-fluid rounded-3" style={{ border: '3px solid #ffc107' }} />
            </div>
            <div className="col-md-6">
              <h2 className="text-warning mb-3">Build Muscle, Gain Strength</h2>
              <p className="lead">Our weight gain programs are designed for those looking to build muscle mass, increase strength, and improve overall body composition.</p>
              <ul className="list-unstyled mb-4">
                <li className="mb-2">✓ Strength training programs</li>
                <li className="mb-2">✓ High-calorie meal plans</li>
                <li className="mb-2">✓ Protein optimization</li>
                <li className="mb-2">✓ Recovery and supplementation guidance</li>
                <li className="mb-2">✓ Regular progress assessments</li>
              </ul>
              <Link to="/contact" className="btn btn-warning btn-lg">Get Started Today</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="section-title">Muscle Building Strategy</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card">
                <div className="feature-icon">💪</div>
                <div className="card-body text-center">
                  <h5 className="card-title">Progressive Overload</h5>
                  <p className="card-text text-muted">Gradually increase weight and intensity to continuously challenge your muscles.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="feature-icon">🍗</div>
                <div className="card-body text-center">
                  <h5 className="card-title">High-Protein Diet</h5>
                  <p className="card-text text-muted">Optimize protein intake to support muscle growth and recovery.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="feature-icon">😴</div>
                <div className="card-body text-center">
                  <h5 className="card-title">Recovery Focus</h5>
                  <p className="card-text text-muted">Adequate rest and recovery are crucial for muscle development.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="feature-icon">🔬</div>
                <div className="card-body text-center">
                  <h5 className="card-title">Science-Based</h5>
                  <p className="card-text text-muted">Programs designed using latest sports science and research.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-dark">
        <div className="container text-center">
          <h2 className="section-title mb-4">Transform Your Physique</h2>
          <p className="lead mb-4">Gain 10-20 pounds of lean muscle in 16 weeks with our proven program!</p>
          <Link to="/pricing" className="btn btn-warning btn-lg">View Plans</Link>
        </div>
      </section>
    </>
  )
}

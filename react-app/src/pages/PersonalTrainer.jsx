import { Link } from 'react-router-dom'

export default function PersonalTrainer() {
  const trainers = [
    {
      name: 'John Smith',
      specialty: 'Strength & Conditioning',
      bio: 'NASM Certified Personal Trainer with 10+ years of experience'
    },
    {
      name: 'Sarah Johnson',
      specialty: 'Weight Loss & Cardio',
      bio: 'ACE Certified with expertise in transformation programs'
    },
    {
      name: 'Mike Williams',
      specialty: 'Bodybuilding & Muscle Gain',
      bio: 'IFBB Pro Coach with championship experience'
    }
  ]

  return (
    <>
      <section className="py-5 bg-dark">
        <div className="container">
          <h1 className="section-title">Personal Training</h1>
          <p className="section-subtitle">One-on-one coaching from certified professionals</p>
          
          <div className="row align-items-center mb-5">
            <div className="col-md-6">
              <h2 className="text-warning mb-3">Your Dedicated Coach</h2>
              <p className="lead">Get personalized attention and customized training programs designed specifically for your goals.</p>
              <ul className="list-unstyled mb-4">
                <li className="mb-2">✓ Custom workout plans</li>
                <li className="mb-2">✓ Form correction and technique</li>
                <li className="mb-2">✓ Motivation and accountability</li>
                <li className="mb-2">✓ Regular progress assessments</li>
                <li className="mb-2">✓ Flexible scheduling</li>
              </ul>
              <Link to="/contact" className="btn btn-warning btn-lg">Book a Session</Link>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-warning">Session Options</h5>
                  <ul className="list-unstyled">
                    <li className="mb-2">• One-on-one sessions</li>
                    <li className="mb-2">• Small group training</li>
                    <li className="mb-2">• Virtual coaching</li>
                    <li className="mb-2">• Package discounts</li>
                    <li className="mb-2">• Goal-oriented programs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="section-title">Meet Our Trainers</h2>
          <div className="row g-4">
            {trainers.map((trainer, index) => (
              <div key={index} className="col-md-4">
                <div className="coach-card">
                  <div style={{ width: '200px', height: '200px', margin: '0 auto', backgroundColor: '#333', borderRadius: '1rem', border: '2px solid #FF6B35', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '3rem' }}>👨‍🏫</span>
                  </div>
                  <h5 className="mt-3">{trainer.name}</h5>
                  <p className="text-warning" style={{ fontWeight: 'bold' }}>{trainer.specialty}</p>
                  <p className="text-muted">{trainer.bio}</p>
                  <Link to="/contact" className="btn btn-warning btn-sm">Book Session</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-dark">
        <div className="container">
          <h2 className="section-title">Training Packages</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title text-warning">Starter</h5>
                  <h3 className="text-warning mb-3">$150</h3>
                  <p className="card-text">5 Sessions</p>
                  <ul className="list-unstyled mb-3">
                    <li className="mb-2">✓ Assessment & Goal Setting</li>
                    <li className="mb-2">✓ Customized Workout</li>
                    <li className="mb-2">✓ Form Correction</li>
                  </ul>
                  <Link to="/contact" className="btn btn-warning btn-sm">Get Started</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center" style={{ border: '3px solid #FF6B35' }}>
                <div className="card-body">
                  <h5 className="card-title text-warning">Popular</h5>
                  <h3 className="text-warning mb-3">$280</h3>
                  <p className="card-text">10 Sessions</p>
                  <ul className="list-unstyled mb-3">
                    <li className="mb-2">✓ Everything in Starter</li>
                    <li className="mb-2">✓ Monthly Progress Review</li>
                    <li className="mb-2">✓ Nutrition Guidance</li>
                  </ul>
                  <Link to="/contact" className="btn btn-warning btn-sm">Get Started</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title text-warning">Premium</h5>
                  <h3 className="text-warning mb-3">$500</h3>
                  <p className="card-text">20 Sessions</p>
                  <ul className="list-unstyled mb-3">
                    <li className="mb-2">✓ Everything in Popular</li>
                    <li className="mb-2">✓ Video Support</li>
                    <li className="mb-2">✓ Priority Booking</li>
                  </ul>
                  <Link to="/contact" className="btn btn-warning btn-sm">Get Started</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

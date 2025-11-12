import { Link } from 'react-router-dom'

export default function GroupClasses() {
  const classes = [
    {
      name: 'Yoga',
      emoji: '🧘',
      time: 'Mon, Wed, Fri - 6:00 AM & 5:00 PM',
      description: 'Improve flexibility, balance, and mental clarity',
      duration: '60 minutes'
    },
    {
      name: 'HIIT Training',
      emoji: '⚡',
      time: 'Tue, Thu, Sat - 7:00 AM & 6:00 PM',
      description: 'High-intensity interval training for maximum calorie burn',
      duration: '45 minutes'
    },
    {
      name: 'Spinning',
      emoji: '🚴',
      time: 'Mon, Wed, Fri - 7:00 AM & 6:00 PM',
      description: 'Indoor cycling class with energetic music and motivation',
      duration: '55 minutes'
    },
    {
      name: 'Boxing',
      emoji: '🥊',
      time: 'Tue, Thu - 6:30 PM',
      description: 'Learn boxing techniques and get a full-body workout',
      duration: '50 minutes'
    },
    {
      name: 'Pilates',
      emoji: '🤸',
      time: 'Wed, Sat - 8:00 AM & 4:00 PM',
      description: 'Core strengthening and body conditioning',
      duration: '50 minutes'
    },
    {
      name: 'CrossFit',
      emoji: '🏋️',
      time: 'Mon-Sat - Multiple times',
      description: 'Functional fitness and strength training',
      duration: '60 minutes'
    }
  ]

  return (
    <>
      <section className="py-5 bg-dark">
        <div className="container">
          <h1 className="section-title">Group Classes</h1>
          <p className="section-subtitle">Join our community fitness classes and achieve your goals together</p>

          <div className="row g-4">
            {classes.map((cls, index) => (
              <div key={index} className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{cls.emoji}</div>
                    <h5 className="card-title text-warning">{cls.name}</h5>
                    <p className="text-muted mb-2"><strong>Time:</strong> {cls.time}</p>
                    <p className="text-muted mb-2"><strong>Duration:</strong> {cls.duration}</p>
                    <p className="card-text text-muted mb-3">{cls.description}</p>
                    <Link to="/contact" className="btn btn-warning btn-sm">Join Class</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="section-title">Class Benefits</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card text-center">
                <div className="feature-icon">👥</div>
                <div className="card-body">
                  <h5 className="card-title">Community</h5>
                  <p className="card-text text-muted">Train with like-minded individuals and build lasting friendships.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center">
                <div className="feature-icon">💪</div>
                <div className="card-body">
                  <h5 className="card-title">Motivation</h5>
                  <p className="card-text text-muted">Group energy and instructor motivation keep you pushing harder.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center">
                <div className="feature-icon">🎯</div>
                <div className="card-body">
                  <h5 className="card-title">Structure</h5>
                  <p className="card-text text-muted">Guided workouts ensure proper form and maximum results.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-dark">
        <div className="container text-center">
          <h2 className="section-title mb-4">Ready to Join a Class?</h2>
          <p className="lead mb-4">First class is FREE! No obligation.</p>
          <Link to="/contact" className="btn btn-warning btn-lg">Schedule Your Free Class</Link>
        </div>
      </section>
    </>
  )
}

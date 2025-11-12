import { Link } from 'react-router-dom'

export default function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: 49,
      period: 'month',
      features: [
        'Gym access during off-peak hours',
        'Access to group classes',
        'Locker room and shower facilities',
        'Email support',
        'Monthly fitness assessment'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: 99,
      period: 'month',
      features: [
        '24/7 Gym access',
        'Unlimited group classes',
        '4 personal training sessions',
        'Nutrition consultation (monthly)',
        'Priority support',
        'Free guest passes (2/month)',
        'Progress tracking app'
      ],
      popular: true
    },
    {
      name: 'Elite',
      price: 199,
      period: 'month',
      features: [
        'Everything in Pro',
        'Unlimited personal training',
        'Nutrition coaching (bi-weekly)',
        'Recovery services (massage, sauna)',
        'VIP lounge access',
        'Priority class booking',
        'Customized workout program',
        'Monthly body composition analysis'
      ],
      popular: false
    }
  ]

  return (
    <>
      <section className="py-5 bg-dark">
        <div className="container">
          <h1 className="section-title">Pricing Plans</h1>
          <p className="section-subtitle">Choose the perfect plan for your fitness journey</p>

          <div className="row g-4">
            {plans.map((plan, index) => (
              <div key={index} className="col-md-4">
                <div className={`card text-center ${plan.popular ? '' : ''}`} style={plan.popular ? { border: '3px solid #ffc107' } : {}}>
                  {plan.popular && <div style={{ background: '#ffc107', color: '#000', padding: '0.5rem', fontSize: '0.9rem', fontWeight: 'bold' }}>MOST POPULAR</div>}
                  <div className="card-body">
                    <h5 className="card-title text-warning">{plan.name}</h5>
                    <h2 className="text-warning mb-1">${plan.price}</h2>
                    <p className="text-muted">per {plan.period}</p>
                    <ul className="list-unstyled mt-4 mb-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="mb-2 text-muted">✓ {feature}</li>
                      ))}
                    </ul>
                    <Link to="/contact" className="btn btn-warning w-100">Get Started</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title text-warning">Can I change my plan?</h5>
                  <p className="card-text text-muted">Yes! You can upgrade or downgrade your plan anytime with your next billing cycle.</p>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title text-warning">Is there a contract?</h5>
                  <p className="card-text text-muted">No long-term contracts. Cancel anytime with 30 days notice.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title text-warning">Do you offer family plans?</h5>
                  <p className="card-text text-muted">Yes! Family plans with special discounts are available. Contact us for details.</p>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title text-warning">What about free trial?</h5>
                  <p className="card-text text-muted">Get a free 7-day trial to experience all our facilities and classes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-dark">
        <div className="container text-center">
          <h2 className="section-title mb-4">Ready to Join?</h2>
          <p className="lead mb-4">Start your free 7-day trial today, no credit card required!</p>
          <Link to="/contact" className="btn btn-warning btn-lg">Claim Your Free Trial</Link>
        </div>
      </section>
    </>
  )
}

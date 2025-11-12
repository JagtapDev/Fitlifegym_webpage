import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function TrainingPackages() {
  const [selectedPackage, setSelectedPackage] = useState(null)
  const [expandedSection, setExpandedSection] = useState(null)

  const packages = [
    {
      id: 1,
      name: 'Starter Package',
      duration: '1 Month',
      priceINR: '₹4,999',
      priceUSD: '$60',
      color: 'info',
      features: [
        '4 Gym Sessions/Week',
        'Basic Fitness Assessment',
        'Personalized Workout Plan',
        'Group Classes Access',
        'Email Support',
        'Fitness Tracking App'
      ],
      description: 'Perfect for beginners starting their fitness journey',
      best: 'Best for: Beginners'
    },
    {
      id: 2,
      name: 'Professional Package',
      duration: '3 Months',
      priceINR: '₹12,999',
      priceUSD: '$155',
      color: 'warning',
      features: [
        '5 Gym Sessions/Week',
        'Advanced Fitness Assessment',
        'Customized Workout Plan',
        'All Group Classes',
        '2 Personal Training Sessions',
        'Nutrition Consultation (1)',
        'Monthly Progress Check-up',
        'Priority Email & WhatsApp Support'
      ],
      description: 'Ideal for those committed to serious results',
      best: 'Best for: Committed Fitness Enthusiasts'
    },
    {
      id: 3,
      name: 'Elite Package',
      duration: '6 Months',
      priceINR: '₹21,999',
      priceUSD: '$260',
      color: 'success',
      features: [
        'Unlimited Gym Access',
        'Weekly Personal Training (4 sessions)',
        'Complete Body Transformation Plan',
        'Full Nutrition Guidance',
        'Bi-weekly Progress Assessment',
        '24/7 Priority Support',
        'Performance Tracking',
        'Injury Prevention & Recovery',
        'Mental Health & Wellness Coaching'
      ],
      description: 'Complete transformation package with full support',
      best: 'Best for: Serious Transformation'
    },
    {
      id: 4,
      name: 'Premium Package',
      duration: '1 Year',
      priceINR: '₹39,999',
      priceUSD: '$480',
      color: 'danger',
      features: [
        'Unlimited Gym Access + Home Workouts',
        'Twice-Weekly Personal Training',
        'Advanced Body Composition Analysis',
        'Complete Nutrition Program',
        'Weekly Check-ups',
        '24/7 VIP Support',
        'Wellness & Recovery Programs',
        'Advanced Supplement Consultation',
        'Group Class Premium Access',
        'Exclusive Premium Member Events',
        'Lifetime Diet Adjustment Support'
      ],
      description: 'Ultimate fitness transformation and lifestyle change',
      best: 'Best for: Complete Life Transformation'
    }
  ]

  const strategies = [
    {
      id: 'muscle-building',
      title: '💪 MUSCLE BUILDING STRATEGY',
      icon: '🏋️',
      content: [
        {
          subtitle: 'Training Protocol',
          points: [
            '• 4-5 day split workout routine (Chest, Back, Shoulders, Legs)',
            '• Focus on compound exercises: Deadlifts, Squats, Bench Press, Rows',
            '• 8-12 reps per set for hypertrophy',
            '• Progressive overload every 2 weeks',
            '• Rest days: 48-72 hours between same muscle groups'
          ]
        },
        {
          subtitle: 'Nutrition for Muscle Growth',
          points: [
            '• Protein: 1.6-2.2g per kg of body weight daily',
            '• Caloric surplus: 300-500 calories above maintenance',
            '• Carbs: 4-6g per kg for sustained energy',
            '• Healthy fats: 0.5-1.5g per kg',
            '• Meal timing: Protein within 2 hours post-workout',
            '• Hydration: 3-4 liters of water daily'
          ]
        },
        {
          subtitle: 'Sample Muscle Building Diet (Daily)',
          points: [
            '• Breakfast: 4 eggs + Oatmeal (100g) + Banana + Almonds',
            '• Mid-morning: Protein shake (30g) + Apple',
            '• Lunch: Chicken breast (200g) + Rice (150g) + Broccoli',
            '• Pre-workout: Banana + Peanut butter',
            '• Post-workout: Protein shake + Glucose',
            '• Dinner: Fish/Mutton (250g) + Sweet potato + Salad',
            '• Before bed: Cottage cheese + Berries'
          ]
        },
        {
          subtitle: 'Recovery & Supplementation',
          points: [
            '• Sleep: 7-9 hours minimum',
            '• Supplements: Whey Protein, Creatine, Multivitamins',
            '• Stretching & foam rolling: 10 mins daily',
            '• Active recovery days: Light cardio or yoga',
            '• Regular progress tracking'
          ]
        }
      ]
    },
    {
      id: 'weight-loss',
      title: '⚖️ WEIGHT LOSS APPROACH',
      icon: '📉',
      content: [
        {
          subtitle: 'Cardio & Training Protocol',
          points: [
            '• 4-5 days/week cardio (30-45 mins): Running, Cycling, Swimming',
            '• 2-3 days/week strength training (lighter weights, high reps)',
            '• HIIT workouts: 20-30 mins, 2x per week',
            '• Walking: 10,000+ steps daily',
            '• Rest days: Essential for recovery'
          ]
        },
        {
          subtitle: 'Nutrition for Fat Loss',
          points: [
            '• Caloric deficit: 300-500 calories below maintenance',
            '• Protein: 1.8-2.2g per kg (preserve muscle)',
            '• Carbs: Lower to 2-3g per kg (mainly from veggies)',
            '• Fats: 0.5-1g per kg (focus on healthy sources)',
            '• Fiber: 25-35g daily (keeps you full)',
            '• No crash diets - sustainable approach'
          ]
        },
        {
          subtitle: 'Sample Weight Loss Diet (Daily)',
          points: [
            '• Breakfast: 3 eggs + Whole wheat toast (2 slices) + Green tea',
            '• Mid-morning: Green apple + Almonds (10 pieces)',
            '• Lunch: Grilled chicken (150g) + Brown rice (80g) + Vegetables',
            '• Afternoon: Greek yogurt (100g) + Honey',
            '• Pre-workout: Banana (small)',
            '• Dinner: Fish/Tofu (180g) + Salad + Lentil soup',
            '• Hydration: 3-4 liters water + 2-3 cups green tea'
          ]
        },
        {
          subtitle: 'Lifestyle Changes',
          points: [
            '• Sleep: 7-8 hours (affects hunger hormones)',
            '• Stress management: Meditation, yoga',
            '• Meal prep: Plan meals for the week',
            '• Track calories: Use fitness apps',
            '• Weekly weigh-in: Track progress',
            '• Avoid: Sugary drinks, processed foods, late-night eating'
          ]
        }
      ]
    },
    {
      id: 'balanced',
      title: '🎯 BALANCED FITNESS APPROACH',
      icon: '⚡',
      content: [
        {
          subtitle: 'Training Split',
          points: [
            '• 3 days: Strength training (compound movements)',
            '• 2 days: Cardio/HIIT sessions',
            '• 2 days: Rest or active recovery (yoga, stretching)',
            '• Focus: Building strength while maintaining lean physique'
          ]
        },
        {
          subtitle: 'Balanced Nutrition',
          points: [
            '• Protein: 1.6-1.8g per kg',
            '• Slight caloric deficit or maintenance calories',
            '• Carbs: 3-4g per kg (timed around workouts)',
            '• Healthy fats: 0.7-1g per kg',
            '• 80/20 rule: 80% clean eating, 20% flexibility'
          ]
        },
        {
          subtitle: 'Wellness Components',
          points: [
            '• Meditation: 10-15 mins daily',
            '• Sleep: Consistent 8-hour schedule',
            '• Flexibility work: Yoga 2x per week',
            '• Social fitness: Group classes for motivation',
            '• Mindful eating: No skipping meals'
          ]
        }
      ]
    }
  ]

  const additionalServices = [
    {
      name: 'One-Time Consultation',
      price: '₹1,999',
      duration: '1 Hour',
      includes: ['Fitness Assessment', 'Goal Setting', 'Customized Plan']
    },
    {
      name: 'Monthly Nutrition Plan',
      price: '₹3,999',
      duration: 'Customized',
      includes: ['Detailed Meal Plan', 'Calorie Calculation', 'Supplement Advice']
    },
    {
      name: 'Personal Training (Per Session)',
      price: '₹1,500',
      duration: '1 Hour',
      includes: ['One-on-One Training', 'Form Correction', 'Progress Tracking']
    },
    {
      name: 'Online Coaching Program',
      price: '₹6,999',
      duration: '1 Month',
      includes: ['Workout Plans', 'Diet Guidance', 'Video Check-ins']
    }
  ]

  return (
    <div className="training-packages py-5">
      {/* Hero Section */}
      <section className="hero-section bg-dark text-warning py-5 mb-5">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">🏆 Training Packages & Programs</h1>
          <p className="lead">Transform Your Body, Transform Your Life</p>
          <p className="fs-5">Choose the perfect package aligned with your fitness goals and budget</p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="packages-section container mb-5">
        <h2 className="text-center mb-5 fw-bold text-warning">OUR PACKAGES</h2>
        <div className="row g-4">
          {packages.map((pkg) => (
            <div key={pkg.id} className="col-lg-6 col-xl-6">
              <div className={`card h-100 border-warning package-card`}>
                <div className={`card-header bg-${pkg.color} text-white py-3`}>
                  <h3 className="mb-1">{pkg.name}</h3>
                  <p className="mb-0 fs-6">{pkg.duration}</p>
                </div>
                <div className="card-body">
                  <div className="price-display mb-4">
                    <h2 className="text-warning">{pkg.priceINR}</h2>
                    <p className="text-muted">{pkg.priceUSD} USD</p>
                  </div>
                  <p className="card-text text-muted mb-3">{pkg.description}</p>
                  <h5 className="text-warning mb-3">{pkg.best}</h5>
                  <ul className="list-unstyled">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`btn btn-${pkg.color} w-100 mt-4`}
                    onClick={() => setSelectedPackage(pkg.id)}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Strategies Section */}
      <section className="strategies-section container mb-5">
        <h2 className="text-center mb-5 fw-bold text-warning">💡 TRAINING STRATEGIES & GUIDANCE</h2>
        <div className="row g-4">
          {strategies.map((strategy) => (
            <div key={strategy.id} className="col-lg-12">
              <div className="card border-warning">
                <div className="card-header bg-warning bg-opacity-25 p-3">
                  <button
                    className="btn btn-link w-100 text-start text-warning fw-bold fs-5"
                    onClick={() => setExpandedSection(
                      expandedSection === strategy.id ? null : strategy.id
                    )}
                  >
                    <span className="me-2">{strategy.icon}</span>
                    {strategy.title}
                    <i className={`bi bi-chevron-down float-end transition ${
                      expandedSection === strategy.id ? 'rotate-180' : ''
                    }`}></i>
                  </button>
                </div>
                {expandedSection === strategy.id && (
                  <div className="card-body bg-dark">
                    {strategy.content.map((section, idx) => (
                      <div key={idx} className="mb-4">
                        <h5 className="text-warning mb-3 fw-bold">
                          {section.subtitle}
                        </h5>
                        <div className="ps-3 border-start border-warning">
                          {section.points.map((point, pointIdx) => (
                            <p key={pointIdx} className="text-light mb-2 fs-6">
                              {point}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="additional-services container mb-5">
        <h2 className="text-center mb-5 fw-bold text-warning">ADD-ON SERVICES</h2>
        <div className="row g-4">
          {additionalServices.map((service, idx) => (
            <div key={idx} className="col-md-6 col-lg-3">
              <div className="card border-warning h-100 text-center">
                <div className="card-body">
                  <h5 className="card-title text-warning mb-3">{service.name}</h5>
                  <p className="text-muted mb-2">{service.duration}</p>
                  <h3 className="text-warning mb-4">{service.price}</h3>
                  <ul className="list-unstyled mb-4">
                    {service.includes.map((item, i) => (
                      <li key={i} className="mb-2 text-light">
                        <i className="bi bi-star-fill text-warning me-2"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button className="btn btn-outline-warning w-100">Add to Package</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section bg-dark py-5 mb-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold text-warning">WHY CHOOSE FITLIFE GYM?</h2>
          <div className="row g-4">
            <div className="col-md-4 text-center">
              <div className="feature-icon mb-3">
                <i className="bi bi-person-badge fs-1 text-warning"></i>
              </div>
              <h5 className="text-warning mb-3">Certified Trainers</h5>
              <p className="text-light">International certified fitness professionals with 5-15 years experience</p>
            </div>
            <div className="col-md-4 text-center">
              <div className="feature-icon mb-3">
                <i className="bi bi-graph-up fs-1 text-warning"></i>
              </div>
              <h5 className="text-warning mb-3">Proven Results</h5>
              <p className="text-light">1000+ successful transformations with documented progress</p>
            </div>
            <div className="col-md-4 text-center">
              <div className="feature-icon mb-3">
                <i className="bi bi-tools fs-1 text-warning"></i>
              </div>
              <h5 className="text-warning mb-3">Modern Equipment</h5>
              <p className="text-light">Latest gym equipment and technology for optimal performance</p>
            </div>
            <div className="col-md-4 text-center">
              <div className="feature-icon mb-3">
                <i className="bi bi-heart-pulse fs-1 text-warning"></i>
              </div>
              <h5 className="text-warning mb-3">Holistic Approach</h5>
              <p className="text-light">Combines fitness, nutrition, mental health, and wellness</p>
            </div>
            <div className="col-md-4 text-center">
              <div className="feature-icon mb-3">
                <i className="bi bi-people fs-1 text-warning"></i>
              </div>
              <h5 className="text-warning mb-3">Community Support</h5>
              <p className="text-light">Join 5000+ members in our supportive fitness community</p>
            </div>
            <div className="col-md-4 text-center">
              <div className="feature-icon mb-3">
                <i className="bi bi-calendar-check fs-1 text-warning"></i>
              </div>
              <h5 className="text-warning mb-3">Flexible Timings</h5>
              <p className="text-light">Early morning to late evening slots to fit your schedule</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section container mb-5">
        <h2 className="text-center mb-5 fw-bold text-warning">FREQUENTLY ASKED QUESTIONS</h2>
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item border-warning">
            <h2 className="accordion-header">
              <button className="accordion-button bg-dark text-warning" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                Can I change packages after joining?
              </button>
            </h2>
            <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body bg-dark text-light">
                Yes! You can upgrade at any time. We'll adjust your billing accordingly. Downgrading is also possible with 15 days notice.
              </div>
            </div>
          </div>
          <div className="accordion-item border-warning">
            <h2 className="accordion-header">
              <button className="accordion-button bg-dark text-warning collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                What if I have injuries or health issues?
              </button>
            </h2>
            <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body bg-dark text-light">
                Our trainers are trained in rehabilitation. We'll customize your program and work with your doctor if needed. See our Rehabilitation program for details.
              </div>
            </div>
          </div>
          <div className="accordion-item border-warning">
            <h2 className="accordion-header">
              <button className="accordion-button bg-dark text-warning collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                Do you offer refunds?
              </button>
            </h2>
            <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body bg-dark text-light">
                30-day money-back guarantee if you're not satisfied. After that, fees are non-refundable but can be transferred to family.
              </div>
            </div>
          </div>
          <div className="accordion-item border-warning">
            <h2 className="accordion-header">
              <button className="accordion-button bg-dark text-warning collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                How do I track my progress?
              </button>
            </h2>
            <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body bg-dark text-light">
                Monthly assessments, body composition analysis, strength benchmarks, and mobile app tracking. Regular photo documentation and measurements are included.
              </div>
            </div>
          </div>
          <div className="accordion-item border-warning">
            <h2 className="accordion-header">
              <button className="accordion-button bg-dark text-warning collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
                Can I bring a friend to try?
              </button>
            </h2>
            <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body bg-dark text-light">
                Absolutely! Free trial class included with membership. Refer a friend and get ₹2,000 credits toward your next payment.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section bg-warning bg-opacity-25 py-5 mb-5">
        <div className="container text-center">
          <h2 className="text-warning mb-4">Ready to Transform Your Life?</h2>
          <p className="fs-5 mb-4 text-light">Start your journey today with our expert trainers and proven programs</p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Link to="/contact" className="btn btn-warning btn-lg">
              Join Now
            </Link>
            <button className="btn btn-outline-warning btn-lg">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Comparison Table */}
      <section className="comparison-section container mb-5">
        <h2 className="text-center mb-5 fw-bold text-warning">PACKAGE COMPARISON</h2>
        <div className="table-responsive">
          <table className="table table-dark table-bordered">
            <thead>
              <tr className="table-warning">
                <th>Feature</th>
                <th>Starter (₹4,999)</th>
                <th>Professional (₹12,999)</th>
                <th>Elite (₹21,999)</th>
                <th>Premium (₹39,999)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-warning fw-bold">Gym Access</td>
                <td>4 days/week</td>
                <td>5 days/week</td>
                <td>Unlimited</td>
                <td>Unlimited + Home</td>
              </tr>
              <tr>
                <td className="text-warning fw-bold">Personal Training</td>
                <td>None</td>
                <td>2 sessions</td>
                <td>4 sessions/week</td>
                <td>Unlimited + 24/7</td>
              </tr>
              <tr>
                <td className="text-warning fw-bold">Nutrition Plan</td>
                <td>Basic</td>
                <td>1 consultation</td>
                <td>Full guidance</td>
                <td>Complete + Supplements</td>
              </tr>
              <tr>
                <td className="text-warning fw-bold">Progress Tracking</td>
                <td>App only</td>
                <td>Monthly</td>
                <td>Bi-weekly</td>
                <td>Weekly + Analytics</td>
              </tr>
              <tr>
                <td className="text-warning fw-bold">Support</td>
                <td>Email</td>
                <td>Email + WhatsApp</td>
                <td>24/7 Priority</td>
                <td>24/7 VIP</td>
              </tr>
              <tr>
                <td className="text-warning fw-bold">Duration</td>
                <td>1 Month</td>
                <td>3 Months</td>
                <td>6 Months</td>
                <td>1 Year</td>
              </tr>
              <tr>
                <td className="text-warning fw-bold">Price/Month</td>
                <td className="text-success">₹4,999</td>
                <td className="text-success">₹4,333</td>
                <td className="text-success">₹3,667</td>
                <td className="text-success">₹3,333 (Best Value)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

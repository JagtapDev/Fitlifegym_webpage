import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'

export default function BmiCalculator() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [unit, setUnit] = useState('metric')
  const [bmi, setBmi] = useState(null)
  const [category, setCategory] = useState('')
  // sample historical BMI data (date ISO, bmi value)
  const [bmiHistory, setBmiHistory] = useState([
    { date: '2025-08-01', value: 28.4 },
    { date: '2025-09-01', value: 27.1 },
    { date: '2025-10-01', value: 25.8 }
  ])

  const calculateBMI = (e) => {
    e.preventDefault()
    
    if (!height || !weight) {
      alert('Please enter both height and weight')
      return
    }

    let bmiValue
    if (unit === 'metric') {
      const heightInMeters = height / 100
      bmiValue = weight / (heightInMeters * heightInMeters)
    } else {
      bmiValue = (weight / (height * height)) * 703
    }

    setBmi(bmiValue.toFixed(1))

    if (bmiValue < 18.5) {
      setCategory('Underweight')
    } else if (bmiValue < 25) {
      setCategory('Normal Weight')
    } else if (bmiValue < 30) {
      setCategory('Overweight')
    } else {
      setCategory('Obese')
    }
    
    // add to history (useful to show previous graph)
    try {
      const rounded = Number(bmiValue.toFixed(1))
      setBmiHistory((prev) => [
        ...prev,
        { date: new Date().toISOString().slice(0, 10), value: rounded }
      ])
    } catch (err) {
      // ignore
    }
  }

  const getBMIColor = () => {
    if (!category) return 'text-warning'
    if (category === 'Underweight') return 'text-info'
    if (category === 'Normal Weight') return 'text-success'
    if (category === 'Overweight') return 'text-warning'
    if (category === 'Obese') return 'text-danger'
  }

  return (
    <>
      <section className="py-5 bg-dark">
        <div className="container">
          <h1 className="section-title">BMI Calculator</h1>
          <p className="section-subtitle">Calculate your Body Mass Index and get personalized recommendations</p>

          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="card">
                <div className="card-body">
                  <form onSubmit={calculateBMI}>
                    <div className="mb-3">
                      <label className="form-label">Unit System</label>
                      <select 
                        className="form-select" 
                        value={unit} 
                        onChange={(e) => setUnit(e.target.value)}
                      >
                        <option value="metric">Metric (kg, cm)</option>
                        <option value="imperial">Imperial (lbs, inches)</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label className="form-label">
                        Height ({unit === 'metric' ? 'cm' : 'inches'})
                      </label>
                      <input 
                        type="number" 
                        className="form-control" 
                        placeholder="Enter your height"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">
                        Weight ({unit === 'metric' ? 'kg' : 'lbs'})
                      </label>
                      <input 
                        type="number" 
                        className="form-control" 
                        placeholder="Enter your weight"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                      />
                    </div>

                    <button type="submit" className="btn btn-warning w-100">Calculate BMI</button>
                  </form>

                  {bmi && (
                    <div className="mt-4">
                      <div className="text-center">
                        <h3 className={`${getBMIColor()} mb-2`}>BMI: {bmi}</h3>
                        <p className={`h5 ${getBMIColor()}`}>{category}</p>
                      </div>
                      {/* BMI History Chart */}
                      <div className="mt-4 bmi-history">
                        <h6 className="text-warning">BMI Progress (recent)</h6>
                        <div className="bmi-chart-wrap mt-2">
                          <svg viewBox="0 0 300 120" preserveAspectRatio="none" className="bmi-chart">
                            {/* background grid lines */}
                            <defs>
                              <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
                                <stop offset="0%" stopColor="#222" stopOpacity="0.6" />
                                <stop offset="100%" stopColor="#111" stopOpacity="0.4" />
                              </linearGradient>
                            </defs>
                            <rect x="0" y="0" width="300" height="120" fill="url(#grad)" rx="6" />
                            {/* horizontal lines */}
                            {[0, 25, 50, 75, 100].map((y, i) => (
                              <line key={i} x1="0" x2="300" y1={12 + i * 22} y2={12 + i * 22} stroke="#333" strokeWidth="0.5" />
                            ))}
                            {/* polyline points */}
                            <polyline
                              fill="none"
                              stroke="#ffc107"
                              strokeWidth="2"
                              points={(() => {
                                const data = bmiHistory.slice(-8)
                                if (data.length === 0) return ''
                                const max = Math.max(...data.map((d) => d.value)) + 2
                                const min = Math.min(...data.map((d) => d.value)) - 2
                                const range = Math.max(1, max - min)
                                return data.map((d, i) => {
                                  const x = (i / (data.length - 1 || 1)) * 280 + 10
                                  const y = 100 - ((d.value - min) / range) * 80 + 10
                                  return `${x},${y}`
                                }).join(' ')
                              })()}
                            />
                            {/* circles */}
                            {bmiHistory.slice(-8).map((d, i, arr) => {
                              const max = Math.max(...arr.map((x) => x.value)) + 2
                              const min = Math.min(...arr.map((x) => x.value)) - 2
                              const range = Math.max(1, max - min)
                              const x = (i / (arr.length - 1 || 1)) * 280 + 10
                              const y = 100 - ((d.value - min) / range) * 80 + 10
                              return <circle key={i} cx={x} cy={y} r="3" fill="#ffc107" />
                            })}
                          </svg>
                        </div>
                        <div className="small text-muted mt-2">
                          {bmiHistory.slice(-8).map((d, i) => (
                            <span key={i} className="me-3">{d.date}: {d.value}</span>
                          ))}
                        </div>
                      </div>
                      <div className="mt-4">
                        <h5 className="text-warning">BMI Categories:</h5>
                        <ul className="list-unstyled small">
                          <li className="mb-1"><span className="text-info">Underweight:</span> Less than 18.5</li>
                          <li className="mb-1"><span className="text-success">Normal weight:</span> 18.5 - 24.9</li>
                          <li className="mb-1"><span className="text-warning">Overweight:</span> 25 - 29.9</li>
                          <li className="mb-1"><span className="text-danger">Obese:</span> 30 and above</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="section-title">Next Steps</h2>
          <div className="row g-4">
            <div className="col-md-3">
              <div className="card text-center">
                <div className="feature-icon">📊</div>
                <div className="card-body">
                  <h5 className="card-title">Assess Results</h5>
                  <p className="card-text text-muted">Understand what your BMI means for your health.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center">
                <div className="feature-icon">🎯</div>
                <div className="card-body">
                  <h5 className="card-title">Set Goals</h5>
                  <p className="card-text text-muted">Define achievable fitness and health goals.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center">
                <div className="feature-icon">🏋️</div>
                <div className="card-body">
                  <h5 className="card-title">Get Training</h5>
                  <p className="card-text text-muted">Start a personalized training program.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center">
                <div className="feature-icon">📈</div>
                <div className="card-body">
                  <h5 className="card-title">Track Progress</h5>
                  <p className="card-text text-muted">Monitor improvements over time.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <Link to="/contact" className="btn btn-warning btn-lg">Schedule a Consultation</Link>
          </div>
        </div>
      </section>

      {/* Video Resources Section */}
      <section className="py-5 bg-dark">
        <div className="container">
          <h2 className="section-title text-warning">Helpful Videos</h2>
          <p className="text-muted">Watch these short videos to learn about BMI, healthy weight strategies, and practical tips.</p>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="card border-warning h-100">
                <div className="card-body">
                  <h5 className="card-title text-warning">BMI & Healthy Weight (Video 1)</h5>
                  <div className="video-responsive">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/yBvJXMduo8k?si=4uv2e9P65eD69L0l"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card border-warning h-100">
                <div className="card-body">
                  <h5 className="card-title text-warning">Video 2 (Replace with your URL)</h5>
                  <div className="video-responsive">
                    {/* Placeholder iframe - replace the src with your second video URL when available */}
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/VIDEO_ID_HERE"
                      title="Second video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

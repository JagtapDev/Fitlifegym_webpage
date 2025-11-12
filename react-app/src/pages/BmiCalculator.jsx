import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function BmiCalculator() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [unit, setUnit] = useState('metric')
  const [bmi, setBmi] = useState(null)
  const [category, setCategory] = useState('')

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
    </>
  )
}

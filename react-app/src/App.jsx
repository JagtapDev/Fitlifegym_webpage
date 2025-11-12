import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import WeightLoss from './pages/WeightLoss'
import WeightGain from './pages/WeightGain'
import Nutrition from './pages/Nutrition'
import PersonalTrainer from './pages/PersonalTrainer'
import BmiCalculator from './pages/BmiCalculator'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import GroupClasses from './pages/GroupClasses'
import KidsTeensFitness from './pages/KidsTeensFitness'
import OnlineCoaching from './pages/OnlineCoaching'
import Rehabilitation from './pages/Rehabilitation'

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/weight-loss" element={<WeightLoss />} />
            <Route path="/weight-gain" element={<WeightGain />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/personal-trainer" element={<PersonalTrainer />} />
            <Route path="/bmi-calculator" element={<BmiCalculator />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/group-classes" element={<GroupClasses />} />
            <Route path="/kids-teens-fitness" element={<KidsTeensFitness />} />
            <Route path="/online-coaching" element={<OnlineCoaching />} />
            <Route path="/rehabilitation" element={<Rehabilitation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

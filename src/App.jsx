import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Portfolios from './pages/Portfolios';
function App() {
  return (
    <div className='bg-[#010314] px-6'>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolios' element={<Portfolios />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  )
}

export default App

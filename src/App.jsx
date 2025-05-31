import './App.css'
import LandingPage from './components/Pages/LandingPage'
import QuizPage from './components/Pages/QuizPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
 
  return (
   <>

    <Routes>
      <Route 
        path="/"
        element={<LandingPage />}
      />
      <Route path="/quiz" element={<QuizPage />} />
    </Routes>
 

   
   </>
  )
}

export default App

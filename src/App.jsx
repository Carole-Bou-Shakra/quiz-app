import React from 'react'
import Quiz from './Components/Quiz/Quiz'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm'

const App = () => {
  return (
    <>
      {/* <LoginForm/>
      <Quiz/> */}
      <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App

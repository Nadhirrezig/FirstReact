import { BrowserRouter as Router, Routes, Route ,Link } from 'react-router-dom'
import Header from './header'
import InputField from './inputfield'
import './App.css'
import Home from './home'
import Welcome from './welcome' 

function App() {

  return (
    <>
        <div>
          <Router>
            <nav>
              <Header title="Simple React Project" description="Testing How promts/Proprieties work"/>
              <h2>This is welcome page</h2>              
              <p>Click the button to route to inputfield</p>
              <Link to="/inputme" style={{margin: "10px",color:"red"}}>TestMEBitch</Link>
              <Link to="/welcome" style={{margin: "10px",color:"Blue"}}>lets Test Welcome</Link>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/welcome' element={<Welcome />}/>
              <Route path='/inputme' element={<InputField />}/>
            </Routes>
          </Router>
        </div>
    </>
  )
}

export default App

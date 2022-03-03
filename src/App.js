import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './views/Landing'
import Navbar from './components/Navbar'
import Register from './views/Register'
import Login from './views/Login'
import Home from './views/Home'

const App = () => {
  const [user, setUser] = useState(null)
  // const [messageAlerts, setMessageAlerts] = useState([]) 
  console.log(user)

  const clearUser = () => setUser(null)

  return (
    <div>
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} exact/>
          <Route path="/register" element={<Register setUser={setUser} exact/>}/>
          <Route path="/login" element={<Login setUser={setUser} exact/>}/>
          <Route path="/home" element={<Home user={user} exact/>}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;

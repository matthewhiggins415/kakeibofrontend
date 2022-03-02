import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './views/Landing'
import Navbar from './components/Navbar'
import Register from './views/Register'
import Login from './views/Login'

const App = () => {
  return (
    <div>
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;

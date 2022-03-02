import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './views/Landing'
import Navbar from './components/Navbar'
import Signup from './views/Signup'
import Signin from './views/Signin'

const App = () => {
  return (
    <div>
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/sign-up" element={<Signup />}/>
          <Route path="/sign-in" element={<Signin />}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;

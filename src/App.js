import React, {useState} from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Landing from './views/Landing'
import Navbar from './components/Navbar'
import Register from './views/Register'
import Login from './views/Login'
import Home from './views/Home'
import SignOut from './components/SignOut'
import AddExpense from './views/AddExpense'
import ExpenseDetails from './views/ExpenseDetails'
import { GlobalStyle } from './globalStyles'
import { AnimatePresence } from 'framer-motion';
import Data from './views/Data'

const App = () => {
  let location = useLocation();

  const [user, setUser] = useState(null)

  console.log(user)

  const clearUser = () => setUser(null)

  return (
    <div>
        <Navbar user={user}/>

        <AnimatePresence exitBeforeEnter>
        <Routes >
          <Route path="/" element={<Landing />} exact/>
          <Route path="/register" element={<Register setUser={setUser} exact/>}/>
          <Route path="/login" element={<Login setUser={setUser} exact/>}/>
          <Route path="/sign-out" element={<SignOut clearUser={clearUser} user={user}/>} exact/>
          <Route path="/home" element={<Home user={user}/>} exact/>
          <Route path="/add-expense" element={<AddExpense user={user}/>} exact/>
          <Route path="/expense/:id" element={<ExpenseDetails user={user}/>} exact/>
          <Route path="/data" element={<Data user={user}/>} exact/>
        </Routes>
        </AnimatePresence>


    <GlobalStyle/>
    </div>
  );
}

export default App;

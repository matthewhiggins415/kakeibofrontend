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
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  let location = useLocation();

  const [user, setUser] = useState(null)

  const clearUser = () => setUser(null)

  const notify = (message, type) => {
    if (type === "warning") {
      toast.warn(`${message}`)
    } else {
      toast.success(`${message}`)};
    }

  return (
    <div>
        <Navbar user={user}/>
        <ToastContainer position="top-left" autoClose={2000}/>
        <AnimatePresence exitBeforeEnter>
        <Routes >
          <Route path="/kakeibofrontend" element={<Landing />} />
          <Route path="/register" notify={notify} element={<Register setUser={setUser} exact/>}/>
          <Route path="/login" element={<Login setUser={setUser} notify={notify} exact/>}/>
          <Route path="/sign-out" element={<SignOut clearUser={clearUser} user={user} notify={notify}/>} exact/>
          <Route path="/home" element={<Home user={user} notify={notify}/>} exact/>
          <Route path="/add-expense" element={<AddExpense user={user} notify={notify}/>} exact/>
          <Route path="/expense/:id" element={<ExpenseDetails user={user} notify={notify}/>} exact/>
          <Route path="/data" element={<Data user={user}/>} exact/>
        </Routes>
        </AnimatePresence>
    <GlobalStyle/>
    </div>
  );
}

export default App;

import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import OtpInput from './Pages/Otp/Otp'

import { BrowserRouter , Routes , Route } from 'react-router-dom'

import './App.css'
import Signup from './Pages/Signup/Signup'
import Login from './Pages/Login/Login'

function App() {


  return (
    <>
   <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}/>
      
      <Route path='/contact' element = {<Contact/>}></Route>
     <Route path='/signup' element = {<Signup/>}/>
     <Route path = '/otp' element = {<OtpInput/>}/>
     <Route path = '/login' element = {<Login/>}/>
      
    </Routes>
    </BrowserRouter>
     </>
  
  )
}

export default App

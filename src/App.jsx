import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import OtpInput from './Pages/Otp/Otp'
import './App.css'
import Signup from './Pages/Signup/Signup'
import Login from './Pages/Login/Login'
import Airports from './Pages/Airports/Airports'
import About from './Pages/About/About'
import SubCategories from './Components/SubCategories/SubCategories'
import Cinema from './Pages/Cinema/Cinema'
import Digital from './Pages/Digital/Digital'
import Magazine from './Pages/Magazine/Magazine'
import NewsPaper from './Pages/Newspaper/Newspaper'
import Airplane from './Pages/Airplane/Airplance'
import Outdoor from './Pages/Outdoor/Outdoor'
import Television from './Pages/Television/Television'
import RichTextEditor from './Pages/richText/Richtext'
import Btl from './Pages/Btl/Btl'
import Radio from './Pages/Radio/Radio'
import Sports from './Pages/Sports/Sports'
import TelevisionAdd from './Pages/Television/Television'
import Malls from './Pages/Malls/Malls'
import PricePlans from './Components/Price/PricePlans'
import MarketingStratigies from './Components/MarketingStratigies/MarketingStratigies'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* main pages */}
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/signup' element={<Signup />} />
          <Route path='/otp' element={<OtpInput />} />
          <Route path='/login' element={<Login />} />
          <Route path='/airport' element={<Airports />} />
          <Route path='/about' element={<About />} />
          <Route path='/cinema' element={<Cinema />} />
          <Route path='/digital' element={<Digital />} />
          <Route path='/magazine' element={<Magazine />} />
          <Route path='/newspaper' element={<NewsPaper />} />
          <Route path='/airplane' element={<Airplane />} />
          <Route path='/outdoor' element={<Outdoor />} />
          <Route path='/television' element={<Television />} />
          <Route path='/rich-text-editor' element={<RichTextEditor />} />
          <Route path="/Below-the-Line-Marketing" element={<Btl />} />
          <Route path="/outdoor" element={<Outdoor />} />
          <Route path="/radio" element={<Radio />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/television" element={<TelevisionAdd />} />
          <Route path="/malls" element={<Malls />} />
          {/* subpages */}
          <Route path="/subpages" element={<SubCategories />} />
          <Route path='/price-plans' element={<PricePlans />} />
          <Route path='/marketing' element={<MarketingStratigies />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App

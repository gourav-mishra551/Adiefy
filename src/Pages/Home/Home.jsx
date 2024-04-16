// import Slider from "../../Components/Slider/Slider"
import NavBar2 from "../../Components/Navbar/Navbar"
import Goals from "../../Components/Goals/Goals"
// import images from "../../Image"
import Header from "../../Components/Header/Header"
import Confused from "../../Components/Confused/Confused"
import Media from "../../Components/Media/Media"
import Accordions from "../../Components/Accor/Accordion"
import Footers from "../../Components/Footer/Footer"
import Using from "../../Components/Using/Using"
import Business from "../../Components/Business/Business"
import Billboard from "../../Components/Billboard/Billboard"
import Companies from "../../Components/CompaniesSearch/Companies"

const Home = () => {
  return (
    <div className="bg-gray-200">
      <NavBar2 />

      <Header/>
        <Media />
        <Billboard/>
        <Business/>
       <Companies/>
      <div className="bg-black  pt-[5vh] pb-[10vh]">
        <Goals />
      </div>
      <Confused />
      <Using/>
      <Accordions/>
      <Footers/>
    </div>
  )
}

export default Home
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./navbar.css"

export default function NavBar2() {
   const [navbar, setNavbar] = useState(false);
   const [user, setUser] = useState("");
   const [nouser, setnoUser] = useState(false)

   useEffect(() => {
      const loggedinuser = localStorage.getItem('User');
      if (loggedinuser) {
         setUser(loggedinuser)
         setnoUser(true)
      }
   }, [])

   return (
      <nav className="w-auto text-black">
         <div className="sm:px-0  px-[5%] mx-auto bg-black md:items-center md:flex hh sm:flex sm:justify-between">
            <div>
               <div className="flex items-center justify-between py-3 md:py-5 md:block">
                  <Link to="/home">
                     Adiefy
                  </Link>
                  <div className="md:hidden">
                     <button
                        className="p-2 h-248px  rounded-md outline-none z-30"
                        onClick={() => setNavbar(!navbar)}
                     >
                        {navbar ? (
                           <FaBars 
                              className="text-white text-2xl"
                           />
                        ) : (
                           <FaBars 
                              className="text-white text-2xl"
                           />
                        )}
                     </button>
                  </div>
               </div>
            </div>
            <div>
               <div
                  className={` pb-3 z-40 mt-0 h-screen sm:h-auto   sm:ml-[10rem] ml-0 md:block md:pb-0 md:mt-0 leading-7 ${navbar ? "block z-30" : "hidden z-30"
                     }`}
               >
                  <ul className="items-center  justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                     <div className="w-full ">
                        <div className="flex flex-col  sm:flex-row justify-center w-auto ">
                           <Link to='/' className=" items-center" >
                              <a className="flex sm:font-bold  sm:pb-[26px] sm:mt-[30px] sm:mb-0 sm:text-base text-[18px] font-medium hover:text-red-600 link link-underline link-underline-black  text-white pl-6 pr-6">
                                 Home
                              </a>
                           </Link>

                           {/* drop down ++++++++++++++++++++=========== */}
                           <div className="dropdown ">
                              <button className="dropbtn  sm:my-0 sm:font-bold mr-auto sm:text-base text-[18px] sm:ml-8  font-medium hover:text-red-600 link link-underline link-underline-black text-white sm:pb-[27px]  ml-[2px]">Advertisements
                                 <i className="fa fa-caret-down ml-2"></i>
                              </button>
                              <div className="dropdown-content pb-10 w-[100vw]">
                                 <div className="row sm:pl-0 sm:pr-0  pr-[6%]">
                                    <div className="column sm:pl-[8%] flex flex-row sm:flex-col">
                                       <div className="flex sm:flex-col flex-row sm:mt-5">
                                          <div className="block sm:hidden h-[35px] text-center pt-2
                                                     font-[400] rounded-full w-[96px] bg-red-600 text-white leading-[21px] text-[14px]">Industries</div>
                                          <div className="sm:block hidden">
                                             <Link >
                                                <p className="font-semibold text-[14px] sm:text-lg flex sm:mt-[20px]">
                                                   Industries
                                                </p>

                                             </Link>

                                          </div>

                                          <p className="text-gray-500 leading-5 text-sm font-normal  mt-3  sm:w-[231px]  w-[177px] text-left sm:block hidden">Customized ads according to your need at your place and destination. </p>
                                       </div>
                                       <Link >
                                          <button className="sm:mt-10 sm:float-left  sm:font-medium text-[14px] w-[122px] h-[35px] bg-[#EDEDED] sm:bg-transparent sm:text-xl sm:text-left rounded-full sm:ml-0 ml-5">All Ads</button></Link>
                                    </div>


                                    <div className="column sm:mt-5">
                                       <Link >
                                          <a className="flex sm:pt-[20px] sm:pb-[10px]">
                                             <span className="flex-shrink-0 mt-2">
                                                <i className="fa-solid fa-film fa-2xl"  ></i>
                                             </span>
                                             <div className="flex flex-col ml-4 ">
                                                <span className="text-left sm:font-medium font-[400]  leading-none sm:text-lg text-[14px]">Cinema</span>
                                                <span className="text-left  sm:text-sm text-[11px] font-normal text-gray-500 sm:w-[231px] sm:leading-[18.3px] leading-[14.3px] w-[177px] sm:mt-1 mt-2">Bill yor adds in cinema houses and in movies.</span>
                                             </div>
                                          </a>
                                       </Link>
                                       <a className="flex sm:pt-[20px] pt-5 pb-2 sm:pb-[10px]" href="/industry">
                                          <span className="flex-shrink-0 mt-2">
                                             <i className="fa-solid fa-earth-americas fa-2xl"></i>
                                          </span>
                                          <div className="flex flex-col ml-4">
                                             <span className="text-left sm:font-medium font-[400]  leading-none sm:text-lg text-[14px] ">Digital Ads</span>
                                             <span className="text-left  sm:text-sm text-[11px] font-normal text-gray-500 sm:w-[231px] sm:leading-[18.3px] leading-[14.3px] w-[177px] sm:mt-1 mt-2">We offer ads on diiferent websites and platform for better marketing.</span>
                                          </div>
                                       </a>

                                    </div>
                                    <div className="column sm:mt-5">
                                       <a className="flex sm:pt-[20px] sm:pb-[10px]" href="/industry">
                                          <span className="flex-shrink-0 mt-2">
                                             <i className="fa-solid fa-book fa-2xl"></i>
                                          </span>
                                          <div className="flex flex-col ml-4">
                                             <span className="text-left sm:font-medium font-[400]  leading-none sm:text-lg text-[14px]">Magazine</span>
                                             <span className="text-left  sm:text-sm text-[11px] font-normal text-gray-500 sm:w-[231px] sm:leading-[18.3px] leading-[14.3px] w-[177px] sm:mt-1 mt-2">Publish your Ads in your favourite Magazine with our help.</span>
                                          </div>
                                       </a>
                                       <a className="flex  sm:pt-[20px] sm:pb-[10px] sm:mt-0 mt-5" href="/indusrty">
                                          <span className="flex-shrink-0 mt-2">
                                             <i className="fa-solid fa-newspaper fa-2xl"></i>
                                          </span>
                                          <div className="flex flex-col ml-4">
                                             <span className="text-left sm:font-medium font-[400]  leading-none sm:text-lg text-[14px] ">Newspaper</span>
                                             <span className="text-left  sm:text-sm text-[11px] font-normal text-gray-500 sm:w-[231px] sm:leading-[18.3px] leading-[14.3px] w-[177px] sm:mt-1 mt-2">Post your ads in different newspaper with our help and make your marketing better.</span>
                                          </div>
                                       </a>

                                    </div>
                                    <div className="column sm:mt-5">
                                       <a className="flex sm:pt-[20px] sm:pb-[10px]" href="/industry">
                                          <span className="flex-shrink-0 mt-2">
                                             <i className="fa-solid fa-car-side fa-2xl"></i>
                                          </span>
                                          <div className="flex flex-col ml-4">
                                             <span className="text-left sm:font-medium font-[400]  leading-none sm:text-lg text-[14px]">BTL</span>
                                             <span className="text-left  sm:text-sm text-[11px] font-normal text-gray-500 sm:w-[231px] sm:leading-[18.3px] leading-[14.3px] w-[177px] sm:mt-1 mt-2">Want your ads on different taxis and cars we are here to help.</span>
                                          </div>
                                       </a>
                                       <a className="flex  sm:pt-[20px] sm:pb-[10px] sm:mt-0 mt-5" href="/indusrty">
                                          <span className="flex-shrink-0 mt-2">
                                             <i className="fa-solid fa-tv fa-2xl"></i>
                                          </span>
                                          <div className="flex flex-col ml-4">
                                             <span className="text-left sm:font-medium font-[400]  leading-none sm:text-lg text-[14px] ">Television</span>
                                             <span className="text-left  sm:text-sm text-[11px] font-normal text-gray-500 sm:w-[231px] sm:leading-[18.3px] leading-[14.3px] w-[177px] sm:mt-1 mt-2">want your brand on diiferent TV channels we are here to help .</span>
                                          </div>
                                       </a>

                                    </div>
                                 </div>
                              </div>
                           </div>
                           {/* dropdown end  =======================================================  */}

                           <Link to='/about' >
                              <a className="flex sm:pb-[26px] font-bold sm:mt-[30px] items-center sm:ml-2  sm:mb-0 sm:text-base text-[18px]  hover:text-red-600 link link-underline link-underline-black  text-white pl-6 pr-6">
                                 About</a></Link>
                           <Link to='/contact'>
                              <li className=" ml-1 font-bold sm:pb-[26px] sm:mt-[30px] sm:ml-2  sm:text-base text-[18px] link link-underline hover:text-red-600 link-underline-black  text-white   sm:w-28 sm:text-center ">
                                 Contact
                              </li>
                           </Link>
                           {nouser ?
                              <li className="ml-1 font-bold sm:pb-[26px] sm:mt-[30px] sm:ml-2  sm:text-base text-[18px] link link-underline hover:text-red-600 link-underline-black  text-white   sm:w-28 sm:text-center">{user}</li> :
                              <div className="flex">
                                 <Link to='/login'>
                                    <li className=" ml-1 font-bold sm:pb-[26px] sm:mt-[30px] sm:ml-2  sm:text-base text-[18px] link link-underline hover:text-red-600 link-underline-black  text-white   sm:w-28 sm:text-center ">
                                       Login
                                    </li>
                                 </Link>
                                 <Link to='/signup'>
                                    <li className=" ml-1 font-bold sm:pb-[26px] sm:mt-[30px] sm:ml-2  sm:text-base text-[18px] link link-underline hover:text-red-600 link-underline-black  text-white   sm:w-28 sm:text-center ">
                                       SignUp
                                    </li>
                                 </Link>
                              </div>
                           }
                        </div>
                     </div>
                  </ul>

               </div>
            </div>
         </div >
         <a className=" fixed overflow-hidden  flex items-center justify-center  bg-white   border-red-600  h-10 pr-3 pl-3 bg-[bubble-gum] rounded-full sm:bottom-[2.5rem] sm:top-auto top-[670px] sm:right-14 right-6  mr-4 mb-4 border border-metal  text-silver hover:bg-bubble-gum z-50" href="http://wa.me/" target="_blank" rel="noreferrer">
            <div className=" rounded-full bg-green-400">
               <i className="fa-brands fa-whatsapp fa-2xl"></i>
            </div>
            <span className="text-sm  p-1 leading-none font-semibold">Chat</span>
         </a>
      </nav >
   );
}
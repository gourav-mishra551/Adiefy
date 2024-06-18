export default function Footers() {
  return (
    // HTMLResult Skip Results Iframe
    // EDIT ON
    
    <div className=" mx-auto bg-black sm:p-0 px-3 py-1">
        <div className="p-5 bg-black rounded-lg py-12 mt-5 border border-red-400 sm:w-[50vw] mx-auto  rounded-b-[80px]">
            <div className="flex flex-col ">
                <h3 className="sm:text-[62px] text-[30px] leading-10 text-white w-full text-center font-bold">Subscribe <span className="sm:text-[62px] text-[30px]  font-thin font-sans">Newsletter</span></h3>
                <div className="text-base text-gray-500 w-full  md:w-2/4 self-center text-center lg:pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
            <div className="flex flex-row justify-around  mt-4">
              <input className="px-2 py-2 rounded-md sm:w-auto w-[60%]" type="text" placeholder="email@email.com" />
              <button className="border-2 sm:w-auto w-[32%] border-white px-2 py-2 bg-red-600 rounded-md text-white">Subscribe</button>
            </div>
  
        </div>
        <footer className="relative  pt-8 pb-6">
  <div className="container mx-auto  w-[80vw]">
    <div className="flex flex-wrap text-left lg:text-left">
      <div className="w-full lg:w-6/12 ">
        <h4 className="text-3xl fonat-semibold text-white">Let's keep in touch!</h4>
        <h5 className="text-lg mt-0 mb-2 text-white">
          Find us on any of these platforms, we respond 1-2 business days.
        </h5>
        <div className="mt-6 lg:mb-0 mb-6">
          <button className=" text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-twitter"></i></button><button className=" text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-facebook-square"></i></button><button className=" text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-dribbble"></i></button><button className=" text-gray-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <i className="fab fa-github"></i>
          </button>
        </div>
      </div>
      <div className="w-full lg:w-6/12 px-4">
        <div className="flex flex-wrap items-top mb-6">
          <div className="w-full lg:w-4/12 px-4 ml-auto">
            <span className="block uppercase text-gray-300 text-sm font-semibold mb-2">Useful Links</span>
            <ul className="list-unstyled">
              <li>
                <a className="text-gray-300 hover:text-gray-600 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/presentation?ref=njs-profile">About Us</a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-gray-600 font-semibold block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">Blog</a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-gray-600 font-semibold block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">Github</a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-gray-600 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Free Products</a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <span className="block uppercase text-gray-300 text-sm font-semibold mb-2">Other Resources</span>
            <ul className="list-unstyled">
              <li>
                <a className="text-gray-300 hover:text-gray-600 font-semibold block pb-2 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT License</a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-gray-600 font-semibold block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-gray-600 font-semibold block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-gray-600 font-semibold block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr className="my-6 border-blueGray-300"/>
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm text-gray-300 font-semibold py-1">
          Copyright © <span id="get-current-year">2024</span><a href="" className="text-gray-500 hover:text-gray-800" target="_blank"/> Adifie 
         
        </div>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
}
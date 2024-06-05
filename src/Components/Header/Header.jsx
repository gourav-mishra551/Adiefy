import "./header.css";
import ads from "../../assets/Online-ads-unscreen.gif";
import PricePlans from "../Price/PricePlans";
import MarketingStratigies from "../MarketingStratigies/MarketingStratigies";
const Header = () => {
  return (
    <>
      <div>
        <header className="header">
          <div className="brand-box">
            <span className="brand">Adifie</span>
          </div>

          <div className="main-header flex sm:flex-row flex-col justify-between">
            <div className="left w-auto  mx-auto sm:mt-20 px-5 sm:px-0 sm:pt-0 pt-14 sm:p-10">
              <h1 className="header-h1 mt-4">
                <span className="word">
                  Empower the Value<span className="superscript">s</span>{" "}
                </span>
                <span className="word">of Advertisement</span>
              </h1>
              <p className="text-gray-300 text-[14px] sm:text-[20px] font-normal  w-auto sm:w-[40vw] mt-5 sm:mt-10">
                Unlock the power of creativity with our advertising expertise.
                From captivating campaigns to strategic branding solutions, we
                craft narratives that resonate and drive results.
              </p>
              <div className="sm:mt-10 mt-5">
                <a
                  href="#_"
                  className="px-5 py-2.5 relative rounded group  text-white font-medium inline-block"
                >
                  <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm "></span>
                  <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 "></span>
                  <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-red-900 to-red-600"></span>
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded "></span>
                  <span className="relative text-black font-semibold  text-sm sm:text-2xl">Buy Ads</span>
                </a>
              </div>
            </div>

            <div className="right  overflow-hidden relative sm:top-14 sm:right-10 ">
              {/* <img src= {ads} alt="background" /> */}
              <img src="Animation - 1717238361883.gif" alt=""
                className="w-[300px]"
              />
            </div>
          </div>
        </header>
        <PricePlans />
      </div>
      <MarketingStratigies />
    </>
  );
};

export default Header;

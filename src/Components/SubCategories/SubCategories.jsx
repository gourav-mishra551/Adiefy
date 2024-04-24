import Slider from "../Slider/Slider";
import NavBar2 from "../Navbar/Navbar";
import Footers from "../Footer/Footer";
import Images from "../../ImagesSub";
import { useEffect } from "react";
import { useSelector , dispatch} from "react-redux";
import { idstorePop  } from "../../redux/slice";

const SubCategories = () => {
  const id = useSelector(state => state.idstore.id)

  useEffect(() => {
   // Cleanup function to remove the component ID when unmounting
    return () => {
      dispatch(idstorePop(id));
    };
  }, [id]);

  return (
    <div>
      <NavBar2 />
      <div>
        <h1 className="sm:text-[32px] text-[22px] text-black font-semibold flex justify-center textShadow-[#fff] text-center sm:mt-5 sm:pt-0 pt-20">
          Boarding Passes Advertisememnt
        </h1>
        <hr className="sep-3 sm:mt-6 mt-4" />
        <div className="advertisememnt w-[80vw] mx-auto mt-10">
          {/* sub header */}
          <div className="sub-header flex sm:flex-row flex-col mb-10  rounded-xl">
            <div className="left sm:w-[60vw] w-[80vw] mx-auto">
              <Slider images={Images} />
              {/* different adertisement area  */}
              <div className="card  p-5 flex sm:flex-row flex-col rounded-md bg-gray-100 shadow-lg mt-8 ">
                <img
                  className="h-[20vh]  sm:w-[20vw] w-[70vw] bg-cover"
                  src="https://www.exopicmedia.com/wp-content/uploads/2018/09/Boarding-Card-1-300x210.jpg"
                  alt=""
                />
                <div className="ml-8">
                  <h2 className="sm:text-[24px] text-[18px] text-gray-500 font-medium textShadow-[#fff] mt-3">
                    Indigo Airlines
                  </h2>
                  <p className="text-gray-500">570k Monthely Passenger</p>
                  <p className="mt-4 text-[22px]">
                    {" "}
                    <i
                      className="fa fa-tag  text-red-500 mr-3"
                      aria-hidden="true"
                    ></i>{" "}
                    <span>Price ?</span> On Request
                  </p>
                </div>
              </div>
            </div>
            <div className="right sm:w-[40vw]  mx-auto p-10 bg-black sm:mt-3 mt-10 rounded-3xl h-[200vh] sm:ml-5">
              <h1 className="text-gray-200 sm:text-[18px] text-[16px]">
                About Boarding Pass Advertisement.
              </h1>
              <p className="text-gray-400 mt-3">
                Boarding card advertising is one of the well-organized methods
                of Inflight Advertising. When departing from the airport, a
                passenger checks in and is given a pass that must be kept for
                the duration of the journey.
              </p>
              <p className="text-gray-500 text-xl mt-5">
                {" "}
                <i className="fa-regular fa-calendar mr-2"></i> 19-05-2022{" "}
                <span className="ml-5 text-xl"> DD-MM-YY</span>
              </p>
              <div className="grid sm:grid-cols-3 grid-cols-2 gap-4 mt-6">
                <div className="border border-l-8 border-lime-200 p-4 sm:w-[9vw] w-[30vw]">
                  <h2 className="text-gray-200 ">TOTAL AIRLINE</h2>
                  <p className="text-gray-500 text-[18px] font-bold">257</p>
                </div>
                <div className="border border-l-8 border-lime-200 p-4 sm:w-[9vw] w-[30vw]">
                  <h2 className="text-gray-200 ">AIRPORT TYPE</h2>
                  <p className="text-gray-500 text-[18px] font-bold">
                    Domestic
                  </p>
                </div>
                <div className="border border-l-8 border-lime-200 p-4 w-[9vw]">
                  <h2 className="text-gray-200 ">AVG SEATS </h2>
                  <p className="text-gray-500 text-[18px] font-bold">180</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footers />
    </div>
  );
};

export default SubCategories;

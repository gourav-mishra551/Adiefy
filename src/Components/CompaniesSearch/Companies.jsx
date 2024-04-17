import "./companies.css";

const Companies = () => {
  return (
    <div className="bg-black mb-[10vh] h-[80vh] pt-10 ">
      <h1 className="sm:text-[32px] text-[22px] text-gray-200 font-semibold flex justify-center textShadow-[#fff] text-center">
        {" "}
        Join The 150+ Companies Trusting Maxline Company
      </h1>
      <div className="flex sm:flex-row flex-col-reverse sm:mt-14 mt-6">
        {" "}
        <div className="lefts  w-auto sm:w-[50vw] mx-auto">
          <img
            className="sm:h-[56vh] h-[35vh] sm:mt-0 mt-4 sm:w-auto w-[80vw] mx-auto"
            src="./pngwing.com.png"
            alt="map"
          />
        </div>
        <div className="right sm:w-[50vw] w-auto mx-auto  sm:mt-14 mt-4">
          <p className="sm:text-[14px] text-[10px] text-gray-300 font-semibold text-center mb-4 underline underline-offset-4 cursor-pointer">Watch some ads </p>
          <h1 className="sm:text-[28px] text-[18px] text-gray-200 font-semibold flex justify-center textShadow-[#fff] ">
            {" "}
            We Advertise in Whole Asia
          </h1>
          <p className="sm:text-[16px] text-[12px] text-gray-300 sm:w-[45vw] mx-auto text-center mt-4 ">Advertisement is a powerful tool that boost business and make business to achieve a new platform.</p>
          <div id="cover bg-pink-300">
      
                <div className="td mx-auto mt-5 sm:mt-14 flex flex-row justify-evenly align-middle ">
                  <input type="text" className="bg-transparent sm:h-[10vh] h-[5vh] border border-white sm:w-[30vw] w-[70vw] rounded-full sm:p-8 p-3 text-gray-300" placeholder="Street Adress or Zip Code" />
                    <i className="fa-solid fa-magnifying-glass fa-xl sm:fa-2xl text-white cursor-pointer sm:mt-9 mt-4 absolute sm:right-[190px] right-[70px]"></i>
                    </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;

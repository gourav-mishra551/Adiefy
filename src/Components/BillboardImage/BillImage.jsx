import React from 'react';
import "./billboard.css"

const BillImage = () => {
  return (
    <div className="mb-10">
      <p className="text-black sm:text-[18px] text-[14px] underline underline-offset-2  font-semibold cursor-pointer text-center">
        Latest Gallery
      </p>
      <h1 className="sm:text-[32px] text-[22px] text-black font-semibold flex justify-center textShadow-[#fff] text-center mt-5">
        Captive Your Audience The with Adertisement Magic
      </h1>
      <div className="image-gallery sm:mt-14 mt-6">
        <div className="upper flex justify-between align-middle mx-auto w-[65vw]">
            <img className="w-[27vw] max-w-[27vw] sm:h-[30vh] sm:rounded-2xl rounded-lg" src="./add1.jpg" alt="one" />
            <img className="w-[16vw] max-w-[16vw] sm:h-[30vh] sm:rounded-2xl rounded-lg" src="./ads2.jpg" alt="two" />
            <img  className="w-[20vw] max-w-[20vw] sm:h-[30vh] sm:rounded-2xl rounded-lg" src="./ads3.jpg" alt="three" />
        </div>
        <div className="bottom flex justify-between align-middle mx-auto w-[65vw] sm:mt-8 mt-3">
        <img className="w-[33vw] max-w-[33vw] sm:h-[38vh] sm:rounded-2xl rounded-lg" src="./add1.jpg" alt="one" />
            <img className="w-[30vw] max-w-[30vw] sm:h-[38vh] sm:rounded-2xl rounded-lg" src="./ads2.jpg" alt="two" />
        </div>
      </div>
    </div>
  );
};

export default BillImage;

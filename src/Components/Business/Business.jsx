
const Business = () => {
  return (
    <div className="bg-gray-200 w-[80vw] mx-auto mb-20">
      <h1 className="sm:text-[32px] text-[26px] text-bold text-black text-center">Super Charge Your Business <br /> with our ads</h1>
      <div className="flex sm:flex-row sm:gap-0 gap-10 flex-col justify-center align-middle md:w-[80vw] sm:w-[70vw] w-[70vw] mx-auto mt-10">
        <div className="banner1 flex flex-col w-auto sm:w-80 sm:mx-8">
          <div className="up rounded-t-full mb-2">
            <img className="bg-cover rounded-t-full sm:h-[50vh] h-[250px]" src="./add1.jpg" alt="ads 1" />
          </div>
          <div className="bottom rounded-lg sm:p-8 p-4 bg-white">
            <h2 className="font-semibold sm:text-[16px] text-[14px] text-black">Exposure Express</h2>
            <p className="sm:text-[14px] text-[12px] text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam exercitationem nisi ipsa architecto eius illum?</p>
            <p>Read more</p>
          </div>
        </div>

        <div className="banner2 flex flex-col w-auto sm:w-80 sm:mx-8">
          <div className="up rounded-t-full mb-2">
            <img className="bg-cover rounded-t-full sm:h-[50vh] h-[250px]" src="./ads3.jpg" alt="ads 1" />
          </div>
          <div className="bottom rounded-lg sm:p-8 p-4 bg-white">
            <h2 className="font-semibold sm:text-[16px] text-[14px] text-black">Exposure Express</h2>
            <p className="sm:text-[14px] text-[12px] text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam exercitationem nisi ipsa architecto eius illum?</p>
            <p>Read more</p>
          </div>
        </div>

        <div className="banner3 flex flex-col w-auto sm:w-80 sm:mx-8">
          <div className="up rounded-t-full mb-2">
            <img className="bg-cover rounded-t-full sm:h-[50vh] h-[250px]" src="./ads2.jpg" alt="ads 1" />
          </div>
          <div className="bottom rounded-lg sm:p-8 p-4 bg-white">
            <h2 className="font-semibold sm:text-[16px] text-[14px] text-black">Exposure Express</h2>
            <p className="sm:text-[14px] text-[12px] text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam exercitationem nisi ipsa architecto eius illum?</p>
            <p>Read more</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Business
import { Link } from "react-router-dom";

const Media = () => {
    return (
        <div className="w-[80vw] mx-auto pt-[10vh] pb-[10vh]">
            <h1 className="text-[22px] sm:text-[32px] font-semibold mb-8 text-center">Browse Media by Genre</h1>
            <div className=" grid grid-cols-3 sm:grid-cols-6 gap-4">
                <Link to='/airport'>
                    <div className="flex flex-col justify-center items-center gap-2 sm:w-[180px] w-[100px] h-[110px] sm:py-10 sm:px-5 bg-black text-white rounded-md border-[3px] border-[#FF0000] isolate aspect-video  shadow-lg ring-1 ring-black/5">
                        <i className="fa-solid fa-plane-departure fa-xl sm:fa-2xl mt-3"></i>
                        <p className="mt-2">Airport</p>
                    </div>
                </Link>
                <Link to='/cinema'>
                    <div className="flex flex-col justify-center items-center gap-2 sm:w-[180px] w-[100px] h-[110px] py-10 px-5 bg-black text-white rounded-md border-[3px] border-[#FF0000] isolate aspect-video  shadow-lg ring-1 ring-black/5">
                        <i className="fa-solid fa-film fa-xl sm:fa-2xl mt-3"></i>
                        <p className="mt-2">Cinema</p>
                    </div>
                </Link>
                <Link to='/digital'>
                    <div className="flex flex-col justify-center items-center gap-2 sm:w-[180px] w-[100px] h-[110px] py-10 px-5 bg-black text-white rounded-md border-[3px] border-[#FF0000] isolate aspect-video  shadow-lg ring-1 ring-black/5">
                        <i className="fa-solid fa-tv fa-xl sm:fa-2xl mt-3"></i>
                        <p className="mt-2">Digital</p>
                    </div>
                </Link>
                <Link to='/magazine'>
                    <div className="flex flex-col justify-center items-center gap-2 sm:w-[180px] w-[100px] h-[110px] py-10 px-5 bg-black text-white rounded-md border-[3px] border-[#FF0000] isolate aspect-video  shadow-lg ring-1 ring-black/5">
                        <i className="fa-solid fa-book fa-xl sm:fa-2xl mt-3"></i>
                        <p className="mt-2">Magazine</p>
                    </div>
                </Link>
                <Link to='/newspaper'>
                    <div className="flex flex-col justify-center items-center gap-2 sm:w-[180px] w-[100px] h-[110px] py-10 px-5 bg-black text-white rounded-md border-[3px] border-[#FF0000] isolate aspect-video  shadow-lg ring-1 ring-black/5">
                        <i className="fa-solid fa-newspaper fa-xl sm:fa-2xl mt-3"></i>
                        <p className="mt-2 sm:text-[16px] text-[14px]">Newspaper</p>
                    </div>
                </Link>
                <Link to="/airplane">
                    <div className="flex flex-col justify-center items-center gap-2 sm:w-[180px] w-[100px] h-[110px] py-10 px-5 bg-black text-white rounded-md border-[3px] border-[#FF0000] isolate aspect-video  shadow-lg ring-1 ring-black/5">
                        <i className="fa-solid fa-plane-departure fa-xl sm:fa-2xl mt-3"></i>
                        <p className="mt-2 ">Airplane</p>
                    </div>
                </Link>
                <Link to="/Below-the-Line-Marketing">
                    <div className="flex flex-col justify-center items-center gap-2 sm:w-[180px] w-[100px] h-[110px] py-10 px-5 bg-black text-white rounded-md border-[3px] border-[#FF0000] isolate aspect-video  shadow-lg ring-1 ring-black/5">
                        <i className="fa-solid fa-car fa-xl sm:fa-2xl mt-3"></i>
                        <p className="mt-2">BTL</p>
                    </div>
                </Link>
                <Link to="/outdoor">
                    <div className="flex flex-col justify-center items-center gap-2 sm:w-[180px] w-[100px] h-[110px] py-10 px-5 bg-black text-white rounded-md border-[3px] border-[#FF0000] isolate aspect-video  shadow-lg ring-1 ring-black/5">
                        <i className="fa-solid fa-earth-america fa-xl sm:fa-2xl mt-3"></i>
                        <p className="mt-2">Outdoor</p>
                    </div>
                </Link>
                <Link to="/radio">
                    <div className="flex flex-col justify-center items-center gap-2 sm:w-[180px] w-[100px] h-[110px] py-10 px-5 bg-black text-white rounded-md border-[3px] border-[#FF0000] isolate aspect-video  shadow-lg ring-1 ring-black/5">
                        <i className="fa-solid fa-radio fa-xl sm:fa-2xl mt-3"></i>
                        <p className="mt-2">Radio</p>
                    </div>
                </Link>
                <Link to="/sports">
                    <div className="flex flex-col justify-center items-center gap-2 sm:w-[180px] w-[100px] h-[110px] py-10 px-5 bg-black text-white rounded-md border-[3px] border-[#FF0000] isolate aspect-video  shadow-lg ring-1 ring-black/5">
                        <i className="fa-solid fa-person-running fa-xl sm:fa-2xl mt-3"></i>
                        <p className="mt-2">Sports</p>
                    </div>
                </Link>
                <Link to="/television">
                    <div className="flex flex-col justify-center items-center gap-2 sm:w-[180px] w-[100px] h-[110px] py-10 px-5 bg-black text-white rounded-md border-[3px] border-[#FF0000] isolate aspect-video  shadow-lg ring-1 ring-black/5">
                        <i className="fa-solid fa-tv fa-xl sm:fa-2xl mt-3"></i>
                        <p className="mt-2">Television</p>
                    </div>
                </Link>
                <Link to="/malls">
                    <div className="flex flex-col justify-center items-center gap-2 sm:w-[180px] w-[100px] h-[110px] py-10 px-5 bg-black text-white rounded-md border-[3px] border-[#FF0000] isolate aspect-video  shadow-lg ring-1 ring-black/5">
                        <i className="fa-brands fa-dhl fa-xl sm:fa-2xl mt-3"></i>
                        <p className="mt-2">Malls</p>
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default Media;

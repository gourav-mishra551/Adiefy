const Media = () => {
    return (
        <div className="w-[80vw] mx-auto pt-[10vh] pb-[10vh]  ">
            <h1 className="text-[22px] sm:text-[32px] font-semibold mb-8">Browse Media by Genre</h1>
            <div className=" grid grid-cols-3 sm:grid-cols-6 gap-4">

                <div className="sm:w-[180px] w-[100px] h-[110px] py-10 px-5 bg-black text-red-500 rounded-md border border-orange-400 isolate aspect-video  shadow-lg ring-1 ring-black/5">
                    <i className="fa-solid fa-plane-departure fa-xl sm:fa-2xl"></i>
                    <p className="mt-2">Airport</p>
                </div>
                <div className="sm:w-[180px] w-[100px] h-[110px] py-10 px-5 bg-black text-red-500 rounded-md border border-orange-800 isolate aspect-video  shadow-lg ring-1 ring-black/5">
                    <i className="fa-solid fa-film fa-xl sm:fa-2xl"></i>
                    <p className="mt-2">Cinema</p>
                </div>
                <div className="sm:w-[180px] w-[100px] h-[110px] py-10 px-5 bg-black text-red-500 rounded-md border border-orange-800 isolate aspect-video  shadow-lg ring-1 ring-black/5">
                    <i className="fa-solid fa-tv fa-xl sm:fa-2xl"></i>
                    <p className="mt-2">Digital</p>
                </div>
                <div className="sm:w-[180px] w-[100px] h-[110px] py-10 px-5 bg-black text-red-500 rounded-md border border-orange-800 isolate aspect-video  shadow-lg ring-1 ring-black/5">
                    <i className="fa-solid fa-book fa-xl sm:fa-2xl"></i>
                    <p className="mt-2">Magazine</p>
                </div>
                <div className="sm:w-[180px] w-[100px] h-[110px] py-10 px-5 bg-black text-red-500 rounded-md border border-orange-800 isolate aspect-video  shadow-lg ring-1 ring-black/5">
                    <i className="fa-solid fa-newspaper fa-xl sm:fa-2xl"></i>
                    <p className="mt-2 sm:text-[16px] text-[14px]">Newspaper</p>
                </div>
                <div className="sm:w-[180px] w-[100px] h-[110px] py-10 px-5 bg-black text-red-500 rounded-md border border-orange-800 isolate aspect-video  shadow-lg ring-1 ring-black/5">
                    <i className="fa-solid fa-plane-departure fa-xl sm:fa-2xl"></i>
                    <p className="mt-2 ">Airplane</p>
                </div>
                <div className="sm:w-[180px] w-[100px] h-[110px] py-10 px-5 bg-black text-red-500 rounded-md border border-orange-800 isolate aspect-video  shadow-lg ring-1 ring-black/5">
                    <i className="fa-solid fa-car fa-xl sm:fa-2xl"></i>
                    <p className="mt-2">BTL</p>
                </div>
                <div className="sm:w-[180px] w-[100px] h-[110px] py-10 px-5 bg-black text-red-500 rounded-md border border-orange-800 isolate aspect-video  shadow-lg ring-1 ring-black/5">
                    <i className="fa-solid fa-earth-america fa-xl sm:fa-2xl"></i>
                    <p className="mt-2">Outdoor</p>
                </div>
                <div className="sm:w-[180px] w-[100px] h-[110px] py-10 px-5 bg-black text-red-500 rounded-md border border-orange-800 isolate aspect-video  shadow-lg ring-1 ring-black/5">
                    <i className="fa-solid fa-radio fa-xl sm:fa-2xl"></i>
                    <p className="mt-2">Radio</p>
                </div>
                <div className="sm:w-[180px] w-[100px] h-[110px] py-10 px-5 bg-black text-red-500 rounded-md border border-orange-800 isolate aspect-video  shadow-lg ring-1 ring-black/5">
                    <i className="fa-solid fa-person-running fa-xl sm:fa-2xl"></i>
                    <p className="mt-2">Sports</p>
                </div>
                <div className="sm:w-[180px] w-[100px] h-[110px] py-10 px-5 bg-black text-red-500 rounded-md border border-orange-800 isolate aspect-video  shadow-lg ring-1 ring-black/5">
                    <i className="fa-solid fa-tv fa-xl sm:fa-2xl"></i>
                    <p className="mt-2">Television</p>
                </div>
                <div className="sm:w-[180px] w-[100px] h-[110px] py-10 px-5 bg-black text-red-500 rounded-md border border-orange-800 isolate aspect-video  shadow-lg ring-1 ring-black/5">
                    <i className="fa-brands fa-dhl fa-xl sm:fa-2xl"></i>
                    <p className="mt-2">Malls</p>
                </div>
            </div>
        </div>
    );
};

export default Media;

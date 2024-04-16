import "./billboard.css"
const Billboard = () => {
    return (
        <div className="w-[80vw] mx-auto mb-10 bg-black rounded-[35px]">
            <section className="outter option1 w-[80vw] flex justify-center align-middle ">
                <section className="video-container w-[80vw] mx-auto flex justify-center align-middle">
                    <video className=" bg-cover" src="https://videos.pexels.com/video-files/2104649/2104649-sd_640_360_30fps.mp4" autoPlay loop playsinline muted />
                    <div className="callout">
                        <h1 className="text-white ">Your Brand</h1>
                        <div className="desc text-gray-200"> Billboard Advertisement is A Powerful Marketing Tool That <br /> Your Business Gain Visibility and Reach</div>
                        <div className="button112"><div className="inner">Read More</div>
                        </div>

                        </div>
                </section>
            </section>
        </div>
    );
};

export default Billboard;

import "./getintouch.css"

const GetinTouch = () => {
    return (
        <div>
            <section className="contact w-[85vw] py-5 sm:py-[130px] mx-auto" id="contact">
                <div className="container">
                    <div className="heading text-center">
                        <h2>Get in
                            <span> Touch </span></h2>
                        <p className="text-[18px] text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            <br />incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row flex sm:flex-row flex-col justify-between">

                        <div className="content ">
                            <img className="sm:h-[50vh] rounded-2xl" src="./ads2.jpg" alt="img" />
                        </div>

                        <div className="col-md-7 w-auto sm:mt-0 mt-10">

                            <form >
                                <div className="row flex sm:flex-row flex-col">

                                    <div className="col-sm-6">
                                        <input type="text" className="form-control sm:w-72 w-[-webkit-fill-available]" placeholder="Name" />
                                    </div>

                                    <div className="col-sm-6">
                                        <input type="email" className="form-control sm:w-72 w-[-webkit-fill-available] sm:ml-7" placeholder="Email" />
                                    </div>

                                </div>

                                <div className="col-sm-12">
                                    <input type="text" className="form-control sm:w-full w-[-webkit-fill-available]" placeholder="Subject" />
                                </div>

                                <div className="form-group">
                                    <textarea className="form-control sm:w-full w-[-webkit-fill-available]" rows="5" id="comment" placeholder="Message"></textarea>
                                </div>
                                <button className="btn btn-block" type="submit">Send Now!</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default GetinTouch
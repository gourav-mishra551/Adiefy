import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Slider from "../Slider/Slider";
import NavBar2 from "../Navbar/Navbar";
import Footers from "../Footer/Footer";
import parse from 'html-react-parser';

const SubCategories = () => {
    const ids = useSelector((state) => state.idstore.id); // Access the correct state property
    const ids2 = useSelector((state) => state.airportId.id2); // Access the correct state property
    const [loading, setLoading] = useState(true); // State to manage loading state
    const [error, setError] = useState(null); // State to manage errors
    const [subCategory, setSubCategory] = useState([]);

    const url_main = import.meta.env.VITE_MAIN;
    const url_sub = import.meta.env.VITE_SUB;
    const [CinemaData, setData] = useState([]);

    const getIdFromArray = (ids) => {
        if (ids?.length === 0) {
            return [0]; // or handle the empty array case as needed
        } else if (ids?.length === 1) {
            return ids[0];
        } else {
            return ids[ids?.length - 1];
        }
    };
    const getIdFromAirport = (ids) => {
        if (ids?.length === 0) {
            return null; // or handle the empty array case as needed
        } else if (ids?.length === 1) {
            return ids[0];
        } else {
            return ids[ids?.length - 1];
        }
    };
    const airportId = getIdFromAirport(ids2)
    const selectedId = getIdFromArray(ids);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${url_main}${airportId}/subcategory/${selectedId}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json", // Correct header capitalization
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                const newData = await response.json();
                setData(newData);
              
                console.log(newData)
            } catch (error) {
                setError(error.message || 'Unknown error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${url_sub}${selectedId}/advertisement`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json", // Correct header capitalization
                    },
            
                });
                const res = await response.json();
                console.log(res)
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                setSubCategory(newData.subcategories);
                console.log(newData)
            } catch (error) {
                setError(error.message || 'Unknown error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <NavBar2 />
            <div>
                <h1 className="sm:text-[32px] text-[22px] text-black font-semibold flex justify-center textShadow-[#fff] text-center sm:mt-5 sm:pt-0 pt-20 sm:px-0 px-2">
                    {loading ? "Loading..." : CinemaData.fullTitle}
                </h1>
                <hr className="sep-3 mt-5" />
                <div className="advertisememnt sm:w-[80vw] w-auto mx-auto sm:mt-10 mt-0">
                    {/* sub header */}
                    <div className="sub-header flex sm:flex-row flex-col mb-10 rounded-xl">

                        <div className="left sm:w-[60%] w-[100vw] mx-auto">
                            {!loading && <Slider images={CinemaData?.image} />}
                            {/* different advertisement area */}

                         
                                    {subCategory?.map((item) => {
                                        return (
                                            <div
                                                id={item._id}
                                                className="card  p-5 flex sm:flex-row flex-col rounded-md bg-gray-100 shadow-lg mt-8 sm:w-auto w-[80vw] mx-auto"
                                                onClick={() => handleDivClick(item._id)}
                                            >
                                                <img
                                                    className="h-[20vh]  sm:w-[20vw] w-[70vw] bg-cover"
                                                    src={item.image[0]?.url}
                                                    alt=""
                                                />
                                                <div className="ml-8">
                                                    <h2 className="sm:text-[24px] text-[18px] text-gray-500 font-medium textShadow-[#fff] mt-3">
                                                        {item.title}
                                                    </h2>
                                                    <p className="text-gray-500">
                                                        {item.totalReach} Monthely Passenger
                                                    </p>
                                                    <p className="mt-4 text-[22px]">
                                                        {" "}
                                                        <i
                                                            className="fa fa-tag  text-red-500 mr-3"
                                                            aria-hidden="true"
                                                        ></i>{" "}
                                                        <span>Price ? </span> On Request
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                               
                        </div>
                        <div className="right sm:w-[40%] mx-auto p-10 bg-black sm:mt-3 mt-10 rounded-3xl h-auto sm:ml-5">
                            <h1 className="text-gray-200 sm:text-[18px] text-[16px]">
                                About Advertising in {CinemaData.title}.
                            </h1>
                            <p className="text-gray-400 mt-3">
                                {CinemaData.shortDescription}
                            </p>
                            <p className="text-white text-xl mt-5">
                                {" "} 
                                <i className="fa-regular fa-calendar mr-2"></i> Extensive Ad Visibility {CinemaData.totalReach} 
                            </p>
                            <div className="mt-6">
                                <div className="border border-l-8 border-red-500 p-4">
                                    {CinemaData.facts?.map((item, index) => (
                                        <li className="text-white" key={index}>
                                            {item.fact}
                                        </li>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="log_description w-[80vw] mx-auto sm:text-xl text-lg text-justify mb-10 mt-10">
                    {loading ? "Loading..." : parse(`<p>${CinemaData.longDescription}</p>`)}
                </div>
                <Footers />
            </div>
        </>
    );
};

export default SubCategories;
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

    const url_main = import.meta.env.VITE_MAIN;
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
                <h1 className="sm:text-[32px] text-[22px] text-black font-semibold flex justify-center textShadow-[#fff] text-center sm:mt-5 sm:pt-0 pt-20">
                    {loading ? "Loading..." : CinemaData.fullTitle}
                </h1>
                <hr className="sep-3 mt-5" />
                <div className="advertisement w-[80vw] mx-auto mt-10">
                    {/* sub header */}
                    <div className="sub-header flex sm:flex-row flex-col mb-10 rounded-xl">
                        <div className="left sm:w-[60vw] w-[80vw] mx-auto">
                            {!loading && <Slider images={CinemaData?.image} />}
                            {/* different advertisement area */}
                        </div>
                        <div className="right sm:w-[40vw] mx-auto p-10 bg-black sm:mt-3 mt-10 rounded-3xl h-auto sm:ml-5">
                            <h1 className="text-gray-200 sm:text-[18px] text-[16px]">
                                About Advertising in {CinemaData.title}.
                            </h1>
                            <p className="text-gray-400 mt-3">
                                {CinemaData.shortDescription}
                            </p>
                            <p className="text-gray-500 text-xl mt-5">
                                {" "}
                                <i className="fa-regular fa-calendar mr-2"></i> {new Date(CinemaData.createdAt).toLocaleString()}{" "}
                            </p>
                            <div className="mt-6">
                                <div className="border border-l-8 border-lime-200 p-4">
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

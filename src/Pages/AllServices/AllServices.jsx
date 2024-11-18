import { useEffect, useState } from "react";
import AllService from "./AllService";
import './AllService.css';
import { Avatar } from "flowbite-react";


const AllServices = () => {
    const [tours, setTours] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    console.log(searchResult)

    // const { DestinationImage, DestinationDescription, PackagePrice, ServiceProviderName, ServiceProviderImage, TourPackage } = searchResult;
    // console.log(searchResult)

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setTours(data))
    }, [])

    const toggleShow = () => {
        setShowAll(!showAll)
    }

    const handleSearch = e => {
        const name = e.target.value;
        setSearch(name);
    }

    const handleSearchResult = () => {
        const getSearchResult = tours.find(tour => tour.city.toLowerCase() === search.toLocaleLowerCase())
        setSearchResult(getSearchResult)
        console.log(search)
    }

    return (
        <div className="servicesBgImg relative">
            <div className="text-white font-bold text-6xl text-start top-40 relative left-52">
                <p>GET ALL YOUR FAVOURITE <span className="text-[#4a7ddf]"> <br /> TOUR DESTINATIONS</span></p>
            </div>

            {/* Search Input with button */}
            <div className="max-w-3xl mx-auto flex relative top-[335px] backdrop-blur-md bg-[#ffffff50] py-5 px-5">

                <input onKeyUp={handleSearch} type="text" placeholder="Search by destination name" className="w-full rounded-md border-2 border-[#4a7ddf] py-4" />

                <button onClick={handleSearchResult} className="bg-[#4a7ddf] text-white px-12 py-[18px] font-semibold absolute right-5 rounded-r-md">Search</button>
            </div>

            <div className="bg-white mt-72 space-y-12">

                {/* Pass the services */}
                <div className="pt-28">

                    {
                        searchResult ?
                            <div className=" mb-16 space-y-12">
                                <h2 className="text-[#4a7ddf] text-5xl font-bold text-center">YOUR SEARCH <span className="text-[#51c2e9]">DESTINATION</span></h2>

                                <div className="">
                                    <div className='max-w-5xl mx-auto flex justify-center gap-12 items-center shadow-md rounded-xl'>
                                        <img className='max-w-lg rounded-l-xl' src={searchResult.DestinationImage} alt="" />
                                        <div className='pr-12'>
                                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                {searchResult.TourPackage}
                                            </h5>
                                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                                {searchResult.DestinationDescription}
                                            </p>
                                            <Avatar className='justify-start mt-4' img={searchResult.ServiceProviderImage} rounded>
                                                <div className="space-y-1 font-medium dark:text-white">
                                                    <div>{searchResult.ServiceProviderName}</div>
                                                    <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
                                                </div>
                                            </Avatar>
                                            <div className='flex mt-8 justify-between items-center px-4'>
                                                <h4 className='text-3xl font-semibold'>{searchResult.PackagePrice}</h4>
                                                <button className='bg-[#4a7ddf] px-8 py-4 rounded-md text-white'>View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            ''
                    }

                    <h2 className="text-[#4a7ddf] text-5xl font-bold text-center">ALL TOUR <span className="text-[#51c2e9]">DESTINATIONS</span></h2>
                </div>

                <div className="grid grid-cols-2 gap-10 px-16">
                    {
                        tours.slice(0, showAll ? tours.length : 6).map(tour => <AllService key={tour.id} tour={tour}></AllService>)
                    }
                </div>

                {/* See more button */}
                <div className="flex justify-center py-8">
                    {
                        !showAll &&
                        <button onClick={toggleShow} className='bg-[#4a7ddf] px-12 py-4 rounded-md text-white text-xl font-medium'>See More</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default AllServices;
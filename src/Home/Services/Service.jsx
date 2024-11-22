import { Avatar } from "flowbite-react";
import { Link } from "react-router-dom";

const Service = ({ tour }) => {
    const { id, DestinationImage, DestinationDescription, PackagePrice, ServiceProviderName, ServiceProviderImage, TourPackage } = tour;

    console.log(tour)
    return (
        <div>
            <div className='max-w-5xl mx-auto flex justify-center gap-8 items-center shadow-md rounded-xl'>
                <img className='max-w-sm rounded-l-xl' src={DestinationImage} alt="" />
                <div className='pr-12'>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {TourPackage}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {DestinationDescription}
                    </p>
                    <Avatar className='justify-start mt-4' img={ServiceProviderImage} rounded>
                        <div className="space-y-1 font-medium dark:text-white">
                            <div>{ServiceProviderName}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
                        </div>
                    </Avatar>
                    <div className='flex mt-8 justify-between items-center'>
                        <h4 className='text-2xl font-semibold'>{PackagePrice}</h4>
                        <Link to={`/services/${id}`}>
                            <button className='bg-[#4a7ddf] px-8 py-3 rounded-lg text-white'>View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Service;
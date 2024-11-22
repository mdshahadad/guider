import { Avatar } from "flowbite-react";

const Service = ({ tour }) => {
    const { DestinationImage, DestinationDescription, PackagePrice, ServiceProviderName, ServiceProviderImage, TourPackage } = tour;

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
                    <div className='flex mt-8 justify-between items-center px-10'>
                        <h4 className='text-4xl font-semibold'>{PackagePrice}</h4>
                        <button className='bg-[#4a7ddf] px-8 py-4 rounded-md text-white'>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
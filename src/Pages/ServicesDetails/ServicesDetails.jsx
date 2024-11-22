import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ServicesDetails = () => {
    const [tours, setTours] = useState([]);
    const params = useParams();
    console.log(tours, parseInt(params.id));

    useEffect(() => {
        fetch('../../../public/services.json')
            .then(res => res.json())
            .then(data => setTours(data))
    }, []);

    const filteredData = tours.filter(service => service?.id === parseInt(params?.id));
    console.log(filteredData);

    const { id, DestinationImage, DestinationDescription, PackagePrice, ServiceProviderName, ServiceProviderImage, TourPackage } = filteredData;


    return (
        <section className="bg-white">
            <img className='max-w-sm rounded-l-xl z-10' src={DestinationImage} alt="" />
            <p>{DestinationDescription}</p>
            <p>This is a service page</p>
        </section>
    );
};

export default ServicesDetails;
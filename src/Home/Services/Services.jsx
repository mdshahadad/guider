import sundarban from '../../../public/images/SundarbanImg.jpg';
import sajek from '../../../public/images/SajekImg.jpg';
import kashmir from '../../../public/images/KashmirImg.jpg';
import istanbul from '../../../public/images/IstanbulImg.jpg';
import { Avatar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setTours(data))
    }, [])


    return (
        <div className='mb-20 pt-32 space-y-12'>
            <h2 className='text-5xl font-bold text-center text-[#4a7ddf]'>POPULAR <span className='text-[#51c2e9]'>SERVICES</span></h2>
            <section className='grid grid-cols-2 gap-8 2xl:mx-20'>
                {
                    tours.slice(0, 4).map(tour => <Service key={tour.id} tour={tour}></Service>)
                }
            </section>
            <div className='flex justify-center'>
                <Link to="/services">
                    <button className='px-10 bg-[#4a7ddf] py-4 rounded-md text-white font-semibold'>Show All</button>
                </Link>
            </div>
        </div>
    );
};

export default Services;
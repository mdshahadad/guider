import { Link } from 'react-router-dom';
import kashmirSpecial from '../../public/images/houseBoat (1).jpg';

const SpecialTour = () => {
    return (
        <div className='max-w-7xl mx-auto mb-8 relative space-y-12'>
            <h2 className='text-5xl font-bold text-center text-[#4a7ddf]'>SPECIAL <span className='text-[#51c2e9]'>OFFER'S</span></h2>
            <img className='w-full rounded-xl' src={kashmirSpecial} alt="" />
            <div className='absolute bottom-28 z-10 left-20 text-white space-y-4'>
                <h3 className='text-white font-bold text-7xl'>Best February <span className='text-amber-500'>Deal</span></h3>
                <p className='text-lg'>Budget friendly tour at the colourful destination Kashmir </p>
                <Link to="/offers">
                    <button className='px-8 bg-[#4a7ddf] py-4 mt-4 rounded-md font-semibold'>Explore More</button>
                </Link>
            </div>
        </div>
    );
};

export default SpecialTour;
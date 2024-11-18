import moskow from '../../public/images/MoskowNewsLetter.jpg'
import { Link } from 'react-router-dom';

const NewsLetter = () => {
    return (
        <div className='max-w-7xl mx-auto mb-8 relative pt-20'>
            <img className='w-full rounded-xl' src={moskow} alt="" />
            <div className='absolute bottom-36 z-10 left-1/4 text-white space-y-2 w-1/2'>
                <h2 className='text-center font-bold text-5xl mb-4'><span className='text-amber-500'>Newsletter</span> SignUp</h2>
                <input className='border-0 rounded-md w-full h-14' type="text" placeholder='Enter email' />
                <div className='flex justify-center'>
                    <button className='px-8 bg-[#4a7ddf] py-4 mt-4 rounded-md font-semibold'>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
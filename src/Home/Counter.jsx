import CountUp from "react-countup";
import { MdLocationPin } from "react-icons/md";
import '../Home/Home.css';

const Counter = () => {
    return (
        <div className="space-y-20 text-white py-24">
            <h2 className="text-center text-6xl font-bold text-[#4a7ddf]">WE ARE <span className="text-[#51c2e9]">IN</span></h2>
            <div className="max-w-7xl mx-auto flex justify-around">
                <div className="space-y-2 text-center">
                    <div className="flex justify-center">
                        <MdLocationPin className="text-7xl text-white" />
                    </div>
                    <h2 className="text-6xl font-bold">
                        <CountUp className="text-[#4a7ddf]" start={0} end={45} duration={8}></CountUp>
                    </h2>
                    <p className="font-semibold text-2xl text-white">Country's</p>
                </div>
                <div className="space-y-2">
                    <div className="flex justify-center">
                        <MdLocationPin className="text-7xl" />
                    </div>
                    <h2 className="text-6xl font-bold">
                        <CountUp className="text-[#4a7ddf]" start={0} end={150} duration={8}></CountUp>
                    </h2>
                    <p className="font-semibold text-2xl text-center">City's</p>
                </div>
                <div className="space-y-2">
                    <div className="flex justify-center">
                        <MdLocationPin className="text-7xl" />
                    </div>
                    <h2 className="text-6xl font-bold">
                        <CountUp className="text-[#4a7ddf]" start={0} end={95} duration={8}></CountUp>
                    </h2>
                    <p className="font-semibold text-2xl text-center">Hotels</p>
                </div>
                <div className="space-y-2">
                    <div className="flex justify-center">
                        <MdLocationPin className="text-7xl" />
                    </div>
                    <h2 className="text-6xl font-bold">
                        <CountUp className="text-[#4a7ddf]" start={0} end={1000} duration={5}></CountUp>
                    </h2>
                    <p className="font-semibold text-2xl text-center">Have Guider</p>
                </div>
            </div>
        </div>
    );
};

export default Counter;
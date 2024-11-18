import Counter from "./Counter";
import FindGuide from "./FindGuide";
import NewsLetter from "./NewsLetter";
import Services from "./Services/Services";
import SpecialTour from "./SpecialTour";
import Slider from "./Swiper/Slider";
import TopCountry from "./TopCountry";
import './Home.css';


const Home = () => {
    return (
        <div className="bgImg">
            <div className="relative">
                <Slider></Slider>
                <FindGuide></FindGuide>
            </div>
            <div className="bg-white">
                <Services></Services>
                <SpecialTour></SpecialTour>
                <TopCountry></TopCountry>
            </div>
            <Counter></Counter>
            <div className="bg-white mb-20">
                <NewsLetter></NewsLetter>
            </div>
        </div>
    );
};

export default Home;
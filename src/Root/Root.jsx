import { Outlet } from "react-router-dom";
import NavHeader from "../Components/NavHeader";
import FooterCompo from "../Components/FooterCompo";
import '../Components/FooterCompo.css';

const Root = () => {
    return (
        <div className="relative">
            <NavHeader></NavHeader>
            <div className="outlet">
                <Outlet></Outlet>
                <div className="push"></div>
            </div>
            <FooterCompo></FooterCompo>
        </div>
    );
};

export default Root;
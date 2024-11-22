import { Dropdown, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import './NavHeader.css'

const NavHeader = () => {
    return (
        <section className="sticky top-0 bg-transparent z-20 bg-white">
            <Navbar className="max-w-7xl mx-auto py-2 bg-transparent">
                <Navbar.Brand href="/">
                    <img src="" className="mr-3 h-6 sm:h-9" alt="" />
                    <span className="self-center whitespace-nowrap text-2xl font-bold">Guider</span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Link to="/login" className="ml-2 bg-[#4a7ddf] hover:bg-[#51c2e9] hover:text-black rounded-md text-white flex items-center py-3 px-8 font-semibold transition-all duration-700">Login</Link>
                    <Link to='/signUp' className="ml-2 bg-[#4a7ddf] hover:bg-[#51c2e9] hover:text-black rounded-md text-white flex items-center py-3 px-8 font-semibold transition-all duration-700">Register</Link>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <NavLink className="navlink">Home</NavLink>
                    <NavLink to="/services" className="navlink">Services</NavLink>
                    <div className="flex">
                        <Dropdown
                            arrowIcon={false}
                            inline
                            label={
                                <NavLink className="navlink">Dashboard</NavLink>
                                // <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                            }
                        >
                            <Dropdown.Item>My Services</Dropdown.Item>
                            <Dropdown.Item>Add Services</Dropdown.Item>
                            <Dropdown.Item>My Schedules</Dropdown.Item>
                        </Dropdown>
                        <Navbar.Toggle />

                    </div>
                    <NavLink className="navlink">About</NavLink>
                    <NavLink className="navlink">Support</NavLink>
                </Navbar.Collapse>
            </Navbar>
        </section >
    );
};

export default NavHeader;
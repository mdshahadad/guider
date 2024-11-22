import { Footer } from "flowbite-react";
import './FooterCompo.css'

const FooterCompo = () => {
    return (
        <div className="bg-[#51c2e9]">
            <Footer container className="shadow-none bg-[#51c2e9] footer">
                <div className="w-full max-w-7xl mx-auto">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                        <div>
                            <span className="self-center whitespace-nowrap text-2xl font-bold">Guider</span>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                            <div>
                                <Footer.Title title="about" className="text-gray-700 text-lg" />
                                <Footer.LinkGroup col className="text-white">
                                    <Footer.Link href="#">Guider</Footer.Link>
                                    <Footer.Link href="#">Terms & Condition</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Follow us" className="text-gray-700 text-lg" />
                                <Footer.LinkGroup col className="text-white">
                                    <Footer.Link href="#">Github</Footer.Link>
                                    <Footer.Link href="#">Discord</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title className="text-gray-700 text-lg" title="Legal" />
                                <Footer.LinkGroup col className="text-white">
                                    <Footer.Link href="#">Privacy Policy</Footer.Link>
                                    <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                        </div>
                    </div>
                    <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright href="#" by="Guider" year={2024} />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            {/* <Footer.Icon href="#" icon={BsFacebook} />
                            <Footer.Icon href="#" icon={BsInstagram} />
                            <Footer.Icon href="#" icon={BsTwitter} />
                            <Footer.Icon href="#" icon={BsGithub} />
                            <Footer.Icon href="#" icon={BsDribbble} /> */}
                        </div>
                    </div>
                </div>
            </Footer>
        </div>
    );
};

export default FooterCompo;
import { Dropdown } from "flowbite-react";

const FindGuide = () => {

    const dropStyle = {
        borderRadius: '8px',
        marginRight: '10px',
        backgroundColor: '#51c2e9',
        border: 0,
        padding: '16px 64px',
        color: 'white',
    }

    return (
        <div className="absolute bottom-[-50px] left-[567.14px] z-10">
            <div className="flex backdrop-blur-sm bg-[#ffffff33] px-5 py-5">
                <div>
                    <Dropdown style={dropStyle} color="light" className="" label="Countries">
                        <Dropdown.Item className="flex justify-center">Bangladesh</Dropdown.Item>
                        <Dropdown.Item className="flex justify-center">India</Dropdown.Item>
                        <Dropdown.Item className="flex justify-center">Nepal</Dropdown.Item>
                        <Dropdown.Item className="flex justify-center">Malaysia</Dropdown.Item>
                    </Dropdown>
                </div>
                <div>
                    <Dropdown style={dropStyle} color="light" className="" label="Location">
                        <Dropdown.Item>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item>
                        <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown>
                </div>
                <button className="text-white font-semibold text-2xl
            bg-[#4a7ddf] py-4 px-16 rounded-lg">Find Guide</button>
            </div>
        </div>
    );
};

export default FindGuide;
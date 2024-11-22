import { Checkbox, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import './Authentication.css';
import GoogleSignIn from "./GoogleSignIn";

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLoginUser = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        loginUser(email, password)
            .then(user => {
                console.log(user);
                if (user) {
                    navigate('/')
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="authenticationBg min-h-screen mb-14">
            <div className="pt-44">
            </div>
            <form onSubmit={handleLoginUser} className="flex max-w-md ml-[1100px] flex-col gap-4 py-16 backdrop-blur-xl bg-[#ffffff33] rounded-lg px-10">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email" value="Email" className="text-md" />
                    </div>
                    <input
                        className="rounded-lg py-3 w-full border-0 border-white focus:ring-0 focus:outline-0 focus:border-0"
                        name="email"
                        id="email"
                        type="email"
                        placeholder="me@example.com"
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password" value="Password" className="text-md" />
                    </div>
                    <input
                        className="rounded-lg py-3 w-full border-0 border-white focus:ring-0 focus:outline-0 focus:border-0"
                        name="password"
                        id="password2"
                        type="password"
                        placeholder="Type Password"
                    />
                </div>
                <input type="submit" value="Login" className="bg-[#4a7ddf] text-white px-5 py-3 rounded-lg text-center mt-2 font-medium" />
                <p className="font-medium">Don't have an account? <Link to="/signUp" className="text-cyan-600">Register here</Link></p>
                {/* <p className="text-center font-medium text-xl">-- OR --</p> */}
                <GoogleSignIn></GoogleSignIn>
            </form>
        </div>
    );
};

export default Login;
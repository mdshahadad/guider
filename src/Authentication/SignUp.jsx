import { Checkbox, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import './Authentication.css';
import GoogleSignIn from "./GoogleSignIn";

const SignUp = () => {
    const { singUpUser } = useContext(AuthContext);

    const handleSingUpUser = e => {
        e.preventDefault();
        const form = e.target;
        // console.log(form)
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        singUpUser(email, password)
            .then(user => {
                console.log('User singupded: ', user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="authenticationBg min-h-screen mb-14">
            <div className="pt-20">
            </div>
            <form onSubmit={handleSingUpUser} className="flex max-w-md ml-[1100px] flex-col gap-4 py-16 backdrop-blur-xl bg-[#ffffff50] rounded-lg px-10">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="name" value="Name" className="text-md" />
                    </div>
                    <TextInput name="name" id="name" type="text" placeholder="Name" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email2" value="Email" className="text-md" />
                    </div>
                    <TextInput name="email" id="email2" type="email" placeholder="name@email.com" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password2" value="Password" className="text-md" />
                    </div>
                    <TextInput name="password" id="password2" type="password" required shadow placeholder="Password" />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="image" value="Image URL" className="text-md" />
                    </div>
                    <TextInput name="Image" id="image" type="text" required shadow placeholder="Image" />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="agree" />
                    <Label htmlFor="agree" className="flex">
                        I agree with the&nbsp;
                        <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
                            terms and conditions
                        </Link>
                    </Label>
                </div>
                <input type="submit" value="Register" className="bg-[#4a7ddf] text-white px-5 py-2 rounded-md text-center font-medium" />
                <p className="font-medium">Have an account? <Link to="/login" className="text-cyan-600">Login here</Link></p>

                <p className="text-center font-medium text-xl">-- OR --</p>
                <GoogleSignIn></GoogleSignIn>
            </form>
        </div>
    );
};

export default SignUp;
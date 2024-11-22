import { GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { FcGoogle } from "react-icons/fc";

const provider = new GoogleAuthProvider();

const GoogleSignIn = () => {
    const { googleLoginIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleLoginIn(provider)
            .then(r => {
                console.log(r);
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="bg-backdrop-blur-lg rounded-full bg-white py-2 mt-4">
            <p onClick={handleGoogleSignIn} className="cursor-pointer flex justify-center items-center font-semibold">
                <FcGoogle className="text-4xl mr-2"></FcGoogle> Sign in with google
            </p>
        </div>
    );
};

export default GoogleSignIn;
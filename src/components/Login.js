import { useState } from "react";
import Header from "./Header";
const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const toggleSignInForm = () => {
        setIsSignIn(!isSignIn);
    }
    return <div><Header />
        <div
            className="absolute">
            <img alt="" src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/eb4a50d0-08bd-4c3a-92af-b97dba133300/FR-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg"></img>
        </div>
        <form className="w-3/12 absolute p-14 bg-black my-24 mx-auto left-0 right-0 text-white rounded">
            <h1 className="p-2 font-extrabold text-3xl">{ isSignIn ? "Sign In" : "Sign Up"}</h1>
            {!isSignIn && (<input  type="text" placeholder="Full Name" className="p-2 m-4 w-full bg-gray-800"></input>)}
            <input type="email" placeholder="Email Address" className="p-2 m-4 w-full bg-gray-800"></input>
            <input type="password" placeholder="Password" className="p-2 m-4 w-full  bg-gray-800"></input>
            <button className="p-2 m-4 bg-red-500 w-full">{ isSignIn ? "Sign In" : "Sign Up"}</button>
            <p className="p-2 m-4 cursor-pointer" onClick={toggleSignInForm}>{ isSignIn ? "Dont have account? Sign Up now" : "Already have an account ? Sign In now"} </p>
        </form>
    </div>
}

export default Login;
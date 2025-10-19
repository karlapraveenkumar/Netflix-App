import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import  {updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";
import { Background_image } from "../utils/constants";

const Login = ()=>{

    const dispatch = useDispatch();

    const[isSignInForm , setIsSignInForm] = useState(true);
    const[errorMessage, seterrorMessage] = useState(null);


    const email = useRef(null);
    const password = useRef(null);
    const name=  useRef(null);

    const handleButtonClick = ()=>{
        const message = checkValidData(email.current.value, password.current.value);
        seterrorMessage(message)

        if(message) return

        // SignUp and SignIn Logic

        if(!isSignInForm){
            // SignUp Logic
            createUserWithEmailAndPassword(
                auth, 
                email.current.value, 
                password.current.value
            )
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: USER_AVATAR
                        })
                        .then(() => {
                            // Profile updated!
                            // auth is the new updated value from firebase (and in Store)
                            // here user not updated with displayName and photoURL
                            const {uid, email, displayName} = auth.currentUser;
                            dispatch(
                                addUser({
                                    uid:uid,
                                    email:email,
                                    displayName:displayName,
                                    photoURL:USER_AVATAR
                                })
                            );                          
                            //navigate("/browse"); changed this logic to header
                        })
                        .catch((error) => {
                            // An error occurred
                            seterrorMessage(error.message);
                        });                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrorMessage(errorMessage);
                });

        }else{
            // SignIn Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    //const user = userCredential.user;
                    //navigate("/browse"). we have changed logic to header
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrorMessage(errorMessage);
                });

        }
    }

    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm);
    }

    return(
        <div className="w-screen">
            
            <Header/>
            

            <div className="absolute">
                <img className="h-screen object-cover md:w-screen" src={Background_image}
                    alt="Background_image" />
            </div>
            <p className="absolute text-red-400 font-bold text-lg py-2 z-50 ml-[590px] mt-36  ">{errorMessage}</p>
            <form onSubmit={(e)=>e.preventDefault()} className="absolute bg-black w-full md:w-3/12 p-10  mx-auto my-36 right-0 left-0 text-white rounded-lg bg-opacity-80">
                
                <h1 className="font-bold text-white text-2xl md:text-3xl my-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input ref={name} type="text" placeholder="Full Name" className="p-2 my-4 w-full bg-gray-700"/>}
                <input
                    ref={email}
                    type="text" placeholder="Email or phone number" className="p-2 my-4 w-full bg-gray-700"/>

                <input
                    ref={password}
                    type="password" placeholder="Password" className="p-2 my-4 w-full bg-gray-700"/>

                <button 
                    className="p-2 my-6 bg-red-700  hover:bg-red-800 text-white text-sm font-bold w-full rounded-lg focus:ring-1 ring-offset-2"
                    onClick={handleButtonClick}
                >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>

                

                <p className="py-6 cursor-pointer hover:underline" 
                    onClick={toggleSignInForm}
                >
                    {isSignInForm ? "New to Netflix? SignUp Now" : "Already registered? SignIn Now"}
                </p>
            </form>
        </div>
    )   
}
export default Login;
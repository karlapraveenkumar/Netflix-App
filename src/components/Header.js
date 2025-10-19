import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useEffect } from 'react';
import { LOGO } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import {SUPPORTED_LANGUAGES} from "../utils/constants";
import { changeLanguage } from '../utils/configSlice';


const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleloginbutton = ()=>{
    setIsOpen(!isOpen);
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store)=> store.user)

  const hadleSignOut = ()=>{
    const auth = getAuth();
    signOut(auth).then(() => {})
    .catch((error) => {
      // An error happened.Move to error page
    });
  }

  useEffect(()=>{
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {

      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        //User SignIn/ SingUp
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
        navigate("/browse")
      
      }else{
        // User is signed out
        dispatch(removeUser());
        navigate("/");

      }
    });
    return ()=> unsubscribe();
  },[]);

  const handleGptSearchClick = ()=>{
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e)=>{
    dispatch(changeLanguage(e.target.value));
  }

  const showGptSearch = useSelector(store => store.gpt.showGptSearch);


  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col  md:flex-row justify-between '>
        <img src={LOGO}
            alt='logo' className='w-44 mx-auto md:mx-0'
        />
        { user && <div className='flex p-2 justify-between'>
          {
              showGptSearch && (<select className='p-2 m-2 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 ring-offset-2' onChange={handleLanguageChange}>
                {
                  SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option> )
                }

            </select>)
          }

          <button
            onClick={handleGptSearchClick}
            className='py-2 px-4 mx-4 my-2 bg-purple-800 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 ring-offset-2'>
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>

          <div className='flex'>
            <img className='w-12 h-12 hidden md:block rounded-lg cursor-pointer'
              src={user?.photoURL}
              alt='usericon'
              onClick={toggleloginbutton}
            />
            <span className='mt-5 cursor-pointer'>{isOpen ? "🔽" : "🔼"}</span>

            <div className='absolute  mt-12'>
              {isOpen && 
                <div><button onClick={hadleSignOut} className='font-bold text-white active:text-red-700'>SignOut</button> </div>}
            </div>

            

          </div>


          {/*
          <button className='font-bold text-white'>(SignOut)</button> */}

        </div>}
        
    </div>
  )
}

export default Header
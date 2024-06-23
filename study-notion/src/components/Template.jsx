import React from "react"
import SignupForm from "./SignupForm"
import LoginForm from "./LoginForm"
import frameImage from "../assets/frame.png"
import { FcGoogle } from "react-icons/fc";

const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {
  return (
    <div className="flex justify-between w-11/12 max-w-[1160px] mx-auto py-12 gap-x-12 gap-y-0 ">
        <div className="max-w-[450px] w-11/12">
            <div>
                <h1 className=" text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">{title}</h1>
                <p className="text-[1.125rem] leading-[1.625rem] mt-4">
                    <span className=" text-richblack-100">{desc1}</span> <br/>
                    <span className=" text-blue-100 italic">{desc2}</span>
                </p>
            </div>

            {
                formtype == "signup" ? 
                (<SignupForm setIsLoggedIn={setIsLoggedIn} />) : (<LoginForm setIsLoggedIn={setIsLoggedIn} />)
            }

            <div className="flex flex-row w-full items-center my-4 gap-x-2">
                <div className="w-full h-[1px] bg-richblack-200"></div>
                <p className="text-richblack-200 font-medium leading-[1.375rem]">Or</p>
                <dir className="w-full h-[1px] bg-richblack-200"></dir>
            </div>

            <button className="w-full flex items-center justify-center rounded-[8px] font-medium text-richblack-100 border border-richblack-200 px-[12px] py-[8px] gap-x-2 mt-6">
                <FcGoogle/>
                <p>Sign in with Google</p> 
            </button>
        </div>

        <div className="relative w-11/12 max-w-[450px]">
            <img 
                src={frameImage} 
                width={558} 
                height={504} 
                loading="lazy"
            />
            <img 
                src={image} 
                width={558} 
                height={504} 
                loading="lazy"
                className="absolute -top-4 right-4"
            />
        </div>

    </div>
  )
};

export default Template;
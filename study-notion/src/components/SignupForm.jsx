import React, { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SignupForm = (props) => {
  let setIsLoggedIn = props.setIsLoggedIn
  const navigate = useNavigate();
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [accountType, setAccountType] = useState("student");
  const [formData, setFormData] = useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  )


  function changeHandler(event){
    setFormData( (prevData) => {
      return {
        ...prevData,
        [event.target.name] : event.target.value
      }
    })
  }

  function submitHandler(event){
    event.preventDefault();
    if(formData.password !== formData.confirmPassword){
      toast.error("Password donot match");
    }
    else{
      setIsLoggedIn(true);
      toast.success("Account Created");
      navigate("/dashboard");
    }
  }


  return (
    <div>
        <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max  border-b-richblack-200 border-b-[1px]">
          <button 
            onClick={() => setAccountType("student")}
            className={`${accountType === "student"? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
          >Student</button>
          <button 
            onClick={() => setAccountType("instructor")}
            className={`${accountType === "instructor"? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-s`}
          >Instructor</button>
        </div>

        <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">
          <div className="flex gap-x-5">
            <label className="w-full">
              <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.275rem]">
                First Name<sup className="text-pink-200">*</sup>
              </p>
              <input 
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                name="firstName"
                onChange={changeHandler}
                className="rounded-[0.5rem] bg-richblack-800 w-full p-[12px] text-richblack-5 border-b-richblack-200 border-b-[1px]"
                required 
              />
            </label>

            <label className="w-full">
              <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.275rem]">
                Last Name<sup className="text-pink-200">*</sup>
              </p>
              <input 
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                name="lastName"
                onChange={changeHandler}
                className="rounded-[0.5rem] bg-richblack-800 w-full p-[12px] text-richblack-5 border-b-richblack-200 border-b-[1px]"
                required 
              />
            </label>

          </div>

          <div>
            <label>
              <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.275rem]">
                Email Address<sup className="text-pink-200">*</sup>
              </p>
              <input 
                type="email"
                placeholder="Email Address"
                value={formData.email}
                name="email"
                onChange={changeHandler}
                className="rounded-[0.5rem] bg-richblack-800 w-full p-[12px] text-richblack-5 border-b-richblack-200 border-b-[1px]"
                required 
              />
            </label>
          </div>
           
          <div className="flex gap-x-5">
            <label  className="w-full relative">
              <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.275rem]">
                Create Password<sup className="text-pink-200">*</sup>
              </p>
              <input
                required 
                type={showPassword1 ? "text" : "password"}
                value={formData.password}
                name="password"
                onChange={changeHandler}
                className="rounded-[0.5rem] bg-richblack-800 w-full p-[12px] text-richblack-5 border-b-richblack-200 border-b-[1px]"
                placeholder="Create Password"
              />

              <span className="absolute right-3 top-[38px] cursor-pointer" onClick={() => setShowPassword1((prev) => !prev)}>
                {
                  !showPassword1 ? ( <AiOutlineEye  fontSize={24} color="#AFB2BF"/> ) : (<AiOutlineEyeInvisible  fontSize={24} color="#AFB2BF"/>)
                }
              </span>
            </label>

            <label  className="w-full relative">
              <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.275rem]">
                Confirm Password<sup className="text-pink-200">*</sup>
              </p>
              <input
                required 
                type={showPassword2 ? "text" : "password"}
                value={formData.confirmPassword}
                name="confirmPassword"
                onChange={changeHandler}
                placeholder="Confrim Password"
                className="rounded-[0.5rem] bg-richblack-800 w-full p-[12px] text-richblack-5 border-b-richblack-200 border-b-[1px]"
              />

              <span className="absolute right-3 top-[38px] cursor-pointer" onClick={() => setShowPassword2((prev) => !prev)}>
                {
                  !showPassword2 ? ( <AiOutlineEye  fontSize={24} color="#AFB2BF"/> ) : (<AiOutlineEyeInvisible  fontSize={24} color="#AFB2BF"/>)
                }
              </span>
            </label>

          </div>

          <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
            Create Account
          </button>
        </form>
    </div>
  )
};

export default SignupForm;

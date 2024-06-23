import React, { useState } from "react"
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = (props) => {
  let setIsLoggedIn = props.setIsLoggedIn
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

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
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
  }

  return (
    <form onSubmit={submitHandler}
      className="flex flex-col w-full gap-y-4 mt-6"
    >
      <label className="w-full">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.275rem]">
          Email Addresss<sup className="text-pink-200">*</sup>
        </p>
        <input
          required 
          type="email"
          value={formData.email}
          name="email"
          onChange={changeHandler}
          placeholder="Enter email address"
          className="rounded-[0.5rem] bg-richblack-800 w-full p-[12px] text-richblack-5 border-b-richblack-200 border-b-[1px]"
        />
      </label>

      <label className="w-full relative">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.275rem]">
          Password<sup className="text-pink-200">*</sup>
        </p>
        <input
          required 
          type={showPassword ? "text" : "password"}
          value={formData.password}
          name="password"
          onChange={changeHandler}
          placeholder="Enter Password"
          className="rounded-[0.5rem] bg-richblack-800 w-full p-[12px] text-richblack-5 border-b-richblack-200 border-b-[1px]"
        />

        <span
          className="absolute right-3 top-[38px] cursor-pointer" 
          onClick={() => setShowPassword((prev) => !prev)}>
          {
            !showPassword ? ( <AiOutlineEye fontSize={24} color="#AFB2BF" /> ) : (<AiOutlineEyeInvisible fontSize={24} color="#AFB2BF" />)
          }
        </span>

        <Link to="#">
          <p className="text-xs mt-1 text-blue-100 text-right">Forgot Passoword ?</p>
        </Link>
      </label>

      <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
        Sign In
      </button>
    </form>
  )
};

export default LoginForm;

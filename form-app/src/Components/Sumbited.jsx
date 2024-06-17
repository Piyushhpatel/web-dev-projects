import React from "react"
import checked from "../assets/checked.png";

const Sumbitted = (props) => {
  let anotherFromHandler = props.anotherFromHandler;

  return (
    <div className="transition-all duration-200 bg-white md:w-1/2 md:max-w-[1000px] rounded-md p-[30px] mx-auto  mt-20 flex flex-col gap-2 shadow-md" 
    >
      <img src={checked} className="w-[200px] aspect-square mx-auto mb-10"/>
      <h1 className="text-slate-900 text-2xl font-bold text-center mx-10">Your Form is Submitted</h1>
      <button
       onClick={anotherFromHandler}
       className='bg-blue-500 max-w-[200px] mx-auto mt-6 font-medium text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all duration-200'>Start New Form</button>
    </div>
  )
};

export default Sumbitted;
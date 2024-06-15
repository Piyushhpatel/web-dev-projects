import React, { useState } from "react"
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonials = (props) => {
  let reviews = props.reviews;
  const [index, setIndex] = useState(0);

  function leftShitHandler(){
    if(index - 1 < 0){
        setIndex(reviews.length - 1);
    }
    else{
        setIndex(index - 1);
    }
  }

  function rightShitHandler(){
    if(index + 1 >= reviews.length){
        setIndex(0);
    }
    else{
        setIndex(index + 1);
    }
  }

  function supriseHandler(){
    setIndex(Math.floor(Math.random() * reviews.length));
  }


  return (
    <div className="w-[85vw] md:w-[700px] bg-white rounded-md flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl">
      <Card review={reviews[index]} />
      <div className="flex gap-3 text-3xl mt-10 text-violet-400 font-bold items-center justify-center">
        <button 
        onClick={leftShitHandler}
        className="cursor-pointer hover:text-violet-500">
            <FiChevronLeft/>
        </button>
        <button
        onClick={rightShitHandler}
        className="cursor-pointer hover:text-violet-500">
            <FiChevronRight/>
        </button>
      </div>

      <div className="mt-6">
        <button 
        onClick={supriseHandler}
        className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg">
            Suprise Me
        </button>
      </div>

    </div>
  )
};

export default Testimonials;

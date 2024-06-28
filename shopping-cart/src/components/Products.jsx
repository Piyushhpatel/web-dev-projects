import React, { useState } from "react"
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/CartSlice";

const Products = (props) => {
  let post = props.post;
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  let title = post.title;
  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item Added to Cart");
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from cart");
  }


  return (
    <div className="flex flex-col items-center justify-center hover:scale-110 transition-all duration-300 ease-in shadow-2xl gap-3 p-4 mt-10 ml-5 rounded-xl">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{title.length > 10 ? `${title.substr(0,16)}...`: `${title}`}</p>
      </div>
      <div>
        <p
        className="w-40 text-gray-400 font-normal text-[10px] text-left"
        >{post.description.split(" ").slice(0, 10).join(" ") + "..." }</p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} className="w-full h-full" />
      </div>
      
      <div className="flex items-center justify-between gap-16 w-full mt-5">
        <div>
          <p className="text-green-600 font-bold">${post.price}</p>
        </div>
        <div>
          {
            cart.some((p) => p.id === post.id) ? 
            <button
              className="text-gray-700 border-2 border-gray-700 rounded-full font-bold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition-all ease-in duration-300"
              onClick={removeFromCart}>Remove Item</button> :
            <button
              className="text-gray-700 border-2 border-gray-700 rounded-full font-bold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition-all ease-in duration-300"
              onClick={addToCart}>Add to Cart</button>
          }      
        </div>
      </div>

    </div>
  )
};

export default Products;

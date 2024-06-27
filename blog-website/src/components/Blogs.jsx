import React, { useContext } from "react"
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import Card from "./Card";

const Blogs = (props) => {
  const {posts, loading} = useContext(AppContext);

  return (
    <div className="my-[100px] pb-[80px]">
      {
        loading ? (
            <Spinner/>
        ) : (
          posts.length === 0 ? (
            <div className="flex items-start text-center font-bold text-xl">
              No Post Found
            </div>
          ) : 
          <div className="flex flex-col gap-y-10 my-4">
            {
              posts.map((post) => {
                return (
                  <Card key={post.id} post={post}/>
                )
              })
            }
          </div>
        )
      }
    </div>
  )
};

export default Blogs;

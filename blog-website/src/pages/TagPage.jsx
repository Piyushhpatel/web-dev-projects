import React from "react"
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "../components/Blogs";

const TagPage = (props) => {
  const location = useLocation();
  const navigation = useNavigate();
  const tag = location.pathname.split("/").at(-1);

  return (
    <div>
      <Header/>

      <div>
        <button onClick={() => navigation(-1)}>
            Back
        </button>
        <h2>
            Blogs Tagged <span>{`#${tag}`}</span>
        </h2>
      </div>
      <Blogs/>
      <Pagination/>
    </div>
  )
};

export default TagPage;

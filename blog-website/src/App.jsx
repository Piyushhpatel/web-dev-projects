import React, { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import Home from "./pages/Home";
import TagPage from "./pages/TagPage";
import CategoryPage from "./pages/CategoryPage";
import BlogPage from "./pages/BlogPage";

const App = (props) => {
  const {fetchBlogPosts} = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    if(location.pathname.includes("tag")){
      const tag  = location.pathname.split("/").at(-1).replace("-", " ");
      fetchBlogPosts(Number(page), tag);
    }
    else if(location.pathname.includes("categories")){
      const categories = location.pathname.split("/").at(-1).replace("-", " ");
      fetchBlogPosts(Number(page), categories);
    }
    else{
      fetchBlogPosts(Number(page));
    }
    
  }, [location.pathname, location.search]);

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/blog/:blogId" element={<BlogPage/>} />
      <Route path="/tags/:tag" element={<TagPage/>} />
      <Route path="/categories/:category" element={<CategoryPage/>} />
    </Routes>
  )
};

export default App;

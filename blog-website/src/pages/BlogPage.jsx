import React, { useContext, useEffect, useLayoutEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import {AppContext} from "../context/AppContext"
import Card from "../components/Card";
import Header from "../components/Header";
import Spinner from "../components/Spinner";

const BlogPage = (props) => {
    const [blog, setBlog] = useState(null);
    const [relatedblogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {loading, setLoading} = useContext(AppContext);

    const blogId = location.pathname.split('/').at(-1);
    
    async function fetchRelatedBlogs(){
        setLoading(true);
        let url = `https://codehelp-apis.vercel.app/api/get-blog?blogId=${blogId}`;
        try{
            const res = await fetch(url);
            const data = await res.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
            console.log("Blog");
            console.log(blog);
            console.log("Related Blogs");
            console.log(relatedblogs);
        }
        catch(error){}
    }

    useEffect(() => {
        if(blogId){
            fetchRelatedBlogs();
        }
    }, [location.pathname]);

    return (
    <div className="my-[100px] flex flex-col justify-center max-w-2xl w-11/12 mx-auto">
        <Header/>
        <div>
            <button
                className="py-1 px-4 border-2 border-gray-300 rounded-md"
                onClick={() => navigation(-1)}>
                Back
            </button>
        </div>
        {
            loading ?
            ( <Spinner/> ) :
            blog ?
            (
                <div>
                    <Card post={blog}/>
                    <h2 className="font-bold text-3xl max-w-2xl mt-12 mb-8 ">Related Blogs</h2>
                    {
                        relatedblogs.map((post) => {
                            return (
                                <div key={post.id}>
                                    <Card post={post}/>
                                </div>
                            )
                        })
                    }
                </div>

            ) :
            <div>
                <p>
                    No Blog Found
                </p>
            </div>
        }
    </div>
    )
};

export default BlogPage;

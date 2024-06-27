import { createContext, useEffect, useState } from "react"
import { baseUrl } from "../baseUrl.js"
import { useNavigate } from "react-router-dom";

//Three Steps of Context API
// 1. Create Context
// 2. Providing of Context to children
// 3. Consuming of Context


//Step 1: Create the Context
export const AppContext = createContext();

//Step 2; Provider
export default function AppContextProvider({children}){
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const navigate = useNavigate();

    function handlePageChange(page){
        navigate({search : `?page=${page}`});
        setPage(page);
    }

    // Data Filling
    async function fetchBlogPosts(page = 1, tag = null, category = null){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;

        if(tag) {
            url += `&tag=${tag}`;
        }

        if(category){
            url += `&category=${category}`;
        }

        try{
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }
        catch(error){
            console.log("Couldn't Fetch the data");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        finally{
            setLoading(false);
        }
    }

    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    }

    return <AppContext.Provider value={value}>
        {children}  
    </AppContext.Provider>
}
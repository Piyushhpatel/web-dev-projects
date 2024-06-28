import React, { useEffect, useState } from "react"
import Products from "../components/Products"
import Spinner from "../components/Spinner";

const Home = (props) => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductsData(){
    setLoading(true);
    try{
        const res = await fetch(API_URL);
        const data = await res.json();
        setPosts(data);
    }
    catch(error) {}
    setLoading(false);
  }

  useEffect(() => {
    fetchProductsData();
  }, []);

  return (
    <div>
        {
            loading ?
            <div className="min-h-[80vh] flex flex-col items-center justify-center">
              <Spinner />
            </div>
           :
            posts.length > 0 ?
            (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
                    {
                        posts.map( (post) => {
                            return (<Products key={post.id}  post={post} />)
                        })
                    }
                </div>
            ) :

            <div className="flex justify-center items-center">
                <p>Not Found</p>
            </div>

        }
    </div>
  )
};

export default Home;

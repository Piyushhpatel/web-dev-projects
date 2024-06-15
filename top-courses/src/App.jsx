import { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Spinner from "./Components/Spinner"
import {apiUrl, filterData} from './data';
import { useState } from "react";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import { toast } from "react-toastify";

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  useEffect( () => {
    async function fetchData(){
      setLoading(true);
      try{
        const response = await fetch(apiUrl);
        const output = await response.json();
        setCourses(output.data);
      }
      catch(error){
        toast.error("Error Getting Data");
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex-col flex bg-slate-500">
      <Navbar/>
      <Filter 
        filterData={filterData}
        category={category}
        setCategory={setCategory}
      />
      <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
          {loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)}
      </div>
      
    </div>
  )
}

export default App

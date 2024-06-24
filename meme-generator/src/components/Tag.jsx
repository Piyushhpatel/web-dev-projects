import { useState } from "react";
import Spinner from "./Spinner"
import useGif from "../hooks/useGif";

const Tag = (props) => {
  const [tag, setTag] = useState('tom and jerry');

  const {gif, loading, fetchData} = useGif(tag);

  function changeHandler(event){
    setTag(event.target.value);
  }

  return (
    <div className="mt-10 w-1/2 bg-blue-400 border border-black rounded-xl flex flex-col gap-3 items-center p-[10px]">
      <h1 className="font-bold underline text-2xl uppercase">{`Random ${tag} Gif`}</h1>
      {
        loading ? <Spinner/> : <img src={gif} width={450} />
      }

      <input
        className="w-10/12 bg-blue-100 py-2 text-lg rounded-lg text-center" 
        type="text" 
        placeholder="Enter Random Text"
        value={tag}
        name="tag"
        onChange={changeHandler}
      />

      <button
        className="w-10/12 bg-blue-100 py-3 text-lg rounded-lg"
        onClick={() => fetchData(tag)}
      >Generate</button>
    </div>
  )
};

export default Tag;

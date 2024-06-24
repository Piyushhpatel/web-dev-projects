import useGif from "../hooks/useGif";
import Spinner from "./Spinner"

const Random = ( ) => {
  const {gif, loading, fetchData} = useGif();

  return (
    <div className="w-1/2 bg-green-500 border border-black rounded-xl flex flex-col gap-3 items-center p-[10px]">
      <h1 className="font-bold underline text-2xl uppercase">Random Gif</h1>
      {
        loading ? <Spinner/> : <img src={gif} width={450} />
      }
      <button
        className="w-10/12 bg-green-200 py-3 text-lg rounded-lg"
        onClick={() => fetchData()}
      >Generate</button>
    </div>
  )
};

export default Random;

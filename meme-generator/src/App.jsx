import React from "react";
import Tag from "./components/Tag";
import Random from "./components/Random";

const App = (props) => {
  return (
    <div className="w-full min-h-screen flex flex-col background">
      <h1 className="bg-white text-center mt-[40px] p-3 m-8 rounded-2xl text-3xl font-bold">Random Gifs</h1>
      <div className="flex flex-col w-full items-center">
        <Random/>
        <Tag/>
      </div>
    </div>
  )
};

export default App;

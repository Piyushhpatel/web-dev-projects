import React, { useState } from "react"
import Form from "./Components/Form";
import Sumbitted from "./Components/Sumbited";

const App = () => {
  const [submitState, setSubmitState] = useState(false);

  function anotherFromHandler(){
    setSubmitState(false);
  }

  return (
    <div className=" bg-slate-900 min-h-[100vh]">
      <h1 className="text-white text-center text-3xl p-5 font-bold">Simple Form App</h1>
      {
        submitState ? (<Sumbitted anotherFromHandler={anotherFromHandler}/>) : 
        <Form submitState={submitState} setSubmitState={setSubmitState}/>
      }
    </div>
  )
};

export default App;

import { useState } from 'react';
import '../global.css'

const Counter = () => {
    const [number, setNumber] = useState(0);

    function Increment(){
        setNumber(number+1);
    }

    function Decrement(){
        if(number > 0){
          setNumber(number-1);
        }
    }

    function resetHandler(){
        setNumber(0);
    }    

    return (
        <div className='flex flex-col gap-5 justify-center items-center'>
            <h3 className='text-xl font-bold text-center leading-[3rem] text-blue-500'>Increment or Decrement</h3>
            <div className='mx-auto flex justify-between items-center bg-white rounded-xl w-[220px] p-2'>
                <button className='font-bold w-[60px] h-[50px] border-r border-black text-[2rem] text-center cursor-pointer' onClick={Decrement}>-</button>
                <div className='font-bold w-[60px] h-[50px] border-black text-[2rem] text-center'>{number}</div>
                <button  className='font-bold w-[60px] h-[50px] border-l border-black text-[2rem] text-center cursor-pointer' onClick={Increment}>+</button>
            </div>
            <button className='max-w-[100px] bg-blue-500 text-white font-bold text-lg p-2 px-5 rounded-xl hover:bg-blue-800
            ' onClick={resetHandler}>Reset</button>
        </div>
    );
}

export default Counter;
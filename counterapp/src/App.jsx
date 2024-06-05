import Counter from './Components/Counter';
import './global.css'

function App() {

  return (
    <div className='relative h-[100vh] bg-slate-950 flex flex-col items-center justify-center'>
      <h1 className=' bg-blue-950 w-full text-center text-white font-bold absolute top-0 text-4xl p-2'>Counter App</h1>
      <div>
        <Counter/>
      </div>
    </div>
  )
}

export default App

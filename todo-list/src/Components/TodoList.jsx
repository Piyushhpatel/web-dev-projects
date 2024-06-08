import { useState } from 'react';
import AddTaskForm from './AddTaskForm.jsx';
import TaskList from './TaskList.jsx';

const TodoList = () => {
    const Data =[];
    
    const [data, setData] = useState(Data);
    const [length, setLength] = useState(Data.length);
    
    function addNewTask(newtask){
        data.push(newtask);
        setData(data);
        setLength(data.length);
        console.log(data);
    }

    function removeTask(id){
        const newdata = data.filter(d => d.id !== id);
        setData(newdata);
    }

    return (
        <div className='container'>
            <h2 className='title'>To Do List</h2>
            <div className="task-container">
            <AddTaskForm length={length} addNewTask={addNewTask}/>
            {data.length ? <TaskList data={data} removeTask={removeTask}/> : <h2 className='empty-list'>Nothing to see here</h2>}
            </div>
        </div>
    )
}

export default TodoList;
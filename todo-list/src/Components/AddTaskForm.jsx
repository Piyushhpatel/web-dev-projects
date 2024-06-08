import { useState } from "react";

const AddTaskForm = ({length, addNewTask}) =>{

    const [task, setTask] = useState('');

    function inputTaskHandler(event){
        setTask(event.target.value);
    }

    function FormHandler(event) {
        event.preventDefault();

        if(task !== ''){
            const newtask = {
                id: length+1,
                task: task,
            };
    
            addNewTask(newtask);
    
        }
        setTask('');
    }

    return(
        <form onSubmit={FormHandler} className="form">
            <input type="text" value={task} placeholder="Add Task" onChange={inputTaskHandler}/>
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTaskForm;
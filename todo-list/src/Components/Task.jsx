import { useState } from "react";

const Task = ({id, task, removeTask}) => {
    return (
        <div className="tasks">
            <h3>{task}</h3>
            <button onClick={() => removeTask(id)}>x</button>
        </div>
    )
}

export default Task;
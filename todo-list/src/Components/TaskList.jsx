import Task from "./Task";

const TaskList = ({data, removeTask}) => {
    return (
        <div className="task-list">
            {
                data && data.map((d) => {
                    return (<Task key={d.id} {...d} removeTask={removeTask}/>);
                })
            }
        </div>
    );
}

export default TaskList;
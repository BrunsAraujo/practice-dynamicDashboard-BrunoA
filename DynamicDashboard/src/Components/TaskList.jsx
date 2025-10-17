function TaskList(){

    const tasks = [
        {taskName: "Study", completed: false},
        {taskName: "Weight lift", completed: true},
        {taskName: "Grocery Shopping", completed: false},
        {taskName: "Meal Prep", completed: true}
    ];
return(
    <div>
        <h2> My Tasks </h2>
        <ul>
            {tasks.map((task, index) => (
                <li key = {index}>
                {task.completed ? "✅ " : "❌"} {task.taskName}
                </li>
        ))}
        </ul>
        </div>
        );
        }
        
export default TaskList
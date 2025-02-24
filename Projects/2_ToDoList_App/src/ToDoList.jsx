import React, {useState} from "react";

function ToDoList () {


    const [tasks, setTasks] = useState(["a"]);
    const [newTask, setNewTask] = useState("");

    const [todosDate, setTodosDate] = useState(()=> {
        const date = new Date();
        return {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate()
        };
    });


    function handleAdd () {   
        if(newTask.trim() !== "")  {
            setTasks(t => [...t, newTask]);

            setNewTask(""); 
        }      
    }

    function deleteTask (index) {
        setTasks(t => t.filter((_,i) => i !== index));
    }

    function handleChange (event) {
        setNewTask(event.target.value);
    }

    function moveTaskUp (index) {
        if(index > 0) {
            // spread current tasks
            const updatedTask = [...tasks];

            // array destructuring
            // sswapping 2 elements of an array
            [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]];
            setTasks(updatedTask);
        }
    }

    function moveTaskDown (index) {
        if(index < tasks.length - 1) {
            // spread current tasks
            const updatedTask = [...tasks];

            // array destructuring
            // sswapping 2 elements of an array
            [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];
            setTasks(updatedTask);
        }
    }

    return (
        <div className="to-do-list">
            <h1>To Do List App</h1>

            <div>
            <input type="text" value={newTask} placeholder="Enter Your todos" onChange={handleChange} />
            <button className="add-btn" onClick={handleAdd}>Add to List</button>
            </div>

            <ol>
                {tasks.map((task,index) => 
                <li key={index} onClick={() => handeRemove(index)}>
                    <span className="text">{task}</span>
                    <button className="delete-btn" onClick={ ()=> deleteTask(index)}>Delete❌</button>
                    <button className="move-btn" onClick={ ()=> moveTaskUp(index)}>Up👆</button>
                    <button className="move-btn" onClick={ ()=> moveTaskDown(index)}>Down👇</button>
                    {/* {todosDate.year}-{todosDate.month}-{todosDate.day} */}
                </li>)}
            </ol>


        </div>
    );

}

export default ToDoList
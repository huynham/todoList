
import React, { useState } from 'react';
import AddTask from './AddTask';
import TodoList from './TodoList';

function TaskList() {
const [showAddForm, setshowAddform ] = useState(false);
const [namep,setName]=useState(["task-1","task-2"]);
    const setStatus = () => {
        setshowAddform(true);
    }
    const closeForm = () => {
        setshowAddform(false);
    }
    const addTask = (name) => {
      namep.push(name)
        
    }
   if (showAddForm === true){
       return (
        <AddTask addTask={addTask} closeForm={closeForm} />
       )
   }else {
        
            return (
                <div className="container">
                    <br />
                    <br />
                    <button type="button" className="btn btn-outline-primary" onClick={setStatus} >Add Task</button>
                    <h2>List Task</h2>
                    <table className="table table-striped">
                        
                            <tr>
                                <th>Name of task</th>
                            </tr>
                        
                        
                            {
                                namep.map(name=> {
                                    return <TodoList name={name}
                                    />
                                })
                            }
                        
                    </table>
                </div>
            );
        
   }
}

export default TaskList;
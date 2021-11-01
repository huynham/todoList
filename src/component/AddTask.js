
import React, { useState } from 'react';
import TaskList from './TaskList';

function AddTask(props) {
  const [name, setName] = useState("");

   const linkList = () => {
        props.closeForm()
    }
   const handleAddTask = () => {
        props.addTask(name);
        linkList();
    }
    const isChangedName = (e) => {
     
           setName(e.target.value);
        
    }

        if (props.showAddForm == true) {
            return (
                <TaskList />
            )
        } else {
            return (
                <React.Fragment>
                    <div className="container">
                        <h2>Add New Task</h2>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" placeholder="Enter name of task" onChange={isChangedName} />
                        </div>

                        <button type="submit" className="btn btn-default" onClick={handleAddTask}>Add</button>
                        <button type="button" className="btn btn-default" onClick={linkList}>Back</button>
                    </div>
                </React.Fragment>
            );
        }
    
}

export default AddTask;
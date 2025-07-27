import styles from"./newTask.module.css"
import DisplayItems from "./items.jsx";
import PropTypes from "prop-types"
import React,{useState} from "react";
function GetNewTask(){
    const [items,setItems]=useState([{
        toDo:"Wake up!",
        Date:"2025-07-28"
    },{
        toDo:"Sleep!",
        Date:"2025-07-28"
    }]);
    const [newTask,setNewTask]=useState("");
    const [taskDate,setTaskDate]=useState("");
    const handleNewTask=(event)=>{
        setNewTask(event.target.value);
    }
    const handleTaskDate=(event)=>{
        setTaskDate(event.target.value);
    }
    const handleAddTask=(event)=>{
        if(newTask.trim()==="" || taskDate.trim()===""){
           return alert("Both task and date are required!")
        }
        setItems(i=>[...i,{toDo:newTask,Date:taskDate}]);
        setNewTask("");
        setTaskDate("")
    }
    const handleDelete=(index)=>{
        setItems(it=>it.filter((_,i)=> i!==index));
    }
    return(
    <>
    <div className={styles.container}>
    <input type="text" placeholder="Enter next item to do!" className={`form-control m-2`} id="newTask" value={newTask} onChange={handleNewTask}/>
    <input type="date" className={`form-control m-2`} style={{borderRadius:'5px'}} id="newTaskDate" value={taskDate} onChange={handleTaskDate}></input>
    <button className={`form-control btn btn-primary m-2 d-flex justify-content-center align-items-center`} onClick={handleAddTask}>Add</button>
    </div>
    <DisplayItems items={items} handleDelete={handleDelete}/>
    </>
    );

}
export default GetNewTask;
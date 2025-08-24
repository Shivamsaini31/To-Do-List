import styles from "./newTask.module.css";
import DisplayItems from "./items.jsx";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

function GetNewTask({ items, onAddTask, onDeleteTask }) {
  const [newTask, setNewTask] = useState("");
  const [taskDate, setTaskDate] = useState("");

  const handleNewTask = (event) => {
    setNewTask(event.target.value);
  };

  const handleTaskDate = (event) => {
    setTaskDate(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() === "" || taskDate.trim() === "") {
      return Swal.fire({
        icon: "warning",
        title: "Incomplete Input",
        text: "Please enter both task and date.",
      });
    }
    onAddTask(newTask, taskDate);
    setNewTask("");
    setTaskDate("");
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        handleAddTask();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [newTask, taskDate]);

  return (
    <>
      <div className={styles.container}>
        <input
          type="text"
          placeholder="Enter next item to do!"
          className={styles.taskInput}
          id="newTask"
          value={newTask}
          onChange={handleNewTask}
        />
        <input
          type="date"
          className={styles.dateInput}
          id="newTaskDate"
          value={taskDate}
          onChange={handleTaskDate}
        />
        <button className={styles.addButton} onClick={handleAddTask}>
          Add Task
        </button>
      </div>
      <DisplayItems items={items} handleDelete={onDeleteTask} />
    </>
  );
}

GetNewTask.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      toDo: PropTypes.string.isRequired,
      Date: PropTypes.string.isRequired,
    })
  ).isRequired,
  onAddTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};

export default GetNewTask;

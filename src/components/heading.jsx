import styles from "./heading.module.css";
import PropTypes from "prop-types";

function Heading({ taskCount = 0 }) {
  return (
    <>
      <div className={styles.headingContainer}>
        <h1 className={styles.Heading}>Your To-Do List</h1>
        <p className={styles.taskCounter}>
          {taskCount === 0
            ? "No tasks yet"
            : `${taskCount} task${taskCount === 1 ? "" : "s"} remaining`}
        </p>
      </div>
    </>
  );
}

Heading.propTypes = {
  taskCount: PropTypes.number,
};

export default Heading;

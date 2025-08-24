import PropTypes from "prop-types";
import styles from "./items.module.css";

function DisplayItems(props) {
  const items = props.items;

  return (
    <>
      <div className={styles.itemsContainer}>
        {items.length === 0 ? (
          <div className={styles.emptyState}>
            <p>No tasks yet! Add your first task above.</p>
          </div>
        ) : (
          <ul className={styles.itemsList}>
            {items.map((item, index) => {
              return (
                <li key={index} className={styles.itemCard}>
                  <div className={styles.itemContent}>
                    <span className={styles.taskText}>{item.toDo}</span>
                    <span className={styles.taskDate}>{item.Date}</span>
                  </div>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => props.handleDelete(index)}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                        fill="currentColor"
                      />
                    </svg>
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}

DisplayItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      toDo: PropTypes.string.isRequired,
      Date: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default DisplayItems;

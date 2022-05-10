import React from 'react';
import styles from './TaskList.module.scss';

function TaskList () {
  return (
    <article className={styles.articleWrapper}>
      <ul className={styles.ulWrapper}>
        <li className={styles.liWrapper}>
          <div>
            <input
              className={styles.inputCheckbox}
              type='checkbox'
              name='isDone'
            />
            <span className={styles.textTask}>Task 1</span>
          </div>

          <button className={styles.deleteBtn}>Delete</button>
        </li>
        <li className={styles.liWrapper}>
          <div>
            <input
              className={styles.inputCheckbox}
              type='checkbox'
              name='isDone'
            />
            <span className={styles.textTask}>Task 2</span>
          </div>
          <button className={styles.deleteBtn}>Delete</button>
        </li>
      </ul>
    </article>
  );
}

export default TaskList;

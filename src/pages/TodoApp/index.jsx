import React from 'react';
import TaskList from '../../components/TaskList';
import TodoTask from '../../components/TodoTask';
import styles from './TodoApp.module.scss';

function TodoList () {
  return (
    <>
      <main className={styles.mainContainer}>
        <h1 className={styles.mainTitle}>Just do it</h1>
        <section className={styles.sectionWrapper}>
          <TodoTask />
        </section>
        <section className={styles.sectionWrapper}>
          <TaskList />
        </section>
      </main>
    </>
  );
}

export default TodoList;

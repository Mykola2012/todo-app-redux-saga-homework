import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import styles from './TaskList.module.scss';
import TaskListItem from './TaskListItem';
import { getTasksAction } from '../../actions/actionCreators';

function TaskList (props) {
  const { tasks, isFetching, error, getTasks } = props;

  useEffect(() => {
    getTasks();
  }, []);

  const mapTask = t => <TaskListItem key={t.id} task={t} />;

  return (
    <>
      {isFetching && <div>Loading. Please, wait...</div>}
      {error && <div>ERROR!!!!</div>}
      {!isFetching && !error && (
        <article className={styles.articleWrapper}>
          <ul className={styles.ulWrapper}>{tasks.map(mapTask)}</ul>
        </article>
      )}
    </>
  );
}

const mapStateToProps = ({ taskData }) => taskData;

const mapDispatchToProps = dispatch => ({
  getTasks: () => dispatch(getTasksAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);

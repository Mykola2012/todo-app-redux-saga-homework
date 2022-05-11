import { connect } from 'react-redux';
import React from 'react';
import styles from './TaskList.module.scss';
import { removeTask, updateTaskAction } from '../../actions/actionCreators';

function TaskListItem (props) {
  const {
    task: { id, tasks, isDone, remove, update },
  } = props;

  const handleChange = () => {
    update({ isDone: !isDone }, id);
  };

  const handleClickDelete = () => remove(id);

  return (
    <>
      <li className={styles.liWrapper}>
        <div>
          <input
            className={styles.inputCheckbox}
            type='checkbox'
            onChange={handleChange}
          />
          <span className={styles.textTask}>{tasks}</span>
        </div>

        <button onClick={handleClickDelete} className={styles.deleteBtn}>
          Delete
        </button>
      </li>
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  update: (values, id) => {
    dispatch(updateTaskAction(values, id));
  },
  remove: id => {
    dispatch(removeTask(id));
  },
});

export default connect(null, mapDispatchToProps)(TaskListItem);

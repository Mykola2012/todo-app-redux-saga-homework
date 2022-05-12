import { connect } from 'react-redux';
import React from 'react';
import styles from './TaskList.module.scss';
import { removeTask, updateTaskAction } from '../../actions/actionCreators';
import classNames from 'classnames';

function TaskListItem (props) {
  const {
    task: { id, task, isDone },
    remove,
    update,
  } = props;

  const handleChange = () => {
    update({ isDone: !isDone }, id);
  };

  const handleClickDelete = () => remove(id);

  const taskClassNames = classNames(styles.textTask, {
    [styles.doneTextTask]: isDone,
  });

  return (
    <>
      <li className={styles.liWrapper}>
        <div className={styles.taskWrapper}>
          <input
            className={styles.inputCheckbox}
            type='checkbox'
            checked={isDone}
            onChange={handleChange}
          />
          <p className={taskClassNames}>{task}</p>
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

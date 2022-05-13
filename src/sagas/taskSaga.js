import { put } from 'redux-saga/effects';
import {
  createTaskError,
  createTaskRequest,
  createTaskSuccess,
  getTasksError,
  getTasksRequest,
  getTasksSuccess,
  removeTaskError,
  removeTaskRequest,
  removeTaskSuccess,
  updateTaskError,
  updateTaskRequest,
  updateTaskSuccess,
} from '../actions/actionCreators';
import { createTask, getTasks, removeTask, updateTask } from '../api';

export function * createTaskSaga (action) {
  yield put(createTaskRequest());
  try {
    const { values } = action;
    const data = yield createTask(values);
    yield put(createTaskSuccess(data));
  } catch (e) {
    yield put(createTaskError(e));
  }
}

export function * getTasksSaga () {
  yield put(getTasksRequest());
  try {
    const data = yield getTasks();
    yield put(getTasksSuccess(data));
  } catch (e) {
    yield put(getTasksError(e));
  }
}

export function * updateTaskSaga ({ id, values }) {
  yield put(updateTaskRequest());
  try {
    const data = yield updateTask(id, values);
    yield put(updateTaskSuccess(data));
  } catch (e) {
    yield put(updateTaskError(e));
  }
}

export function * removeTaskSaga ({ id }) {
  yield put(removeTaskRequest());
  try {
    yield removeTask(id);
    yield put(removeTaskSuccess(id));
  } catch (e) {
    yield put(removeTaskError(e));
  }
}

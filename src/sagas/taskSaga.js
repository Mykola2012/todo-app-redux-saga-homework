import { put } from 'redux-saga/effects';
import {
  createTaskError,
  createTaskRequest,
  createTaskSuccess,
  getTasksError,
  getTasksRequest,
  getTasksSuccess,
  updateTaskError,
  updateTaskRequest,
  updateTaskSuccess,
} from '../actions/actionCreators';
import { createTask, getTasks, updateTask } from '../api';

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

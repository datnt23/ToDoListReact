import {
  ADD_TODO,
  DELETE_TODO,
  DELETE_ALL,
  CHECKED_TODO,
  DELETE_ALL_CHECKED,
} from "./constants";
export const addToDo = (payload) => ({
  type: ADD_TODO,
  payload,
});
export const deleteToDo = (payload) => ({
  type: DELETE_TODO,
  payload,
});
export const deleteAllToDo = (payload) => ({
  type: DELETE_ALL,
  payload,
});
export const deleteAllToDoChecked = (payload) => ({
  type: DELETE_ALL_CHECKED,
  payload,
});
export const checkedToDo = (payload) => ({
  type: CHECKED_TODO,
  payload,
});

import {
	SET_TODO,
	ADD_TODO,
	DELETE_TODO,
	DELETE_ALL,
	CHECKED_TODO,
} from "./constants";
export const setToDo = (payload) => ({
	type: SET_TODO,
	payload,
});
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
export const checkedToDo = (payload) => ({
	type: CHECKED_TODO,
	payload,
});

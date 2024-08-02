import {
	SET_TODO,
	ADD_TODO,
	DELETE_TODO,
	DELETE_ALL,
	CHECKED_TODO,
} from "./constants";
const initState = {
	arrayToDo: [],
	inputToDo: "",
};
function reducer(state, action) {
	switch (action.type) {
		case SET_TODO:
			return {
				...state,
				toDo: action.payload,
			};
		case ADD_TODO:
			return {
				...state,
				arrayToDo: [...state.arrayToDo, action.payload],
			};
		case DELETE_TODO:
			const newArrayToDo = [...state.arrayToDo];
			newArrayToDo.splice(action.payload, 1);
			return {
				...state,
				arrayToDo: newArrayToDo,
			};
		case DELETE_ALL:
			return {
				...state,
				arrayToDo: [],
			};
		case CHECKED_TODO:
			// const newArrayCheckedToDo = [...state.arrayToDo];

			// newArrayCheckedToDo.map((check, index) => {
			// 	if (index === action.payload) {
			// 		console.log(index);
			// 		// check.check = true;
			// 	}
			// 	return check;
			// });
			// return {
			// 	...state,
			// 	arrayToDo: newArrayCheckedToDo,
			// };
			break;
		default:
			throw new Error("Invalid action!");
	}
}

export { initState };
export default reducer;

import {
  ADD_TODO,
  DELETE_TODO,
  DELETE_ALL,
  CHECKED_TODO,
  DELETE_ALL_CHECKED,
} from "./constants";
const initState = {
  arrayToDo: [],
  inputToDo: "",
};
function reducer(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        arrayToDo: [
          ...state.arrayToDo,
          {
            id: action.payload.id,
            toDo: action.payload.do,
            isChecked: false,
            time: new Date(),
            timing: action.payload.time,
          },
        ],
      };
    case DELETE_TODO:
      const oldArrayToDo = [...state.arrayToDo];
      const newArrayToDo = oldArrayToDo.filter(
        (todo) => todo.id != action.payload
      );
      return {
        ...state,
        arrayToDo: newArrayToDo,
      };
    case DELETE_ALL_CHECKED:
      const oldArrayToDoChecked = [...state.arrayToDo];
      const newArrayToDoChecked = oldArrayToDoChecked.filter(
        (todo) => todo.isChecked !== true
      );
      return {
        ...state,
        arrayToDo: newArrayToDoChecked,
      };
    case DELETE_ALL:
      return {
        ...state,
        arrayToDo: [],
      };
    case CHECKED_TODO:
      const newArrayCheckedToDo = [...state.arrayToDo];

      newArrayCheckedToDo.map((check) => {
        if (check.id === action.payload) {
          check.isChecked = event.target.checked;
        }
        return check;
      });
      return {
        ...state,
        arrayToDo: newArrayCheckedToDo,
      };
    default:
      throw new Error("Invalid action!");
  }
}

export { initState };
export default reducer;

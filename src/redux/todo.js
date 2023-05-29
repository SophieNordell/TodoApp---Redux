import { createReduxModule } from "hooks-for-redux";

//object som Reducer skriver VAD som ska hända med.
const initialState = {
  todoList: [],
};

export const [useTodos, { addTodo, removeTodo }] = createReduxModule(
  "Todos",
  initialState,
  {
    // Reducer - vad som händer med objectet vi valt (lägga till en todo.)
    addTodo: (state, todo) => {
      return { ...state, todoList: [...state.todoList, todo] };
    },
    removeTodo: (state, id) => {
      const removedTodos = state.todoList.filter((todo) => todo.id !== id);
      return {
        ...state,
        todoList: removedTodos,
      };
    },
  }
);

import { useCallback, useReducer } from "react";

interface Todo {
	id: number;
	done: boolean;
	text: string;
}

type ActionType =
	| {
			type: "ADD";
			text: string;
	  }
	| {
			type: "REMOVE";
			id: number;
	  };

export function useTodos(initialTodos: Todo[]): {
	todos: Todo[];
	addToDo: (text: string) => void;
	removeToDo: (id: number) => void;
} {
	const [todos, dispatch] = useReducer(
		(state: Todo[], action: ActionType) => {
			switch (action.type) {
				case "ADD":
					return [
						...state,
						{
							id: state.length,
							text: action.text,
							done: false,
						},
					];
				case "REMOVE":
					return state.filter(({ id }) => id !== action.id);
				default:
					throw new Error();
			}
		},
		initialTodos
	);

	const addToDo = useCallback((text: string) => {
		dispatch({
			type: "ADD",
			text,
		});
	}, []);

	const removeToDo = useCallback((id: number) => {
		dispatch({
			type: "REMOVE",
			id,
		});
	}, []);

	return { todos, addToDo, removeToDo };
}

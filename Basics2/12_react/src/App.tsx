import { useCallback, useRef } from "react";
import "./App.css";
import Heading from "./components/Heading";
import List from "./components/List";
import { useTodos } from "./components/useTodos";

function App() {
	const onListClick = useCallback((item: string) => {
		alert(item);
	}, []);

	const newTodoRef = useRef<HTMLInputElement>(null);

	const { todos, addToDo, removeToDo } = useTodos([
		{ id: 0, text: "hey there", done: false },
	]);

	const onAddTodo = useCallback(() => {
		if (newTodoRef.current) {
			addToDo(newTodoRef.current.value);
			newTodoRef.current.value = "";
		}
	}, [addToDo]);

	return (
		<div className="App">
			<Heading title="Hello World"></Heading>
			<List
				items={["item 1", "item 2", "item 3"]}
				onClick={onListClick}
			/>

			<Heading title="TODOS" />
			{todos.map((todo) => (
				<div key={todo.id}>
					{todo.text}
					<button onClick={() => removeToDo(todo.id)}>Remove</button>
				</div>
			))}
			<div>
				<input type="text" ref={newTodoRef} />
				<button onClick={onAddTodo}>Add</button>
			</div>
		</div>
	);
}

export default App;

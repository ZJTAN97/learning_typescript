import React, {
	useCallback,
	useEffect,
	useReducer,
	useRef,
	useState,
} from "react";
import "./App.css";

const Heading = (props: { title: string }) => <h2>{props.title}</h2>;

interface BoxProps {
	children?: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ children }) => (
	<div style={{ padding: "1em", fontWeight: "bold" }}>{children}</div>
);

const List: React.FC<{ items: string[]; onClick?: (item: string) => void }> = ({
	items,
	onClick,
}) => (
	<ul>
		{items.map((item, index) => (
			<li key={index} onClick={() => onClick?.(item)}>
				{item}
			</li>
		))}
	</ul>
);

interface Payload {
	text: string;
}

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

function App() {
	const onListClick = useCallback((item: string) => {
		alert(item);
	}, []);

	const [payload, setPayload] = useState<Payload | null>(null);

	useEffect(() => {
		fetch("/data.json")
			.then((resp) => resp.json())
			.then((data) => setPayload(data));
	}, []);

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
		[]
	);

	const newTodoRef = useRef<HTMLInputElement>(null);

	const onAddTodo = useCallback(() => {
		if (newTodoRef.current) {
			dispatch({
				type: "ADD",
				text: newTodoRef.current.value,
			});
			newTodoRef.current.value = "";
		}
	}, []);

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
					<button
						onClick={() =>
							dispatch({ type: "REMOVE", id: todo.id })
						}
					>
						Remove
					</button>
				</div>
			))}
			<div>
				<input type="text" ref={newTodoRef} />
        <button onClick={onAddTodo} >Add</button>
			</div>
		</div>
	);
}

export default App;

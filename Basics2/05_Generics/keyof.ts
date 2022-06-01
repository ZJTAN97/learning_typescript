// returns an array that has keyof T
function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {
	return items.map((item) => item[key]);
}

const dogs = [
	{ name: "mimi", age: 12 },
	{ name: "LG", age: 13 },
];

console.log(pluck(dogs, "age"));
console.log(pluck(dogs, "name"));

interface BaseEvent {
	time: number;
	user: string;
}

interface EventMap {
	addToCart: BaseEvent & { quantity: number; productID: string };
	checkout: BaseEvent;
}

// TODO:
// review this example on ams-frontend input component

function sendEvents<Name extends keyof EventMap>(
	name: Name,
	data: EventMap[Name]
): void {
	console.log([name, data]);
}

sendEvents("addToCart", {
	productID: "foo",
	user: "baz",
	quantity: 1,
	time: 10,
});

sendEvents("checkout", {
    time: 10,
    user: "fee"
})

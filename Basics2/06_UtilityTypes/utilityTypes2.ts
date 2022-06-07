type Name = {
	first: string;
	last: string;
};

function addFullName(name: Name): Name & {
	fullName: string;
} {
	return {
		...name,
		fullName: `${name.first} ${name.last}`,
	};
}

// T is a generic that extends a basic function
function permuteRows<T extends (...args: any[]) => any>(
	iteratorFunc: T,
	data: Parameters<T>[0][]
): ReturnType<T>[] {
	return data.map(iteratorFunc);
}

const sampleData = [
	{ first: "Docker", last: "Kubernetes" },
	{ first: "React", last: "Spring" },
];

console.log(permuteRows(addFullName, sampleData));

// Actual Definition of Parameters utility type
/**
 * Given a Function type, this type returns the types of the function parameters as a tuple.
 */

function save(person: { id: string; name: string; email: string }) {
	console.log("Saving ", person);
}

// Parameters of the save function at index 0 which is an object of person
const ryan: Parameters<typeof save>[0] = {
	id: "1337",
	name: "Ryan",
	email: "ryan@example.com",
};

// Class Example

class PersonWithFullName {
	constructor(public name: Name) {}

	get fullName() {
		return `${this.name.first} ${this.name.last}`;
	}
}

// constructor create instance type
function createObjects<T extends new (...args: any[]) => any>(
	ObjectType: T,
	data: ConstructorParameters<T>[0][]
): InstanceType<T>[] {
	return data.map((item) => new ObjectType(item));
}

console.log(
	createObjects(PersonWithFullName, sampleData).map((obj) => obj.fullName)
);

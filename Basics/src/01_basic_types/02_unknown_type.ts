function stringifyForLogging(value: unknown): string {
	if (typeof value === "function") {
		const functionName = value.name || "(anonymous)";
		return `[function ${functionName}]`;
	}

	if (value instanceof Date) {
		return value.toISOString();
	}
	return String(value);
}

// using custom type guard function
// to check if value is an array of numbers
function isNumberArray(value: unknown): value is number[] {
	return (
		Array.isArray(value) &&
		value.every((element) => typeof element === "number")
	);
}

const unknownValue: unknown = [15, 23, 8, 4, 42, 16];

if (isNumberArray(unknownValue)) {
	const max = Math.max(...unknownValue);
	console.log(max);
}

// unknown Type in Union Types
// only any does not get absorbed
type UnionType1 = unknown | null; //becomes unknown
type UnionType2 = unknown | undefined; // unknown
type UnionType3 = unknown | string; // unknown
type UnionType4 = unknown | number[]; // unknown
type UnionType5 = unknown | any; // any

// unknown Type in Intersection Types
type IntersectionType1 = unknown & null; // null
type IntersectionType2 = unknown & undefined; // undefined
type IntersectionType3 = unknown & string; // string
type IntersectionType4 = unknown & number[]; // number[]
type IntersectionType5 = unknown & any; // any

// Example of using unknownType with localStorage
type Result =
	| { success: true; value: unknown }
	| { success: false; error: Error };

function deserializeLocalStorage(key: string): Result {
	const item = localStorage.getItem(key);

	if (item === null) {
		return {
			success: false,
			error: new Error(`Item with key ${key} does not exist.`),
		};
	}

	let value: unknown;

	try {
		value = JSON.parse(item);
	} catch (error) {
		return {
			success: false,
			error: new Error(""),
		};
	}

	return {
		success: true,
		value,
	};
}

const result3= deserializeLocalStorage("dark_mode");

if(result3.success) {
    const darkModeEnabled = result3.value;

    if(typeof darkModeEnabled === "boolean") {
        console.log(darkModeEnabled)
    }
} else {
    console.error(result3.error);
}

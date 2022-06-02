type FlexibleDoginfo = {
	name: string;
	[key: string]: string | number;
};

const dog: FlexibleDoginfo = {
	name: "Docker",
	breed: "DevOps",
	age: 10,
};

interface DogInfo {
	name: string;
	age: number;
}

type OptionsFlags<T> = {
	[P in keyof T]: boolean;
};

// mapping all info of dogs to a boolean type
type DogInfoOptions = OptionsFlags<DogInfo>;

type Listeners<T> = {
	[Property in keyof T as `on${Capitalize<string & Property>}Change`]: (
		newValue: T[Property]
	) => void;
} & {
	[Property in keyof T as `on${Capitalize<string & Property>}Delete`]: (
		newValue: T[Property]
	) => void;
};

function listenToObject<T>(obj: T, listeners: Listeners<T>): void {
	throw "Needs to be implemented";
}

const lg: DogInfo = {
	name: "LG",
	age: 13,
};

listenToObject(lg, {
	onNameChange: (v: string) => {},
	onAgeChange: (v: number) => {},
	onAgeDelete: (v: number) => {},
	onNameDelete: (v: string) => {},
});

type DogInfoListeners = Listeners<DogInfo>;

// TO HELP UNDERSTAND
// imagine all the methods that come for "free" upon writing your variable names when you
// use libraries/frameworks in python
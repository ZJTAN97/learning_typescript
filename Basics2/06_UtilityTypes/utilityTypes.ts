interface MyUser {
	name: string;
	id: number;
	email?: string;
	phone?: string;
}
// Partial
type MyUserOptionals = Partial<MyUser>;

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
	return {
		...user,
		...overrides,
	};
};

console.log(
	merge(
		{
			name: "Jack",
			id: 1,
			email: "send@send.com",
		},
		{}
	)
);

// Required
type RequiredMyUser = Required<MyUser>;

// Pick
type JustEmailAndName = Pick<MyUser, "email" | "name">;

// Record
const mapById = (users: MyUser[]): Record<MyUser["id"], MyUser> => {
	return users.reduce((a, b) => {
		return {
			...a,
			[b.id]: b,
		};
	}, {});
};

console.log(
	mapById([
		{
			id: 1,
			name: "Mr Foo",
			email: "send@send.com",
		},
		{
			id: 2,
			name: "Mrs Baz",
		},
	])
);

type Catnames = "lulu" | "lala" | "chuchu";
interface CatAttributes {
	weight: number;
	age: number;
}

type CatList = Record<Catnames, CatAttributes>;

const cats: CatList = {
	chuchu: {
		weight: 10,
		age: 10,
	},
	lala: {
		weight: 10,
		age: 10,
	},
	lulu: {
		weight: 10,
		age: 10,
	},
};



// Omit
console.log("----- Omit example -----")
const mapByIdOmit = (users: MyUser[]): Record<MyUser["id"], Omit<MyUser, "id">> => {
	return users.reduce((a, b) => {
        const { id, ...otherAttributes } = b;
		return {
			...a,
			[id]: otherAttributes,
		};
	}, {});
};

console.log(
	mapByIdOmit([
		{
			id: 1,
			name: "Mr Foo",
			email: "send@send.com",
		},
		{
			id: 2,
			name: "Mrs Baz",
		},
	])
);
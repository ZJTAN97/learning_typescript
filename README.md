To run any file, npx ts-node `filename`

# :snowflake: TypeScript General :snowflake:

-   TypeScript type system only helps you during development (before code gets compiled to JS).
-   Key difference: JavaScript uses `dynamic types` (resolved at runtime). TypeScript uses `static types` (set during development).
-   core primitive types in TypeScript are all lowercase!!! (number, string)
-   typescript only enforce types at compile time, not run time!

<br><br>

# :snowflake: Core Types :snowflake:

-   number (no differentiatoin between integers or floats)
-   string
-   boolean (does not include "truthy" and "falsey" values)
-   object
-   Array
-   Tuple (JS does not have them; Fixed-length array)
-   Enum
-   any
-   Literal (literally a specific string)
-   undefined

<br>
<br>

# :snowflake: Classes :snowflake:

1. `public`

-   by default, all members of a class in TypeScript are public. Public members can be accessed anywhere
    without any restrictions

<br>

2. `private`

-   This access modifier ensures that class members are visible only to that class and are not accessible outside the
    containing class.

<br>

3. `protected`

-   This access modifer is similar to private, except that protected members can be accessed using their deriving classess
    (inheritance)

<br>
<br>

# :snowflake: Advanced Types :snowflake:

-   `|` represents union
-   `&` represents Intersection
-   Refer to examples in folder 06.

<br>
<br>

# :snowflake: `unknown` Type :snowflake:

-   unknown Type is only assignable to the `any` and `unknown` type itself.
-   when using unknown Type, you have to narrow down the types
-   can use `typeof`, `instanceof`, or custom type guard functions to convince the TS compiler that a value has a certain type.
-   more about unknown types in the file `unknownType.ts`
-   This is useful for APIs that want to signal “this can be any value, so you must perform some type of checking before you use it”

<br>

### `unknown` vs `any` types

```
let vAny: any = 10;          // We can assign anything to any
let vUnknown: unknown =  10; // We can assign anything to unknown just like any


let s1: string = vAny;     // Any is assignable to anything
let s2: string = vUnknown; // Invalid; we can't assign vUnknown to any other type (without an explicit assertion)

vAny.method();     // Ok; anything goes with any
vUnknown.method(); // Not ok; we don't know anything about this variable

```

<br>
<br>

# :snowflake: `never` Type :snowflake:

-   the never type represents the type of values that never occur
-   Variables also acquire the type never when narrowed by any type guards that can never be true

<br>

With operators like typeof, instanceof or in we can narrow variable type. We may narrow down the type the way, that we are sure that this variable in some places never occurs.

```
function format(value: string | number) {
    if (typeof value === 'string') {
        return value.trim();
    } else {
        return value.toFixed(2); // we're sure it's number
    }

    // not a string or number
    // "value" can't occur here, so it's type "never"
}
```

<br>

With never type we can exclude some undesired types:

```

type NonNullable<T> = T extends null | undefined ? never : T;

type A = NonNullable<boolean>; // boolean
type B = NonNullable<number | null>; // number

```

<br>
<br>

# :snowflake: `keyof` operator :snowflake:

-   the `keyof` operator takes an object type and produces a string of numeric literal union of its keys

```
type Staff {
    name: string;
    salary: number;
}

type staffKeys = keyof Staff; // "name" | "salary"

```

<br>
<br>

# :snowflake: Declaration merging :snowflake:

-   a TypeScript process of merging together two or more declarations with the same name.

```
interface Car {
    steering: number;
    tyre: number;
}

interface Car {
    exhaustOutlet:number;
}

const BMW: Car = {
    steering: 1,
    tyre: 4,
    exhaustOutlet: 2
}

```

<br>
<br>

# :snowflake: Mixins :snowflake:

-   Mixins are special classes that contain a combination of methods that can be used by other classes.
-   Mixins promote code reusability and help you avoid limitations associated with multiple inheritance.
-   Common use cases include: Handling multiple class extension

<br>
<br>

# :snowflake: Type Casting & Type Assertions in TypeScript :snowflake:

-   Type assertions helps you to force types when you are not in control of them.
-   Type casting help convert types and provide consistent (expected) results

Assert Type Example (2 ways)

```
// 1. Bracket Syntax
let length: number = (<string>lengthField);

// 2. Use as
let length: number = (lengthField as string);

```

Type Conversion Example

1. From \_ to String

```
console.log(String(42)); //"42"
console.log(typeof String(42)); // "string"

console.log(String(true)); //"true"
console.log(String(undefined)); //"undefined"


```

2. From \_ to Number

```

Number("0"); // 0
Number("abc"); //NaN
Number(true); // 1
parseInt("42life"); //42
parseFloat("3.14pi"); //3.14


```

3. Special, From Object to Array

```

const obj = {
	"1": 5,
	"2": 7,
	"3": 0,
	"4": 0,
	"5": 0,
	"6": 0,
	"7": 0,
	"8": 0,
	"9": 0,
	"10": 0,
	"11": 0,
	"12": 0,
};
const result = Object.keys(obj).map((key) => [Number(key), obj[key as keyof typeof obj ]]);

```

<br>
<br>

# :snowflake: `Record` :snowflake:

A `Record` lets you create a new type from a Union. The values in the Union are used as attributes of the new type.

```

type Person = "male" | "female" | "unknown"
type PersonList = Record<Person, {name: string, age: number}>

const ObjectType: PersonList = {
	male: {
		name: "test1",
		age:"10
	},
	female: {
		name: "test1",
		age:"10
	},
	unknown: {
		name: "test1",
		age:"10
	}
}

```

<br>
<br>

# :snowflake: `JSX.IntrinsicElements` :snowflake:

-   Intrinsic elements are looked up on the special interface JSX.IntrinsicElements.
-   By default, if this interface is not specified, then anything goes and intrinsic elements will not be type checked.
-   However, if this interface is present, then the name of the intrinsic element is looked up as a property on the JSX.IntrinsicElements interface.

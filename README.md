To run any file, npx ts-node `filename`

## TypeScript General

-   TypeScript type system only helps you during development (before code gets compiled to JS).
-   Key difference: JavaScript uses `dynamic types` (resolved at runtime). TypeScript uses `static types` (set during development).
-   core primitive types in TypeScript are all lowercase!!! (number, string)
-   typescript only enforce types at compile time, not run time!

## 1. Core Types

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
<hr>

## 2. Classes

1. `public`

-   by default, all members of a class in TypeScript are public. Public members can be accessed anywhere
    without any restrictions

<br>
<hr>

2. `private`

-   This access modifier ensures that class members are visible only to that class and are not accessible outside the
    containing class.

<br>
<hr>

3. `protected`

-   This access modifer is similar to private, except that protected members can be accessed using their deriving classess
    (inheritance)

<br>
<hr>

## 3. Advanced Types

-   `|` represents union
-   `&` represents Intersection
-   Refer to examples in folder 06.

<br>
<hr>

## 4. unknown Type

-   unknown Type is only assignable to the `any` and `unknown` type itself.
-   when using unknown Type, you have to narrow down the types
-   can use `typeof`, `instanceof`, or custom type guard functions to convince the TS compiler that a value has a certain type.
-   more about unknown types in the file `unknownType.ts`

<br>
<hr>

## 5. keyof operator

-   the `keyof` operator takes an object type and produces a string of numeric literal union of its keys

```
type Staff {
    name: string;
    salary: number;
}

type staffKeys = keyof Staff; // "name" | "salary"

```

<br>
<hr>

## 6. Declaration merging

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
<hr>

## 7. Mixins

-   Mixins are special classes that contain a combination of methods that can be used by other classes.
-   Mixins promote code reusability and help you avoid limitations associated with multiple inheritance.
-   Common use cases include: Handling multiple class extension

<br>
<hr>

## 8. Type Casting & Type Assertions in TypeScript

-   Type assertions helps you to force types when you are not in control of them.
-   Type casting help convert types and provide consistent (expected) results

Assert Type Example (2 ways)

```
// 1. Bracket Syntax
let length: number = (<string>lengthField);

// 2. Use as
let length: number = (lengthField as string);

```

Type Converion Example

1. From _ to String

```
console.log(String(42)); //"42"
console.log(typeof String(42)); // "string"

console.log(String(true)); //"true"
console.log(String(undefined)); //"undefined"


```

2. From _ to Number

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
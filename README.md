To run any file, npx ts-node `filename`

## TypeScript General
- TypeScript type system only helps you during development (before code gets compiled to JS).
- Key difference: JavaScript uses `dynamic types` (resolved at runtime). TypeScript uses `static types` (set during development).
- core primitive types in TypeScript are all lowercase!!! (number, string)
- typescript only enforce types at compile time, not run time!


## 1. Core Types
- number (no differentiatoin between integers or floats)
- string
- boolean (does not include "truthy" and "falsey" values)
- object
- Array
- Tuple (JS does not have them; Fixed-length array)
- Enum 
- any
- Literal (literally a specific string)
- undefined

<br>
<hr>

## 2. Classes
1. `public`
- by default, all members of a class in TypeScript are public. Public members can be accessed anywhere
without any restrictions

<br>
<hr>

2. `private`
- This access modifier ensures that class members are visible only to that class and are not accessible outside the
containing class.

<br>
<hr>

3. `protected`
- This access modifer is similar to private, except that protected members can be accessed using their deriving classess
(inheritance) 

<br>
<hr>

## 3. Advanced Types
- `|` represents union 
- `&` represents Intersection
- Refer to examples in folder 06.

<br>
<hr>

## 4. unknown Type
- unknown Type is only assignable to the `any` and `unknown` type itself.
- when using unknown Type, you have to narrow down the types
- can use `typeof`, `instanceof`, or custom type guard functions to convince the TS compiler that a value has a certain type.
- more about unknown types in the file `unknownType.ts`

<br>
<hr>

## 5. keyof operator
- the `keyof` operator takes an object type and produces a string of numeric literal union of its keys
```
type Staff {
    name: string;
    salary: number;
}

type staffKeys = keyof Staff; // "name" | "salary"

```


<br>
<hr>
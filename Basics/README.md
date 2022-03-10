## TypeScript General
- TypeScript type system only helps you during development (before code gets compiled to JS).
- Key difference: JavaScript uses `dynamic types` (resolved at runtime). TypeScript uses `static types` (set during development).
- core primitive types in TypeScript are all lowercase!!! (number, string)


## Core Types
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


## Classes
1. `public`
- by default, all members of a class in TypeScript are public. Public members can be accessed anywhere
without any restrictions

2. `private`
- This access modifier ensures that class members are visible only to that class and are not accessible outside the
containing class.

3. `protected`
- This access modifer is similar to private, except that protected members can be accessed using their deriving classess
(inheritance) 



## Advanced Types
- `|` represents union 
- `&` represents Intersection
- Refer to examples in folder 06.



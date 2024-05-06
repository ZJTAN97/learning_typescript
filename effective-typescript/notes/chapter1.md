# Getting to know TypeScript

## Item 3. Understand that Code Generation is Independent of Types

### Cannot overload a function based on Typescript Types

TypeScript provide a facility for overloading functions, but operates entirely at type level.

Can provide multiple declarations for a function but only a single implementation

```ts
function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a, b) {
  return a + b;
}
```

## Item 4. Get Comfortable with Structural Typing

- Understand that JavaScript is duck typed and TypeScript uses structural typing to model this: values assignable to your interfaces might have properties beyond those explicitly listed in your type declarations. Types are not “sealed.”



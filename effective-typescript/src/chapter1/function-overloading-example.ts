// Overload signatures
function greet(person: string): string;
function greet(persons: string[]): string[];

// Implementation signature
function greet(person: unknown): unknown {
  if (typeof person === "string") {
    return `Hello, ${person}!`;
  } else if (Array.isArray(person)) {
    return person.map((name) => `Hello, ${name}!`);
  }
  throw new Error("Unable to greet");
}

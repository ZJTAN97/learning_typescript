interface PersonInterface {
    readonly id: number;
    name: string;
    age: number;
    greet(phrase: string): void;
}


let user1: PersonInterface;

user1 = {
    id: 1,
    name: "Name",
    age: 10,
    greet(phrase: string) {
        console.log(phrase);
    }
}

class Person implements PersonInterface {
    constructor(readonly id: number, public name: string, public age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    greet(phrase: string) {
        console.log(phrase);
    }
}
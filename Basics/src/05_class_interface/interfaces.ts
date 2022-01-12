console.log('---- 05 Interfaces ------')

interface PersonInterface {
    readonly id: number;
    name: string;
    age: number;
    doHobby(phrase: string): void;
}

// Inheritance in interface
interface SoftwareEngineerInterface extends PersonInterface {
    skills: string[];
}



let user1: PersonInterface;

user1 = {
    id: 1,
    name: "Name",
    age: 10,
    doHobby(phrase: string) {
        console.log(phrase);
    }
}

class Person implements PersonInterface {
    constructor(readonly id: number, public name: string, public age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    doHobby(phrase: string): void {
        
    }
}


class SoftwareEngineer implements SoftwareEngineerInterface {
    constructor(
        readonly id: number, 
        public name: string, 
        public age: number, 
        public skills: string[]) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.skills = skills;
    }
    doHobby(phrase: string): void {
        console.log(phrase);   
    }
}



// Interfaces as Function Types
interface AddFunctionInterface {
    (a: number, b: number): number,
}

let addFunction: AddFunctionInterface;

addFunction = (a: number, b: number) => a + b;

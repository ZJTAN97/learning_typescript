console.log('---- 06 Advanced Types ------')


// 1. Intersection types
type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const employee1: ElevatedEmployee = {
    name: "Docker",
    privileges: ["create server"],
    startDate: new Date(),
}

type Stringify = string | number; // this presents Union
type Numeric = number | boolean;
type Universal = Stringify & Numeric; // Becomes Number only as Intersection (common between the two)



// 2. Type Guards
type UnknownEmployee = Employee | Admin;

function printEmployee(emp: UnknownEmployee) {
    if ('privileges' in emp) { // typeguard example 1
        console.log(emp.privileges);
    }
}

class Car {
    drive() {
        console.log('driving');
    }
}

class Truck {
    drive() {
        console.log('driving');
    }

    loadCargo() {
        console.log('loading cargo')
    }
}

type Vehicle = Truck | Car

function vehicleAction(v: Vehicle) {
    if(v instanceof Truck) { // typeguard example 2
        v.loadCargo(); 
    }
}


// 3. Discriminated Unions (very useful!!)
interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse'
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch(animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }

    console.log("Moving at speed: ", speed);
}

moveAnimal({type: "horse", runningSpeed: 10});
moveAnimal({type: "bird", flyingSpeed: 40});


// 4. Typecasting
const userInputElement = <HTMLInputElement>document.getElementById('user-input'); // first way
const userInputElement2 = document.getElementById('user-input') as HTMLInputElement; // second way
const userInputNeverNull = document.getElementById('user-input')!; // "!" tell TS that it will never be null



// 5. Index Properties
interface ErrorContainer { 
    // dontknow what is in advance
    // i only know the key is a string and value is a string
    [prop: string]: string;
}

const errorBag: ErrorContainer = {}; // valid
const errorBag2: ErrorContainer = {
    email: "Not valid email",
    additionalMessage: "Additional message..."
};



// 6. Function Overloads
type BiType = string | number;

function addTgt(a: string, b: string): string; // if its a string, we want a string as result
function addTgt(a: number, b: number): number; // if its number, we want a number as result
function addTgt(a: BiType, b: BiType) {
    if(typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result = addTgt("Docker", "Kubernetes");
result.split(" ") // now it works as a string with overload

const result2 = addTgt(2, 3);
result2.toFixed(1) // not it works as a number with overload



// 7. Optional Chaining
const fetchedUserData = {
    id: "u1",
    name: "Docker",
    job: { title: "DevOps", description: "containers" }
};

console.log(fetchedUserData?.job.title); // similar too JS (fetchedUserData.job && fetchedUserData.job.title)



// 8. Nullish Coalescing
const userInput = "";
const storedData = userInput ?? "DEFAULT";

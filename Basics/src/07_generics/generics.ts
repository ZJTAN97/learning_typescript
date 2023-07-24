console.log('---- 07 Generics ------')

// 0. Example of Built-in Generic types
const names: Array<string> = []; // string[]
const promise: Promise<number> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(13);
    }, 2000)
});

promise.then(data => {
    data.toFixed(0);
})



// 1. Creating a generic
function merge<T extends {}, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedSomething = merge<string, number>("test", 5); // valid but no use

const mergedObj = merge({name: "Docker"}, {age: 13});
const invalidMerge = merge({ name: "Kubernetes"}, 13); // but TS does not know yet (See 2nd part)
mergedObj.age; // valid
mergedObj.name; // valid 




// 2. Working with constraints
function merge2<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}
const mergedObj2 = merge2({name: "Docker"}, {age: 13}); // we set constraints to gurantee we get an object as inputs



// 3. Another generic function

interface Lengthy {
    length: number;
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
    let printText = "Got no value.";
    if(element.length === 1) {
        printText = "Got 1 element"
    } else if (element.length > 1) {
        printText = "Got more than 1 element"
    }
    return [element, printText ];
}

countAndPrint(["this", "works"]);
countAndPrint("This works as well");



// 4. the "keyof" constraint

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}

extractAndConvert({Name: "Docker"}, "Name");




// 5. Generic Classes

class DataStorage<T extends string | number> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.getItems();

const numberStorage = new DataStorage<number>();
numberStorage.addItem(5);
numberStorage.addItem(10);



// 6. Generic Utility Types

// https://www.typescriptlang.org/docs/handbook/utility-types.html

// Partial Type
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createGourseGoal(
    title: string, 
    description: string, 
    completeUntil: Date
): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = completeUntil;
    return courseGoal as CourseGoal;
}


// Read only type
const namesCannotChange: Readonly<string []> = ["max", "anna"];
// cannot push, pop etc

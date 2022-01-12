console.log('---- 07 Generics ------')

// 1. Creating a generic
function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}


const mergedObj = merge({name: "Docker"}, {age: 13});
const invalidMerge = merge({ name: "Kubernetes"}, 13); // but TS does not know yet (See 2nd part)
mergedObj.age; // valid
mergedObj.name; // valid 


// 2. Working with constraints
function merge2<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}
const mergedObj2 = merge2({name: "Docker"}, {age: 13}); // we set constraints to gurantee we get an object as inputs

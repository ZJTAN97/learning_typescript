console.log('---- 08 Decorators ------')

function Logger(constructor: Function) {
    console.log("Logging...")
    console.log(constructor);
}

// decorators run first, and object does not have to be instantiated for it to run.
@Logger
class PersonObject {
    name = "Max";

    constructor() {
        console.log("Creating person object...");
    }
}


const personObject = new PersonObject();


// Object
const person = {
    name: "Docker",
    age: 13,
    hobbies: ["DevOps", "Terraform"]
}

for(let item of person.hobbies) {
    console.log(item);
}


// Tuple
const person2: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; // tuple (fixed length and type in the array)
} = {
    name: 'docker',
    age: 13,
    hobbies: ["DevOps", "Terraform"],
    role: [2, 'devops'] // tuple
};


// Enum
enum Role {
    ADMIN = 1, 
    READ_ONLY = 2, 
    AUTHOR = 3
};

const person3: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; // tuple (fixed length and type in the array)
} = {
    name: 'docker',
    age: 13,
    hobbies: ["DevOps", "Terraform"],
    role: [Role.ADMIN, 'devops'] // tuple
};



// literal types
function combine(
    num1: number | string,
    num2: number | string,
    resultType: "as-text" | "as-num"
) {
    //
}


// type aliases
type Combinable = string | number;
type ConversionDescription = "as-num" | "as-text";


// function return types
function add(n1: number, n2:number): number {
    return n1 + n2;
}

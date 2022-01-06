// Intersection types
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



// Type Guards
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
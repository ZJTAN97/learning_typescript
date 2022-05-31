function printIngredient(
    quantity: string, 
    ingredient: string, 
    extra?: string
) {
    console.log(`${quantity} ${ingredient} ${extra ? extra : ""}`);
}

printIngredient("10", "Egg");
printIngredient("10", "Bacon", "Egg");


interface User {
    id: string;
    info?: {
        email?: string;

    }
}

function getEmail(user: User): string {
    return user?.info?.email ?? "";
}

function addWithCallback(x: number, y: number, callback?: () => void) {
    console.log([x, y]);
    callback?.(); // only invoke if it exists
}
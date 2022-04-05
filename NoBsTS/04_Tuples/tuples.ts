type ThreeDCoordinate = [x: number, y: number, z: number];

function addCoordinates(c1: ThreeDCoordinate, c2: ThreeDCoordinate): ThreeDCoordinate {
    return [
        c1[0] + c2[0],
        c1[1] + c2[1],
        c1[2] + c2[2],
    ]
}

console.log(addCoordinates([0, 0, 0], [10, 20, 30]));



// React useState is an example of a tuple

function simpleStringState(initial: string): [() => string, (v: string) => void] {
    let str: string = initial;
    return [
        () => str,
        (v: string) => {
            str = v;
        }
    ]
}

const [strGetter, strSetter] = simpleStringState("hello");
console.log(strGetter());
strSetter("Testing");
console.log(strGetter());
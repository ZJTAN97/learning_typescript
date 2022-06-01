interface Cat {
	name: string;
	breed: string;
}

function makeCat(name: string, breed: string): Readonly<Cat> {
	return {
		name,
		breed,
	};
}

const usul = makeCat("Usul", "Tabby");
// usul.name = "Piter"; // invalid

function makeCoordinate(
	x: number,
	y: number,
	z: number
): readonly [number, number, number] {
	return [x, y, z];
}

const c1 = makeCoordinate(1,2,3);
// c1[0] = 50; // invalid

const reallyConst = [1, 2, 3] as const; // content of array are also const
// reallyConst[0] = 50; // invalid
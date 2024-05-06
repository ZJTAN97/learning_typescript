interface Vector2D {
  x: number;
  y: number;
}

interface NamedVector2D {
  x: number;
  y: number;
  name: string;
}

function calculateLength(v: Vector2D) {
  return Math.sqrt(v.x * v.x + v.y * v.y);
}

const v: NamedVector2D = {
  name: "Test",
  x: 5,
  y: 5,
};

calculateLength(v); // this works

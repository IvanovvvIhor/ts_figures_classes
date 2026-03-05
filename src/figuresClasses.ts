type ShapeType = 'triangle' | 'circle' | 'rectangle';
type ColorType = 'red' | 'green' | 'blue';
export interface Figure {
  shape: ShapeType;
  color: ColorType;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: ColorType,
    public a: number,
    public b: number,
    public c: number,
    public shape: ShapeType = 'triangle',
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('One parameter is less or is zero');
    }

    const max = Math.max(this.a, this.b, this.c);
    const sumOfTwo = this.a + this.b + this.c - max;

    if (max - sumOfTwo >= 0) {
      throw new Error('The one from sides is bigger then sum of others!');
    }
  }

  getArea(): number {
    const halfP = (this.a + this.b + this.c) / 2;

    return Math.sqrt(
      halfP * (halfP - this.a) * (halfP - this.b) * (halfP - this.c),
    );
  }
}

export class Circle implements Figure {
  constructor(
    public color: ColorType,
    public r: number,
    public shape: ShapeType = 'circle',
  ) {
    if (r <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const area = Math.PI * this.r * this.r;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: ColorType,
    public a: number,
    public b: number,
    public shape: ShapeType = 'rectangle',
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  const area = Math.round(figure.getArea() * 100) / 100;

  return `A ${figure.color} ${figure.shape} - ${area}`;
}

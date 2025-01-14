interface Point2D {
    xPos: number;
    yPos: number;
    readonly name?: string;
}

const p1: Point2D = { xPos: 0, yPos: 0, name: 'originPoint' };
const p2: Point2D = { xPos: 1, yPos: 1 };

// p1.name = 'point1';

p1.xPos = 1;
const p3: Point2D = { xPos: 2, yPos: 2 };

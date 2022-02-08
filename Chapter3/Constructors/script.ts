class Point2D {
    xPos: number;
    yPos: number;
    //readonly name?: string;

    constructor(xPos: number = 0, yPos: number = 0) {
        this.xPos = xPos;
        this.yPos = yPos;
    }
}

class Point3D extends Point2D {
    zPos: number;

    constructor(xPos: number = 0, yPos: number = 0, zPos: number = 0) {
        super(xPos, yPos);
        this.zPos = zPos;
    }
}

const p1 = new Point2D(0, 0);
console.log(p1);

const p2 = new Point2D();
console.log(p2);

const p3 = new Point3D(1, 1, 1);
console.log(p3);

class Point2D {
    protected xPos: number;
    private _yPos: number;
    //readonly name?: string;

    private static _numOfPoints = 0;

    constructor(xPos: number = 0, yPos: number = 0) {
        this.xPos = xPos;
        this._yPos = yPos;

        Point2D._numOfPoints++;
    }

    get numOfPOints() {
        return Point2D._numOfPoints;
    }

    get yPos() {
        return this._yPos;
    }

    set yPos(yPos: number) {
        this._yPos = yPos;
    }
}

class Point3D extends Point2D {
    public zPos: number;

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

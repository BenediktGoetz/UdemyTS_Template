class Point2D {
    xPos: number;
    yPos: number;

    constructor(xPos: number = 0, yPos: number = 0) {
        this.xPos = xPos;
        this.yPos = yPos;
    }
}

function printCoordinates(point: Point2D): void;
function printCoordinates(x: number): void;
function printCoordinates(x: number, y: number): void;
function printCoordinates(x: number, y: number, z: number): void;

function printCoordinates(arg1: unknown, arg2?: unknown, arg3?: unknown) {
    // name and cast arguments for easy use
    let point = arg1 as Point2D; // Point2D overload
    let x = arg1 as number,
        y = arg2 as number,
        z = arg3 as number;

    // define different methods
    if (typeof point === 'object') {
        console.log('Point2D overload');
        console.log('x: ' + point.xPos);
        console.log('y: ' + point.yPos);
    } else {
        console.log('Number overload');
        console.log(x);
        if (arguments.length >= 2) console.log(y);
        if (arguments.length >= 3) console.log(z);
    }
    console.log('\n');
}

const p = new Point2D(2, 2);
printCoordinates(p);

printCoordinates(1, 2, 3);
printCoordinates(0, 0);
printCoordinates(20);

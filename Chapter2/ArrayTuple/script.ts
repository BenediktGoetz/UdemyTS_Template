let list = [1, 2, 3];
console.log(list);

function printArray(arr: number[]) {
    console.log(arr);
}

printArray(list);
//printArray(27);

function printTuple(tpl: [number, number, number]) {
    console.log(tpl);
}

let tpl: [number, number, number] = [27, 34, 49];
printTuple(tpl);

type ArrayTypes = number[] | string[] | boolean[];

function getFirstElement<T>(arr: T[]) {
    return arr[0];
}

const a1 = [1, 2, 3];

console.log(getFirstElement(a1));

const a2 = [true, false, true];

console.log(getFirstElement(a2));

function mapping<InputType, OutputType>(
    arr: InputType[],
    fn: (arg: InputType) => OutputType,
) {
    return arr.map(fn);
}

const a3 = [1, 2, 3];
const fn = (n: number) => n.toString();

const a4 = mapping(a3, fn);
console.log(a3);
console.log(a4);

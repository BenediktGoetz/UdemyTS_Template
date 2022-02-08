interface Sized {
    length: number;
}

function lengthComparison<Type extends Sized>(arr1: Type, arr2: Type) {
    if (arr1.length >= arr2.length) {
        return arr1;
    }

    return arr2;
}

const a1 = [1, 2, 3];
const a2 = [1, 2];

const r1 = lengthComparison(a1, a2);
console.log(r1);

const r2 = lengthComparison('10', '100');
console.log(r2);

/* const r3 = lengthComparison(a1, '10');
console.log(r3); */

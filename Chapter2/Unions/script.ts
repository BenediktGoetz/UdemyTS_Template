function add(arg1: number | string, arg2: number | string) {
    if (typeof arg1 == 'number' && typeof arg2 == 'number') return arg1 + arg2;
    else if (typeof arg1 == 'string' && typeof arg2 == 'string')
        return arg1 + arg2;

    return;
}

const a1 = 'benedikt ';
const a2 = 'götz';
const r1 = add(a1, a2);

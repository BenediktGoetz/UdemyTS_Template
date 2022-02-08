function printAll(arg: string | string[]) {
    if (typeof arg === 'object') {
        for (const s of arg) {
            console.log(s);
        }
    } else {
        console.log(arg);
    }
}

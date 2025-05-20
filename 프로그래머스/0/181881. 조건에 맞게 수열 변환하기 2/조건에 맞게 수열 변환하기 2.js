function array(arr, x) {
    let result = [...arr];
    for (let i = 0; i < x; i++) {
        result = result.map((e) => {
            if (e % 2 === 0 && e > 50) return e / 2;
            if (e % 2 === 1 && e < 50) return e * 2 + 1;
            return e;
        });
    }
    return result;
}

function solution(arr) {
    for (let i = 0; i < 100; i++) {
        const a = array(arr, i);
        const b = array(arr, i + 1);
        if (JSON.stringify(a) === JSON.stringify(b)) return i;
    }
    return -1;
}

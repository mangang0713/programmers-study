// function solution(dots) {
//     var answer = 0;
//     const a = [[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]];
//     const b = [];
//     a.map(e=> {
//         b.push((dots[e[0]][1] - dots[e[1]][1]) / (dots[e[0]][0] - dots[e[1]][0]));
//     })
//     const set = new Set(b);
//     console.log(b);
//     return b.length === [...set].length ? 0 : 1;
// }

function solution(dots) {
    const getSlope = (a, b) => {
        const dx = dots[a][0] - dots[b][0];
        const dy = dots[a][1] - dots[b][1];
        if (dx === 0) return Infinity; // 수직선
        return dy / dx;
    };

    const combinations = [
        [[0,1], [2,3]],
        [[0,2], [1,3]],
        [[0,3], [1,2]]
    ];

    for (let [[a, b], [c, d]] of combinations) {
        if (getSlope(a, b) === getSlope(c, d)) {
            return 1;
        }
    }

    return 0;
}

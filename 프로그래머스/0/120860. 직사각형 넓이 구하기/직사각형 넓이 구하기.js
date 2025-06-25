function solution(dots) {
    const x = [];
    const y = [];
    dots.map(e=>{
        x.push(e[0]);
        y.push(e[1]);
    })
    const xx = new Set(x);
    const yy = new Set(y);
    const xxx = [...xx];
    const yyy = [...yy];
    return Math.abs(xxx[0]-xxx[1]) * Math.abs(yyy[0]-yyy[1]);
}
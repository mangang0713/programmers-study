function solution(a, b) {
    var answer = '';
    let as = '';
    as += a;
    let bs = '';
    bs += b;
    as + bs > bs + as ? answer = as + bs : answer = bs + as;
    return Number(answer);
}
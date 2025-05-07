function solution(a, b) {
    var answer = 0;
    let plus = Number(`${a}${b}`);
    let multiple = 2 * a * b;
    plus > multiple ? answer = plus : answer = multiple;
    return answer;
}
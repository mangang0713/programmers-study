function factorial(num) {
    let answer = 1n;
    for(let i=1n; i<=num; i++){
        answer *= i;
    }
    return answer;
}

function solution(n) {
    var answer = 0n;
    for(let i=Math.ceil(n/2); i<=n; i++){
        answer += (factorial(i) / (factorial(n-i) * factorial(2*i-n))) % 1234567n;
    }
    return answer % 1234567n;
}
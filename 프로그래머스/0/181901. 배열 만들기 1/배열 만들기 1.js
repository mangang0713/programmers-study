function solution(n, k) {
    var answer = [];
    for(let i=1; i<=Math.floor(n/k); i++){
        answer.push(k*i);
    }
    return answer;
}
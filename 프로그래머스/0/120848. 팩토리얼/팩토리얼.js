function solution(n) {
    var answer = 1;
    let factorial = 1;
    while(n>=factorial){
        factorial *= answer;
        answer++;
    }
    return answer-2;
}
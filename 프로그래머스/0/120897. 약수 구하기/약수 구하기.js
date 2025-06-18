function solution(n) {
    var answer = [];
    for(let i=1; i<=Math.floor(n/2); i++){
        if(!(n%i)) answer.push(i);
    }
    answer.push(n);
    return answer;
}
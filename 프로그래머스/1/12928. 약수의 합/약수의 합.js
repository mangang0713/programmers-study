function solution(n) {
    var answer = 0;
    for(let i=1; i<=Math.floor(n/2); i++){
        if(!(n % i)){
            answer += i;
        }
    }
    answer += n;
    return answer;
}
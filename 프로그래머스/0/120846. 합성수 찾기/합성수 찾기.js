function solution(n) {
    var answer = 0;
    for(let i=3; i<=n; i++){
        if(i % 2){
            for(let j=3; j<=Math.floor(i/2); j++){
                if(i % j === 0){
                    answer++;
                    break;
                }
            }
        } else {
            answer++;
        }
    }
    return answer;
}
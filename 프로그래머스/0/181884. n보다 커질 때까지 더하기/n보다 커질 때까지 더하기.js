function solution(numbers, n) {
    var answer = 0;
    numbers.map(e =>{
        if(answer <= n){
            answer += e;
        }
    })
    return answer;
}
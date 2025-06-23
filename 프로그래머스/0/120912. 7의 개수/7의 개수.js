function solution(array) {
    var answer = 0;
    array.map(e=>{
        while(e>=1){
            if(e%10===7) answer++;
            e = Math.floor(e/10);
        }
    })
    return answer;
}
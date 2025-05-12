function solution(intStrs, k, s, l) {
    var answer = [];
    intStrs.map(e=> {
        if(Number(e.slice(s, s+l)) > k){
            answer.push(Number(e.slice(s, s+l)));
        }
    })
    return answer;
}
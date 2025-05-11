function solution(l, r) {
    var answer = [];
    for(let i=l; i<=r; i++){
        if(/^[50]+$/.test(i)) answer.push(i);
    }
    if(!answer.length) return [-1];
    
    return answer;
}
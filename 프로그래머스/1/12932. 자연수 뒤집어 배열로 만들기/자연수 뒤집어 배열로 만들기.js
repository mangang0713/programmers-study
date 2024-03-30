function solution(n) {
    var answer = [];
    let subString = n.toString();
    let divide = 0;
    for(let i=0; i<subString.length; i++){
        answer[i] = n % 10;
        n = Math.floor(n/10);
    }
    return answer;
}
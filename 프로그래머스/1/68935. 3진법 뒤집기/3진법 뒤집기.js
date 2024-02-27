function solution(n) {
    var answer = 0;
    let three = n.toString(3).split("").reverse().join("");
    
    for(let i=0;i<three.length;i++){
        answer += parseInt(three[i]) * Math.pow(3, three.length - 1 - i);
    }
    return answer;
}
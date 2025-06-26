function solution(sides) {
    var answer = 0;
    for(let i=Math.abs(sides[0]-sides[1])+1; i<sides[0]+sides[1]; i++){
       answer++; 
    }
    return answer;
}
function solution(s) {
    var answer = 0;
    const newOne = s.split(" ");
    for(let i=0; i<newOne.length; i++){
        if(newOne[i] === 'Z'){
            answer -= Number(newOne[i-1]);
        } else {
            answer += Number(newOne[i]);
        }
    }
    return answer;
}
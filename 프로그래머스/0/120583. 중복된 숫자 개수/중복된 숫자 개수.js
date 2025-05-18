function solution(array, n) {
    let answer = 0;
    array.map(e=>{
        if(e === n) answer++;
    })
    return answer;
}
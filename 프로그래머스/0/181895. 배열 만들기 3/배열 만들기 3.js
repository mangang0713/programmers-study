function solution(arr, intervals) {
    var answer = [];
    intervals.map(e=>{
        for(let i=e[0]; i<=e[1]; i++) answer.push(arr[i]);
    })
    return answer;
}
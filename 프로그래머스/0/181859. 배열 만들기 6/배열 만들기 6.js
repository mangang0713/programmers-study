function solution(arr) {
    var answer = [];
    for(let i=0; i<arr.length; i++){
        answer[answer.length-1] === arr[i] ? answer.pop() : answer.push(arr[i]);
    }
    return answer.length ? answer : [-1];
}
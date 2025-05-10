function checkAnswer(arr, query) {
    let result = Infinity;
    for(let i=query[0]; i<=query[1]; i++){
        if(arr[i] > query[2] && arr[i] < result) result = arr[i];
    };
    result === Infinity ? result = -1 : result = result;
    return result;
}
    
function solution(arr, queries) {
    var answer = [];
    queries.forEach((query) => {
        answer.push(checkAnswer(arr,query));
    })
    return answer;
}
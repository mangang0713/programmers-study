function solution(arr) {
    var answer = [];
    while(arr[0] !== 2 && arr.length) arr.shift();
    while(arr[arr.length-1] !== 2 && arr.length) arr.pop();
    return arr.length ? arr : [-1];
}
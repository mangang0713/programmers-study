function solution(arr, n) {
    var answer = [];
    if(arr.length % 2){
        for(let i=0; i<arr.length; i+=2) arr[i] += n;
    } else {
        for(let i=1; i<arr.length; i+=2) arr[i] += n;
    }
    return arr;
}
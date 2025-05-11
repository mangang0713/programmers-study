function queryFunction(arr, query) {
    for(let i=query[0]; i<=query[1]; i++){
        if(!(i % query[2])) arr[i]++;
    }
    return arr;
}
function solution(arr, queries) {
    queries.map(e=> queryFunction(arr, e))
    return arr;
}
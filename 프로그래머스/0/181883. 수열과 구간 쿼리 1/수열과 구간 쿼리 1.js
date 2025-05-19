function solution(arr, queries) {
    queries.map(e=>{
        for(let i=e[0]; i<=e[1]; i++){
            arr[i]++;
        }
    })
    return arr;
}
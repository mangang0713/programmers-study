function solution(arr, k) {
    var answer = [];
    const set = new Set(arr);
    const newArray = [...set];
    for(let i=0; i<k; i++){
        if(newArray.length <= i){
            newArray.push(-1);
        }
    }
    while(newArray.length > k){
        newArray.pop();
    }
    return newArray;
}
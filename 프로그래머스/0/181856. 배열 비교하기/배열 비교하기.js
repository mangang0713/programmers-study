function solution(arr1, arr2) {
    var answer = 0;
    const sum1 = arr1.reduce((prev, curr) => prev + curr);
    const sum2 = arr2.reduce((prev, curr) => prev + curr);
    
    if(arr1.length === arr2.length){
        if(sum1 > sum2) return 1;
        else if(sum1 < sum2) return -1;
    } else {
        return arr1.length > arr2.length ? 1 : -1;
    }
    return 0;
}
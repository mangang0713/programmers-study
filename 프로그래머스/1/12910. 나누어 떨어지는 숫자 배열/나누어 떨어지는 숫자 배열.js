function solution(arr, divisor) {
    let answer = [];
    let count = 0;
    for(let i=0; i<arr.length; i++){
        if(!(arr[i] % divisor)){
            answer[count] = arr[i];
            count++;
        }           
    }
    if(!count)
        answer[0] = -1;
    
    answer.sort((a, b) => a - b);
    return answer;
}
function solution(arr)
{
    var answer = [];
    let count = 0;
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== arr[i+1]) {
            answer[count] = arr[i];
            count++;
        }
    }
    
    return answer;
}
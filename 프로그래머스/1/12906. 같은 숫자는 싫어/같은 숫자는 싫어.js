function solution(arr)
{
    var answer = [];

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    let count = 0;
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== arr[i+1]) {
            answer[count] = arr[i];
            count++;
        }
    }
    
    return answer;
}
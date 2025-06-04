function solution(arr) {
    let max = 0;
    if(max < arr.length) max = arr.length;
    arr.map(e => {
        if(max < e.length) max = e.length;
    })
    const answer = Array.from({ length: max }, () => Array(max).fill(0));;
    for(let i=0; i<max; i++){
        for(let j=0; j<max; j++){
            if(arr[i] && arr[i][j]) answer[i][j] = arr[i][j];            
        }
    }
    return answer;
}
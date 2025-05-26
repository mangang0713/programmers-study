function solution(arr, flag) {
    var answer = [];
    arr.map((e, idx) => {
        if(flag[idx]){
            for(let i=0; i<e*2; i++) answer.push(e);
        } else {
            for(let i=0; i<e; i++) answer.pop();
        }
    })
    return answer;
}
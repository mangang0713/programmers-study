function solution(array, n) {
    var answer = 0;
    let low = 100;
    array.map(e=> {
        if(Math.abs(e-n) < low ){
            low = Math.abs(e-n);
            answer = e;
        } 
        else if(Math.abs(e-n) === low){
            if(e<answer) answer = e;
        }
    })
    return answer;
}
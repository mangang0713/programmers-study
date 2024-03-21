function solution(progresses, speeds) {
    var answer = [];
    let index = 0;
    
    while(progresses.length){
        let count = 0;
        for(let j=0; progresses[0] < 100; j++){
            for(let i=0; i<progresses.length; i++){
                progresses[i] += speeds[i];
            }        
        }
        console.log(progresses);
        
        for(let i=0; i<progresses.length; i++){
            if(progresses[i] >= 100){
                progresses.shift();
                speeds.shift();
                count++;
                i--;
            }else break;
        }
        answer[index] = count;
        index++;
        console.log(progresses);
    }
    return answer;
}
function solution(brown, yellow) {
    var answer = [];
    let total = brown + yellow;
    for (let i=0; i<=yellow; i++){
        for (let j=0; j<=yellow; j++){
            if(i*j > yellow){
                continue;
            } else if(i*j === yellow) {
                if(i >= j){
                    if((i*j + 2 * (i+j) + 4) === total){
                        return [i+2, j+2]
                    } else{
                       continue; 
                    } 
                } else{
                    continue;
                } 
            } else {
                continue;
            }
        }
    }
    
    return answer;
}
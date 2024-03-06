function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    let up = numer1 * denom2 + numer2 * denom1;
    let down = denom1 * denom2;
    
    for(let i=down; i>0; i--){
        if(!(down % i)){
            if(!(up % i)){
                up /= i;
                down /= i;
            }
        }
    }
    answer = [up, down];
    return answer;
}
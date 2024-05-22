function solution(number, k) {
    let numbering = number.split('');
    let answer = [];
    
    for(let i=0; i<number.length; i++){
        let current = number[i];
        while(k > 0 && answer.length > 0 && answer[answer.length-1]<current ){
            answer.pop();
            k--;
        }
        answer.push(current);
    }
    answer = answer.slice(0, answer.length - k);
    return answer.join('');
}
function solution(binomial) {
    let answer = binomial.split(' ');
    console.log(answer);
    switch(answer[1]){
        case '+':
            return Number(answer[0]) + Number(answer[2]);
            break;
        case '-':
            return answer[0] - answer[2];
            break;
        case '*':
            return answer[0] * answer[2];
            break;
    }
    
}
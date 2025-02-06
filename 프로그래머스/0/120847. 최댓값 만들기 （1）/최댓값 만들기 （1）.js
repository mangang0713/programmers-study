function solution(numbers) {
    var answer = 0;
    for(let i=0; i<numbers.length; i++){
        for(let j=0; j<numbers.length; j++){
            if(i !== j) {
                if(answer < numbers[i]*numbers[j]) {
                    answer = numbers[i]*numbers[j];
                }
            }
        }
    }
    return answer;
}
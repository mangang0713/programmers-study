function solution(my_string) {
    var answer = [];
    for (let i=my_string.length; i>=0; i--){
        answer.push(my_string[i]);
    }
    return answer.join('');
}
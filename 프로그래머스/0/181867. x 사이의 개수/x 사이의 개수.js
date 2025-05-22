function solution(myString) {
    var answer = [];
    answer = myString.split('x');
    answer.map((_, idx) => {
        answer[idx] = answer[idx].length;
    })
    return answer;
}
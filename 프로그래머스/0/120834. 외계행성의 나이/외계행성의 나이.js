function solution(age) {
    var answer = [];
    while(age >= 1) {
        answer.unshift(String.fromCharCode(age % 10 + 97));
        age = Math.floor(age / 10);
    }
    return answer.join('');
}
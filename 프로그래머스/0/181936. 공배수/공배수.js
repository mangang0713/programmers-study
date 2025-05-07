function solution(number, n, m) {
    var answer = 0;
    number % n || number % m ? answer = 0 : answer = 1;
    return answer;
}
function solution(my_string) {
    var answer = 0;
    my_string.match(/\d/g).map(Number).map(e=>answer+=e);
    return answer;
}
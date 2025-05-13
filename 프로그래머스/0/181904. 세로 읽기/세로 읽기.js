function solution(my_string, m, c) {
    var answer = '';
    my_string.split('');
    for(let i=0;i<my_string.length/m;i++){
        answer+=my_string[m*i+c-1];
    }
    
    return answer;
}
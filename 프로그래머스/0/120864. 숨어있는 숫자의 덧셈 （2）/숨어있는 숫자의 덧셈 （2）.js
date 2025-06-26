function solution(my_string) {
    var answer = 0;
    for(let i=0; i<my_string.length; i++){
        my_string.charCodeAt(i) >= 65 ? answer += ' ' : answer += my_string[i];
    }
    const x = answer.split(' ');
    const y = x.filter(e=>e !== '');
    let result = 0;
    y.map(e=> result += Number(e));
    return result;
}
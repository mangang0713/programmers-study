function solution(s) {
    var answer = '';
    let string = [];
    string = s.split(" ").map(Number);
    const Max = Math.max(...string);
    const Min = Math.min(...string);
    answer = `${Min} ${Max}`;
    
    return answer;
}
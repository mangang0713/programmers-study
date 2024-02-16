function solution(s) {
    let answer = false;
    
    function isNumericString(s) {
        return /^[0-9]+$/.test(s);
    }
    if(s.length === 4 || s.length === 6)
        answer = isNumericString(s);
    
    // if(s.length === 4 || s.length === 6) {
    //     if(!isNaN(Number(s)))
    //         answer = true;
    // }
    return answer;
}
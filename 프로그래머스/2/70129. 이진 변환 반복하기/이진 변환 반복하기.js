function solution(s) {
    let answer = [0, 0];
    let x = s.split('');
    
    function makingBinary(e) {
        let y = e.filter(el => el!=='0').join('').length.toString(2);
        answer[1] += e.filter(el => el==='0').join('').length;  
        return y.split('');
    }
    
    do {
        x = makingBinary(x);
        answer[0]++;
    }while(!(x.length ===1 && x[0] === '1'));
    
    return answer;
}
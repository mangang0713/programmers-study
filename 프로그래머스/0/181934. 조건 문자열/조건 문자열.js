function solution(ineq, eq, n, m) {
    var answer = 0;
    if(n === m){
        if(eq === '!') return 0;
    }else{
        if(ineq === '<'){
            if(n > m) return 0;
        }else{
            if(n < m) return 0;
        }
    } 
    return 1;
}
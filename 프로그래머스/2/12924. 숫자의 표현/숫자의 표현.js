function solution(n) {

    let count = 0;
    
    function start(e) {
        let startNum = 0;
        for(let i=1; i<e; i++)
            startNum += i;
        return startNum;
    }
    
    for(let i=1; start(i)+i <= n; i++){
        if(!((n - start(i)) % i))
            count++;
    }

    return count;
}

/*

n개 -> 1~n더한값 + n의 배수

*/
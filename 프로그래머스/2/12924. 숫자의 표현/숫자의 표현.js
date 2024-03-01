function solution(n) {

    let count = 0;
    
    function start(e) {
        let startNum = 0;
        for(let i=1; i<e; i++){
            startNum += i;
        }
        return startNum;
    }
    
    for(let i=1; start(i)+i <= n; i++){
        if(!((n - start(i)) % i))
            count++;
    }
    // n = 15 start(2) = 3  12 % 2 = 0

    return count;
}

/*
15 = (1+2) + 2의배수 
12가 2의배수냐? 맞으면 2개의 연속된 숫자로 15를 만들수 있다


n개 -> 1~n더한값 + n의 배수(0부터)


1 -> 1
2 -> 2
3 -> 1,2 / 3
4 -> 4
5 -> 2,3 / 5
6 -> 1,2,3 / 6
7 -> 3,4 / 7
8 -> 8
9 -> 2,3,4 / 4,5 / 9
10 -> 1,2,3,4 / 10

*/
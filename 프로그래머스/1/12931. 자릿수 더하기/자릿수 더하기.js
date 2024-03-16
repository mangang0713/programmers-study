function solution(n)
{
    var answer = 0;
    
    for(let i=0; i<9; i++) {
        answer += n % 10;
        n = Math.floor(n / 10);
    }

    return answer;
}
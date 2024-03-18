function solution(n)
{
    var answer = 0;
    
    let ex = n.toString().length;
    for(let i=0; i< ex; i++) {
        answer += n % 10;
        n = Math.floor(n / 10);
    }

    return answer;
}
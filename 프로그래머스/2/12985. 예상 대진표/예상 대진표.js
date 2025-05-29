function solution(n,a,b)
{
    var answer = 0;
    while(n !== 1){
        if(a===b) return answer;
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        n /= 2;
        answer++;
    }
    return answer;
}
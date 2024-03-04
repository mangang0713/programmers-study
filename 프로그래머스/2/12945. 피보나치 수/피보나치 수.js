function solution(n) {
    var answer = 0;
    
    const Fibonacci = [0, 1];
    
    for(let i=2; i<=n; i++)
        Fibonacci[i] = Fibonacci[i-1] % 1234567 + Fibonacci[i-2] % 1234567;
    
    answer = Fibonacci[n] % 1234567;
    return answer;
}
function solution(balls, share) {
    var answer = 0;
    
function combination(n, k) {
    function factorial(n) {
        if (n === 0n || n === 1n) {
            return 1n;
        }
        let result = 1n;
        for (let i = 2n; i <= n; i++) {
            result *= i;
        }
        return result;
    }
    const numerator = factorial(n);
    const denominator = factorial(k) * factorial(n - k);
    return numerator / denominator;
}
    answer = combination(balls, share);
    return answer;
}
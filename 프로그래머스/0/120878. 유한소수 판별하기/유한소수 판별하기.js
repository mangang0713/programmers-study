function solution(a, b) {
    // 최대공약수로 약분
    const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);
    const g = gcd(a, b);
    b /= g; // 기약분수로 만든 분모

    // 분모에서 2와 5를 제거
    while (b % 2 === 0) b /= 2;
    while (b % 5 === 0) b /= 5;

    return b === 1 ? 1 : 2; // 유한소수면 1, 아니면 2
}

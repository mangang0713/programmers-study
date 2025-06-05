// function solution(n) {
//     var answer = [];
//     while(n>1){
//         for(let i=2; i<=n; i++){
//             if(n/i === Math.floor(n/i)){
//                 n /= i;
//                 answer.push(i);
//                 continue;
//             }
//         }
//     }
//     return [...new Set(answer)];
// }

function solution(n) {
    const answer = [];
    for (let i = 2; i <= n; i++) {
        while (n % i === 0) {
            answer.push(i);
            n /= i;
        }
    }
    return [...new Set(answer)];
}

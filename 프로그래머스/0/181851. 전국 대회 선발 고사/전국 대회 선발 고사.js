/*
function solution(rank, attendance) {
    var answer = 0;
    let a = 100;
    let b = 100;
    let c = 100;
    for(let i=0; i<rank.length; i++) {
        if(attendance[i]) {
            if(rank[i] < a) {
                c = b;
                b = a;
                a = rank[i];
            }
            else if(rank[i] < b) {
                c = b;
                b = rank[i];
            }
            else if(rank[i] < c) {
                c = rank[i];
            }
        }
    }
    answer = rank.indexOf(a) * 10000 + rank.indexOf(b) * 100 + rank.indexOf(c);
    return answer;
}
*/

function solution(rank, attendance) {
    var answer = 0;
    const result = rank.filter((num, i) => attendance[i]);
    console.log(result);
    
    result.sort((a, b) => a - b);
    answer = rank.indexOf(result[0]) * 10000 + rank.indexOf(result[1]) * 100 + rank.indexOf(result[2]);
    return answer;
}
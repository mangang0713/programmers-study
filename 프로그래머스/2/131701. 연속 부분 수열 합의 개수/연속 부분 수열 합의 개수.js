function solution(elements) {
    var answer = 0;
    const total = [];
    for(let i=0; i<elements.length; i++){ // 몇 번째 순서인가요?
        for(let j=0; j<elements.length; j++){ // 몇 번째 원소인가요?
            let answer = 0;
            for(let k=0; k<=i; k++){ // 원소를 몇 개 더할건가요?
                answer += elements[(j+k) % elements.length];
            }
            total.push(answer);
        }
    }
    return [...new Set(total)].length;
}
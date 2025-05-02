function solution(k, tangerine) {
    let sorted = tangerine.sort((a,b) => a - b);
    let index = [0];
    let j=0;
    for(let i=1; i<=sorted.length; i++){
        if(sorted[i] > sorted[i-1] || i === sorted.length){
            index[j+1] = i-index.reduce((prev, curr) => prev + curr);
            j++;
        }
    }
    let sortedIndex = index.sort((a,b) => b - a);
    let answer = 0;
    let num = 0;
    for(let i=0; i<sortedIndex.length; i++){
        if(answer >= k){
            return num;
        } else {
            answer = answer + sortedIndex[i];
            num++;
        }
    }
}
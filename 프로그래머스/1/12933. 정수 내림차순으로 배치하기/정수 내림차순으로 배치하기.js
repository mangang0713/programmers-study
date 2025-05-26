function solution(n) {
    const arr = [];
    while(n >= 1){
        arr.push(n % 10);
        n = Math.floor(n/10);
    }
    return Number(arr.sort((a,b)=>b-a).join(''));
    
}
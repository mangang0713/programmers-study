function solution(n) {
    let noThree = 0;
    for(let i=1; i<=n; i++){
        noThree++;
        while(noThree % 3 === 0 || noThree % 10 === 3 || Math.floor(noThree/10) % 10 === 3){
            noThree++;
        }
    }
    return noThree;
}
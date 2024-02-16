function solution(numlist, n) {
    var answer = [];
    let sortedNumList = [...numlist];
    
    for (let i=0; i<sortedNumList.length; i++)
        sortedNumList[i] -= n;
    
    sortedNumList.sort((a, b) => {
        const absA = Math.abs(a);
        const absB = Math.abs(b);
        
        if (absA < absB) 
            return -1;
        if (absA > absB)
            return 1;
        if (a < b)
            return 1;
        if (a > b)
            return -1;
        return 0;
    })
    
    const result = sortedNumList.map(e => e + n);
    
    return result;
}
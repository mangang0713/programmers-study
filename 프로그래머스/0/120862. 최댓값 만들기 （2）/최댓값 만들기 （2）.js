function solution(numbers) {
    const minus = numbers.filter(e=>e<0).sort((a,b) => a-b);
    const plus = numbers.filter(e=>e>=0).sort((a,b) => b-a);
    console.log(minus, plus);

    if(numbers.length === 2){
        return numbers[0] * numbers[1];
    } else {
        if(minus.length >= 2 && plus.length >= 2) return minus[0]*minus[1] > plus[0]*plus[1] ? minus[0]*minus[1] : plus[0]*plus[1];
        if(minus.length < 2) return plus[0]*plus[1];
        if(plus.length < 2) return minus[0]*minus[1];
        
    }
    
}
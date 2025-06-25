function solution(polynomial) {
    var answer = '';
    let one = 0;
    let zero = 0;
    
    answer = polynomial.split(' ').filter(e=>e!=='+').map(e=>{
        if(e.includes('x')) {
            if(e === 'x') one += 1;
            else one += Number(e.replace('x', ''));
        } else zero += Number(e);
    })
    console.log(one, zero);
    if(one === 1 && zero > 0) return `x + ${zero}`;
    if(one === 1 && zero === 0) return `x`;
    if(one > 1 && zero > 0) return `${one}x + ${zero}`;
    if(one > 1 && zero === 0) return `${one}x`;
    if(one === 0 && zero > 0) return `${zero}`;
    
}
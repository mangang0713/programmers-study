function solution(n) {
    var answer = 0;
    let number = n.toString(2);
    let numberCount = 0;
    
    for(let i=0; i< number.length; i++){
        if(number[i] === '1') {
            numberCount++;
        }
    }
    
    while(true){
        n++;
        let newCount = 0;
        for(let i=0; i<n.toString(2).length; i++){
            if(n.toString(2)[i] === '1'){
                newCount++;
            }
        }
        if(numberCount === newCount){
            return n;
        }
    }
}
function solution(s){
    var answer = true;

    const newS = [...s];
    let count = 0;
    console.log(newS);
    const counting = newS.map(e => {
        if (e === '(')
            count++;
        else
            count--;
        
        if(count<0)
            answer = false;
    })
    
    if(count)
        answer = false;
    
    return answer;
}
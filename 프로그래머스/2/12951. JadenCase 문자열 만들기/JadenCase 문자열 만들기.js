function solution(s) {
    var answer = '';
    answer = s.split(" ");
    for(let i=0; i<answer.length; i++){
        answer[i] = answer[i].toLowerCase();
        answer[i] = answer[i].charAt(0).toUpperCase() + answer[i].slice(1);
    }
    
    const ans = answer.join(" ");
    
    
    
    
    return ans;
}
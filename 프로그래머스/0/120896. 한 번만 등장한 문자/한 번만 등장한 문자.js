function solution(s) {
    var answer = '';
    const word = [...s];
    let count = new Array(26);
    count.fill(0);
    
    for(let i=0; i<word.length; i++) {
        count[word[i].charCodeAt()-97]++;
    }
    
    for(let i=0; i<count.length; i++) {
        if (count[i] === 1)
            answer += String.fromCharCode(i+97);
    }
    return answer;
}
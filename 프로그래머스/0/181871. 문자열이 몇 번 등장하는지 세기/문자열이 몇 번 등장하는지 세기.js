function solution(myString, pat) {
    var answer = 0;
    while(myString.includes(pat)){
        myString = myString.slice(myString.indexOf(pat)+1);
        answer++;
        console.log(myString);
    }
    return answer;
}
function solution(myString) {
    var answer = [];
    for(let i=0; i<myString.length; i++){
        if(myString[i].charCodeAt() > 96){
            answer.push(String.fromCharCode(myString[i].charCodeAt() - 32))
        }else{
            answer.push(myString[i]);
        }
    }
    return answer.join('');
}
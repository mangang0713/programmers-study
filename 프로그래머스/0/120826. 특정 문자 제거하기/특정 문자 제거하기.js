function solution(my_string, letter) {
    let string = [...my_string];
    for(let i=0; i<string.length; i++){
        if(string[i] === letter){
            string.splice(i,1);
            i--;
        }
    }
    return string.join("");
}
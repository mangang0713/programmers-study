function solution(my_string) {
    const total = Array(52).fill(0);
    for(let i=0; i<my_string.length; i++){
        if(my_string[i].charCodeAt() < 91){
            total[my_string[i].charCodeAt() - 65]++;
        } else{
            total[my_string[i].charCodeAt() - 97 + 26]++;
        }
    }
    return total;
}
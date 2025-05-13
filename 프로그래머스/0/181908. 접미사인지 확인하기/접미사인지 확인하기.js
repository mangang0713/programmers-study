function solution(my_string, is_suffix) {
    var answer = 0;
    for(let i=1; i<=is_suffix.length; i++){
        if(is_suffix[is_suffix.length-i] === my_string[my_string.length-i]){
            continue;
        } else return 0;
    }
    return 1;
}
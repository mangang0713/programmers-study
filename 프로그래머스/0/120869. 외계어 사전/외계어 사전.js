function solution(spell, dic) {
    var answer = 2;
    for(let i=0; i<dic.length; i++){
        let isBoolean = true;
        for(let j=0; j<spell.length; j++){
            if(!dic[i].includes(spell[j])){
                isBoolean = false;
                continue;
            }
        }
        if(isBoolean) answer = 1;
    }
    return answer;
}
function solution(code) {
    let mode = false;
    let ret = '';
    for(let idx=0; idx<code.length; idx++){
        if(code[idx] === '1'){
            mode = !mode;
            continue;
        }
        if(mode){
            if(idx % 2) ret += code[idx];
        } else{
            if(!(idx % 2)) ret += code[idx];
        }
    }
    return ret ? ret : 'EMPTY';
}
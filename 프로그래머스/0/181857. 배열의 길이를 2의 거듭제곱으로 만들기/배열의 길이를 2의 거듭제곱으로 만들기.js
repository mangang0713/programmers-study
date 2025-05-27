function checkPower(len){
    for(let i=0; i<=10; i++){
        if((2 ** i) >= len) return (2 ** i);
    }
}

function solution(arr) {
    let totalLength = checkPower(arr.length)
    for(let i=arr.length; i< totalLength; i++){
        arr.push(0);
    }
    return arr;
}
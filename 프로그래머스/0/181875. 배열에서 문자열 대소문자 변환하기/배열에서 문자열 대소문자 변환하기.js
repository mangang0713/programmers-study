function solution(strArr) {
    for(let i=0; i<strArr.length; i++){
        strArr[i] = i % 2 ? strArr[i].toUpperCase() : strArr[i].toLowerCase(); 
    }
    return strArr;
}
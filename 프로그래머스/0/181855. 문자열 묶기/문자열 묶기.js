function solution(strArr) {
    let newArray = new Array(30).fill(0);
    strArr.map(e => newArray[e.length-1]++)
    return Math.max(...newArray);
}
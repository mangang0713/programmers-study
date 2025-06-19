function solution(num, k) {
    const newNum = num.toString();
    return newNum.indexOf(k.toString()) === -1 ? -1 : newNum.indexOf(k.toString())+1;
}
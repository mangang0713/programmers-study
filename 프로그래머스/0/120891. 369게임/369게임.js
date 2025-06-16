function solution(order) {
    var answer = 0;
    let orderString = order.toString();
    for(let i=0; i<orderString.length; i++){
        if(!(orderString[i] % 3) && orderString[i] > 0) answer++;
    }
    return answer;
}
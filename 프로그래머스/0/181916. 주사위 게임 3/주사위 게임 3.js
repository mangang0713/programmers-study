function solution(a, b, c, d) {
    var answer = 0;
    let dice = [a, b, c, d];
    let total = new Array(4).fill(0);
    for(let i=0; i<6; i++){
        total[i] = dice.filter((num) => num === i+1);
        total[i] = total[i].length;
    }
    console.log(total);
    let sortedDice = total.slice().sort((a,b)=>b-a);
    console.log(dice);
    total.unshift(0);
    if(sortedDice[0] === 4){
        return 1111 * dice[0];
    } else if(sortedDice[0] === 3){
        return (10 * total.indexOf(3) + total.indexOf(1)) ** 2;
    } else if(sortedDice[0] === 2){
        if(sortedDice[1] === 2){
            let first = total.indexOf(2);
            let second = total.indexOf(2, first + 1);
            return ((first + second) * Math.abs(first - second));
        } else {
            let first = total.indexOf(1);
            let second = total.indexOf(1, first + 1);
            return first * second;
        }
    } else {
        return Math.min(a,b,c,d);
    }
    
    return answer;
}
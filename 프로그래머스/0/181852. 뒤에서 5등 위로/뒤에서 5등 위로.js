function solution(num_list) {
    const sortedNum = num_list.sort((a,b)=>a-b);
    for(let i=0; i<5; i++){
        sortedNum.shift();
    }
    return sortedNum;
}
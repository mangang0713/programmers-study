function solution(num_list) {
    var answer = 0;
    num_list.map(e=>{
        while(e !== 1){
            e % 2 ? e = (e-1) / 2 : e /= 2;
            answer++;
        }
    })
    return answer;
}
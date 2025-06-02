function solution(schedules, timelogs, startday) {
    var answer = 0;
    schedules.map((e, idx) => {
        let present = true;
        for(let i=0; i<timelogs[idx].length; i++){
            if((i+startday) % 7 < 6 && (i+startday) % 7 > 0){
                if(e % 100 < 50){
                    if(timelogs[idx][i] > e+10 ) present = false;
                } else {
                    if(timelogs[idx][i] > e+50 ) present = false;
                }
                
            }
        }
        if(present) answer++;
    })
    return answer;
}

// schedules -> 7시~11시 출근희망시각 (실제로는 +10분 이내로 출근하면 됨)
// timelogs 7명, 6시~23시59분
// startday -> 요일
// 주말은 상관없고 전부 성공한 사람만 상품을 주면 됨
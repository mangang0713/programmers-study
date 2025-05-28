function solution(emergency) {
    var answer = new Array(emergency.length).fill(0);
    const sortedEmergency = [...emergency].sort((a,b) => b-a);
    console.log(sortedEmergency);
    for(let i=0; i<emergency.length; i++){
        answer[emergency.indexOf(sortedEmergency[i])] = i+1;
    }
    return answer;
}
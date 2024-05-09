function solution(array, commands) {
    const answer = [];
    for(let i=0; i<commands.length; i++){
        const sorted = array.slice(commands[i][0]-1, commands[i][1]);
        sorted.sort((a,b) => a - b);
        answer.push(sorted[commands[i][2]-1]);
    }

    return answer;
}
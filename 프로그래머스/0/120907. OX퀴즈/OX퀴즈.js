function solution(quiz) {
    var answer = [];
    quiz.map(e=>{
        const splitQuiz = e.split(' ');
        console.log(splitQuiz);
        if(splitQuiz[1] === '+'){
            Number(splitQuiz[0]) + Number(splitQuiz[2]) === Number(splitQuiz[4]) ? answer.push('O') : answer.push('X');
        } else {
            Number(splitQuiz[0]) - Number(splitQuiz[2]) === Number(splitQuiz[4]) ? answer.push('O') : answer.push('X');
        }
    })
    return answer;
}
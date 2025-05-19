function solution(todo_list, finished) {
    var answer = [];
    finished.map((done, index) => {
        if(!done) answer.push(todo_list[index]);
    })
    return answer;
}
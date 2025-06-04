function solution(board, k) {
    var answer = 0;
    for(let i=0; i<=k; i++){
        if (i >= board.length) break;
        for(let j=0; j<=k-i; j++){
            if (j >= board[i].length) break;
            answer += board[i][j];
        }
    }
    return answer;
}
function solution(board) {
    const N = board.length;
    const mine = [];

    // 지뢰 위치 수집
    for(let i = 0; i < N; i++) {
        for(let j = 0; j < N; j++) {
            if(board[i][j] === 1) mine.push([i, j]);
        }
    }

    // 방향 벡터 (상하좌우 + 대각선 8방향)
    const dx = [-1, -1, -1,  0, 0, 1, 1, 1];
    const dy = [-1,  0,  1, -1, 1,-1, 0, 1];

    // 지뢰 주변 1씩 증가
    for (const [x, y] of mine) {
        for (let d = 0; d < 8; d++) {
            const nx = x + dx[d];
            const ny = y + dy[d];

            if (0 <= nx && nx < N && 0 <= ny && ny < N && board[nx][ny] !== 1) {
                board[nx][ny]++;
            }
        }
    }

    // 지뢰가 아닌 0의 개수 세기
    let answer = 0;
    for(let i = 0; i < N; i++) {
        for(let j = 0; j < N; j++) {
            if (board[i][j] === 0) answer++;
        }
    }

    return answer;
}

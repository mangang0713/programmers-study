function solution(n) {
    const answer = Array.from({ length: n }, () => Array(n).fill(0));
    let direction = 0;
    let x = 0;
    let y = 0;
    
    for (let i = 1; i <= n ** 2; i++) {
        switch (direction) {
            case 0: {
                if(x < n && answer[y][x] === 0) {
                    answer[y][x] = i;
                    x++;
                } else {
                    direction = 1;
                    x--;
                    y++;
                    i--;
                }
                break;
            }
            case 1: {
                if(y < n && answer[y][x] === 0) {
                    answer[y][x] = i;
                    y++;
                } else {
                    direction = 2;
                    x--;
                    y--;
                    i--;
                }
                break;
            }
            case 2: {
                if(x >= 0 && answer[y][x] === 0){
                    answer[y][x] = i;
                    x--;
                } else {
                    direction = 3;
                    x++;
                    y--;
                    i--;
                }
                break;
            }
            case 3: {
                if(y >= 0 && answer[y][x] === 0){
                    answer[y][x] = i;
                    y--;
                } else {
                    direction = 0;
                    x++;
                    y++;
                    i--;
                }
                break;
            }
        }
    }    
    return answer;
}
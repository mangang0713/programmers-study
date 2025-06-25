function solution(keyinput, board) {
    var answer = [0,0];
    keyinput.map(e=>{
        switch(e){
            case 'up':
                answer[1]++;
                if(answer[1] > (board[1]-1)/2) answer[1]--;
                break;
            case 'down':
                answer[1]--;
                if(Math.abs(answer[1]) > (board[1]-1)/2)  answer[1]++;
                break;
            case 'left':
                answer[0]--;
                if(Math.abs(answer[0]) > (board[0]-1)/2)  answer[0]++;
                break;
            case 'right':
                answer[0]++;
                if(answer[0] > (board[0]-1)/2)  answer[0]--;
                break;
        }
    })
    return answer;
}
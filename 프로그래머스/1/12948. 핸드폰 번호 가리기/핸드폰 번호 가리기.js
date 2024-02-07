function solution(phone_number) {
    const ans = [...phone_number];
    let answer = '';
    for(let i=0; i<phone_number.length; i++) {
        if(i <phone_number.length-4)
            ans[i] = '*';
        answer += ans[i];
    }
    return answer;
}
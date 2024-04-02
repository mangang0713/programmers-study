// function solution(s)
// {
//     var answer = -1;
//     let count = 0;
//     if(s.length % 2)
//         return 0;
//     do {
//         count = 0;
//         for(let i=1; i<s.length; i++) {
//             if(s[i] === s[i-1]){
//                 s = s.slice(0, i-1).concat(s.slice(i + 1));
                
//                 count++;
//                 break;
//             }
//         }
//     } while(count)

//     if(s.length){
//         answer = 0;
//     } else {
//         answer = 1;
//     }

//     return answer;
// }


function solution(s)
{
    //문자열이 홀수면 0
    if(s.length % 2 != 0) return 0

    const answer = []
    const a = [...s]

    for(let i = 0; i < a.length; i++) {        
        //문자 비교
        if(a[i] == answer[answer.length-1]) {
            answer.pop();
            continue
        }

        //문자 입력
        answer.push(a[i])

        //남은 문자의 개수가 현재까지 입력된 개수보다 적으면 0
        if(a.length - i < answer.length) return 0
    }

    return 1
}
// function solution(people, limit) {
//     let count = 0;
    
//     people.sort((a,b) => b-a);
    
//     while(!!people.length){
//         let fat = people.shift();
//         let skinny = people[people.length - 1];
//         count++;
        
//         if(fat + skinny <= limit)
//             people.pop();
//     }
    
//     return count;
// }


function solution(people, limit) {
    let answer = 0;
    people.sort((a,b) => b-a);
    let count = people.length;
    

    
    for(let i=0; i< count; i++) {
        if(people[i] + people[count-1] <= limit){
            count--;
        }
        answer++;
    }
    return answer;
}

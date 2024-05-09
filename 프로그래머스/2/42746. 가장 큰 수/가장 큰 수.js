function solution(numbers) {

//     function sortingNumbers(a, b) {
        
//         const first = parseInt(a.toString()[0]);
//         const second = parseInt(b.toString()[0]);
        
//         if (first !== second) {
//             return second - first;
//         } else {
//             const secondaryFirst = parseInt(a.toString()[1]);
//             const secondarySecond = parseInt(b.toString()[1]);
//             return secondarySecond - secondaryFirst;
//         }
//     }
    
//     let answer = '';
    
//     numbers.sort(sortingNumbers);

//     for(let i=0; i<numbers.length; i++){
//         answer += numbers[i];
//     }
//     return answer;
    
    function compare(a, b) {
    const num1 = a.toString() + b.toString();
    const num2 = b.toString() + a.toString();
    return parseInt(num2) - parseInt(num1);
}


const sortedNumbers = numbers.sort(compare);


let largestNumber = sortedNumbers.join('');
    
    if(Number(largestNumber) < 1){
        largestNumber = '0';
    }

return largestNumber;
}
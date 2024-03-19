function solution(n) {
  
    let count = 1;
    let newArray = [[1,3]];


    const example = [1,3];
    for(let i=1; i<n; i++){

        let FirstArray = JSON.parse(JSON.stringify(newArray));
        for(let j=0; j<count; j++){
            if(FirstArray[j][0] === 2){
                FirstArray[j][0] = 3;
            } else if(FirstArray[j][0] === 3){
                FirstArray[j][0] = 2;
            } 
            if(FirstArray[j][1] === 3){
                FirstArray[j][1] = 2;
            } else if(FirstArray[j][1] === 2){
                FirstArray[j][1] = 3;
            }
        }
        let SecondArray = JSON.parse(JSON.stringify(newArray));
        for(let j=0; j<count; j++){
            if(SecondArray[j][0] === 1){
                SecondArray[j][0] = 2;
            } else if(SecondArray[j][0] === 2){
                SecondArray[j][0] = 1;
            } 
            if(SecondArray[j][1] === 1){
                SecondArray[j][1] = 2;
            } else if(SecondArray[j][1] === 2){
                SecondArray[j][1] = 1;
            }
        }
        count = count * 2 + 1;
        newArray = [];
        newArray.push(...FirstArray);
        newArray.push(example);
        newArray.push(...SecondArray);
    }
    return newArray;
}



// 3 7 15

// n이 1 증가 시 *2 +1 된다.

// 그 이유 -> n의 경우 완성되는 값이 2번째에 완성되고, n+1번째 원판을 3번째에 놓고나면 똑같이 n개의 원판을 옮기는 방식이 된다.

// 그렇다면 n이 1일 때를 구하고, 그때 2와 3의 index를 바꾼다. 그리고, [1,3]을 추가한 뒤, n이 1일때의 1과 2의 index를 바꾸면 된다.
// 이 방식으로 반복하면 된다.
function solution(priorities, location) {
  let count = 0; 
  let maxPriority = Math.max(...priorities); 
 
  while (true) {
    const currentProcess = priorities.shift();
 
    if (currentProcess === maxPriority) {
      count++; 
      if (location === 0) return count; 
      maxPriority = Math.max(...priorities);
    } else {
      priorities.push(currentProcess); 
    }
 
    if(!location) {
        location = priorities.length-1;
    } else {
        location--;
    }
  }
}

/*
priorities의 최댓값을 구하고, shift로 맨 앞 숫자를 빼낸다.
이 값이 최댓값과 같을 때, location이 0이라면 원하는 값 뽑은 것.
아니라면 생략하고, 다시 priorities의 최댓값을 구한다.
최댓값과 같지 않다면 push로 빼낸 숫자를 맨 뒤로 보낸다.
만약 location이 0인 상태라면, location을 마지막으로 보낸다.
아니라면, location을 1 줄인다.
이 과정을 반복하여 location이 0일때 맨 앞 숫자가 최댓값일 경우를 찾는다.
*/
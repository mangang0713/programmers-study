function solution(sizes) {
    var answer = 0;
    let width = [];
    let height = [];
    for(i=0; i < sizes.length; i++){
        sizes[i].sort((a, b) => a - b);
        width[i] = sizes[i][0];
        height[i] = sizes[i][1];
    }
    
    answer = Math.max(...width) * Math.max(...height);
    return answer;
}
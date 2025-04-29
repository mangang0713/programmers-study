function solution(sides) {
    var answer = 0;
    const lines = sides.sort((a,b) => b - a);
    if (lines[0] >= lines[1] + lines[2]) return 2;
    return 1;
}
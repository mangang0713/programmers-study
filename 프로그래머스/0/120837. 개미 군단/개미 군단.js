function solution(hp) {
    return ((hp % 5) % 3) + Math.floor(hp / 5) + Math.floor((hp % 5) / 3);
}
function solution(lines) {
    var answer = 0;
    const line = Array(201).fill(0);
    lines.map(e=> {
        for(let i=e[0]; i<e[1]; i++){
            line[i+100]++;
        }
    })
    return line.filter(e=> e>1).length;
}
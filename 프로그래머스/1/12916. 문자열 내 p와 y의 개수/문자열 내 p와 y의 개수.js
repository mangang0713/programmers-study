function solution(s){
    const arr = [...s.toLowerCase()].sort().filter(e => e === 'p' || e === 'y');
    const py = [arr.lastIndexOf('p')+1, arr.lastIndexOf('y')-arr.lastIndexOf('p')];
    return py[0] === py[1] ? true : false 

}
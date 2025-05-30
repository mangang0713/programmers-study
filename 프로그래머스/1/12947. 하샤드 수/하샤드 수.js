function solution(x) {
    const Splitted = String(x).split('');
    const total = Splitted.reduce((acc, cur) => +acc + +cur);
    return x % total ? false : true;
}
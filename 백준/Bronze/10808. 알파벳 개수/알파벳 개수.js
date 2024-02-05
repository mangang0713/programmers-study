let fs = require("fs");
let S = fs.readFileSync("/dev/stdin").toString().trim().split("");
let count = Array(26).fill(0);
let answer = '';

for(let i=0; i<S.length; i++)
  count[S[i].charCodeAt(0)-'a'.charCodeAt(0)]++;
console.log(count.join(" "));

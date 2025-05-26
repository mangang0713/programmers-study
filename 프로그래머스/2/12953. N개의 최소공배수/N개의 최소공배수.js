function find(a,b){
    for(let i=a; i<=a*b; i+=a){
        if(!(i % b)) return i;
    }
}
function solution(arr) {
    for(let i=0; i<arr.length-1; i++){
        let finded = find(arr[i], arr[i+1]);
        arr.splice(i+1,1, finded);
    }
    return arr[arr.length-1];
}
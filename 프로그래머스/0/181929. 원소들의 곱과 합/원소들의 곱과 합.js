function solution(num_list) {
    var answer = 0;
    let multiple = 1;
    let plus = 0;
    num_list.forEach((num)=> {
        multiple *= num;
        plus += num;
    })
    if(multiple < plus*plus){
        return 1;
    } else return 0;
}
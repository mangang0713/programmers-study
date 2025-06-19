function solution(my_string) {
    const newArray = my_string.split(" ");
    let now = Number(newArray[0]);
    for(let i=0; i<newArray.length; i++){
        if(i%2){
            switch(newArray[i]){
                case '+':
                    now += Number(newArray[i+1]);
                    break;
                case '-':
                    now -= Number(newArray[i+1]);
                    break;
            }
        }
    }
    return now;
}
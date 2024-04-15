function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let crossing_trucks = [];
    while( truck_weights.length || crossing_trucks.length ){
        answer++;
        let crossing_weight = 0;
        for(let i=0; i<crossing_trucks.length; i++){
            crossing_trucks[i][1]++;
        }
        crossing_trucks = crossing_trucks.filter(arr => arr[1] !== bridge_length);
        for(let i=0; i<crossing_trucks.length; i++){
            crossing_weight += crossing_trucks[i][0];
        }
        if((crossing_weight + truck_weights[0] <= weight) && crossing_trucks.length < bridge_length){
            crossing_trucks.push([truck_weights.shift(), 0]);          
        }
    }
    return answer;
}
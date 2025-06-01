function solution(picture, k) {
    const result = [];
    picture.map((e) => {
        let newPic = '';
        for(let i=0; i<e.length; i++){
            for(let j=0; j<k; j++){
                newPic += e[i];  
            }
        }
        for(let i=0; i<k; i++){
            result.push(newPic);   
        }
        
    })
    return result;

}

function solution(a, b) {
    const getDateDiff = (d1, d2) => {

        const date1 = new Date(d1);
        const date2 = new Date(d2);
  
        const diffDate = date1.getTime() - date2.getTime();
  
        return Math.abs(diffDate / (1000 * 60 * 60 * 24)); // 밀리세컨 * 초 * 분 * 시 = 일
    }
    const month = (a < 10 ? '0' : '') + a;
    const day = (b < 10 ? '0' : '') + b;
    const diff = getDateDiff("2016-01-01",`2016-${month}-${day}`);
    switch(diff % 7){
        case 0 :
          return 'FRI';
        case 1 :
          return 'SAT';
        case 2 :
          return 'SUN';
        case 3 :
          return 'MON';
        case 4 : 
          return 'TUE';
        case 5 :
          return 'WED';
        case 6 :
          return 'THU';
    }
}
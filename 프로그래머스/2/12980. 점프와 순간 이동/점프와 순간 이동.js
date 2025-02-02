function solution(n)
{
    var ans = 1;

    while(n>1){
        if(n%2){
            ans++;
            n -= 1;
        }
        n /= 2;
    }
    return ans;
}
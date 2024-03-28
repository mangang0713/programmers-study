function solution(numbers) {
    // 숫자가 소수인지를 판별하는 함수
    function isPrime(num) {
        if (num <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    // 순열 생성 함수
    function generatePermutations(digits) {
        const results = [];

        function permute(arr, m = []) {
            if (m.length > 0) {
                results.push(parseInt(m.join('')));
            }
            if (arr.length === 0) {
                return;
            }
            for (let i = 0; i < arr.length; i++) {
                const curr = arr.slice();
                const next = curr.splice(i, 1);
                permute(curr.slice(), m.concat(next));
            }
        }

        for (let i = 1; i <= digits.length; i++) {
            permute(digits, []);
        }

        return results;
    }



    // 주어진 숫자를 분해하여 가능한 모든 숫자를 생성하고, 각 숫자가 소수인지를 판별하는 함수
    function findPrimePermutations(input) {
        const digits = input.toString().split('');
        console.log(digits);
        const permutations = generatePermutations(digits);
        console.log(permutations);
        const primePermutations = permutations.filter(num => isPrime(num));
        console.log(primePermutations);
        return primePermutations;
    }

    // 함수 호출 및 결과 출력
    const primePermutations = findPrimePermutations(numbers);
    // console.log(primePermutations); // 출력값: [ 2, 3, 23, 32, 43, 2341, 2413, 2431, 3214, 4231 ]
    const answer = [...new Set(primePermutations)];
    return answer.length;
}
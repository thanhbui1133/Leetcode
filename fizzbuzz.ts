function fizzBuzz(n: number): string[] {
    let result = [] as string[];
    for(let i = 1; i <= n; i++ ) {
        const isDivisibleByThree = i % 3 === 0;
        const isDivisibleByFive = i % 5 === 0;
        if(isDivisibleByThree && isDivisibleByFive) {
            result.push("FizzBuzz");
            continue
        }

        if(isDivisibleByThree) {
            result.push("Fizz");
            continue
        }

        if(isDivisibleByFive) {
            result.push("Buzz");
            continue
        }
        result.push(`${i}`);
    }
    return result;
};

console.log(fizzBuzz(15));
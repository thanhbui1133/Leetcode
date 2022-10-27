function numberOfSteps(num: number): number {
    let count = 0;
    while (num > 0) {
        num = num % 2 === 0 ? num / 2 : num - 1;
        count++;
    }
    return count;
};

console.log(numberOfSteps(14));
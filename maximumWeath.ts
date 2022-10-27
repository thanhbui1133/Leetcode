function maximumWealth(accounts: number[][]): number {
    return accounts.reduce((prev, curr) => {
        const total = curr.reduce((pCurr, cCurr) => {
            return pCurr + cCurr
        }, 0)
        if(total > prev) return total
        return prev
    }, 0)
};

console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]]))
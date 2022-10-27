function kWeakestRows(mat: number[][], k: number): number[] {
    const numberEachRow = mat.reduce((prev, x, i) => {
        const value = x.slice(0).reduce((r, y, i, arr) => {
            if(y === 0) arr.splice(1)
            return r + y;
        }, 0);
        return [
            ...prev,
            [
                i, value
            ]
        ]
    }, [] as any[][]);

    const sorted = numberEachRow.sort((a, b) => {
        return a[1] - b[1]
    });

    let result = [] as number[];

    for(let i = 0; i < k; i++) {
        result.push(sorted[i][0])
    }

    return result;

   
};

console.log(kWeakestRows([[1,1,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,1,0,0,0],[1,1,1,1,1]], 3))
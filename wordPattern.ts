function wordPattern(pattern: string, s: string): boolean {
    const sSplit = s.split(" ");
    const patternSplit = pattern.split("");

    if(sSplit.length !== patternSplit.length) return false;

    let result = true;
    let mapPattern = {} as { [key:string]: string };
    let mapS = {} as { [key:string]: string };

    patternSplit.every((item, key) => {
        if(mapPattern[item] !== undefined) {
            if(mapPattern[item] !== sSplit[key] || mapS[sSplit[key]] !== item) {
                result = false;
                return false
            }
        } else {
            mapPattern = {
                ...mapPattern,
                [item]: sSplit[key]
            }
            if(mapS[sSplit[key]] !== undefined) {
                if(item !== mapS[sSplit[key]]) {
                    result = false;
                    return false
                }
            } else {
                mapS = {
                    ...mapS,
                    [sSplit[key]]: item
                }
            }
            
        }
        return true
    });

    return result;
};

console.log(wordPattern("aaa", "aa aa aa aa"));
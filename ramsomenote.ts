function canConstruct(ransomNote: string, magazine: string): boolean {

    var i = 0, len = ransomNote.length;
    let ranObj = {} as { [key: string]: number };
    while (i < len) {
        ranObj = {
            ...ranObj,
            [ransomNote[i]]: !!ranObj[ransomNote[i]] ? ranObj[ransomNote[i]]+1 : 1
        }
        i++;
    }

    var j = 0, lenMan = magazine.length;
    let manObj = {} as { [key: string]: number };
    while (j < lenMan) {
        manObj = {
            ...manObj,
            [magazine[j]]: !!manObj[magazine[j]] ? manObj[magazine[j]]+1 : 1
        }
        j++;
    }

    if(Object.keys(ranObj).length > Object.keys(manObj).length) return false;

    return Object.keys(ranObj).every((key) => {
        if(!manObj[key] || ranObj[key] > manObj[key]) {
            return false
        }
        return true
    })
};

console.log(canConstruct("fihjjjjei", "hjibagacbhadfaefdjaeaebgi"));
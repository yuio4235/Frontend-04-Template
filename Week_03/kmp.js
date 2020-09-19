function bf(source, pattern) {
    //暴力算法 双指针
    let founded = false;
    let index = -1;
    for (let i = 0 ; i < source.length; i ++) {
        for (let j = 0; j < pattern.length; j ++) {
            if (source[i + j] === pattern[j]) {
                if (j == pattern.length - 1) {
                    founded = true;
                    console.log("fist index: " + i);
                }
            } else {
                break;
            }
        }
        if (founded) {
            index = i;
            break;
        }
    }
    return index;
}

// console.log(bf("abcdabce", "cda"));

function kmp(source, pattern) {
    let table = new Array(pattern.length).fill(0);

    {
        //计算部分匹配表
        for (let i = 1; i < pattern.length; i++) {
            let substr = pattern.substring(0, i+1);
            for (let m = 0, n = substr.length - 1; m < substr.length -1 && n > 0 ; m++, n --) {
                let headStr = substr.substring(0, m+1);
                let tailStr = substr.substring(n, substr.length);
                if (headStr === tailStr) {
                    table[i] = headStr.length;
                }
            }
        }
    }

    {
        let i = 0, j = 0;

        function move(srcChar, pattern, j) {
            if (j === 0) {
                return j;
            }
            let backStep = j - table[j-1];
            j = j - backStep;
            if (srcChar === pattern[j]) {
                return j;
            } else {
                return move(srcChar, pattern, j);
            }
        }

        while ( i < source.length) {
            if (source[i] === pattern[j]) {
                i ++;
                j ++;
            } else {
                j = move(source[i], pattern, j);
                if (j === 0 && source[i] !== pattern[j]) {
                    ++ i;
                }
            }
            if (j === pattern.length) {
                return true;
            }
        }

        return false;
    }
}

console.log(kmp("aabaabaac", "aabaac"));
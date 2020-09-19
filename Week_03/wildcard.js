function find(source, pattern) {
    let startCount = 0;
    for (let i = 0; i < pattern.length; i ++) {
        if (pattern[i] === "*") {
            startCount ++;
        }
        if (startCount === 0) {
            for (let i = 0; i < pattern.length; i ++) {
                if (pattern[i] !== source[i] && pattern[i] !== "?") {
                    return false;
                }
            }
            return;
        }
    }

    let i = 0;
    let lastIndex = 0;

}
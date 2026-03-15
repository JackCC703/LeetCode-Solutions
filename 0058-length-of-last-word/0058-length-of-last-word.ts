function lengthOfLastWord(s: string): number {

    const trimmedStr = s.trim();

    if (trimmedStr.length == 0) {
        return 0;
    }

    let length = 0;

    for (let i = trimmedStr.length - 1; i >= 0; i--) {

        if (trimmedStr[i] === " ") {
            return length;
        }

        length++;
    }
    return length;
};
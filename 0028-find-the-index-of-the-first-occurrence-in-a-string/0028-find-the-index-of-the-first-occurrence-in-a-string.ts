function strStr(haystack: string, needle: string): number {
    const hLen = haystack.length;
    const nLen = needle.length;

    if (nLen === 0) return 0;

    for (let i = 0; i <= hLen - nLen; i++) {
        let j = 0;
        for (j = 0; j < nLen; j++) {
            if (haystack[i + j] !== needle[j]) {
                break;
            }
        }
        if (j === nLen) {
            return i;
        }
    }
    return -1;
};
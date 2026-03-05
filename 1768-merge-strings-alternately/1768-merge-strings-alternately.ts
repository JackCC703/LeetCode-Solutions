function mergeAlternately(word1: string, word2: string): string {
    const res: string[] = [];
    const n = word1.length;
    const m = word2.length;

    const maxLength = Math.max(n, m);

    for (let i = 0; i < maxLength; i++) {

        if (i < n) {
            res.push(word1[i])
        }

        if (i < m) {
            res.push(word2[i])
        }
    }
    return res.join('');
};
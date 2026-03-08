function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const count = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        const indexS = s.charCodeAt(i) - 97;
        count[indexS]++;

        const indexT = t.charCodeAt(i) - 97;
        count[indexT]--; 
    }
    return count.every(num => num === 0);
};
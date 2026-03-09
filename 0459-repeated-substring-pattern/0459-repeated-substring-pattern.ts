function repeatedSubstringPattern(s: string): boolean {
    const n: number = s.length;

    for (let i = 1; i <= n/2; i++) {

        if (n % i === 0) {
            const sub: string = s.substring(0, i);
            const times: number = n / i;
            const constructed: string = sub.repeat(times);

            if (constructed === s) {
                return true;
            }
        }
    }

    return false;
};
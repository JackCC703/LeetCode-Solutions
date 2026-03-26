function countOdds(low: number, high: number): number {
    if (low % 2 === 0) {
        low++;
    }

    if (low > high) {
        return 0;
    }

    return Math.floor((high - low) / 2) + 1;
};
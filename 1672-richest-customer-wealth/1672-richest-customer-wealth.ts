function maximumWealth(accounts: number[][]): number {
    let maxWealth = 0;

    for (let i = 0; i < accounts.length; i++) {
        let currentWealth = 0;

        for (let j = 0; j < accounts[i].length; j++) {
            currentWealth += accounts[i][j];
        }
        if (currentWealth > maxWealth) {
            maxWealth = currentWealth;
        }
    }

    return maxWealth;
};
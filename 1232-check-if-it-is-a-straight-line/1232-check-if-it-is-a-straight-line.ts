function checkStraightLine(coordinates: number[][]): boolean {
    if (coordinates.length === 2) {
        return true;
    }

    for (let i = 1; i < coordinates.length; i++) {
        const k = (coordinates[1][1] - coordinates[0][1]) * (coordinates[i][0] - coordinates[i -1][0]);
        const j = (coordinates[i][1] - coordinates[i - 1][1]) * (coordinates[1][0] - coordinates[0][0]);
        if (k !== j) {
            return false;
        }
    }
    return true;
};
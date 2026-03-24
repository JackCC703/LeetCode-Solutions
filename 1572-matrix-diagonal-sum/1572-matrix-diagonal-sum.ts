function diagonalSum(mat: number[][]): number {
    let totalSum = 0;

    for (let i = 0; i < mat.length; i++) {
        totalSum += mat[i][i];
        const secondarydia = mat.length - i - 1;
        if (secondarydia !== i) {
            totalSum += mat[i][secondarydia];
        }
    }

    return totalSum;
};
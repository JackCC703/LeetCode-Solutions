function tictactoe(moves: number[][]): string {
    const rowSum = new Array(3).fill(0);
    const colSum = new Array(3).fill(0);

    let diag1 = 0;
    let diag2 = 0;

    for (let i = 0; i < moves.length; i++) {
        const [r, c] = moves[i];
        const score = i % 2 === 0 ? 1 : -1;

        rowSum[r] += score;
        colSum[c] += score;

        if (r === c) diag1 += score;
        if (r + c === 2) diag2 += score;

        if (rowSum[r] === 3 || colSum[c] === 3 || diag1 === 3 || diag2 === 3) {
            return "A";
        }
        if (rowSum[r] === -3 || colSum[c] === -3 || diag1 === -3 || diag2 === -3) {
            return "B";
        }
    }

    return moves.length === 9 ? "Draw" : "Pending"
};
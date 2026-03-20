function isRobotBounded(instructions: string): boolean {
    let x = 0;
    let y = 0;
    let d = 0;

    const direction = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    for (const char of instructions) {
        if (char === "G") {
            x += direction[d][0];
            y += direction[d][1];
        } else if (char === "L") {
            d = (d + 3) % 4;
        } else if (char === "R") {
            d = (d + 1) % 4;
        }
    }

    return (x === 0 && y === 0) || (d !== 0);
};
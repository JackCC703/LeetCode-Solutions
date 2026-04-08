function multiply(num1: string, num2: string): string {
    if (num1 === "0" || num2 === "0") return "0";
    const m = num1.length;
    const n = num2.length;
    const res = new Array(m + n).fill(0);

    for (let i = m -1; i >= 0; i--) {
        for ( let j = n -1; j >= 0; j--) {
            const mul = Number(num1[i]) * Number(num2[j]);
            const sum = mul + res[i + j + 1];
            res[i + j +1] = sum % 10;
            res[i + j] += Math.floor(sum / 10);
        } 
    }
    let resultStr = res.join('');
    return resultStr.startsWith('0') ? resultStr.slice(1) : resultStr;
};
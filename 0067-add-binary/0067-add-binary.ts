function addBinary(a: string, b: string): string {
    let res: number[] = [];
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;

    while (i >= 0 || j >= 0 || carry > 0) {
        const n1 = i >= 0 ? parseInt(a[i--]) : 0;
        const n2 = j >= 0 ? parseInt(b[j--]) : 0;

        const sum = n1 + n2 + carry;
        res.push(sum % 2);       
        carry = Math.floor(sum / 2); 
    }

    return res.reverse().join('');
}
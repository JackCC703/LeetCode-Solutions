function average(salary: number[]): number {
    let mini = salary[0];
    let max = salary[0];
    let sum = 0;
    for (let i = 0; i < salary.length; i++) {
        if (mini > salary[i]) {
            mini = salary[i];
        }
    }
    for (let i = 0; i < salary.length; i++) {
        if (max < salary[i]) {
            max = salary[i];
        }
    }
    for (let i = 0; i < salary.length; i++) {
        sum = sum + salary[i];
    }
    return (sum - mini - max) / (salary.length - 2);
};
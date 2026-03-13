function isMonotonic(nums: number[]): boolean {

    let isIncreasing = true;
    let isDecreasing = true;

    for (let i = 0; i < nums.length - 1; i++) {

        if (nums[i] > nums[i + 1]) {
            isIncreasing = false;
        }

        if (nums[i] < nums[i + 1]) {
            isDecreasing = false;
        }

        if (!isIncreasing && !isDecreasing) {
            return false;
        }
    }

    return isIncreasing || isDecreasing;
}
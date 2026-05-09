function evenSum(nums) {
    let sum = 0 ;
    for (let i = 1 ; i <= nums ; i++ ) {
        if (i % 2 === 0) {
            sum += i
        }

    }
    return sum
}
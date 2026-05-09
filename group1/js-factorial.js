function factorial(n) {
    if (n === 0 || n === 1) return 1 
    let sum = 1 ; 
    while (n > 0 ) {
        sum *= n 
        n = n -1
    }
    return sum
}


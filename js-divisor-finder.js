function divisors(n) {
    let res = [] ;
    if (n < 0) n = n * -1 ;
    for (let i = 1 ; i < n ; i++) {
        if ( n % i === 0) {
            res.push(i)
        }
    }
    return res
}


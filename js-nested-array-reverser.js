function nestedArrayReverser(words) {
    let res = []
    for (let i = words.length -1 ; i >= 0 ; i--) {
        for (let j = words[i].length -1 ; j>= 0 ; j-- ) {
            res.push(words[i][j])
        }
    }
    return res.join(' ')
}

function gridWordsFinder(grid , words) {
    if (grid.length === 0 || words.length === 0) {
        return []
    }
    const wordfind = new Set() 
    const Hword = grid.map(word => word.join(''))
    for (let i = 0 ; i < Hword.length ; i++) {
        wordfind.add(Hword[i])
    }

    for (let j = 0 ; j < grid[0].length ; j++) {
        const Vword = grid.map(row => row[j]).join('')
        wordfind.add(Vword)
    } 
    return words.filter(word => wordfind.has(word))
}
function reverseChunks(arr, chunkSize) {
    let res = []; 
    for (let i = 0 ; i < arr.length ; i+= chunkSize) {
        let chunk = (arr.slice(i , i+chunkSize))
        let rev =(chunk.reverse())
        res.push(...rev)
    }
    return res
}


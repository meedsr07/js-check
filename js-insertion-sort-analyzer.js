function insertionSortAnalyzer(arr, comparator) {
    let swp = 0;
    let itration = 0;
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i]
        let j = i - 1
        while (j >= 0) {
            itration++
            if (comparator(arr[j], key) > 0) {
                arr[j + 1] = arr[j]
                swp++
                j--
            } else {
                break
            }
            arr[j + 1] = key
        }
    }
    return {
        sortedArray: arr,
        iterations: itration,
        swaps: swp
    }
}
const comparator = (a, b) => a - b;

const result = insertionSortAnalyzer([5, 2, 4, 6, 1, 3], comparator);

console.log(result);

function insertionSortAnalyzer(arr, comparator) {
    let swaps = 0;
    let itration = 0;
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]
        let j = i - 1
        while (j >= 0) {
            itration++
            if (comparator(arr[j], key) > 0) {

                arr[j + 1] = arr[j]
                swaps++
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
        swaps: swaps
    }
}
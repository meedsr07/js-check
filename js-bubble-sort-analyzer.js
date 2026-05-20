const comparator = (a, b) => a - b;

const result = bubbleSortAnalyzer([1, 2, 3, 4, 5], comparator);

console.log(result);

function bubbleSortAnalyzer(arr, comparator) {
    let swp = 0;
    let itration = 0;
    for (let i = 0; i < arr.length; i++) {
        let swapd = false
        for (let j = 0; j < arr.length - 1 - i; j++) {
            itration++
            if (comparator(arr[j], arr[j + 1]) > 0) {
                swp++
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                swapd = true
            }
        }
        if (!swapd) {
            break
        }
    }
    return {
        sortedArray: arr,
        iterations: itration,
        swaps: swp
    }
}
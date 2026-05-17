const comparator = (a, b) => a - b;

const result = bubbleSortAnalyzer([1, 2, 3, 4, 5], comparator);

console.log(result);

function bubbleSortAnalyzer(arr, comparator) {
    let swaps = 0;
    let iterations = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        let swapped = false;

        for (let j = 0; j < arr.length - 1 - i; j++) {
            iterations++;

            if (comparator(arr[j], arr[j + 1]) > 0) {
                swaps++;

                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

                swapped = true;
            }
        }

        if (!swapped) break;
    }

    return {
        sortedArray: arr,
        iterations,
        swaps
    };
}
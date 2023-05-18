function findSmallestDifference(arr1, arr2)  {
    let smallestDiff = Infinity
    
    for (let num1 of arr1) {
        for (let num2 of arr2) {
            const diff = Math.abs(num1 - num2)
            smallestDiff = Math.min(smallestDiff, diff)
        }
    }

    return smallestDiff
}

const arr1 = [10, 20, 14, 16, 18];
const arr2 = [30, 23, 54, 33, 96];

const result = findSmallestDifference(arr1, arr2);
console.log(result)

const smallestDiff = (arrOne, arrTwo) => {
    arrOne = arrOne.sort((a, b) => a - b)
    arrTwo = arrTwo.sort((a, b) => a - b)

    let best = null

    let indexOne = 0
    let indexTwo = 0

    while (indexOne < arrOne.length && indexTwo < arrTwo.length) {
        let diff = arrOne[indexOne] - arrTwo[indexTwo]

        if (diff === 0) {
            return 0
        }

        if (best === null || diff < best) {
            best = diff
        }

        if (arrOne[indexOne] > arrTwo[indexTwo]) {
            indexTwo++
        } else {
            indexOne++
        }
    }

    return best
}



let j = [30, 23, 54, 33, 96]
let s = [10, 20, 14, 16, 18]

console.log(smallestDiff(j,s))
function analyzeArray(arr) {
    let sum = 0;
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        sum += num;
        if (num < min) {
            min = num;
        }
        if (num > max) {
            max = num;
        }
    }
    let average = sum / arr.length;
    return {
        sum: sum,
        average: average,
        min: min,
        max: max
    };
}
const result = analyzeArray([1, 2, 3, 4, 5]);
console.log(result); 

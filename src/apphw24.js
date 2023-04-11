function result(a, b) {
    return console.log(a + b, a - b, a * b, a / b);

}
result(10, 5);

function myArray(arr) {
    let min = arr[0];
    let max = min;
    let sumArr = 0;
    for (let i = 0; i < arr.length; ++i) {
        if (typeof arr[i] === "number") {
            if (arr[i] > max) max = arr[i];
            if (arr[i] < min) min = arr[i];
            sumArr = sumArr + arr[i];
        };
    };
    return console.log(max, min, sumArr);
};
myArray([1, 2, 3, 4, 12, 'string', 7, undefined, 8, 9]);
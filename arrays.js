//Write a function that is given an array and each time the value is "food"
//it should console log "yummy". If "food" was not present in the array 
//console log "I'm hungry" once.


function alwaysHungry(arr) {
    var ifFound = 0;
    for (var i = 0; i < arr.length; i++) {

        if (arr[i] == "food") {
            ifFound++;
            console.log("yummy");
        }
    }
    if (ifFound == 0) {
        console.log("I'm hungry");
    }
}



alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"



//Given an array and a value cutoff, return a new array 
//containing only the values larger than cutoff.
function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var x = 0; x < arr.length; x++) {
        if (arr[x] > cutoff) {
            filteredArr.push(arr[x]);
        }
    }
    return filteredArr;

}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


//Given an array of numbers return a count of how many 
//of the numbers are larger than the average.

function betterThanAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    sum = sum / arr.length;
    var count = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > sum) {
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4



//Write a function that will reverse the values an array and return them.


function reverse(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        arr.splice(i, 0, arr.shift());
    }
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]



//Fibonacci numbers have been studied for years and appear often in nature.
//Write a function that will return an array of Fibonacci numbers up to a given length n.
//Fibonacci numbers are calculated by adding the last two values in the sequence together.
//So if the 4th value is 2 and the 5th value is 3 then the next value in the sequence is 5.

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for (let i = 0; i < n - 2; i++) {
        fibArr.push(fibArr[i] + fibArr[i + 1]);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
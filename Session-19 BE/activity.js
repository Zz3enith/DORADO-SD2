// NUMBER 3
function checkIfPassed(score, totalScore) {
    let percentage = (score / totalScore) * 100;
    if (percentage > 75) {
        console.log("Grade: ", percentage + "%");
        return true;
    } else {
        console.log("Grade: ", percentage + "%");
        return false;
    }
}

let isPassingScore = checkIfPassed(80, 100);
console.log("Passing Score: ", isPassingScore);





// NUMBER 2
let getAverage = function(n1, n2, n3, n4) {
    let average = (n1 + n2 + n3 + n4) / 4;
    console.log("Average: " + average);
    return average;
}

let averageVar = getAverage(60, 70, 84, 90);
console.log(averageVar);



// NUMBER 1
function getCircleArea(radius) {
    let PI = 3.14159;
    let area = PI * radius ** 2;
    return area;
}

let circleArea = getCircleArea(10);
console.log("Area of the circle: ", circleArea);

getCircleArea();







































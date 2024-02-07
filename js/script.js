//get values from the page
//start or controller function
function getValues() {
    //range values
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;


    let numbers = generateNums(startValue, endValue);
    //call fizzbuzz
    let fbArray = fizzbuzz(numbers);
    
    displayData(fbArray);
}

//generate the numbers form start to end value
//logic
function generateNums(startVal, endVal) {
    let numbers = [];

    for (let i = startVal; i <= endVal; i++) {
        numbers.push(i);
    }

    return numbers;
}

//changing nums to fiiz/buzz/fizzbuzz
function fizzbuzz(nums) {
    let fbArray = [];

    //fizzbuzz values
    let fizzNum = document.getElementById("fizzValue").value;
    let buzzNum = document.getElementById("buzzValue").value;

    for (let i = nums[0]; i < nums.length; i++) {
        if (i % fizzNum == 0 && i % buzzNum == 0) {
            fbArray.push("FizzBuzz");
        }
        else if (i % buzzNum == 0) {
            fbArray.push("Buzz");
        } 
        else if (i % fizzNum == 0) {
            fbArray.push("Fizz");
        }
        else {
            fbArray.push(i);
        }
    }
    return fbArray;
}


//display nums and print even bold
//view function
function displayData(fbArray) {
    let tableBody = document.getElementById("results");
    let tableTemplate = document.getElementById("fbTable");

    //clear table
    tableBody.innerHTML = "";

    for (let i = 0; i < fbArray.length; i += 5) {
        let tableRow = document.importNode(tableTemplate.content, true);

        //grab td to put into array
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].textContent = fbArray[i];
        rowCols[1].textContent = fbArray[i + 1];
        rowCols[2].textContent = fbArray[i + 2];
        rowCols[3].textContent = fbArray[i + 3];
        rowCols[4].textContent = fbArray[i + 4];
        
        tableBody.appendChild(tableRow);
    }
}
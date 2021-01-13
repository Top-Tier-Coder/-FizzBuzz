
// This uses an anoynmous function to call a named function
document.getElementById("fizzButton").addEventListener("click", function () {
    let num1 = document.getElementById("input1").value;
    let num2 = document.getElementById("input2").value;
    if(num1 > num2){
        alert("Number 1 must be less than Number 2")
    } 
    else { 
    runTheNumbers(num1, num2)
}
});

// This is the named function, it will only run when something else calls it
function runTheNumbers(num1, num2) {
    for (let loop = num1; loop <= num2; loop++) {
        document.getElementById("results").innerText += loop;
        // if(loop % fizzNum == 0 && loop % buzzNum == 0)
        // Use an if/else if/else to build a string
        if(loop % fizzNum == 0)
        {
            outout += "<span class='Fizz'></span>,";
        }
        else if(loop % buzzNum == 0 && loop % buzzNum == 0){
            output += "Fizz-Buzz,";

        }
        else{
            output += `${loop},`;
        }
    }
    // Step 6: Print the output to the Screen
    document.getElementById("fizzbuzzOutput").innerHTML = output
}



// The premise of FizzBuzz is to take two user inputs and find all of their multiples between 1 and 100
// If the loop count is a mulitple of input 1 it is a Fizz case
// If the loop count is a multiple of input 2 it is a Buzz case
// If the loop count is a multiple of both input it is a Fizzbuzz case
// The order you test it MIGHT be very important
let userInput = prompt("Enter a number 1-3:");

let number = parseInt(userInput);

if (!isNaN(number)) {
    switch (number) {
        case 1:
            alert("One is the loneliest number that you'll ever do.");
            break;
        case 2:
            alert("Two can be as bad as one. It's the loneliest number since the number one.");
            break;
        case 3:
            alert("There is no three.");
            break;4

        default:
            alert("You didn't enter a valid number.");
    }
} 
else {
    alert("Please enter a number, not a word.");
}










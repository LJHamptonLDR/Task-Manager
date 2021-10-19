// TASK MANAGER

// Using a Template Literal because it recognizes line breaks
const menu = `TASK MANAGER

What would you like to do (Please enter one of the options below):
"TASK" - Display All Task
"NEW - Add A New Task
"REMOVE - Remove A Task
"CLOSE" - Close The Task Manager

`;
// Displays the menu for the user to select an option. Also, sets the user's response to the userInput variable
let userInput = prompt(menu);

// Loops and continues to display the menu until the user ends the program (ALA until the user enters CLOSE)
while (userInput !== `CLOSE`){
    // OTHER OPTIONS

    // Displays the menu again
    userInput = prompt(menu);
}

//Alerts the user that they have close the program
alert(`Thank you for using Task Manager`);
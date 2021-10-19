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
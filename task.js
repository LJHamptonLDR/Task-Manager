// TASK MANAGER

// Using a Template Literal because it recognizes line breaks
const menu = `TASK MANAGER

What would you like to do (Please enter one of the options below):
"TASKS" - Display All Task
"NEW - Add A New Task
"REMOVE - Remove A Task
"CLOSE" - Close The Task Manager
`;

// Array for storing taks
const tasks = [
    `Charge MacBook`,
    `Master JavaScript`
];

// For Displaying tasks to the user
let showTasks = ``;

// For storing the value of a new task
let newTask; 

// Displays the menu for the user to select an option. Also, sets the user's response to the userInput variable
let userInput = prompt(menu);

// Loops and continues to display the menu until the user ends/closes the Task Manager (AKA until the user enters CLOSE)
while (userInput !== `CLOSE`) {

    // Checks if user entered TASKS
    if (userInput === `TASKS`) {

        // The For Of loop is used here to concatenate each task (AKA Item) in the tasks array to the showTasks string variable
        for (task of tasks) {

            //Using \n to create a new line (AKA Line break after each task)
            showTasks += `${tasks}\n`;
        }

        // Display the current tasks to the user
        alert(showTasks);
        
        // Set the value of the showTasks string variable back to an empty string
        showTasks = "";
    }

    // Checks if the user entered NEW
    if (userInput === `NEW`){

        // Prompts the user to enter a new task and stories their response
        newTask = prompt(`Please enter the new task`);

        // Alerts the user that new task has been added
        alert(`"${newTask}" has been added!`);

        // Adds the user's entry as a new item at the end of the new task array
        tasks.push(newTask);
    }

    // Displays the menu again
    userInput = prompt(menu);
}

//Alerts the user that they have close the program
alert(`Thank you for using Task Manager!`);
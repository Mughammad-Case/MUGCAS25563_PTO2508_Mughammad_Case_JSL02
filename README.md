# JSL02 - Task Input and Status Validation

A JavaScript based task entry system that guides users through inputting two tasks with titles, descriptions and statuses. The system enforces input validation and provides structured feedback via the browser console.

## Technologies

- HTML
- CSS
- JavaScript

## Features

- Prompts the user to enter a title, description and status for two separate tasks
- Automatically converts all status inputs to lowercase for consistency
- Validates status input to only accept `todo`, `doing` or `done`
- Repeatedly prompts the user until a valid status is entered
- Logs the title and status of any completed tasks (`done`) to the console
- Displays a motivational message in the console if no tasks are marked as done

## Setup Instructions

1. Clone or download this repository to your local machine
2. Open the project folder in Visual Studio Code
3. Open `index.html` using the Live Server extension

## Usage

Once the page loads, the program will automatically begin prompting you through the browser's built-in dialog boxes.

Task input flow:

1. Enter the title for Task 1
2. Enter the description for Task 1
3. Enter the status for Task 1 - must be `todo`, `doing` or `done`
4. Repeat steps 1 - 3 for Task 2

If an invalid status is entered, an alert will appear and you will be prompted again until a valid value is provided.

5. Open the browser console to view results after completing all prompts

## Interaction Instructions

All interaction happens through the browser prompt and alert dialogs. Once all prompts are completed, check the browser console for the output.

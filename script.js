// Prompt user for task 1 title and description
const task1Title = prompt("Enter task 1 title:");
const task1Description = prompt("Enter task 1 description:");

let task1Status = prompt(
  "Enter task 1 status 'todo', 'doing', or 'done':",
).toLowerCase();

// Validate task 1 status input
while (
  task1Status !== "todo" &&
  task1Status !== "doing" &&
  task1Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task1Status = prompt(
    "Enter task 1 status 'todo', 'doing', or 'done':",
  ).toLowerCase();
}

// Prompt user for task 2 title and description
const task2Title = prompt("Enter task 2 title:");
const task2Description = prompt("Enter task 2 description:");

let task2Status = prompt(
  "Enter task 2 status 'todo', 'doing', or 'done':",
).toLowerCase();

// Validate task 2 status input
while (
  task2Status !== "todo" &&
  task2Status !== "doing" &&
  task2Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task2Status = prompt(
    "Enter task 2 status 'todo', 'doing', or 'done':",
  ).toLowerCase();
}

// Log task title and status to console if status is 'done'
if (task1Status === "done") {
  console.log("Title:", task1Title, ", status:", task1Status);
}
if (task2Status === "done") {
  console.log("Title:", task2Title, ", status:", task2Status);
}

// Motivational message if neither task is 'done'
if (task1Status !== "done" && task2Status !== "done") {
  console.log("No tasks completed, let's get to work!");
}

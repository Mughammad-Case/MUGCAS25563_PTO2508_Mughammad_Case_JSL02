// Prompt user for task 1 title and description
const task1Title = prompt("Enter task 1 title:");
const task1Description = prompt("Enter task 1 description:");

let task1Status = prompt("Enter task 1 status 'todo', 'doing', or 'done':");
while (
  task1Status !== "todo" &&
  task1Status !== "doing" &&
  task1Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task1Status = prompt("Enter task 1 status 'todo', 'doing', or 'done':");
}

// Prompt user for task 2 title and description
const task2Title = prompt("Enter task 2 title:");
const task2Description = prompt("Enter task 2 description:");

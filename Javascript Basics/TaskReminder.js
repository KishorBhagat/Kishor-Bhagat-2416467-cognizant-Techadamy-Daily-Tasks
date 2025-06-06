/*
Build a simple Task Reminder System 
Implement a function that sets up reminders for different tasks.
The function should accept a task name and deadline, displaying a reminder message
*/

function setReminder(taskName, deadlineTime) {
  console.log(`Reminder is set for "${taskName}" at ${deadlineTime}`);
}

const tasks = [
  { name: "Drink water", deadline: "June 4, 2025 16:30" },
  { name: "Take a Walk", deadline: "June 4, 2025 16:45" },
  { name: "Team Meeting", deadline: "June 4, 2025 16:00" }
];

tasks.forEach(task => {
  setReminder(task.name, task.deadline);
});

let todos = [];

function addTask(name) {
  todos.push({ task: name, status: "pending" });
}

function completeTask(name) {
  for (let task of todos) {
    if (task.task === name) {
      task.status = "completed";
      break;
    }
  }
}

function displayTasks() {
  console.log("To-Do List:");
  for (let task of todos) {
    console.log(`${task.task} - ${task.status}`);
  }
}

addTask("Study JavaScript");
addTask("Complete Assignment");
completeTask("Study JavaScript");
displayTasks();

const employees = [];

function addEmployee(name, role = "Staff", salary = 30000) {
  const employee = {
    name,
    role,
    // salary is private (closure-based access)
    getSalary: function () {
      return salary;
    },
    setSalary: function (newSalary) {
      if (typeof newSalary === "number" && newSalary > 0) {
        salary = newSalary;
      }
    }
  };
  employees.push(employee);
  console.log(`✅ ${name} added as ${role}.`);
}

function displayEmployees() {
  console.log("\n📋 Employee List:");
  employees.forEach((emp, index) => {
    console.log(`${index + 1}. Name: ${emp.name}, Role: ${emp.role}`);
  });
}

function displaySalaries() {
  console.log("\n🔐 Salary Info:");
  employees.forEach((emp, index) => {
    console.log(`${index + 1}. ${emp.name}'s Salary: ₹${emp.getSalary()}`);
  });
}

addEmployee("Alice", "Manager", 70000);
addEmployee("Bob", "Developer", 50000);
addEmployee("Charlie");

displayEmployees();
displaySalaries();

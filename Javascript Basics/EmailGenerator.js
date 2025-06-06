function generateEmail(name, department, date) {
  const message = `Dear ${name}, Welcome to the ${department} team! Your joining date is ${date}.`;

  return message;
}

const email = generateEmail("Kishor", "Java", "June 10, 2025");
console.log(email);

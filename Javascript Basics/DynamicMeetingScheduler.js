/*
Dynamic Meeting Scheduler
Create an array to store meeting participants.

Add new members dynamically and display the list.
*/
const participants = [];

function addParticipant(name) {
  participants.push(name);
  console.log(`${name} has been added to the meeting.`);
}

function displayParticipants() {
  console.log("\nCurrent Meeting Participants:");
  participants.forEach((p, index) => {
    console.log(`${index + 1}. ${p}`);
  });
}

addParticipant("Alice");
addParticipant("Bob");
addParticipant("Charlie");

displayParticipants();

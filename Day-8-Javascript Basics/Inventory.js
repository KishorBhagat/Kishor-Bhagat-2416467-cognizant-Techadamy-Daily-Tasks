/*
Manage Office Supplies Inventory
Maintain an array with office supplies stock.

Allow users to add and remove supplies, tracking the list dynamically.
*/

const inventory = [];

function addSupply(item) {
  inventory.push(item);
  console.log(`"${item}" added to inventory.`);
}

function removeSupply(item) {
  const index = inventory.indexOf(item);
  if (index !== -1) {
    inventory.splice(index, 1);
    console.log(`"${item}" removed from inventory.`);
  } else {
    console.log(`"${item}" not found in inventory.`);
  }
}

function displayInventory() {
  console.log("\nCurrent Office Supplies Inventory:");
  if (inventory.length === 0) {
    console.log("Inventory is empty.");
  } else {
    inventory.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`);
    });
  }
}

addSupply("Pens");
addSupply("Notebooks");
addSupply("Stapler");

removeSupply("Notebooks");

displayInventory();
